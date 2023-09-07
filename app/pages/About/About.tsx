import Image from 'next/image';
import styles from './About.module.css';

const About = ({ href }: { href: string }) => {
  return (
    <div className={styles.container} id={href}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          <a href="/#about">Hi 👋, I’m John!!</a>
        </h1>

        <p className={styles.description}>
          A Self-taught developer who transformed passion into <code className={styles.code}>code</code>🚀
          {/* <br /> */}
          {/* Integrating
          <code className={styles.code}>Web3</code>
          into
          <code className={styles.code}>Web2</code>
          🚀 */}
        </p>

        <h2 className={styles.langList}>Languages and Tools I Use</h2>
        <div className={styles.grid}>
          <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer">
            <Image src="/codeImages/typescript.svg" alt="typescript" width="50" height="50" />
          </a>
          <a href="https://nextjs.org/" target="_blank" rel="noreferrer">
            <Image src="/codeImages/nextjs.svg" alt="nextjs" width="50" height="50" />
          </a>
          <a href="https://firebase.google.com/" target="_blank" rel="noreferrer">
            <Image src="/codeImages/firebase.svg" alt="firebase" width="50" height="50" />
          </a>{' '}
          <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer">
            <Image src="/codeImages/mongodb.svg" alt="mongodb" width="50" height="50" />
          </a>
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer">
            <Image src="/codeImages/javascript.svg" alt="javascript" width="50" height="50" />
          </a>
          <a href="https://git-scm.com/" target="_blank" rel="noreferrer">
            <Image src="/codeImages/git.svg" alt="git" width="50" height="50" />
          </a>
          <a href="https://nodejs.org" target="_blank" rel="noreferrer">
            <Image src="/codeImages/nodejs.svg" alt="nodejs" width="50" height="50" />
          </a>
          <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
            <Image src="/codeImages/react.svg" alt="react" width="50" height="50" />
          </a>
          <a href="https://expressjs.com" target="_blank" rel="noreferrer">
            <Image src="/codeImages/express.svg" alt="express" width="50" height="50" />
          </a>
          <a href="https://www.python.org/" target="_blank" rel="noreferrer">
            <Image src="/codeImages/python.svg" alt="python" width="50" height="50" />
          </a>
        </div>

        {/* <p className={styles.errortext}>🛠Construction in Progress🏗</p> */}
      </main>
    </div>
  );
};

export default About;
