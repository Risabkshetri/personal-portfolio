"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { site } from "../lib/site";

const navLinks = [
  { href: "/deployments", label: "Deployments" },
  { href: "/writing", label: "Writing" },
  { href: "/now", label: "Now" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <nav className="fixed top-0 z-30 w-full border-b border-black-100/5 bg-primary/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4 sm:px-16">
        <Link
          href="/"
          className="font-serif text-[18px] font-semibold text-black-100"
          onClick={() => setOpen(false)}
        >
          Rishab Chhetri
        </Link>

        <ul className="hidden flex-row gap-8 sm:flex">
          {navLinks.map((nav) => (
            <li key={nav.href}>
              <Link
                href={nav.href}
                className={`text-[15px] font-medium transition-colors hover:text-accent ${
                  isActive(nav.href) ? "text-accent" : "text-secondary"
                }`}
              >
                {nav.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          className="text-black-100 sm:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <ul className="flex flex-col gap-1 border-t border-black-100/5 bg-primary px-6 py-3 sm:hidden">
          {navLinks.map((nav) => (
            <li key={nav.href}>
              <Link
                href={nav.href}
                onClick={() => setOpen(false)}
                className={`block py-2 text-[16px] font-medium ${
                  isActive(nav.href) ? "text-accent" : "text-secondary"
                }`}
              >
                {nav.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
