import { motion } from "motion/react";
const projects = [
  {
    title: "PennyWise",
    category: "Full-Stack Application",
    description:
      "A personal finance management application designed to help users track expenses, manage income, and understand their financial activity through a simple dashboard.",
    technologies: ["Java", "Spring Boot", "PostgreSQL", "React", "JWT"],
    github: "#",
    demo: "#",
  },

  {
    title: "FarmSync",
    category: "IoT + AI",
    description:
      "An IoT-enabled agricultural monitoring platform that collects real-time soil and water parameters and provides data visualization, alerts, and intelligent recommendations.",
    technologies: ["Arduino", "ESP8266", "Django", "Python", "IoT", "AI"],
    github: "#",
    demo: "#",
  },

  {
    title: "VoiceGuard AI",
    category: "AI / Voice Recognition",
    description:
      "A speaker-aware voice recognition solution designed to improve command attribution in environments where multiple people may be speaking simultaneously.",
    technologies: ["Python", "AI", "Speech Recognition", "Speaker Recognition"],
    github: "#",
    demo: "#",
  },

  {
    title: "JournalApp",
    category: "Backend Application",
    description:
      "A backend application for managing journal entries with a RESTful architecture, MongoDB persistence, and Spring Boot.",
    technologies: ["Java", "Spring Boot", "MongoDB", "REST API"],
    github: "#",
    demo: "#",
  },
];

function Projects() {
  return (
    <section id="projects" className="border-t border-white/5 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-14">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Projects
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Things I've built.
          </h2>

          <p className="mt-4 max-w-2xl text-slate-400">
            A selection of applications and technical projects that demonstrate
            my experience across backend development, full-stack engineering,
            IoT, and AI.
          </p>
        </div>

        {/* Project grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="group flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.05]"
            >
              {/* Project visual */}
              <div className="flex h-44 items-center justify-center rounded-xl border border-white/10 bg-slate-900">
                <span className="text-3xl font-bold text-slate-700 transition group-hover:text-cyan-400/70">
                  {project.title}
                </span>
              </div>

              {/* Category */}
              <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-cyan-400">
                {project.category}
              </p>

              {/* Title */}
              <h3 className="mt-2 text-2xl font-bold text-white">
                {project.title}
              </h3>

              {/* Description */}
              <p className="mt-4 flex-1 text-sm leading-7 text-slate-400">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-md border border-white/10 bg-slate-900 px-2.5 py-1.5 text-xs text-slate-400"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="mt-7 flex items-center gap-5 border-t border-white/10 pt-5">
                <a
                  href={project.github}
                  className="text-sm font-medium text-slate-300 transition hover:text-cyan-400"
                >
                  GitHub ↗
                </a>

                <a
                  href={project.demo}
                  className="text-sm font-medium text-slate-300 transition hover:text-cyan-400"
                >
                  Live Demo ↗
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
