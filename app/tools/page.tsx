import styles from './page.module.css';
const apps = [
  {
    title: 'Nimble UI Kit',
    imageUrl: '/Tools/nimbleuiKit.jpeg',
    githubUrl: 'https://github.com/JohnVersus/nimbleuikit',
    websiteUrl: 'https://nimbleuikit-website.vercel.app/',
    description: 'Nimble UI Kit is a light weight UI kit to create stunning UI systems effortlessly!',
  },
  {
    title: 'Github Social Image Generator',
    imageUrl: '/Tools/github_social_image_generator.png',
    githubUrl: 'https://github.com/JohnVersus/github-social-image-generator',
    websiteUrl: 'https://github-social-image-generator.vercel.app/',
    description: 'This app generates social images for your Github projects.',
  },
  {
    title: 'Crypto Investment Tracker',
    imageUrl: '/Tools/cryptoInvestmentTracker.png',
    githubUrl: 'https://github.com/JohnVersus/crypto-investment-tracker',
    websiteUrl: 'https://crypto-investment-tracker.vercel.app/',
    description:
      'Crypto investment tracker is a simple tool to replace your classic excel sheet. It helps to track all your crypto investments in one place.',
  },
  {
    title: 'Developer Doc Search GPT',
    imageUrl: '/Tools/dev_doc_search.png',
    githubUrl: 'https://github.com/JohnVersus/chatgpt-plugin-python-vercel-boilerplate',
    websiteUrl: 'https://chatgpt.com/g/g-AINygIiYy-developer-doc-search',
    description:
      'Developer Doc Search plugin can access thousands of open source packages and their GitHub documentation effortlessly.',
  },
  {
    title: 'Youtube Summariser GPT',
    imageUrl: '/Tools/yt_summarizer.png',
    githubUrl: 'https://github.com/JohnVersus/chatgpt-plugin-python-vercel-boilerplate',
    websiteUrl: 'https://chatgpt.com/g/g-dHRRUFODc-video-summarizer',
    description:
      'The YouTube Video Summarizer is a tool that fetches transcriptions from a YouTube video and provides a concise text summary.',
  },
];

const Tools = () => {
  return (
    <div className={styles.pageContainer}>
      <main className={styles.mainContent}>
        <h1 className={styles.pageTitle}>App Billboard</h1>
        <div className={styles.appGrid}>
          {apps.map((app, i) => (
            <div className={styles.appCard} title={app.title} key={i}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                loading="lazy"
                className={styles.appImage}
                src={app.imageUrl}
                alt={app.title}
                width={'100'}
                height={'60'}
              />
              {/* <div className={styles.appImageContainer}></div> */}
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
