import styles from './Pages.module.css';
import About from './About/About';
import Projects from './Projects/Projects';
import Tools from './Tools/Tools';
import Contact from './Contact/Contact';

const PagesArray = [
  <About key={'about'} href="about" />,
  <Tools key={'tools'} href={'tools'} />,
  <Projects key={'projects'} href="projects" />,
  <Contact key={'contact'} href="contact" />,
];

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
