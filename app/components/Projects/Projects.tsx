'use client';
import { useEffect, useState } from 'react';
import { clientApiGet } from '@/app/src/utils/apiClient';
import styles from './Projects.module.css';
import ProjectSelecter from './ProjectSelecter/ProjectSelector';
import type { Project } from './types';

const options = {
  url: 'https://api.github.com/users/johnversus/repos?per_page=100&sort=updated',
};

const getRepos = async (): Promise<Array<Project>> => {
  const response = await clientApiGet('get-git-data', options);
  return response;
};

const Projects = ({ id }: { id: string }) => {
  const [repoData, setRepoData] = useState<Array<Project>>();
  const [error, setError] = useState(false);

  useEffect(() => {
    const init = async () => {
      try {
        const data = await getRepos();
        if (!Array.isArray(data)) {
          setError(true);
          return;
        }
        setRepoData(data);
      } catch {
        setError(true);
      }
    };
    init();
  }, []);

  const repos = repoData?.filter((repo) => repo.fork === false) ?? [];

  return (
    <div className={styles.container} id={id}>
      <div className={styles.main}>
        <header className={styles.header}>
          <p className="sectionEyebrow">Open source</p>
          <h1 id={`${id}-heading`} className="sectionTitle">
            Git <span className="gradientText">projects</span>
          </h1>
          <p className="sectionLead">
            Live from GitHub — filter by language and open any repo that catches your eye.
          </p>
        </header>

        <div className={styles.filterGrid}>
          {error && (
            <div className={styles.stateCard}>
              <p>Couldn&apos;t load repositories right now.</p>
              <a href="https://github.com/JohnVersus?tab=repositories" target="_blank" rel="noreferrer">
                View on GitHub →
              </a>
            </div>
          )}
          {!error && !repoData && (
            <div className={styles.stateCard}>
              <div className={styles.skeletonRow} />
              <div className={styles.skeletonGrid}>
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className={styles.skeletonCard} />
                ))}
              </div>
            </div>
          )}
          {!error && repos.length > 0 && <ProjectSelecter repos={repos} />}
          {!error && repoData && repos.length === 0 && (
            <div className={styles.stateCard}>
              <p>No public original repositories found.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
