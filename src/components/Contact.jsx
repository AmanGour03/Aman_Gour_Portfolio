function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-white/5 px-6 py-24"
    >
      <div className="mx-auto max-w-4xl text-center">

        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
          Contact
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Let's build something together.
        </h2>

        <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-400">
          I'm always interested in discussing software development,
          interesting projects, and opportunities to build meaningful
          technology.
        </p>

        {/* Email */}
        <a
          href="mailto:your-email@example.com"
          className="mt-8 inline-flex rounded-lg bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
        >
          Get In Touch
        </a>

        {/* Social links */}
        <div className="mt-8 flex justify-center gap-6">
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

          <a
            href="mailto:your-email@example.com"
            className="text-sm text-slate-400 transition hover:text-cyan-400"
          >
            Email ↗
          </a>
        </div>

      </div>
    </section>
  );
}

export default Contact;