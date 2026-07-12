import styles from './page.module.css';
import About from '@/app/components/About/About';
import Tools from '@/app/components/Tools/Tools';
import Contact from '@/app/components/Contact/Contact';

const sections = [
  { id: 'about', Component: About },
  { id: 'tools', Component: Tools },
  { id: 'contact', Component: Contact },
];

const Home = () => {
  return (
    <main className={styles.page}>
      {sections.map(({ id, Component }) => (
        <section key={id} id={id} className={styles.section} aria-labelledby={`${id}-heading`}>
          <Component id={id} />
        </section>
      ))}
    </main>
  );
};

export default Home;
