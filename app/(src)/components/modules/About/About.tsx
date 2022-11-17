import Head from 'next/head';
import Image from 'next/image';
import styles from './About.module.css';
import express from '../../../../../public/codeImages/express.svg';

const About = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          <a>Hi 👋, I’m John!!</a>
        </h1>

        <p className={styles.description}>
          Integrating
          <code className={styles.code}>Web3</code>
          into
          <code className={styles.code}>Web2</code>
          🚀
        </p>

        <h3>Languages and Tools I Use</h3>
        <div className={styles.grid}>
          <a href="https://expressjs.com" target="_blank" rel="noreferrer">
            <Image src="/codeImages/express.svg" alt="express" width="40" height="40" />
          </a>
          <a href="https://firebase.google.com/" target="_blank" rel="noreferrer">
            <Image src="/codeImages/firebase.svg" alt="firebase" width="40" height="40" />
          </a>
          <a href="https://git-scm.com/" target="_blank" rel="noreferrer">
            <Image src="/codeImages/git.svg" alt="git" width="40" height="40" />
          </a>
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer">
            <Image src="/codeImages/javascript.svg" alt="javascript" width="40" height="40" />
          </a>
          <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer">
            <Image src="/codeImages/mongodb.svg" alt="mongodb" width="40" height="40" />
          </a>
          <a href="https://nextjs.org/" target="_blank" rel="noreferrer">
            <Image src="/codeImages/nextjs.svg" alt="nextjs" width="40" height="40" />
          </a>
          <a href="https://nodejs.org" target="_blank" rel="noreferrer">
            <Image src="/codeImages/nodejs.svg" alt="nodejs" width="40" height="40" />
          </a>
          <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
            <Image src="/codeImages/react.svg" alt="react" width="40" height="40" />
          </a>
          <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer">
            <Image src="/codeImages/typescript.svg" alt="typescript" width="40" height="40" />
          </a>
        </div>

        <p className={styles.errortext}>🛠Construction in Progress🏗</p>
      </main>
    </div>
  );
};

export default About;
