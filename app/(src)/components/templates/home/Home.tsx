import styles from './Home.module.css';
import { About, Projects } from '../../modules';
const Home = () => {
  return (
    <div className={styles.scrollContainer}>
      <div className={styles.scrollChild}>
        <About />
      </div>
      <div className={styles.scrollChild}>
        {/* @ts-ignore */}
        <Projects />
      </div>
    </div>
  );
};

export default Home;
