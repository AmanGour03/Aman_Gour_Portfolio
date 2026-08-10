import { motion } from "motion/react";
const skillGroups = [
  {
    title: "Languages",
    skills: ["Java", "JavaScript", "Python", "SQL"],
  },
  {
    title: "Backend & APIs",
    skills: ["Spring Boot", "REST APIs", "Spring Security", "JWT"],
  },
  {
    title: "Frontend",
    skills: ["React", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    title: "Cloud, Database & Tools",
    skills: [
      "Cloud Technologies",
      "MongoDB",
      "MySQL",
      "Git",
      "GitHub",
      "Postman",
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="border-t border-white/5 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-14">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Skills
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Technologies I work with.
          </h2>

          <p className="mt-4 max-w-2xl text-slate-400">
            A combination of backend engineering, frontend development,
            databases, cloud technologies, and development tools that I use to
            build and support software applications.
          </p>
        </div>

        {/* Skill groups */}
        <div className="grid gap-5 md:grid-cols-2">
          {skillGroups.map((group) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30"
            >
              <h3 className="text-lg font-semibold text-white">
                {group.title}
              </h3>

              <div className="mt-5 flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-white/10 bg-slate-900 px-3 py-2 text-sm text-slate-300 transition hover:border-cyan-400/40 hover:text-cyan-400"
                  >
                    {skill}
                  </span>
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
