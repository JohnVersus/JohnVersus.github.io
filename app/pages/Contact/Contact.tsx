import Image from 'next/image';
import styles from './Contact.module.css';

const Contact = ({ href }: { href: string }) => {
  return (
    <div className={styles.container} id={href}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          <a>Contact</a>
        </h1>
      </main>
    </div>
  );
};

export default Contact;
