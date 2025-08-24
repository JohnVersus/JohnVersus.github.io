'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from './ProjectCard.module.css';
import type { Project, IProjectCard } from '../../types';
import axios from 'axios';
import { clientApiGet } from '@/app/src/utils/apiClient';
const ProjectCard = ({ name, description, languages, repoUrl, filter, repo }: IProjectCard) => {
  const [data, setData] = useState<Array<string>>([]);
  const [isActive, setIsActive] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>('');

  const handleImageClick = () => {
    if (isActive) {
      setIsExiting(true);
      setTimeout(() => {
        setIsExiting(false);
        setIsActive(false);
      }, 300);
    } else {
      setIsActive(true);
    }
  };
  const [metadata, setMetadata] = useState<{
    title: string;
    description: string;
    ogData: {
      ogType: string;
      ogUrl: URL;
      ogTitle: string;
      ogDescription: string;
      ogImage: URL;
      ogImageAlt: URL;
    };
    twitterData: {
      twitterType: string;
      twitterUrl: URL;
      twitterTitle: string;
      twitterDescription: string;
      twitterImage: URL;
    };
  }>();
  useEffect(() => {
    const getLanguages = async (languagesUrl: URL) => {
      const options = {
        url: languagesUrl,
      };
      const resp = await clientApiGet('get-git-data', options);
      return resp;
    };
    getLanguages(languages).then((e) => {
      setData(e);
    });
  }, [languages]);

  useEffect(() => {
    const getImage = async () => {
      const response = await axios.post(
        '/api/generateGithubSocial',
        {
          repo_url: repo.html_url,
          description: repo.description,
          stars: repo.stargazers_count,
          avatar_url: repo.owner.avatar_url,
          languages_url: repo.languages_url,
        },
        {
          responseType: 'arraybuffer',
        },
      );
      const blob = new Blob([response.data], { type: 'image/png' });
      const url = URL.createObjectURL(blob);
      setImageUrl(url);
    };
    getImage();
  }, [repo]);

  if (Object.keys(data).filter((element) => filter.includes(element)).length) {
    return (
      <div className={styles.card}>
        {imageUrl && (
          <Image
            src={imageUrl}
            width={1920}
            height={960}
            alt={`${repoUrl}`}
            className={`${isActive ? styles.active : ''} ${isExiting ? styles.exit : ''}`}
            onClick={handleImageClick}
            loading="lazy"
          />
        )}
        <div>
          <p className={styles.visuallyHidden}> {name}</p>
          <p className={styles.visuallyHidden}>{description}</p>
        </div>
      </div>
    );
  }

  return null;
};

export default ProjectCard;
