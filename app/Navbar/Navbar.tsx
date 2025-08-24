'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

const navLinks = [
  { href: '/about', title: 'About', icon: 'ℹ️' },
  { href: '/tools', title: 'My tools', icon: '💻' },
  { href: '/projects', title: 'My projects', icon: '🗂️' },
  { href: '/contact', title: 'Contact', icon: '💬' },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className={styles.navbar}>
      {navLinks.map((link) => (
        <div
          key={link.href}
          title={link.title}
          className={
            pathname === link.href || (pathname === '/' && link.href === '/about')
              ? styles.activeDot
              : styles.dot
          }
        >
          <Link href={link.href}>{link.icon}</Link>
        </div>
      ))}
    </div>
  );
};

export default Navbar;
