import {
  CalculatorIcon,
  HomeIcon,
  ListIcon,
  PlusIcon,
  UserPenIcon,
  UsersIcon,
} from 'lucide-react';

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
      {
        title: 'Nutrition Calculator',
        icon: <CalculatorIcon size={16} />,
        path: '/dashboard/nutrition-calculator',
      },
    ],
  },
  {
    title: 'Posts',
    links: [
      {
        title: 'Create Post',
        icon: <PlusIcon size={16} />,
        path: '/dashboard/create-post',
      },
      {
        title: 'My Posts',
        icon: <ListIcon size={16} />,
        path: '/dashboard/my-posts',
      },
    ],
  },
  {
    title: 'Users',
    links: [
      {
        title: 'Followers',
        icon: <UsersIcon size={16} />,
        path: '/dashboard/followers',
      },
      {
        title: 'Following',
        icon: <UsersIcon size={16} />,
        path: '/dashboard/following',
      },
    ],
  },
];

export default sidebarLinks;
