import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div>
        {/* to-do replace a with links */}
        <a href="#about"> ⏺ </a>
      </div>
      <div>
        <a href="#projects"> ⏺ </a>
      </div>
    </div>
  );
};

export default Navbar;
