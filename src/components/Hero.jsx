import { motion } from "motion/react";

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-20"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="absolute right-0 top-1/4 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-2">

        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Hello, I'm
          </p>

          <h1 className="text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
            Aman Gour
          </h1>

          <h2 className="mt-4 text-2xl font-semibold text-slate-300 sm:text-3xl">
            Java & Full-Stack Developer
          </h2>

          <p className="mt-6 max-w-xl text-base leading-7 text-slate-400 sm:text-lg">
            I build scalable backend systems and modern web applications
            using Java, Spring Boot, React, and modern development
            technologies.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-lg bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              View My Work
            </a>

            <a
              href="#contact"
              className="rounded-lg border border-slate-700 px-6 py-3 font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-400"
            >
              Contact Me
            </a>
          </div>

          {/* Social links */}
          <div className="mt-8 flex gap-5">
            <a
              href="#"
              className="text-sm text-slate-400 transition hover:text-cyan-400"
            >
              GitHub ↗
            </a>

            <a
              href="#"
              className="text-sm text-slate-400 transition hover:text-cyan-400"
            >
              LinkedIn ↗
            </a>
          </div>
        </motion.div>

        {/* Right visual */}
        <motion.div
          className="hidden justify-center md:flex"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative flex h-80 w-80 items-center justify-center rounded-3xl border border-white/10 bg-white/[0.03] shadow-2xl backdrop-blur-sm">

            {/* Decorative rings */}
            <div className="absolute h-64 w-64 rounded-full border border-cyan-400/20" />

            <div className="absolute h-48 w-48 rounded-full border border-cyan-400/20" />

            {/* Initial */}
            <div className="flex h-28 w-28 items-center justify-center rounded-2xl bg-cyan-400 text-5xl font-bold text-slate-950 shadow-lg shadow-cyan-400/20">
              AG
            </div>

            {/* Floating labels */}
            <span className="absolute left-4 top-10 rounded-full border border-white/10 bg-slate-900 px-3 py-1 text-xs text-slate-300">
              Java
            </span>

            <span className="absolute bottom-10 right-4 rounded-full border border-white/10 bg-slate-900 px-3 py-1 text-xs text-slate-300">
              React
            </span>

            <span className="absolute right-0 top-20 rounded-full border border-white/10 bg-slate-900 px-3 py-1 text-xs text-slate-300">
              Spring Boot
            </span>

            <span className="absolute bottom-20 left-0 rounded-full border border-white/10 bg-slate-900 px-3 py-1 text-xs text-slate-300">
              SQL
            </span>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;