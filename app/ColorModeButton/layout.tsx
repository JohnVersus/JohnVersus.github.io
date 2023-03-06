'use client';
import { useEffect, useState } from 'react';
import { ColorModeButtonStyled } from '../(StyledComponents)/ColorModeButton';
import styles from './ColorModeButton.module.css';

const ColorModeButton = () => {
  const [themeIcon, setThemeIcon] = useState<string>();

  useEffect(() => {
    // checkThemeIcon(document.documentElement.className);
    setTheme('dark');
  }, []);

  const checkThemeIcon = (theme: string) => {
    switch (theme) {
      case 'light':
        setThemeIcon('🌚');
        break;

      case 'dark':
        setThemeIcon('🌞');
        break;

      default:
        break;
    }
    // if (document.documentElement.className === 'dark') {
    //   setThemeIcon('🌞');
    // } else {
    //   setThemeIcon('🌚');
    // }
  };

  const setTheme = (mode: 'dark' | 'light') => {
    document.documentElement.className = mode;
    checkThemeIcon(mode);
  };

  const checkTheme = () => {
    document.documentElement.className === ''
      ? window.matchMedia('(prefers-color-scheme: light)').matches
        ? (document.documentElement.className = 'light')
        : (document.documentElement.className = 'dark')
      : document.documentElement.className === 'dark'
      ? (document.documentElement.className = 'light')
      : (document.documentElement.className = 'dark');

    checkThemeIcon(document.documentElement.className);
  };

  return (
    <div className={styles.float} onClick={checkTheme}>
      {`${themeIcon ? themeIcon : ''}`}
    </div>
  );
  // return <ColorModeButtonStyled onClick={checkTheme}>{`${themeIcon ? themeIcon : ''}`}</ColorModeButtonStyled>;
};

export default ColorModeButton;
