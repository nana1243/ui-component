import styles from './index.module.css';

interface TabItemProps {
  isCurrent: boolean;
  id: string;
  title: string;
  description: string;
  setCurrentId: (id: (prev) => null | string) => void;
}

function TabItem(props: TabItemProps) {
  const { isCurrent, title, description, setCurrentId, id } = props;

  const handleClick = () => {
    setCurrentId((prev) => (prev === id ? null : id));
  };

  return (
    <>
      <li className={`${styles.item} ${isCurrent ? styles.current : ''}`}>
        <button className={styles.tab} onClick={handleClick}>{title}</button>
        <div className={styles.description}>{description}</div>
      </li>
    </>
  );
}

export default TabItem;