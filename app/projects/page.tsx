'use client';
import { useEffect, useState } from 'react';
import { clientApiPost } from '@/app/src/utils/apiPost';
import styles from './page.module.css';
import ProjectSelecter from './ProjectSelecter/ProjectSelector';
import type { Project } from './types';

const options = {
  url: 'https://api.github.com/users/johnversus/repos',
};
const getRepos = async (): Promise<Array<Project>> => {
  const response = await clientApiPost('getGitData', options);
  return response;
};
const Projects = () => {
  // const repoData = await getRepos();
  const [repoData, setRepoData] = useState<Array<Project>>();

  let repos = [];
  useEffect(() => {
    const init = async () => {
      const repoData = await getRepos();
      setRepoData(repoData);
    };
    init();
  }, []);
  if (repoData) {
    for (const repo of repoData) {
      if (repo.fork === false) {
        repos.push(repo);
      }
    }
  }
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          My Git Projects
          {/* <p className={styles.description}>Top {repos.length}</p> */}
        </h1>

        <div className={styles.filterGrid}>{repos.length ? <ProjectSelecter repos={repos} /> : 'Loading..'}</div>
      </main>
    </div>
  );
};

export default Projects;
