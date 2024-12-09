'use client';

import { Button } from '@nextui-org/button';
import { usePathname, useRouter } from 'next/navigation';

export default function SidebarItem({
  title,
  icon,
  path,
}: {
  title: string;
  icon: React.ReactNode;
  path: string;
}) {
  const router = useRouter();
  const currentPath = usePathname();
  const isActive = currentPath === path;

  return (
    <Button
      onClick={() => router.push(path)}
      variant={isActive ? 'flat' : 'light'}
      color={isActive ? 'primary' : 'default'}
      className="w-full justify-start"
    >
      {icon}
      {title}
    </Button>
  );
}
