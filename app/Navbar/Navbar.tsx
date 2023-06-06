'use client';
import { useEffect, useState } from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const onHashChange = () => {
      setActiveSection(window.location.hash);
    };

    window.addEventListener('hashchange', onHashChange);
    return () => {
      window.removeEventListener('hashchange', onHashChange);
    };
  }, []);

  useEffect(() => {
    console.log(activeSection);
  }, [activeSection]);

  return (
    <div className={styles.navbar}>
      <div className={activeSection === '#about' ? styles.activeDot : styles.dot}>
        <a href="#about"></a>
      </div>
      <div className={activeSection === '#tools' ? styles.activeDot : styles.dot}>
        <a href="#tools"></a>
      </div>
      <div className={activeSection === '#projects' ? styles.activeDot : styles.dot}>
        <a href="#projects"></a>
      </div>
      <div className={activeSection === '#contact' ? styles.activeDot : styles.dot}>
        <a href="#contact"></a>
      </div>
    </div>
  );
};

export default Navbar;
