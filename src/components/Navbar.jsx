import React, { useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={`w-full flex items-center py-5 fixed top-0 z-20 bg-primary/90 backdrop-blur-sm border-b border-black-100/5`}>
      <div className={`w-full flex justify-between items-center max-w-7xl mx-auto ${styles.paddingX}`}>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <p className='text-black-100 text-[18px] font-bold cursor-pointer flex items-center font-serif'>
            Rishab Chhetri
          </p>
        </Link>

        {/* Desktop Menu */}
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.filter(link => link.id !== 'contact').map((nav) => (
            <li
              key={nav.id}
              className={`${active === nav.title ? "text-black-100" : "text-secondary"
                } hover:text-black-100 text-[16px] font-medium cursor-pointer transition-colors`}
              onClick={() => setActive(nav.title)}
            >
              <Link to={nav.id === "works" ? "/work" : `/${nav.id}`}>{nav.title}</Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu */}
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain cursor-pointer invert'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${!toggle ? "hidden" : "flex"
              } p-6 bg-white absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl shadow-card border border-black-100/5`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.filter(link => link.id !== 'contact').map((nav) => (
                <li
                  key={nav.id}
                  className={`font-medium cursor-pointer text-[16px] ${active === nav.title ? "text-black-100" : "text-secondary"
                    }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                    window.scrollTo(0, 0);
                  }}
                >
                  <Link to={nav.id === "works" ? "/work" : `/${nav.id}`}>{nav.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;