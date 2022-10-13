import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Profile</title>
        <meta name="description" content="JohnVersus Profile" />
        <link rel="icon" href="favicon.ico" />
      </Head>

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

        <h3>Languages and Tools:</h3>
        <div className={styles.grid}>
          <a href="https://expressjs.com" target="_blank" rel="noreferrer">
            <Image
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg"
              alt="express"
              width="40"
              height="40"
            />
          </a>
          <a
            href="https://firebase.google.com/"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg"
              alt="firebase"
              width="40"
              height="40"
            />
          </a>
          <a href="https://git-scm.com/" target="_blank" rel="noreferrer">
            <Image
              src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
              alt="git"
              width="40"
              height="40"
            />
          </a>
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
              alt="javascript"
              width="40"
              height="40"
            />
          </a>
          <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer">
            <Image
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
              alt="mongodb"
              width="40"
              height="40"
            />
          </a>
          <a href="https://nextjs.org/" target="_blank" rel="noreferrer">
            <Image
              src="https://cdn.worldvectorlogo.com/logos/nextjs-2.svg"
              alt="nextjs"
              width="40"
              height="40"
            />
          </a>
          <a href="https://nodejs.org" target="_blank" rel="noreferrer">
            <Image
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
              alt="nodejs"
              width="40"
              height="40"
            />
          </a>
          <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
            <Image
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
              alt="react"
              width="40"
              height="40"
            />
          </a>
          <a
            href="https://www.typescriptlang.org/"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
              alt="typescript"
              width="40"
              height="40"
            />
          </a>
        </div>

        <p className={styles.errortext}>🛠Construction in Progress🏗</p>
      </main>

      <footer className={styles.footer}>Powered by GitHub</footer>
    </div>
  );
};

export default Home;
