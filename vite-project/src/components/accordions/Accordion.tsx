import styles from './index.module.css';
import accordionItem from './data';
import AccordionItem from './AccordionItem';

function Accordions() {


  return (
    <div class={styles.container}>
      <ul>
        {accordionItem.map((item) => (
          <AccordionItem id={item.id} title={item.title} description={item.description} />
        ))}
      </ul>

    </div>
  );
}

export default Accordions;