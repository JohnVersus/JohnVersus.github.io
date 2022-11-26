import ProjectCard from './ProjectCard';
import styles from './Projects.module.css';
import ProjectSelecter from './ProjectSelecter';
import type { Project } from './types';

const myHeaders = new Headers();
myHeaders.append('Authorization', `Bearer ${process.env.NEXT_PUBLIC_GIT_TOKEN}`);
var requestOptions = {
  method: 'GET',
  headers: myHeaders,
};

const getRepos = async (): Promise<Array<Project>> => {
  const response = await fetch('https://api.github.com/users/johnversus/repos', requestOptions);
  return response.json();
};
const Projects = async () => {
  const repoData = await getRepos();
  let repos = [];
  for (const repo of repoData) {
    if (repo.fork === false) {
      repos.push(repo);
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
        {/* <div className={styles.grid}>
          {repos &&
            repos.map((repo: Project, i) => {
              return (
                <ProjectCard
                  key={i}
                  name={repo.name}
                  description={repo.description}
                  languages={repo.languages_url}
                  repoUrl={repo.html_url}
                  filter={[]}
                />
              );
            })}
        </div> */}
      </main>
    </div>
  );
};

export default Projects;
