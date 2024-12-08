import SidebarItem from '@/components/dashboard/sidebar/SidebarItem';
import SidebarMenu from '@/components/dashboard/sidebar/SidebarMenu';
import { Divider } from '@nextui-org/divider';
import { Fragment } from 'react';
import sidebarLinks from './sidebarLinks';

export default async function Sidebar() {
  return (
    <aside className="hidden lg:block w-[300px] h-full overflow-y-auto border-r border-divider p-4">
      {sidebarLinks.map((menu) => (
        <Fragment key={menu.title}>
          <SidebarMenu title={menu.title}>
            {menu.links.map((link) => (
              <SidebarItem key={link.title} {...link} />
            ))}
          </SidebarMenu>
          <Divider className="my-4" />
        </Fragment>
      ))}
    </aside>
  );
}
