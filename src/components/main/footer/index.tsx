import { IProfile } from '@/types';
import {
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  PhoneIcon,
  XIcon,
} from 'lucide-react';

export default function Footer({ profileInfo }: { profileInfo: IProfile }) {
  const { name, github, linkedin, x, phone, email } = profileInfo;

  const socialLinks = [
    {
      icon: <GithubIcon size={24} />,
      url: github,
    },
    {
      icon: <LinkedinIcon size={24} />,
      url: linkedin,
    },
    {
      icon: <XIcon size={24} />,
      url: x,
    },
    {
      icon: <PhoneIcon size={24} />,
      url: `tel:${phone}`,
    },
    {
      icon: <MailIcon size={24} />,
      url: `mailto:${email}`,
    },
  ];
  return (
    <footer className="py-8 px-4 space-y-4">
      <div className="text-center">
        <p className="text-sm">{`© ${new Date().getFullYear()} ${
          name.firstName
        } ${name.middleName} ${name.lastName}. All rights reserved.`}</p>
      </div>
      <div className="flex gap-4 justify-center items-center">
        {socialLinks.map((link, index) => (
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-primary transition-colors duration-300"
            key={index}
          >
            {link.icon}
          </a>
        ))}
      </div>
    </footer>
  );
}
