import styles from './index.module.css';

interface ToolTipItemProps {
  id: string;
  title: string;
  description: string;
}

function ToolTipItem(props: ToolTipItemProps) {
  const { id, title, description } = props;

  return (
    <>
      <div className={styles.triggerContainer}>
        <button className={styles.trigger}>
          {title}
        </button>
        <span className={styles.iconWrapper}>
          <span>!</span>
        <div className={styles.tooltip}>
            {description}
          </div>
      </span>

      </div>
    </>
  );
}


export default ToolTipItem;