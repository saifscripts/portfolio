import {
  FileCode2Icon,
  MonitorPlayIcon,
  NotebookPenIcon,
  NotebookTextIcon,
  PlusIcon,
  UserPenIcon,
} from 'lucide-react';

export const menuItems = [
  {
    title: 'Edit Profile',
    icon: <UserPenIcon size={16} />,
    path: '/dashboard/edit-profile',
  },
  {
    title: 'Skills',
    icon: <FileCode2Icon size={16} />,
    path: '/dashboard/skills',
  },
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
];
