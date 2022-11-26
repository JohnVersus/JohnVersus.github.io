import { About, Projects } from 'components/modules';
import styles from '../app/(StyledComponents)/Home.module.css';

const Home = (): Promise<JSX.Element> | JSX.Element => {
  return (
    <div className={styles.scrollContainer}>
      <div className={styles.scrollChild}>
        <About />
      </div>
      <div className={styles.scrollChild}>
        {
          // to be fixed by using `use` in project conponent
          // @ts-ignore
          <Projects />
        }
      </div>
    </div>
  );
};

export default Home;
