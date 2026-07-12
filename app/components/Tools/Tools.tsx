import styles from './Tools.module.css';

const apps = [
  {
    title: 'Nimble UI Kit',
    imageUrl: '/Tools/nimbleuiKit.jpeg',
    githubUrl: 'https://github.com/JohnVersus/nimbleuikit',
    websiteUrl: 'https://nimbleuikit-website.vercel.app/',
    description: 'A lightweight UI kit for crafting stunning interface systems without the bloat.',
    tag: 'Design system',
    featured: true,
  },
  {
    title: 'Github Social Image Generator',
    imageUrl: '/Tools/github_social_image_generator.png',
    githubUrl: 'https://github.com/JohnVersus/github-social-image-generator',
    websiteUrl: 'https://github-social-image-generator.vercel.app/',
    description: 'Generate beautiful social preview images for any GitHub repository in seconds.',
    tag: 'Dev tool',
  },
  {
    title: 'Crypto Investment Tracker',
    imageUrl: '/Tools/cryptoInvestmentTracker.png',
    githubUrl: 'https://github.com/JohnVersus/crypto-investment-tracker',
    websiteUrl: 'https://crypto-investment-tracker.vercel.app/',
    description: 'Replace the classic spreadsheet — track every crypto investment in one calm place.',
    tag: 'Finance',
  },
  {
    title: 'Developer Doc Search GPT',
    imageUrl: '/Tools/dev_doc_search.png',
    githubUrl: 'https://github.com/JohnVersus/chatgpt-plugin-python-vercel-boilerplate',
    websiteUrl: 'https://chatgpt.com/g/g-AINygIiYy-developer-doc-search',
    description: 'Search thousands of open-source packages and GitHub docs through a conversational interface.',
    tag: 'AI',
  },
  {
    title: 'Youtube Summariser GPT',
    imageUrl: '/Tools/yt_summarizer.png',
    githubUrl: 'https://github.com/JohnVersus/chatgpt-plugin-python-vercel-boilerplate',
    websiteUrl: 'https://chatgpt.com/g/g-dHRRUFODc-video-summarizer',
    description: 'Fetch YouTube transcripts and turn long videos into crisp, usable summaries.',
    tag: 'AI',
  },
];

const Tools = ({ id }: { id: string }) => {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.mainContent}>
        <header className={styles.header}>
          <p className="sectionEyebrow">Product showcase</p>
          <h1 id={`${id}-heading`} className="sectionTitle">
            App <span className="gradientText">billboard</span>
          </h1>
          <p className="sectionLead">
            A curated line-up of tools and experiments — designed to solve real problems and feel
            delightful to use.
          </p>
        </header>

        <div className={styles.appGrid}>
          {apps.map((app) => (
            <article
              key={app.title}
              className={`${styles.appCard} ${app.featured ? styles.featured : ''}`}
            >
              <div className={styles.imageWrap}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  loading="lazy"
                  className={styles.appImage}
                  src={app.imageUrl}
                  alt={app.title}
                  width={640}
                  height={360}
                />
                <span className={styles.tag}>{app.tag}</span>
              </div>
              <div className={styles.appDetails}>
                <h2 className={styles.appTitle}>{app.title}</h2>
                <p className={styles.appDescription}>{app.description}</p>
                <div className={styles.links}>
                  <a href={app.githubUrl} target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                  <a href={app.websiteUrl} target="_blank" rel="noreferrer" className={styles.primaryLink}>
                    Live site
                    <span aria-hidden>↗</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tools;
