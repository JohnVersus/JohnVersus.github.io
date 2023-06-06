import Image from 'next/image';
import styles from './Tools.module.css';

const apps = [
  {
    title: 'Github Social Image Generator',
    imageUrl: 'https://i.ibb.co/T45wDvQ/image.png',
    githubUrl: 'https://github.com/JohnVersus/github-social-image-generator',
    websiteUrl: 'https://github-social-image-generator.vercel.app/',
  },
  {
    title: 'Crypto Investment Tracker',
    imageUrl: 'https://i.ibb.co/6mPRYjf/image.png',
    githubUrl: 'https://github.com/JohnVersus/crypto-investment-tracker',
    websiteUrl: 'https://crypto-investment-tracker.vercel.app/',
  },
];

const Tools = ({ href }: { href: string }) => {
  return (
    <div className={styles.container} id={href}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          <a href="/#tools">App Billboard</a>
        </h1>
        <div className={styles.appBox}>
          {apps.map((app, i) => (
            <div className={styles.app} title={app.title} key={i}>
              <div className={styles.backgroundImage}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={app.imageUrl} alt={app.title} width={'100%'} loading="lazy" />
              </div>
              <div className={styles.appDescription}>
                <big>
                  <b> {app.title}</b>
                </big>
                <div>
                  <a href={app.githubUrl} target={'_blank'}>
                    <b> Github </b>
                  </a>
                  <a href={app.websiteUrl} target={'_blank'}>
                    <b> Website </b>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Tools;
