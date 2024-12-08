'use client';

import { NavbarMenuItem } from '@nextui-org/navbar';
import Link from 'next/link';
import { Dispatch, SetStateAction } from 'react';
import { menuItems } from './menu-items';

export default function MenuItems({
  setIsMenuOpen,
}: {
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <div className="mx-4 mt-2 flex flex-col gap-4">
      {menuItems.map((item, index) => (
        <NavbarMenuItem key={`${item}-${index}`}>
          <Link
            color="foreground"
            href={item.href}
            onClick={() => setIsMenuOpen(false)}
          >
            {item.label}
          </Link>
        </NavbarMenuItem>
      ))}
    </div>
  );
}
