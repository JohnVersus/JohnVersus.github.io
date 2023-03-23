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
          <div className={styles.app}>
            <div className={styles.backgroundImage}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://webapi.johnversus.dev/api/generateGithubSocial?repo_url=https://github.com/JohnVersus/github-social-image-generator"
                alt="Github social Image Generator"
              />
            </div>
            <div className={styles.appDescription}>
              {/* <big>
                <b> Title </b>
              </big>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda numquam accusantium dolores commodi.
                Laudantium, obcaecati possimus eos id explicabo illo non dolorem tempore voluptate? Molestiae maxime
                repellat hic ea ratione.
              </p> */}
              <div>
                <a href="https://github.com/JohnVersus/github-social-image-generator" target={'_blank'}>
                  <b> Github </b>
                </a>
                <a href="https://tools.johnversus.dev/github-social-image-generator" target={'_blank'}>
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
