import { Link } from '@tanstack/react-router';
import { gnbRootList } from '@/constants/routes';
import styles from './index.module.css';

function SideGnb() {

  return (
    <aside class={styles.sidebar}>
      <h1 class={styles.sidebarHeader}>
        <Link href='/'>
          UI 요소 모음 <sub>hennie</sub>
        </Link>
      </h1>
      <ul class={styles.sidebarNav}>
        {gnbRootList.map((route) => (
            <li key={route.key} class={styles.navItem}>
              <Link to={route.link} class={styles.navLink}>{route.name}</Link>
            </li>
          ),
        )}
      </ul>

    </aside>
  );
}

export default SideGnb;