import React from "react";
import { Linkedin, Instagram, Twitter, Heart } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="w-full py-8 bg-primary flex flex-col items-center justify-center gap-6 border-t border-white/10 z-20 relative">
      <div className="flex gap-6">
        <motion.a
          href="https://www.linkedin.com/in/rishab-chhetri/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          className="p-3 bg-tertiary hover:bg-white/10 transition-all duration-300 group shadow-lg hover:shadow-cyan-500/20"
        >
          <Linkedin className="w-6 h-6 text-secondary group-hover:text-[#0077b5] transition-colors" />
        </motion.a>
        <motion.a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, rotate: -5 }}
          whileTap={{ scale: 0.9 }}
          className="p-3 bg-tertiary hover:bg-white/10 transition-all duration-300 group shadow-lg hover:shadow-pink-500/20"
        >
          <Instagram className="w-6 h-6 text-secondary group-hover:text-[#E1306C] transition-colors" />
        </motion.a>
        <motion.a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          className="p-3 bg-tertiary hover:bg-white/10 transition-all duration-300 group shadow-lg hover:shadow-blue-500/20"
        >
          <Twitter className="w-6 h-6 text-secondary group-hover:text-[#1DA1F2] transition-colors" />
        </motion.a>
      </div>
    </footer>
  );
};

export default Footer;
