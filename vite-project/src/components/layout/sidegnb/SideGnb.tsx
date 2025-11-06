import { Link } from '@tanstack/react-router';
import { gnbRootList } from '@/constants/routes';

function SideGnb() {

  return (
    <aside>
      <ul>
        {gnbRootList.map((route) => (
            <li key={route.key}>
              <Link to={route.link}>{route.name}</Link>
            </li>
          ),
        )}
      </ul>

    </aside>
  );
}

export default SideGnb;