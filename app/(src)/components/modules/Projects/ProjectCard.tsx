import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from './ProjectCard.module.css';
import ProjectSelecter from './ProjectSelecter';
import type { Project, IProjectCard } from './types';

const ProjectCard = ({ name, description, languages, repoUrl, filter }: IProjectCard) => {
  const [data, setData] = useState<Array<string>>([]);
  useEffect(() => {
    const getLanguages = async (languagesUrl: URL) => {
      const myHeaders = new Headers();
      myHeaders.append('Authorization', 'Bearer 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');
      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
      };
      const resp = await fetch(languagesUrl, requestOptions);
      return resp.json();
    };
    getLanguages(languages).then((e) => {
      setData(e);
    });
  }, [languages]);

  if (Object.keys(data).filter((element) => filter.includes(element)).length) {
    return (
      <div className={styles.card}>
        <img src={'/codeImages/javascript.svg'} width={'200'} height={'200'}></img>
        <text> {name}</text>
        <text> {description}</text>
        <text>{Object.keys(data).toString()}</text>
        <text>{repoUrl.toString()}</text>
        <text>{filter.toString()}</text>
      </div>
    );
  }
};

export default ProjectCard;
