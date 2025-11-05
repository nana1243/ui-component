import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/accordion/')({
  component: AccordionPage,
})

function AccordionPage() {
  return <div>Accordion Component</div>
}
