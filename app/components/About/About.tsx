import Image from 'next/image';
import styles from './About.module.css';

const stack = [
  { name: 'TypeScript', href: 'https://www.typescriptlang.org/', src: '/codeImages/typescript.svg' },
  { name: 'Next.js', href: 'https://nextjs.org/', src: '/codeImages/nextjs.svg' },
  { name: 'React', href: 'https://reactjs.org/', src: '/codeImages/react.svg' },
  { name: 'Node.js', href: 'https://nodejs.org', src: '/codeImages/nodejs.svg' },
  { name: 'JavaScript', href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', src: '/codeImages/javascript.svg' },
  { name: 'Python', href: 'https://www.python.org/', src: '/codeImages/python.svg' },
  { name: 'MongoDB', href: 'https://www.mongodb.com/', src: '/codeImages/mongodb.svg' },
  { name: 'Firebase', href: 'https://firebase.google.com/', src: '/codeImages/firebase.svg' },
  { name: 'Express', href: 'https://expressjs.com', src: '/codeImages/express.svg' },
  { name: 'Git', href: 'https://git-scm.com/', src: '/codeImages/git.svg' },
];

const About = ({ id }: { id: string }) => {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.copy}>
          <p className="sectionEyebrow">
            <span className={styles.statusDot} aria-hidden />
            Available for collaborations
          </p>
          <h1 id={`${id}-heading`} className={styles.title}>
            Hi, I&apos;m <span className="gradientText">John</span>
            <span className={styles.wave} aria-hidden>
              👋
            </span>
          </h1>
          <p className={styles.lead}>
            A self-taught engineer who turned obsession into craft — building products that feel
            fast, intentional, and a little bit magical.
          </p>
          <div className={styles.ctaRow}>
            <a className={styles.primaryCta} href="#tools">
              Explore my work
              <span aria-hidden>→</span>
            </a>
            <a className={styles.secondaryCta} href="#contact">
              Get in touch
            </a>
          </div>
          <dl className={styles.stats}>
            <div>
              <dt>Focus</dt>
              <dd>Full-stack & AI tools</dd>
            </div>
            <div>
              <dt>Style</dt>
              <dd>Ship polished products</dd>
            </div>
            <div>
              <dt>Stack</dt>
              <dd>TS · Next · Node</dd>
            </div>
          </dl>
        </div>

        <div className={styles.panel}>
          <div className={styles.panelHeader}>
            <h2 className={styles.panelTitle}>Languages & tools</h2>
            <p className={styles.panelHint}>The ingredients behind the craft</p>
          </div>
          <div className={styles.grid}>
            {stack.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className={styles.tool}
                title={item.name}
              >
                <Image src={item.src} alt={item.name} width={36} height={36} />
                <span>{item.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
