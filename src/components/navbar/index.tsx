'use client';

import { ThemeSwitcher } from '@/components/theme-switcher';
import { useHash } from '@/contexts/hash.context';
import { Link } from '@nextui-org/link';
import {
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Navbar as NextUINavbar,
} from '@nextui-org/navbar';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import Background from '../background';
import { Logo } from './logo';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const { hash } = useHash();
  const pathnameWithHash = pathname + hash;

  const menuItems = ['Home', 'About', 'Skills', 'Projects', 'Blogs', 'Contact'];

  return (
    <NextUINavbar
      maxWidth="full"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="fixed backdrop-blur-sm data-[menu-open=true]:backdrop-blur-md"
    >
      <Background />
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link
            href="/#home"
            // onClick={() => setHash('')}
            className="flex items-center gap-2"
            color="foreground"
          >
            <Logo />
            <p className="font-bold text-inherit">SAIF</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem key={`${item}-${index}`}>
            <Link
              color={
                pathnameWithHash === `/#${item.toLowerCase()}`
                  ? 'primary'
                  : 'foreground'
              }
              href={`/#${item.toLowerCase()}`}
              underline={
                pathnameWithHash === `/#${item.toLowerCase()}`
                  ? 'always'
                  : 'active'
              }
              //   onClick={() => setHash(`#${item.toLowerCase()}`)}
            >
              {item}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
        {/* <NavbarItem>
          <Button as={Link} color="primary" href="#">
            Resume
          </Button>
        </NavbarItem> */}
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              size="lg"
              color={
                pathnameWithHash === `/#${item.toLowerCase()}`
                  ? 'primary'
                  : 'foreground'
              }
              href={`/#${item.toLowerCase()}`}
              underline={
                pathnameWithHash === `/#${item.toLowerCase()}`
                  ? 'always'
                  : 'active'
              }
              onClick={() => {
                setIsMenuOpen(false);
                // setHash(`#${item.toLowerCase()}`);
              }}
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </NextUINavbar>
  );
}
