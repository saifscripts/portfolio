import Navbar from '@/components/dashboard/navbar';
import Sidebar from '@/components/dashboard/sidebar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-[100svh] overflow-hidden flex flex-nowrap">
      <Sidebar />
      <div className="h-full flex-1">
        <Navbar />
        <main className="h-[calc(100svh-64px)] overflow-y-auto w-[calc(100svw)] lg:w-[calc(100svw-300px)] overflow-x-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
