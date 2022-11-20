import { FooterStyled } from './(StyledComponents)/Footer';
import styles from './(StyledComponents)/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      Powered by Next 13, GitHub &&nbsp;<a href="https://github.com/JohnVersus">John</a>
    </footer>
  );
  return (
    <FooterStyled>
      <>
        Powered by Next 13, GitHub &&nbsp;<a href="https://github.com/JohnVersus">John</a>
      </>
    </FooterStyled>
  );
};

export default Footer;
