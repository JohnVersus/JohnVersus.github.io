'use client';
import { ChangeEvent, useEffect, useMemo, useState } from 'react';
import { clientApiGet } from '@/app/src/utils/apiClient';
import ProjectCard from './ProjectCard/ProjectCard';
import styles from './ProjectSelecter.module.css';
import type { Project } from '../types';

const ProjectSelecter = ({ repos }: { repos: Array<Project> }) => {
  const [languages, setLanguages] = useState<string[]>([]);
  const [languageFilter, setLanguageFilter] = useState<string[]>([]);
  const [loadingLangs, setLoadingLangs] = useState(true);

  const handleCheckBox = (e: ChangeEvent<HTMLFormElement>) => {
    const target = e.target as unknown as HTMLInputElement;
    if (target.type !== 'checkbox') return;

    const { name, checked } = target;

    if (name === 'all') {
      setLanguageFilter(checked ? ['all', ...languages] : []);
      return;
    }

    setLanguageFilter((prev) => {
      const withoutAll = prev.filter((item) => item !== 'all');
      if (checked) {
        const next = withoutAll.includes(name) ? withoutAll : [...withoutAll, name];
        return next.length === languages.length ? ['all', ...languages] : next;
      }
      return withoutAll.filter((item) => item !== name);
    });
  };

  useEffect(() => {
    let cancelled = false;

    const getLanguages = async () => {
      setLoadingLangs(true);

      // Fast path: primary language field
      const primary = Array.from(
        new Set(
          repos
            .map((repo) => repo.language?.toString())
            .filter((lang): lang is string => Boolean(lang)),
        ),
      );
      if (!cancelled && primary.length) {
        setLanguages(primary);
        setLanguageFilter(['all', ...primary]);
      }

      // Enrich with full language breakdown
      try {
        const allLanguages = await Promise.all(
          repos.map(async (project) => {
            const resp = await clientApiGet('get-git-data', { url: String(project.languages_url) });
            return resp && typeof resp === 'object' && !('error' in resp) ? Object.keys(resp) : [];
          }),
        );

        if (cancelled) return;

        const unique = Array.from(new Set(allLanguages.flat().filter(Boolean))).sort((a, b) =>
          a.localeCompare(b),
        );

        if (unique.length) {
          setLanguages(unique);
          setLanguageFilter(['all', ...unique]);
        }
      } finally {
        if (!cancelled) setLoadingLangs(false);
      }
    };

    if (repos.length) getLanguages();
    return () => {
      cancelled = true;
    };
  }, [repos]);

  const activeCount = useMemo(
    () => languageFilter.filter((l) => l !== 'all').length,
    [languageFilter],
  );

  return (
    <div className={styles.wrapper}>
      <form onChange={handleCheckBox} className={styles.filterGridItem} aria-label="Filter by language">
        <label className={styles.chip}>
          <input type="checkbox" name="all" value="all" checked={languageFilter.includes('all')} readOnly />
          <span>All</span>
        </label>
        {languages.map((lang) => (
          <label key={lang} className={styles.chip}>
            <input
              type="checkbox"
              name={lang}
              value={lang}
              checked={languageFilter.includes(lang)}
              readOnly
            />
            <span>{lang}</span>
          </label>
        ))}
        {loadingLangs && languages.length === 0 && <span className={styles.loadingChip}>Loading languages…</span>}
      </form>

      <p className={styles.meta}>
        Showing repos matching <strong>{languageFilter.includes('all') ? 'all' : activeCount}</strong>{' '}
        {languageFilter.includes('all') ? 'languages' : activeCount === 1 ? 'language' : 'languages'}
      </p>

      <section className={styles.projects}>
        <div className={styles.grid}>
          {repos.map((repo) => (
            <ProjectCard
              key={String(repo.id ?? repo.name)}
              name={repo.name}
              description={repo.description}
              languages={repo.languages_url}
              repoUrl={repo.html_url}
              filter={languageFilter}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProjectSelecter;
