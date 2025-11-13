import { createFileRoute } from '@tanstack/react-router';
import TabMenus from '@/components/tabmenus/TabMenus';

export const Route = createFileRoute('/tabmenu')({
  component: TabMenuComponent,
});

function TabMenuComponent() {
  return (
    <>
      <h1>TabMenu</h1>
      <TabMenus />
    </>
  );
}
