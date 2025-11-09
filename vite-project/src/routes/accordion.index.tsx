import { createFileRoute } from '@tanstack/react-router';
import Accordion from '../components/accordions/Accordion';

export const Route = createFileRoute('/accordion/')({
  component: AccordionPage,
});

function AccordionPage() {
  return (
    <>
      <h1>Accordion Component</h1>
      <Accordion />
    </>
  );
}
