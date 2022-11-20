'use client';
import { ChangeEvent, useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';
import styles from './Projects.module.css';
import type { Project } from './types';

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
    if (repos.length) {
      const allLanguages = await Promise.all(
        repos.map(async (project) => {
          const myHeaders = new Headers();
          myHeaders.append('Authorization', 'Bearer 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');
          var requestOptions = {
            method: 'GET',
            headers: myHeaders,
          };
          const resp = await fetch(project.languages_url, requestOptions);
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
      setLanguageFilter(uniqueLanguages);
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
      <div className={styles.grid}>
        {repos &&
          repos.map((repo: Project, i) => {
            return (
              <ProjectCard
                key={i}
                name={repo.name}
                description={repo.description}
                languages={repo.languages_url}
                repoUrl={repo.html_url}
                filter={languageFilter}
              />
            );
          })}
      </div>
    </div>
  );
};

export default ProjectSelecter;