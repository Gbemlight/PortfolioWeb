import React, { useState, useEffect } from "react";
import logo from "/assets/weblogo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-black shadow-md sticky top-0 z-50">
      <a href="#home" className="flex items-center">
        <img
          src={logo}
          alt="Logo"
          className="w-[48px] h-[48px] object-contain rounded-full border-4 border-amber-400 bg-white p-1 shadow-lg"
        />
        <span className="ml-3 text-2xl font-bold text-amber-400 drop-shadow"></span>
      </a>

      <button
        className="md:hidden text-amber-400 focus:outline-none"
        onClick={() => setMenuOpen((s) => !s)}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
      >
        <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
          <path
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>

      <ul
        aria-hidden={!menuOpen}
        className={`
          flex flex-col md:flex-row md:flex gap-6 absolute md:static top-16 left-0 w-full
          bg-black md:bg-transparent z-40
          transform origin-top transition-all duration-500 ease-in-out
          ${
            menuOpen
              ? "scale-100 rotate-0 opacity-100 pointer-events-auto"
              : "scale-0 -rotate-90 opacity-0 pointer-events-none"
          }
          md:scale-100 md:rotate-0 md:opacity-100 md:pointer-events-auto md:transition-none
          md:items-center md:w-auto
          items-center justify-center
        `}
      >
        <li>
          <a
            href="#about"
            className="block px-6 py-2 hover:text-amber-400 text-white"
            onClick={() => setMenuOpen(false)}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#skills"
            className="block px-6 py-2 hover:text-amber-400 text-white"
            onClick={() => setMenuOpen(false)}
          >
            Skills
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className="block px-6 py-2 hover:text-amber-400 text-white"
            onClick={() => setMenuOpen(false)}
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#experience"
            className="block px-6 py-2 hover:text-amber-400 text-white"
            onClick={() => setMenuOpen(false)}
          >
            Experience
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="block px-6 py-2 hover:text-amber-400 text-white"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
