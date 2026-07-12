'use client';
import { FormEvent, useState } from 'react';
import styles from './Contact.module.css';

const socials = [
  {
    name: 'Twitter / X',
    handle: '@johnvs_nagendra',
    href: 'https://x.com/johnvs_nagendra',
    blurb: 'Thoughts, ships, and updates',
  },
  {
    name: 'GitHub',
    handle: 'JohnVersus',
    href: 'https://github.com/JohnVersus',
    blurb: 'Open source & experiments',
  },
  {
    name: 'Discord',
    handle: 'JohnVersus#1595',
    href: 'https://discord.com/users/JohnVersus#1595',
    blurb: 'Say hello in real time',
  },
];

const Contact = ({ id }: { id: string }) => {
  const [message, setMessage] = useState('');
  const [sentHint, setSentHint] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const mailtoLink = `mailto:admin@johnversus.dev?subject=${encodeURIComponent(
      'Contacting John',
    )}&body=${encodeURIComponent(`Hi John,\n\n${message}`)}`;
    window.location.href = mailtoLink;
    setSentHint(true);
  };

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <header className={styles.header}>
          <p className="sectionEyebrow">Let&apos;s talk</p>
          <h1 id={`${id}-heading`} className="sectionTitle">
            Start a <span className="gradientText">conversation</span>
          </h1>
          <p className="sectionLead">
            Whether it&apos;s a product idea, collaboration, or just a hello — I&apos;d love to hear
            from you.
          </p>
        </header>

        <div className={styles.layout}>
          <div className={styles.socials}>
            {socials.map((social) => (
              <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className={styles.socialCard}>
                <div>
                  <p className={styles.socialName}>{social.name}</p>
                  <p className={styles.socialHandle}>{social.handle}</p>
                  <p className={styles.socialBlurb}>{social.blurb}</p>
                </div>
                <span className={styles.arrow} aria-hidden>
                  ↗
                </span>
              </a>
            ))}
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formHeader}>
              <h2>Send a note</h2>
              <p>Opens your email client — no spam, no forms warehouse.</p>
            </div>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows={6}
              required
              placeholder="Hi John, I have an idea..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button type="submit">
              Open email draft
              <span aria-hidden>→</span>
            </button>
            {sentHint && <p className={styles.hint}>If nothing opened, email admin@johnversus.dev directly.</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
