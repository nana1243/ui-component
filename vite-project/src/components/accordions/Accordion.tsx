import styles from './index.module.css';
import accordionItem from './data';
import AccordionItem from './AccordionItem';
import { useState } from 'react';

function Accordions() {
  const [currentId, setCurrentId] = useState<string | null>(accordionItem[0].id);

  return (
    <div className={styles.container}>
      <ul className={styles.items}>
        {accordionItem.map((item) => (
          <AccordionItem
            id={item.id}
            title={item.title}
            description={item.description}
            current={currentId === item.id}
            setCurrentId={setCurrentId}
          />
        ))}
      </ul>
    </div>
  );
}

export default Accordions;