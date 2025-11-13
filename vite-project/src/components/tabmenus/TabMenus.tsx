import { useState } from 'react';
import styles from './index.module.css';
import tabMenuData from './data';
import TabItem from '@/components/tabmenus/TabItem';

function TabMenus(props) {
  const [currentId, setCurrentId] = useState<string | null>(tabMenuData[0].id);


  return (
    <div className={styles.container}>
      <ul className={styles.items}>
        {tabMenuData.map((item) => (
            <TabItem
              id={item.id}
              className={currentId === item.id ? styles.current : ''}
              setCurrentId={setCurrentId}
              description={item.description}
              isCurrent={currentId === item.id}
              title={item.title}
            />
          ),
        )}
      </ul>


    </div>
  );
}

export default TabMenus;