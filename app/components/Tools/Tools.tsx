import styles from './Tools.module.css';

type App = {
  title: string;
  imageUrl: string;
  githubUrl: string;
  websiteUrl?: string;
  description: string;
  tag: string;
  featured?: boolean;
};

const githubSocial = (repo: string) =>
  `https://webapi.johnversus.dev/api/generateGithubSocial?repo_url=https://github.com/JohnVersus/${repo}`;

const apps: App[] = [
  {
    title: 'Animate Code',
    imageUrl: '/Tools/animate_code.png',
    githubUrl: 'https://github.com/JohnVersus/animate_code',
    websiteUrl: 'https://animate-code-pi.vercel.app',
    description: 'Turn code snippets into smooth animated videos — perfect for demos, docs, and social posts.',
    tag: 'Creator tool',
    featured: true,
  },
  {
    title: 'GitHub Social Image Generator',
    imageUrl: '/Tools/github_social_image_generator.png',
    githubUrl: 'https://github.com/JohnVersus/github-social-image-generator',
    websiteUrl: 'https://github-social-image-generator.vercel.app/',
    description: 'Generate beautiful social preview images for any GitHub repository in seconds.',
    tag: 'Dev tool',
  },
  {
    title: 'GPT Actions Python Boilerplate',
    imageUrl: githubSocial('gpt-actions-python-vercel-boilerplate'),
    githubUrl: 'https://github.com/JohnVersus/gpt-actions-python-vercel-boilerplate',
    websiteUrl: 'https://gpt-actions-python-vercel-boilerplate.vercel.app',
    description:
      'FastAPI + Vercel boilerplate for custom GPT Actions — ship ChatGPT integrations without the setup grind.',
    tag: 'AI · Boilerplate',
  },
  {
    title: 'Solana NFT Minter',
    imageUrl: githubSocial('solana-nft-minter'),
    githubUrl: 'https://github.com/JohnVersus/solana-nft-minter',
    description: 'A dApp to mint NFTs on the Solana blockchain — wallet-connected minting flow built with Next.js.',
    tag: 'Web3 · Solana',
  },
  {
    title: 'Solana NFT Explorer',
    imageUrl: githubSocial('solana-nft-explorer'),
    githubUrl: 'https://github.com/JohnVersus/solana-nft-explorer',
    description: 'Explore NFTs held by any Solana wallet — browse collections and metadata in a clean interface.',
    tag: 'Web3 · Solana',
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
                  {app.websiteUrl ? (
                    <a
                      href={app.websiteUrl}
                      target="_blank"
                      rel="noreferrer"
                      className={styles.primaryLink}
                    >
                      Live site
                      <span aria-hidden>↗</span>
                    </a>
                  ) : (
                    <a
                      href={app.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className={styles.primaryLink}
                    >
                      View repo
                      <span aria-hidden>↗</span>
                    </a>
                  )}
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
