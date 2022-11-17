'use client';

import { ChangeEvent, useEffect, useState } from 'react';
import styles from './Projects.module.css';
import type { Project } from './types';

const Projects = () => {
  const [repos, setRepos] = useState<Array<Project>>([]);
  const [languages, setLanguages] = useState<Array<string>>([]);
  const [languageFilter, setLanguageFilter] = useState<Array<string>>([]);
  const getRepos = async () => {
    const response = await fetch('https://api.github.com/users/johnversus/repos');
    setRepos(await response.json());
  };

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

  useEffect(() => {
    const checkArray = () => {
      if (languages?.length > 0 && languages?.length === languageFilter?.length) {
        setLanguageFilter((e) => [...e, 'all']);
      }
    };
    checkArray();
  }, [languageFilter, languages]);

  const getLanguages = async (repos: Array<Project>) => {
    const allLanguages = await Promise.all(
      repos.map(async (project) => {
        const resp = await fetch(project.languages_url);
        return resp.json();
      }),
    );

    const mainLanguages = allLanguages.map((e) => {
      const languageArray = Object.keys(e);
      if (languageArray.length) {
        if (languageArray[0] === 'HTML' || 'CSS') {
          return languageArray[1] ? languageArray[1] : languageArray[0];
        }
        return languageArray[0];
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
  };

  useEffect(() => {
    getRepos();
  }, []);
  useEffect(() => {
    repos && getLanguages(repos);
  }, [repos]);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          <a>My Git Projects</a>
          <p className={styles.description}>Top 100</p>
        </h1>

        <div className={styles.filterGrid}>
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
        </div>
        <div className={styles.grid}></div>
      </main>
    </div>
  );
};

export default Projects;
