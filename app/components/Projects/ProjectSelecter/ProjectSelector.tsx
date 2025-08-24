'use client';
import { ChangeEvent, useEffect, useState } from 'react';
import { clientApiGet } from '@/app/src/utils/apiClient';
import ProjectCard from './ProjectCard/ProjectCard';
import styles from './ProjectSelecter.module.css';
import type { Project } from '../types';

const ProjectSelecter = ({ repos }: { repos: Array<Project> }) => {
  const [languages, setLanguages] = useState<Array<string>>([]);
  const [languageFilter, setLanguageFilter] = useState<Array<string>>([]);

  const deleteArrayElement = (name: string) => {
    let temp = languageFilter;
    if (temp.includes(name)) {
      temp.splice(temp.indexOf(name), 1);
      setLanguageFilter(() => [...temp]);
    }
  };

  const handleCheckBox = (e: ChangeEvent<HTMLFormElement>) => {
    const { name, checked } = e.target;

    if (checked && name !== 'all') {
      deleteArrayElement('all');
      !languageFilter?.includes(name) && setLanguageFilter((e) => [...e, name]);
    } else if (name !== 'all') {
      deleteArrayElement(name);
      deleteArrayElement('all');
    } else if (checked && name === 'all') {
      !languageFilter?.includes(name) && setLanguageFilter(() => [...[], name, ...languages]);
    } else {
      setLanguageFilter(() => [...[]]);
    }
  };

  const getLanguages = async (repos: Array<Project>) => {
    // console.time('Start');
    // console.log(repos);
    if (repos.length) {
      const languageArray: Array<string> = [];
      for (const repo of repos) {
        languageArray.push(repo.language?.toString());
      }
      let uniqueLanguages: Array<string> = [];
      for (const language of languageArray) {
        language && !uniqueLanguages.includes(language) && uniqueLanguages.push(language);
      }

      setLanguages(uniqueLanguages);
      setLanguageFilter(uniqueLanguages);
    }

    if (repos.length) {
      const allLanguages = await Promise.all(
        repos.map(async (project) => {
          const options = {
            url: project.languages_url,
          };
          const resp = clientApiGet('get-git-data', options).then((data) => {
            return data;
          });
          return resp;
        }),
      );
      const mainLanguages: Array<string> = [];
      allLanguages.map((e) => {
        if (e) {
          const languageArray = Object.keys(e);
          // if (languageArray.length) {
          //   if (languageArray[0] === 'HTML' || 'CSS') {
          //     return languageArray[1] ? languageArray[1] : languageArray[0];
          //   }
          //   return languageArray[0];
          // }
          languageArray.forEach((e) => {
            mainLanguages.push(e);
          });
        }
      });
      const filteredLanguages = mainLanguages.filter((e) => {
        if (e !== undefined) {
          return e;
        }
      });
      let uniqueLanguages: Array<string> = [];
      for (const language of filteredLanguages) {
        language && !uniqueLanguages.includes(language) && uniqueLanguages.push(language);
      }

      setLanguages(uniqueLanguages);
      setLanguageFilter(uniqueLanguages);
    }

    // console.timeEnd('Start');
  };

  useEffect(() => {
    const checkArray = () => {
      if (languages?.length > 0 && languages?.length === languageFilter?.length) {
        setLanguageFilter((e) => [...e, 'all']);
      }
    };
    checkArray();
  }, [languageFilter, languages]);

  useEffect(() => {
    repos && getLanguages(repos);
  }, [repos]);

  return (
    <div>
      <form onChange={handleCheckBox} className={styles.filterGridItem}>
        <label key={'all'}>
          <input
            onChange={(e) => {}}
            type={'checkbox'}
            name={'all'}
            value={'all'}
            id={'all'}
            checked={languageFilter.includes('all')}
          />
          <span>All</span>
        </label>
        {languages.map((e, i) => {
          return (
            <label key={i}>
              <input
                onChange={(e) => {}}
                type={'checkbox'}
                name={e}
                value={e}
                id={e}
                checked={languageFilter.includes(e)}
              />
              <span>{e}</span>
            </label>
          );
        })}
      </form>
      <section className={styles.projects}>
        <div className={styles.grid}>
          {repos.length > 0 &&
            repos.map((repo: Project, i) => {
              return (
                <ProjectCard
                  key={i}
                  repo={repo}
                  name={repo.name}
                  description={repo.description}
                  languages={repo.languages_url}
                  repoUrl={repo.html_url}
                  filter={languageFilter}
                />
              );
            })}
        </div>
      </section>
    </div>
  );
};

export default ProjectSelecter;
