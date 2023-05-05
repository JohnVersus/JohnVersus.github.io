import styles from './Contact.module.css';

const Contact = ({ href }: { href: string }) => {
  return (
    <div className={styles.container} id={href}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          <a>Contact</a>
        </h1>
        <div className={styles.contactInfo}>
          <h2>Feel free to reach out to me on:</h2>
          <ul>
            <li>
              <a href="https://twitter.com/_JohnVersus" target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
            </li>
            <li>
              <a href="https://github.com/JohnVersus" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </li>
            <li>
              <a href="https://discord.com/users/JohnVersus#1595" target="_blank" rel="noopener noreferrer">
                Discord
              </a>
            </li>
            {/* Add more social media links or contact details as needed */}
          </ul>
        </div>
        <form className={styles.form}>
          {/* <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required /> */}

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="subject">Subject</label>
          <input type="text" id="subject" name="subject" required />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows={5} required />

          <button type="submit">Submit</button>
        </form>
      </main>
    </div>
  );
};

export default Contact;
