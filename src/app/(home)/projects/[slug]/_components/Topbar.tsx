'use client';

import { Button } from '@nextui-org/button';
import { ArrowLeftIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function Topbar() {
  const router = useRouter();

  return (
    <div className="flex gap-2 items-center p-2 border-b border-divider mt-16">
      <Button onClick={() => router.back()} variant="light" isIconOnly>
        <ArrowLeftIcon size={18} />
      </Button>
      <h1 className="font-bold text-2xl">
        Next.js: The Future of Web Development
      </h1>
    </div>
  );
}
