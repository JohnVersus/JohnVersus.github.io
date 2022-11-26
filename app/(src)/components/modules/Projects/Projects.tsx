import { clientApiPost } from 'utils/apiPost';
import styles from './Projects.module.css';
import ProjectSelecter from './ProjectSelecter';
import type { Project } from './types';

const options = {
  url: 'https://api.github.com/users/johnversus/repos',
};
const getRepos = async (): Promise<Array<Project>> => {
  const response = await clientApiPost('getGitData', options);
  return response;
};
const Projects = async () => {
  const repoData = await getRepos();
  let repos = [];
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
          <a>My Git Projects</a>
          <p className={styles.description}>Top {repos.length}</p>
        </h1>
        <div className={styles.filterGrid}>{repos && <ProjectSelecter repos={repos} />}</div>
      </main>
    </div>
  );
};

export default Projects;
