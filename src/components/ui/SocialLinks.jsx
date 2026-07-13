import {
  Github,
  Linkedin,
  Mail,
} from "lucide-react";

import { socialLinks } from "../../constants/site";

const icons = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
};

export default function SocialLinks() {
  return (
    <div className="flex gap-4">
      {socialLinks.map((social) => {
        const Icon = icons[social.icon];

        return (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              border
              border-slate-200
              bg-white
              text-slate-600
              shadow-sm
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-blue-500
              hover:bg-blue-50
              hover:text-blue-600
              hover:shadow-md
            "
          >
            <Icon size={18} />
          </a>
        );
      })}
    </div>
  );
}