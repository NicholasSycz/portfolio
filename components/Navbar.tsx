import React, { useState, useEffect } from "react";
import { PERSONAL_INFO } from "../constants";

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDarkTheme, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  const nameParts = PERSONAL_INFO.name.split(" ");
  const firstName = nameParts[0] || PERSONAL_INFO.name;
  const lastInitial =
    nameParts.length > 1 ? nameParts[nameParts.length - 1].charAt(0) : "";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass-panel py-3 px-6 shadow-xl"
          : "bg-transparent py-6 px-10"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-amber-600 rounded-lg flex items-center justify-center font-bold text-white shadow-lg">
            {firstName.charAt(0)}
          </div>
          <span className="font-bold text-xl tracking-tight hidden sm:block text-slate-900 dark:text-white">
            {firstName}
            {lastInitial && ` ${lastInitial}`}
            <span className="text-emerald-400">.</span>
          </span>
        </div>

        <div className="flex items-center gap-4 sm:gap-8">
          <div className="hidden md:flex gap-4 sm:gap-8 text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-300">
            <a
              href="#about"
              onClick={scrollTo("about")}
              className="hover:text-emerald-400 transition-colors"
            >
              About
            </a>
            <a
              href="#skills"
              onClick={scrollTo("skills")}
              className="hover:text-emerald-400 transition-colors"
            >
              Skills
            </a>
            <a
              href="#experience"
              onClick={scrollTo("experience")}
              className="hover:text-emerald-400 transition-colors"
            >
              Experience
            </a>
            <a
              href="#projects"
              onClick={scrollTo("projects")}
              className="hover:text-emerald-400 transition-colors"
            >
              Projects
            </a>
            {/* <a
              href="#contact"
              onClick={scrollTo("contact")}
              className="hover:text-emerald-400 transition-colors"
            >
              Contact
            </a> */}
          </div>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-xl glass-panel hover:bg-slate-200 dark:hover:bg-slate-800 transition-all text-slate-600 dark:text-amber-400"
            aria-label="Toggle theme"
          >
            {isDarkTheme ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
