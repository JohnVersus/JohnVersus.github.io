import styles from './Pages.module.css';
import About from '../pages/About/layout';
import Projects from '../pages/Projects/layout';

const PagesArray = [<About key={'about'} />, <Projects key={'projects'} />];

const Pages = () => {
  return (
    <div className={styles.scrollContainer}>
      {PagesArray?.map((page, i) => {
        return (
          <div key={i} className={styles.scrollChild}>
            {page}
          </div>
        );
      })}
    </div>
  );
};

export default Pages;
