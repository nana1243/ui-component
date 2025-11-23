import { createFileRoute } from '@tanstack/react-router';
import ToolTips from '@/components/tooltip/ToolTips';

export const Route = createFileRoute('/tooltip')({
  component: tooltipComponent,
});

function tooltipComponent() {
  return (
    <>
      <h1>Tooltips</h1>
      <ToolTips/>
    </>
  );
}