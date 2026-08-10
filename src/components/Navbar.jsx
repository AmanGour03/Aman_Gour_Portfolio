import { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-slate-950/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <a
          href="#home"
          onClick={closeMenu}
          className="text-xl font-bold tracking-tight text-white"
        >
          Aman<span className="text-cyan-400">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 md:flex">
          <a
            href="#about"
            className="text-sm text-slate-300 transition hover:text-cyan-400"
          >
            About
          </a>

          <a
            href="#experience"
            className="text-sm text-slate-300 transition hover:text-cyan-400"
          >
            Experience
          </a>

          <a
            href="#skills"
            className="text-sm text-slate-300 transition hover:text-cyan-400"
          >
            Skills
          </a>

          <a
            href="#projects"
            className="text-sm text-slate-300 transition hover:text-cyan-400"
          >
            Projects
          </a>

          <a
            href="#education"
            className="text-sm text-slate-300 transition hover:text-cyan-400"
          >
            Education
          </a>

          <a
            href="#contact"
            className="text-sm text-slate-300 transition hover:text-cyan-400"
          >
            Contact
          </a>

          <a
            href="#"
            className="rounded-lg border border-cyan-400 px-4 py-2 text-sm font-medium text-cyan-400 transition hover:bg-cyan-400 hover:text-slate-950"
          >
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-slate-300 transition hover:border-cyan-400 hover:text-cyan-400 md:hidden"
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
        <div className="border-t border-white/10 bg-slate-950 px-6 py-5 md:hidden">
          <div className="flex flex-col gap-1">

            <a
              href="#about"
              onClick={closeMenu}
              className="rounded-lg px-4 py-3 text-sm text-slate-300 transition hover:bg-white/5 hover:text-cyan-400"
            >
              About
            </a>

            <a
              href="#experience"
              onClick={closeMenu}
              className="rounded-lg px-4 py-3 text-sm text-slate-300 transition hover:bg-white/5 hover:text-cyan-400"
            >
              Experience
            </a>

            <a
              href="#skills"
              onClick={closeMenu}
              className="rounded-lg px-4 py-3 text-sm text-slate-300 transition hover:bg-white/5 hover:text-cyan-400"
            >
              Skills
            </a>

            <a
              href="#projects"
              onClick={closeMenu}
              className="rounded-lg px-4 py-3 text-sm text-slate-300 transition hover:bg-white/5 hover:text-cyan-400"
            >
              Projects
            </a>

            <a
              href="#education"
              onClick={closeMenu}
              className="rounded-lg px-4 py-3 text-sm text-slate-300 transition hover:bg-white/5 hover:text-cyan-400"
            >
              Education
            </a>

            <a
              href="#contact"
              onClick={closeMenu}
              className="rounded-lg px-4 py-3 text-sm text-slate-300 transition hover:bg-white/5 hover:text-cyan-400"
            >
              Contact
            </a>

            <a
              href="#"
              onClick={closeMenu}
              className="mt-2 rounded-lg border border-cyan-400 px-4 py-3 text-center text-sm font-medium text-cyan-400 transition hover:bg-cyan-400 hover:text-slate-950"
            >
              Resume
            </a>

          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;