'use client';
import { useEffect, useState } from 'react';
import styles from './Navbar.module.css';

const sections = ['#about', '#tools', '#projects', '#contact'];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('');

  // hash change event
  useEffect(() => {
    const onHashChange = () => {
      setActiveSection(window.location.hash);
    };
    window.addEventListener('hashchange', onHashChange);

    return () => {
      window.removeEventListener('hashchange', onHashChange);
    };
  }, []);

  // scroll change event
  useEffect(() => {
    const onScroll = () => {
      const buffer = window.innerHeight / 2; // Create a buffer zone in the middle of the viewport

      for (const hash of sections) {
        const sectionElement = document.querySelector(hash);
        const rect = sectionElement?.getBoundingClientRect();
        if (rect?.top && rect?.bottom && rect?.top <= buffer && rect?.top >= -buffer) {
          // Adjust the condition
          if (window.location.hash !== hash) {
            window.history.replaceState(null, '', hash);
            setActiveSection(hash);
          }
          return;
        }
      }
    };
    document.addEventListener('scroll', onScroll, true);

    return () => {
      document.removeEventListener('scroll', onScroll);
    };
  }, []);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      setActiveSection(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <div className={styles.navbar}>
      <div
        title="Home page"
        className={activeSection === '#about' || activeSection === '' ? styles.activeDot : styles.dot}
      >
        <a href="#about">ℹ️</a>
      </div>
      <div title="My tools" className={activeSection === '#tools' ? styles.activeDot : styles.dot}>
        <a href="#tools">💻</a>
      </div>
      <div title="My projects" className={activeSection === '#projects' ? styles.activeDot : styles.dot}>
        <a href="#projects">🗂️</a>
      </div>
      <div title="Contact" className={activeSection === '#contact' ? styles.activeDot : styles.dot}>
        <a href="#contact">💬</a>
      </div>
    </div>
  );
};

export default Navbar;
