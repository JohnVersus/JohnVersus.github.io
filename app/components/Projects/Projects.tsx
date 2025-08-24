'use client';
import { useEffect, useState } from 'react';
import { clientApiGet } from '@/app/src/utils/apiClient';
import styles from './Projects.module.css';
import ProjectSelecter from './ProjectSelecter/ProjectSelector';
import type { Project } from './types';

const options = {
  url: 'https://api.github.com/users/johnversus/repos',
};
const getRepos = async (): Promise<Array<Project>> => {
  const response = await clientApiGet('get-git-data', options);
  return response;
};
const Projects = ({ id }: { id: string }) => {
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
    <div className={styles.container} id={id}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          <a href="/#projects">My Git Projects</a>
          {/* <p className={styles.description}>Top {repos.length}</p> */}
        </h1>

        <div className={styles.filterGrid}>{repos.length ? <ProjectSelecter repos={repos} /> : 'Loading..'}</div>
      </main>
    </div>
  );
};

export default Projects;
