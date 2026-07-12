'use client';
import { useEffect, useState } from 'react';
import styles from './ProjectCard.module.css';
import type { IProjectCard } from '../../types';
import { clientApiGet } from '@/app/src/utils/apiClient';
import GitImage from './GitImage';

const ProjectCard = ({ name, description, languages, repoUrl, filter }: IProjectCard) => {
  const [data, setData] = useState<Record<string, number> | null>(null);
  const [isActive, setIsActive] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  const handleImageClick = () => {
    if (isActive) {
      setIsExiting(true);
      setTimeout(() => {
        setIsExiting(false);
        setIsActive(false);
      }, 280);
    } else {
      setIsActive(true);
    }
  };

  useEffect(() => {
    let cancelled = false;
    const getLanguages = async () => {
      const resp = await clientApiGet('get-git-data', { url: String(languages) });
      if (!cancelled && resp && typeof resp === 'object' && !('error' in resp)) {
        setData(resp as Record<string, number>);
      } else if (!cancelled) {
        setData({});
      }
    };
    getLanguages();
    return () => {
      cancelled = true;
    };
  }, [languages]);

  useEffect(() => {
    if (!isActive) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsExiting(true);
        setTimeout(() => {
          setIsExiting(false);
          setIsActive(false);
        }, 280);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isActive]);

  if (data === null) {
    return <div className={styles.skeleton} aria-hidden />;
  }

  const langKeys = Object.keys(data);

  if (filter.length === 0) return null;
  if (!filter.includes('all')) {
    if (langKeys.length === 0) return null;
    if (!langKeys.some((lang) => filter.includes(lang))) return null;
  }

  const topLangs = langKeys.slice(0, 3);
  const repoHref = String(repoUrl);
  const displayName = String(name);
  const displayDescription = description ? String(description) : 'Open source project on GitHub';

  return (
    <>
      <article className={styles.card}>
        <button type="button" className={styles.media} onClick={handleImageClick} aria-label={`Preview ${displayName}`}>
          <GitImage
            src={`https://webapi.johnversus.dev/api/generateGithubSocial?repo_url=${repoHref}`}
            alt={`Social preview for ${displayName}`}
            className={styles.thumb}
            loading="lazy"
          />
          <span className={styles.expandHint}>Expand</span>
        </button>
        <div className={styles.body}>
          <div className={styles.titleRow}>
            <h3 className={styles.name}>{displayName}</h3>
            <a className={styles.repoLink} href={repoHref} target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
          </div>
          <p className={styles.description}>{displayDescription}</p>
          {topLangs.length > 0 && (
            <ul className={styles.langs}>
              {topLangs.map((lang) => (
                <li key={lang}>{lang}</li>
              ))}
            </ul>
          )}
        </div>
      </article>

      {(isActive || isExiting) && (
        <div
          className={`${styles.lightbox} ${isExiting ? styles.lightboxExit : ''}`}
          onClick={handleImageClick}
          role="dialog"
          aria-modal="true"
          aria-label={`${displayName} preview`}
        >
          <GitImage
            src={`https://webapi.johnversus.dev/api/generateGithubSocial?repo_url=${repoHref}`}
            alt={`Social preview for ${displayName}`}
            className={`${styles.lightboxImage} ${isExiting ? styles.exit : styles.active}`}
            loading="eager"
          />
        </div>
      )}
    </>
  );
};

export default ProjectCard;
