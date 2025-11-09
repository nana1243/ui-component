import { Link } from '@tanstack/react-router';
import { gnbRootList } from '@/constants/routes';
import styles from './index.module.css';

function SideGnb() {

  return (
    <aside className={styles.sidebar} role={'navigation'} aria-label='주요 UI 요소 메뉴'>
      <h2 className={styles.sidebarHeader}>
        <Link href='/' aria-label='홈으로 이동, UI 요소 모음'>
          UI 요소 모음 <sub>hennie</sub>
        </Link>
      </h2>
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