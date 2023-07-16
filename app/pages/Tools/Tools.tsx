import styles from './Tools.module.css';

const apps = [
  {
    title: 'Github Social Image Generator',
    imageUrl: 'https://i.ibb.co/T45wDvQ/image.png',
    githubUrl: 'https://github.com/JohnVersus/github-social-image-generator',
    websiteUrl: 'https://github-social-image-generator.vercel.app/',
    description: 'This app generates social images for your Github projects.',
  },
  {
    title: 'Crypto Investment Tracker',
    imageUrl: 'https://i.ibb.co/6mPRYjf/image.png',
    githubUrl: 'https://github.com/JohnVersus/crypto-investment-tracker',
    websiteUrl: 'https://crypto-investment-tracker.vercel.app/',
    description:
      'Crypto investment tracker is a simple tool to replace your classic excel sheet. It helps to track all your crypto investments in one place.',
  },
];

const Tools = ({ href }: { href: string }) => {
  return (
    <div className={styles.pageContainer} id={href}>
      <main className={styles.mainContent}>
        <h1 className={styles.pageTitle}>
          <a href="/#tools">App Billboard</a>
        </h1>
        <div className={styles.appGrid}>
          {apps.map((app, i) => (
            <div className={styles.appCard} title={app.title} key={i}>
              <div className={styles.appImageContainer}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className={styles.appImage}
                  src={app.imageUrl}
                  alt={app.title}
                  width={'100%'}
                  height={`${100 / 1.5}%`}
                />
              </div>
              <div className={styles.appDetails}>
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
                <div className={styles.visuallyHidden}>{app.description}</div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Tools;
