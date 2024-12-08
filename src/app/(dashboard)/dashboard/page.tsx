import Link from 'next/link';
import sidebarGrid from '../../../components/dashboard/sidebar/sidebarGrid';

export default async function DashboardPage() {
  return (
    <div className="flex flex-col items-center py-10">
      <h1 className="text-2xl sm:text-3xl text-center font-semibold">
        Welcome to Dashboard
      </h1>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 mt-10 w-full max-w-3xl px-4">
        {sidebarGrid.flatMap((link) => (
          <Link
            key={link.path}
            href={link.path}
            className="flex flex-col items-center justify-center gap-3 p-6 rounded-lg border border-default-200 hover:bg-default-100 transition-colors aspect-square text-center"
          >
            <div className="p-3 rounded-full bg-default-100">{link.icon}</div>
            <span className="font-medium">{link.title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
