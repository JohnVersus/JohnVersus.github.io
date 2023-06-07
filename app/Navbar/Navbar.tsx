'use client';
import { useEffect, useState } from 'react';
import styles from './Navbar.module.css';

const sections = ['#about', '#tools', '#projects', '#contact'];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const onHashChange = () => {
      setActiveSection(window.location.hash);
    };

    window.addEventListener('hashchange', onHashChange);

    const onScroll = () => {
      for (const hash of sections) {
        const sectionElement = document.querySelector(hash);
        const rect = sectionElement?.getBoundingClientRect();
        if (rect?.top && rect?.bottom && rect?.top <= 0 && rect?.bottom >= 0) {
          if (window.location.hash !== hash) {
            window.history.replaceState(null, '', hash);
            setActiveSection(hash);
          }
          return;
        }
      }
    };
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('hashchange', onHashChange);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <div className={styles.navbar}>
      <div className={activeSection === '#about' ? styles.activeDot : styles.dot}>
        <a href="#about">ℹ️</a>
      </div>
      <div className={activeSection === '#tools' ? styles.activeDot : styles.dot}>
        <a href="#tools">🧰</a>
      </div>
      <div className={activeSection === '#projects' ? styles.activeDot : styles.dot}>
        <a href="#projects">🗂️</a>
      </div>
      <div className={activeSection === '#contact' ? styles.activeDot : styles.dot}>
        <a href="#contact">💬</a>
      </div>
    </div>
  );
};

export default Navbar;
