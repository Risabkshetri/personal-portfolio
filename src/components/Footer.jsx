import React from "react";
import { Linkedin, Github, Twitter } from "lucide-react";


const Footer = () => {
  return (
    <footer className="w-full py-8 bg-primary flex flex-col items-center justify-center gap-6 border-t border-black-100/10 z-20 relative">
      <div className="flex gap-6">
        <a
          href="https://www.linkedin.com/in/rishab-chhetri/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-tertiary hover:bg-black-100 hover:text-white transition-all duration-300 group shadow-sm rounded-full"
        >
          <Linkedin className="w-5 h-5 text-secondary group-hover:text-white transition-colors" />
        </a>
        <a
          href="https://github.com/RisabKshetri"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-tertiary hover:bg-black-100 hover:text-white transition-all duration-300 group shadow-sm rounded-full"
        >
          <Github className="w-5 h-5 text-secondary group-hover:text-white transition-colors" />
        </a>
        <a
          href="https://x.com/risab_kshetri"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-tertiary hover:bg-black-100 hover:text-white transition-all duration-300 group shadow-sm rounded-full"
        >
          <Twitter className="w-5 h-5 text-secondary group-hover:text-white transition-colors" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
