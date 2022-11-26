import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from './ProjectCard.module.css';
import ProjectSelecter from './ProjectSelecter';
import type { Project, IProjectCard } from './types';
import axios from 'axios';

const ProjectCard = ({ name, description, languages, repoUrl, filter }: IProjectCard) => {
  const [data, setData] = useState<Array<string>>([]);
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
      const myHeaders = new Headers();
      myHeaders.append('Authorization', `Bearer ${process.env.NEXT_PUBLIC_GIT_TOKEN}`);
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

  useEffect(() => {
    let ConvertStringToHTML = function (str: string) {
      let parser = new DOMParser();
      let doc = parser.parseFromString(str, 'text/html');
      return doc.head;
    };

    const getUrl = async () => {
      const options = {
        url: repoUrl,
      };
      const result = await axios.post('api/getProject', options, {
        // headers: {
        //   'content-type': 'application/json',
        // },
      });
      console.log(result.data);
      const { title, description, ogData, twitterData } = result.data.metadata;
      setMetadata({ title, description, ogData, twitterData });
      console.log({ title, description, ogData, twitterData });
    };
    repoUrl && getUrl();
  }, [repoUrl]);

  if (Object.keys(data).filter((element) => filter.includes(element)).length) {
    return (
      <div className={styles.card}>
        <img src={`${metadata?.ogData.ogImage}`} width={'100%'} height={'100%'} alt={''}></img>
        <p> {name}</p>
        <p> {description}</p>
        <p>{Object.keys(data).toString()}</p>
        <p>{repoUrl.toString()}</p>
      </div>
    );
  }
  return null;
};

export default ProjectCard;
