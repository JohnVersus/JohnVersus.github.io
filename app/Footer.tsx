import { FooterStyled } from './(StyledComponents)/Footer';
import styles from './(StyledComponents)/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      Powered by Next 13, GitHub &&nbsp;
      <a target={'_blank'} href="https://github.com/JohnVersus" rel="noreferrer">
        John
      </a>
    </footer>
  );
};

export default Footer;
