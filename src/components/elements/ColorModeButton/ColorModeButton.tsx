import { useEffect, useState } from 'react';
import styles from './ColorModeButton.module.css';

const ColorModeButton = () => {
  const [themeIcon, setThemeIcon] = useState<string>();
  const [state, setState] = useState<string>('');
  useEffect(() => {
    state === 'dark' && setThemeIcon('🌚');
    state === 'light' && setThemeIcon('🌞');
    state === '' && checkTheme();
  }, [state]);

  const checkTheme = () => {
    document.documentElement.className === ''
      ? window.matchMedia('(prefers-color-scheme: light)').matches
        ? (document.documentElement.className = 'dark') && setState('dark')
        : (document.documentElement.className = 'light') && setState('light')
      : document.documentElement.className === 'dark'
      ? (document.documentElement.className = 'light') && setState('dark')
      : (document.documentElement.className = 'dark') && setState('light');
  };

  return (
    <div className={styles.float} onClick={checkTheme}>
      {`${themeIcon ? themeIcon : ''}`}
    </div>
  );
};

export default ColorModeButton;
