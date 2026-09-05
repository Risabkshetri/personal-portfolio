import { Linkedin, Github, Twitter } from "lucide-react";
import TopmateIcon from "./TopmateIcon";
import { site } from "../lib/site";

const links = [
  { href: site.socials.linkedin, label: "LinkedIn", Icon: Linkedin },
  { href: site.socials.github, label: "GitHub", Icon: Github },
  { href: site.socials.x, label: "X", Icon: Twitter },
  { href: site.socials.topmate, label: "Topmate", Icon: TopmateIcon },
];

export default function Footer() {
  return (
    <footer className="relative z-20 border-t border-black-100/10 bg-primary">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-16">
        <div>
          <p className="font-serif text-[16px] font-semibold text-black-100">
            Rishab Chhetri
          </p>
          <p className="mt-1 text-[13px] text-secondary">
            {new Date().getFullYear()} ·{" "}
            <a href={`mailto:${site.email}`} className="hover:text-accent">
              {site.email}
            </a>
          </p>
        </div>
        <div className="flex gap-3">
          {links.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="group rounded-full bg-tertiary p-3 transition-colors hover:bg-accent"
            >
              <Icon className="h-4 w-4 text-secondary transition-colors group-hover:text-white" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
