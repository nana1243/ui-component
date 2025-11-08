import SideGnb from '@/components/layout/sidegnb/SideGnb';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SideGnb />
      <main>{children}</main>
    </>
  );
}

export default Layout;