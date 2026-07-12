'use client';
import { useEffect, useRef, useState, type MouseEvent } from 'react';
import styles from './Navbar.module.css';

const sections = [
  { id: 'about', label: 'About', icon: '01' },
  { id: 'tools', label: 'Apps', icon: '02' },
  { id: 'contact', label: 'Contact', icon: '03' },
] as const;

type SectionId = (typeof sections)[number]['id'];

function resolveActiveSection(): SectionId {
  const probe = window.scrollY + window.innerHeight * 0.33;
  let current: SectionId = 'about';

  for (const { id } of sections) {
    const el = document.getElementById(id);
    if (!el) continue;
    const top = el.getBoundingClientRect().top + window.scrollY;
    if (probe >= top - 4) current = id;
  }

  const nearBottom =
    window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 64;
  if (nearBottom) current = 'contact';

  return current;
}

const Navbar = () => {
  const [activeSection, setActiveSection] = useState<SectionId>('about');
  // While smooth-scrolling from a nav click, ignore scroll-driven updates so the
  // highlight doesn't flash back to the previous section mid-animation.
  const lockedSectionRef = useRef<SectionId | null>(null);
  const unlockTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => {
      const locked = lockedSectionRef.current;
      if (locked) {
        // Keep highlight on the clicked target until we actually arrive
        if (resolveActiveSection() === locked) {
          lockedSectionRef.current = null;
          if (unlockTimerRef.current) {
            clearTimeout(unlockTimerRef.current);
            unlockTimerRef.current = null;
          }
        }
        return;
      }
      setActiveSection(resolveActiveSection());
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (unlockTimerRef.current) clearTimeout(unlockTimerRef.current);
    };
  }, []);

  const handleClick = (id: SectionId) => (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    lockedSectionRef.current = id;
    setActiveSection(id);

    if (unlockTimerRef.current) clearTimeout(unlockTimerRef.current);
    // Safety unlock if scrollend never lines up (reduced motion, short pages, etc.)
    unlockTimerRef.current = setTimeout(() => {
      lockedSectionRef.current = null;
      setActiveSection(resolveActiveSection());
      unlockTimerRef.current = null;
    }, 1200);

    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    window.history.replaceState(null, '', `#${id}`);
  };

  return (
    <nav className={styles.navbar} aria-label="Section navigation">
      {sections.map(({ id, label, icon }) => {
        const isActive = activeSection === id;
        return (
          <a
            key={id}
            href={`#${id}`}
            onClick={handleClick(id)}
            className={isActive ? `${styles.item} ${styles.itemActive}` : styles.item}
            aria-current={isActive ? 'true' : undefined}
            title={label}
          >
            <span className={styles.icon}>{icon}</span>
            <span className={styles.label}>{label}</span>
          </a>
        );
      })}
    </nav>
  );
};

export default Navbar;
