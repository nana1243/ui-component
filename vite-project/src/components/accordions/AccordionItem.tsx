import styles from './index.module.css';

interface AccordionItemProps {
  id: string;
  title: string;
  description: string;
  current: boolean;
  setCurrentId: (id: (prev) => null | string) => void;
}

function AccordionItem(props: AccordionItemProps) {
  const { id, title, description, current, setCurrentId } = props;

  const handleClick = () => {
    setCurrentId((prev) => (prev === id ? null : id));
  };

  return (
    <>
      <li key={id} className={`${styles.item} ${current ? styles.current : ''}`}>
        <div
          className={styles.tab}
          onClick={handleClick}
          aria-expanded={current}
          aria-controls={'description-'.concat(id)}
          role='button'
        >
          {title}
        </div>
        <div className={styles.description} id={'description-'.concat(id)}>{description}</div>
      </li>
    </>
  );
}

export default AccordionItem;