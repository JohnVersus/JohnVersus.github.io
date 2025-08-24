import styles from './page.module.css';
import About from '@/app/components/About/About';
import Projects from '@/app/components/Projects/Projects';
import Tools from '@/app/components/Tools/Tools';
import Contact from '@/app/components/Contact/Contact';

const PagesArray = [
  <About key={'about'} id="about" />,
  <Tools key={'tools'} id="tools" />,
  <Projects key={'projects'} id="projects" />,
  <Contact key={'contact'} id="contact" />,
];

const Home = () => {
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

export default Home;
