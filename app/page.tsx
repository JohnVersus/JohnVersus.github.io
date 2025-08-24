import styles from './page.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to my portfolio</h1>
        <p className={styles.description}>
          Please use the navigation to learn more about me.
        </p>
      </main>
    </div>
  );
};

export default Home;
