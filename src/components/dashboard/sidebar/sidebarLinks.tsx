import {
  FileCode2Icon,
  HomeIcon,
  LogsIcon,
  MonitorPlayIcon,
  NotebookPenIcon,
  NotebookTextIcon,
  PlusIcon,
  UserPenIcon,
} from 'lucide-react';

export const sidebarLinks = [
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
        title: 'Categories',
        icon: <LogsIcon size={16} />,
        path: '/dashboard/skills/categories',
      },
      {
        title: 'Skills',
        icon: <FileCode2Icon size={16} />,
        path: '/dashboard/skills',
      },
    ],
  },
  {
    title: 'Projects',
    links: [
      {
        title: 'Add Project',
        icon: <PlusIcon size={16} />,
        path: '/dashboard/projects/add-project',
      },
      {
        title: 'Projects',
        icon: <MonitorPlayIcon size={16} />,
        path: '/dashboard/projects',
      },
    ],
  },
  {
    title: 'Blogs',
    links: [
      {
        title: 'Create Blog',
        icon: <NotebookPenIcon size={16} />,
        path: '/dashboard/blogs/create-blog',
      },
      {
        title: 'Blogs',
        icon: <NotebookTextIcon size={16} />,
        path: '/dashboard/blogs',
      },
    ],
  },
];
