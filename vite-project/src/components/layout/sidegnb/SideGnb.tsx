import { Link } from '@tanstack/react-router';
import { gnbRootList } from '@/constants/routes';
import styles from './index.module.css';

function SideGnb() {

  return (
    <aside className={styles.sidebar}>
      <h1 className={styles.sidebarHeader}>
        <Link href='/'>
          UI 요소 모음 <sub>hennie</sub>
        </Link>
      </h1>
      <ul className={styles.sidebarNav}>
        {gnbRootList.map((route) => (
            <li key={route.key} className={styles.navItem}>
              <Link to={route.link} className={styles.navLink}>{route.name}</Link>
            </li>
          ),
        )}
      </ul>

    </aside>
  );
}

export default SideGnb;