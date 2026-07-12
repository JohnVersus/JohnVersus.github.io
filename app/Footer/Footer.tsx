import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.copy}>
        Powered by&nbsp;
        <a href="https://x.com/johnvs_nagendra" target="_blank" rel="noreferrer">
          John
        </a>
      </p>
    </footer>
  );
};

export default Footer;
