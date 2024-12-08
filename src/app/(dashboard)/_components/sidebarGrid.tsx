import {
  CalculatorIcon,
  CrownIcon,
  ListIcon,
  PlusIcon,
  UsersIcon,
} from 'lucide-react';

const sidebarGrid = [
  {
    title: 'My Subscriptions',
    icon: <CrownIcon size={16} />,
    path: '/dashboard/my-subscriptions',
  },
  {
    title: 'Nutrition Calculator',
    icon: <CalculatorIcon size={16} />,
    path: '/dashboard/nutrition-calculator',
  },

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
];

export default sidebarGrid;
