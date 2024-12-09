import { HomeIcon, ListIcon, PlusIcon, UserPenIcon } from 'lucide-react';

const sidebarLinks = [
  {
    title: 'Menu',
    links: [
      {
        title: 'Dashboard',
        icon: <HomeIcon size={16} />,
        path: '/dashboard',
      },
      {
        title: 'Edit Profile',
        icon: <UserPenIcon size={16} />,
        path: '/dashboard/edit-profile',
      },
    ],
  },
  {
    title: 'Skills',
    links: [
      {
        title: 'Skill Categories',
        icon: <PlusIcon size={16} />,
        path: '/dashboard/skill-categories',
      },
      {
        title: 'Skills',
        icon: <ListIcon size={16} />,
        path: '/dashboard/skills',
      },
    ],
  },
];

export default sidebarLinks;
