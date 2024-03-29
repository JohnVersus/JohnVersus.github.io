'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from './ProjectCard.module.css';
import type { Project, IProjectCard } from '../../types';
import axios from 'axios';
import { clientApiPost } from 'utils/apiPost';
import GitImage from './GitImage';

const ProjectCard = ({ name, description, languages, repoUrl, filter }: IProjectCard) => {
  const [data, setData] = useState<Array<string>>([]);
  const [isActive, setIsActive] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

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
      const resp = await clientApiPost('getGitData', options);
      return resp;
    };
    getLanguages(languages).then((e) => {
      setData(e);
    });
  }, [languages]);

  // useEffect(() => {
  //   let ConvertStringToHTML = function (str: string) {
  //     let parser = new DOMParser();
  //     let doc = parser.parseFromString(str, 'text/html');
  //     return doc.head;
  //   };

  //   const getUrl = async () => {
  //     const options = {
  //       url: repoUrl,
  //     };
  //     const result = await axios.post('api/getProjectMetadata', options, {
  //       // headers: {
  //       //   'content-type': 'application/json',
  //       // },
  //     });
  //     const { title, description, ogData, twitterData } = result.data.metadata;
  //     setMetadata({ title, description, ogData, twitterData });
  //   };
  //   repoUrl && getUrl();
  // }, [repoUrl]);

  if (Object.keys(data).filter((element) => filter.includes(element)).length) {
    return (
      <div className={styles.card}>
        <GitImage
          src={`https://webapi.johnversus.dev/api/generateGithubSocial?repo_url=${repoUrl}`}
          width={'100%'}
          height={'100%'}
          max-widht={'90vw'}
          alt={`${repoUrl}`}
          className={`${isActive ? styles.active : ''} ${isExiting ? styles.exit : ''}`}
          onClick={handleImageClick}
          loading="lazy"
        ></GitImage>
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
