import styles from './index.module.css';
import data from './data';
import ToolTipItem from '@/components/tooltip/ToolTipItem';

function ToolTips() {
  return (
    <>
      <div className={styles.container}>
        {data.map((d) => (
          <ToolTipItem {...d} key={d.id} />
        ))}

      </div>

    </>
  );
}


export default ToolTips;