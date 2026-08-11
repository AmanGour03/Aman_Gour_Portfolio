import Icon from "./Icon";

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white px-6 py-8 text-slate-900 transition-colors duration-300 dark:border-white/5 dark:bg-slate-950 dark:text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">

        {/* Copyright */}
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} Aman Gour. All rights reserved.
        </p>

        {/* Social Links */}
        <div className="flex items-center gap-3">
  <a
    href="https://github.com/AmanGour03"
    target="_blank"
    rel="noreferrer"
    aria-label="GitHub"
    className="opacity-80 transition hover:-translate-y-0.5 hover:opacity-100"
  >
    <img
      src="/icons/github.svg"
      alt=""
      className="h-5 w-5"
    />
  </a>

  <a
    href="YOUR_LINKEDIN_URL"
    target="_blank"
    rel="noreferrer"
    aria-label="LinkedIn"
    className="opacity-80 transition hover:-translate-y-0.5 hover:opacity-100"
  >
    <img
      src="/icons/linkedin.svg"
      alt=""
      className="h-5 w-5"
    />
  </a>

  <a
    href="mailto:YOUR_EMAIL"
    aria-label="Email"
    className="opacity-80 transition hover:-translate-y-0.5 hover:opacity-100"
  >
    <img
      src="/icons/mail.svg"
      alt=""
      className="h-5 w-5"
    />
  </a>
</div>

        {/* Built With */}
        <p className="text-sm text-slate-500">
          Built with{" "}
          <span className="text-slate-700 dark:text-slate-300">
            React
          </span>{" "}
          &{" "}
          <span className="text-slate-700 dark:text-slate-300">
            Tailwind CSS
          </span>
        </p>

      </div>
    </footer>
  );
}

export default Footer;