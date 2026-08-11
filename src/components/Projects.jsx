import { motion } from "motion/react";
import Icon from "./Icon";

const projects = [
  {
    title: "PennyWise",
    category: "Full-Stack Application",
    description:
      "A personal finance management application designed to help users track expenses, manage income, and understand their financial activity through a simple dashboard.",
    technologies: ["Java", "Spring Boot", "PostgreSQL", "React", "JWT"],
    github: "https://github.com/AmanGour03/PennyWise-Money-Tracker",
    demo: "#",
  },
  {
    title: "FarmSync",
    category: "IoT + AI",
    description:
      "An IoT-enabled agricultural monitoring platform that collects real-time soil and water parameters and provides data visualization, alerts, and intelligent recommendations.",
    technologies: ["Arduino", "ESP8266", "Django", "Python", "IoT", "AI"],
    github: "https://github.com/AmanGour03/FarmSync",
  },
  {
    title: "TaskMangement-Backend-Application",
    category: "Java-Backend Application",
    description: "TaskMangement Backend development with Spring Boot",
    technologies: ["Java", "Spring Boot", "PostgreSQL", "JWT"],
    github: "https://github.com/AmanGour03/TaskMangement-Backend-Application",
    demo: "#",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="border-t border-slate-200 bg-slate-50 px-6 py-24 text-slate-900 transition-colors duration-300 dark:border-white/5 dark:bg-slate-900 dark:text-white"
    >
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-600 dark:text-cyan-400">
            Projects
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            Things I've built.
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-slate-600 dark:text-slate-400">
            A selection of applications and technical projects that demonstrate
            my experience across backend development, full-stack engineering,
            IoT, and AI.
          </p>
        </motion.div>

        {/* Project Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-xl hover:shadow-slate-200/50 dark:border-white/10 dark:bg-white/[0.03] dark:shadow-none dark:hover:bg-white/[0.05]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
            >
              {/* Project Visual */}
              <div className="relative flex h-44 items-center justify-center overflow-hidden rounded-xl border border-slate-200 bg-slate-100 dark:border-white/10 dark:bg-slate-900">
                {/* Background decoration */}
                <div className="absolute h-32 w-32 rounded-full bg-cyan-500/10 blur-3xl transition duration-500 group-hover:bg-cyan-500/20" />

                <span className="relative text-3xl font-bold tracking-tight text-slate-700 transition duration-300 group-hover:text-cyan-600 dark:text-slate-300 dark:group-hover:text-cyan-400">
                  {project.title}
                </span>
              </div>

              {/* Category */}
              <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
                {project.category}
              </p>

              {/* Title */}
              <h3 className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">
                {project.title}
              </h3>

              {/* Description */}
              <p className="mt-4 flex-1 text-sm leading-7 text-slate-600 dark:text-slate-400">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-xs font-medium text-slate-600 transition-colors dark:border-white/10 dark:bg-slate-900 dark:text-slate-400"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="mt-7 flex items-center gap-3 border-t border-slate-200 pt-5 dark:border-white/10">
                {/* GitHub */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.title} GitHub repository`}
                  title="GitHub Repository"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-400 hover:text-cyan-600 dark:border-white/10 dark:text-slate-300 dark:hover:text-cyan-400"
                >
                  <Icon name="github.svg" className="h-5 w-5" />
                </a>

                {/* Live Demo */}
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.title} live demo`}
                  title="Live Demo"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-400 hover:text-cyan-600 dark:border-white/10 dark:text-slate-300 dark:hover:text-cyan-400"
                >
                  <Icon name="external-link.svg" className="h-5 w-5" />
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
