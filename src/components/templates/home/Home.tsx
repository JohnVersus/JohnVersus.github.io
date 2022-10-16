import Head from 'next/head';
import Image from 'next/image';
import styles from './Home.module.css';
import { About, Projects } from '../../modules';
const Home = () => {
  return (
    <div className={styles.scrollContainer}>
      <Head>
        <title>Profile</title>
        <meta name="description" content="JohnVersus Profile" />
        <link rel="icon" href="favicon.ico" />
      </Head>
      <div className={styles.scrollChild}>
        <About />
      </div>
      <div className={styles.scrollChild}>
        <Projects />
      </div>
    </div>
  );
};

export default Home;
