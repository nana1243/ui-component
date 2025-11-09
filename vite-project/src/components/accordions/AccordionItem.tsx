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
  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.keyCode === 13) {
      event.preventDefault();
      handleClick();
    }
  };

  return (
    <>
      <li key={id} className={`${styles.item} ${current ? styles.current : ''}`}>
        <div
          className={styles.tab}
          onClick={handleClick}
          onKeyDown={handleKeyDown}
          tabIndex={0}
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