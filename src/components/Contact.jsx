import { motion } from "motion/react";
import Icon from "./Icon";

function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-slate-200 bg-slate-50 px-6 py-28 text-slate-900 transition-colors duration-300 dark:border-white/5 dark:bg-slate-900 dark:text-white"
    >
      <motion.div
        className="mx-auto max-w-4xl text-center"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        {/* Label */}
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-600 dark:text-cyan-400">
          Contact
        </p>

        {/* Heading */}
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
          Let's build something together.
        </h2>

        {/* Description */}
        <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-600 dark:text-slate-400">
          I'm always interested in discussing software development, interesting
          projects, and opportunities to build meaningful technology.
        </p>

        {/* Email Button */}
        <a
          href="mailto:YOUR_EMAIL"
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-600 dark:bg-cyan-400 dark:text-slate-950 dark:hover:bg-cyan-300"
        >
          <Icon name="mail.svg" className="h-5 w-5" />
          Get In Touch
        </a>

        {/* Social Links */}
        <div className="mt-8 flex justify-center gap-4">
  <a
    href="https://github.com/AmanGour03"
    target="_blank"
    rel="noreferrer"
    aria-label="GitHub"
    className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 bg-white transition duration-200 hover:-translate-y-1 hover:border-cyan-400 hover:shadow-lg dark:border-white/10 dark:bg-slate-900"
  >
    <img
      src="/icons/github.svg"
      alt=""
      className="h-6 w-6"
    />
  </a>

  <a
    href="YOUR_LINKEDIN_URL"
    target="_blank"
    rel="noreferrer"
    aria-label="LinkedIn"
    className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 bg-white transition duration-200 hover:-translate-y-1 hover:border-cyan-400 hover:shadow-lg dark:border-white/10 dark:bg-slate-900"
  >
    <img
      src="/icons/linkedin.svg"
      alt=""
      className="h-6 w-6"
    />
  </a>

  <a
    href="mailto:YOUR_EMAIL"
    aria-label="Email"
    className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 bg-white transition duration-200 hover:-translate-y-1 hover:border-cyan-400 hover:shadow-lg dark:border-white/10 dark:bg-slate-900"
  >
    <img
      src="/icons/mail.svg"
      alt=""
      className="h-6 w-6"
    />
  </a>
</div>
      </motion.div>
    </section>
  );
}

export default Contact;
