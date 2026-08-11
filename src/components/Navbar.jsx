import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import Icon from "./Icon";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-slate-200/80 bg-white/80 backdrop-blur-md transition-colors duration-300 dark:border-white/10 dark:bg-slate-950/80">

      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <a
          href="#home"
          onClick={closeMenu}
          className="text-xl font-bold tracking-tight text-slate-900 dark:text-white"
        >
          Aman<span className="text-cyan-500 dark:text-cyan-400">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 md:flex">

          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition duration-200 hover:text-cyan-600 dark:text-slate-300 dark:hover:text-cyan-400"
            >
              {link.label}
            </a>
          ))}

          {/* Theme Toggle */}
          <ThemeToggle />

          {/* Resume */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg border border-cyan-500 px-4 py-2 text-sm font-medium text-cyan-600 transition duration-300 hover:bg-cyan-500 hover:text-white dark:border-cyan-400 dark:text-cyan-400 dark:hover:bg-cyan-400 dark:hover:text-slate-950"
          >
            <Icon
              name="download.svg"
              className="h-4 w-4"
            />

            Resume
          </a>

        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen((previous) => !previous)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700 transition duration-300 hover:border-cyan-400 hover:text-cyan-500 dark:border-white/10 dark:text-slate-300 dark:hover:border-cyan-400 dark:hover:text-cyan-400 md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </button>

      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="border-t border-slate-200 bg-white px-6 py-5 dark:border-white/10 dark:bg-slate-950 md:hidden">

          <div className="flex flex-col gap-1">

            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="rounded-lg px-4 py-3 text-sm font-medium text-slate-600 transition duration-200 hover:bg-slate-50 hover:text-cyan-600 dark:text-slate-300 dark:hover:bg-white/5 dark:hover:text-cyan-400"
              >
                {link.label}
              </a>
            ))}

            {/* Theme */}
            <div className="mt-3 flex items-center justify-between border-t border-slate-200 pt-4 dark:border-white/10">

              <span className="text-sm text-slate-500 dark:text-slate-400">
                Theme
              </span>

              <ThemeToggle />

            </div>

            {/* Resume */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="mt-3 flex items-center justify-center gap-2 rounded-lg border border-cyan-500 px-4 py-3 text-sm font-medium text-cyan-600 transition duration-300 hover:bg-cyan-500 hover:text-white dark:border-cyan-400 dark:text-cyan-400 dark:hover:bg-cyan-400 dark:hover:text-slate-950"
            >
              <Icon
                name="download.svg"
                className="h-4 w-4"
              />

              Resume
            </a>

          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;