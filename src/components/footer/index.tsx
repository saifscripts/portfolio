import {
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  PhoneIcon,
  XIcon,
} from 'lucide-react';

const socialLinks = [
  {
    icon: <GithubIcon size={24} />,
    url: 'https://github.com/saifscripts',
  },
  {
    icon: <LinkedinIcon size={24} />,
    url: 'https://linkedin.com/in/saifscripts',
  },
  {
    icon: <XIcon size={24} />,
    url: 'https://x.com/saifscripts',
  },
  {
    icon: <PhoneIcon size={24} />,
    url: 'tel:+8801766637772',
  },
  {
    icon: <MailIcon size={24} />,
    url: 'mailto:mdsaifullah1302@gmail.com',
  },
];

export default function Footer() {
  return (
    <footer className="py-8 px-4 space-y-4">
      <div className="text-center">
        <p className="text-sm">© 2024 Saifullah. All rights reserved.</p>
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
