interface AccordionItemProps {
  id: string;
  title: string;
  description: string;
}

function AccordionItem(props: AccordionItemProps) {
  const { id, title, description } = props;
  return (
    <>
      <li key={id}>
        <div>{title}</div>
        <div>{description}</div>
      </li>
    </>
  );
}

export default AccordionItem;