import { motion } from "motion/react";

function Experience() {
  return (
    <section
      id="experience"
      className="border-t border-slate-200 bg-slate-50 px-6 py-24 text-slate-900 transition-colors duration-300 dark:border-white/5 dark:bg-slate-950 dark:text-white"
    >
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-14">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-600 dark:text-cyan-400">
            Experience
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            Where I work.
          </h2>
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-3 top-0 hidden h-full w-px bg-slate-200 dark:bg-white/10 md:block" />

          <div className="relative md:pl-12">
            {/* Timeline Dot */}
            <div className="absolute left-0 top-2 hidden h-7 w-7 items-center justify-center rounded-full border border-cyan-400/40 bg-slate-50 md:flex dark:bg-slate-950">
              <div className="h-2.5 w-2.5 rounded-full bg-cyan-500 dark:bg-cyan-400" />
            </div>

            {/* Experience Card */}
            <motion.div
              className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-lg hover:shadow-slate-200/50 dark:border-white/10 dark:bg-white/[0.03] dark:shadow-none"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
            >
              {/* Header */}
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
                <div>
                  <p className="text-sm font-medium text-cyan-600 dark:text-cyan-400">
                    Tata Consultancy Services
                  </p>

                  <h3 className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">
                    Cloud Support Engineer
                  </h3>
                </div>

                <span className="w-fit rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-600 dark:border-white/10 dark:bg-slate-900 dark:text-slate-400">
                  Present
                </span>
              </div>

              {/* Description */}
              <p className="mt-6 max-w-3xl leading-7 text-slate-600 dark:text-slate-400">
                Working in a cloud support role, gaining hands-on experience
                with cloud technologies, troubleshooting, application support,
                and real-world production systems.
              </p>

              {/* Focus Areas */}
              <div className="mt-8">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                  Focus Areas
                </h4>

                <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500 dark:bg-cyan-400" />

                    <span>Cloud infrastructure and application support</span>
                  </li>

                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500 dark:bg-cyan-400" />

                    <span>Troubleshooting and resolving technical issues</span>
                  </li>

                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500 dark:bg-cyan-400" />

                    <span>
                      Supporting applications and systems in real-world
                      environments
                    </span>
                  </li>

                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500 dark:bg-cyan-400" />

                    <span>
                      Continuously developing software and cloud engineering
                      skills
                    </span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
