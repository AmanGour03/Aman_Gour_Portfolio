import { motion } from "motion/react";

const skillGroups = [
  {
    title: "Languages",
    skills: [
      {
        name: "Java",
        icon: "java.svg",
      },
      {
        name: "JavaScript",
        icon: "javascript.svg",
      },
      {
        name: "Python",
        icon: "python.svg",
      },
      {
        name: "SQL",
        icon: null,
      },
    ],
  },

  {
    title: "Backend & APIs",
    skills: [
      {
        name: "Spring Boot",
        icon: "springboot.svg",
      },
      {
        name: "Spring Security",
        icon: "springboot.svg",
      },
      {
        name: "REST APIs",
        icon: "rest-api.svg",
      },
      {
        name: "JWT",
        icon: "jwt.svg",
      },
    ],
  },

  {
    title: "Frontend",
    skills: [
      {
        name: "React",
        icon: "react.svg",
      },
      {
        name: "HTML5",
        icon: "html5.svg",
      },
      {
        name: "CSS3",
        icon: "css3.svg",
      },
      {
        name: "Tailwind CSS",
        icon: "tailwindcss.svg",
      },
    ],
  },

  {
    title: "Database & Tools",
    skills: [
      {
        name: "MySQL",
        icon: "mysql.svg",
      },
      {
        name: "PostgreSQL",
        icon: "postgresql.svg",
      },
      {
        name: "Git",
        icon: "git.svg",
      },
      {
        name: "GitHub",
        icon: "github.svg",
      },
      {
        name: "Postman",
        icon: "postman.svg",
      },
    ],
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="border-t border-slate-200 bg-white px-6 py-24 text-slate-900 transition-colors duration-300 dark:border-white/5 dark:bg-slate-950 dark:text-white"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section Heading */}
        <div className="mb-14">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-600 dark:text-cyan-400">
            Skills
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            Technologies I work with.
          </h2>

          <p className="mt-4 max-w-2xl text-slate-600 dark:text-slate-400">
            Technologies and tools I use across backend development, frontend
            engineering, databases, APIs, and software development.
          </p>
        </div>

        {/* Skill Groups */}
        <div className="grid gap-6 md:grid-cols-2">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: groupIndex * 0.08,
              }}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 dark:border-white/10 dark:bg-white/[0.03]"
            >
              {/* Group Title */}
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                {group.title}
              </h3>

              {/* Skills */}
              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-3 py-3 transition duration-200 hover:-translate-y-0.5 hover:border-cyan-400/50 dark:border-white/10 dark:bg-slate-900"
                  >
                    {/* Technology Icon */}
                    {skill.icon ? (
                      <img
                        src={`/icons/${skill.icon}`}
                        alt=""
                        className="h-7 w-7 shrink-0 object-contain"
                      />
                    ) : (
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-slate-200 text-xs font-bold text-slate-600 dark:bg-slate-800 dark:text-slate-400">
                        •
                      </span>
                    )}

                    {/* Technology Name */}
                    <span className="text-sm font-medium text-slate-700 transition group-hover:text-cyan-600 dark:text-slate-300 dark:group-hover:text-cyan-400">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
