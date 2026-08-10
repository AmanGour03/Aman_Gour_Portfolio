import { motion } from "motion/react";

function Experience() {
  return (
    <section
      id="experience"
      className="border-t border-white/5 px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <div className="mb-14">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Experience
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Where I work.
          </h2>
        </div>

        {/* Experience card */}
        <div className="relative">

          {/* Timeline line */}
          <div className="absolute left-3 top-0 hidden h-full w-px bg-white/10 md:block" />

          <div className="relative md:pl-12">

            {/* Timeline dot */}
            <div className="absolute left-0 top-2 hidden h-7 w-7 items-center justify-center rounded-full border border-cyan-400/40 bg-slate-950 md:flex">
              <div className="h-2.5 w-2.5 rounded-full bg-cyan-400" />
            </div>

            {/* Experience card */}
            <motion.div
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:border-cyan-400/30"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
            >

              {/* Header */}
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">

                <div>
                  <p className="text-sm font-medium text-cyan-400">
                    Tata Consultancy Services
                  </p>

                  <h3 className="mt-2 text-2xl font-bold text-white">
                    Cloud Support Engineer
                  </h3>
                </div>

                <span className="w-fit rounded-full border border-white/10 bg-slate-900 px-4 py-2 text-sm text-slate-400">
                  Present
                </span>
              </div>

              {/* Description */}
              <p className="mt-6 max-w-3xl leading-7 text-slate-400">
                Working in a cloud support role, gaining hands-on experience
                with cloud technologies, troubleshooting, application support,
                and real-world production systems.
              </p>

              {/* Responsibilities */}
              <div className="mt-8">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
                  Focus Areas
                </h4>

                <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-400">

                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                    Cloud infrastructure and application support
                  </li>

                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                    Troubleshooting and resolving technical issues
                  </li>

                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                    Supporting applications and systems in real-world environments
                  </li>

                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                    Continuously developing software and cloud engineering skills
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