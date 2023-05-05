import Image from 'next/image';
import styles from './Tools.module.css';

const Tools = ({ href }: { href: string }) => {
  return (
    <div className={styles.container} id={href}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          <a href="/#tools">App Billboard</a>
        </h1>
        <div className={styles.appBox}>
          <div className={styles.app} title="Github Social Image Generator">
            <div className={styles.backgroundImage}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://i.ibb.co/T45wDvQ/image.png" alt="Github social Image Generator" />
            </div>
            <div className={styles.appDescription}>
              <big>
                <b> Github Social Image Generator</b>
              </big>
              <div>
                <a href="https://github.com/JohnVersus/github-social-image-generator" target={'_blank'}>
                  <b> Github </b>
                </a>
                <a href="https://github-social-image-generator.vercel.app/" target={'_blank'}>
                  <b> Website </b>
                </a>
              </div>
            </div>
          </div>
          <div className={styles.app} title="Crypto Investment Tracker">
            <div className={styles.backgroundImage}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://i.ibb.co/6mPRYjf/image.png" alt="Crypto Investment Tracker" />
            </div>
            <div className={styles.appDescription}>
              <big>
                <b> Crypto Investment Tracker </b>
              </big>
              <div>
                <a href="https://github.com/JohnVersus/crypto-investment-tracker" target={'_blank'}>
                  <b> Github </b>
                </a>
                <a href="https://crypto-investment-tracker.vercel.app/" target={'_blank'}>
                  <b> Website </b>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Tools;
