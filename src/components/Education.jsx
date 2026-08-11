import Icon from "./Icon";
const education = [
  {
    degree: "B.Tech — Computer Science Engineering",
    institution: "Oriental Institute of Science and Technology",
    location: "Bhopal, Madhya Pradesh",
  },
  
];

const certifications = [
  {
    name: "GitHub Foundations",
    issuer: "Microsoft",
    year: "2026",
  },
  {
    name: "Azure Fundamentals",
    issuer: "Microsoft",
    year: "2026",
  },
  {
    name: "Core Java",
    issuer: "Coursera",
    year: "2023",
  },
];

function Education() {
  return (
    <section
      id="education"
      className="border-t border-slate-200 bg-white px-6 py-24 text-slate-900 transition-colors duration-300 dark:border-white/5 dark:bg-slate-950 dark:text-white"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section Heading */}
        <div className="mb-14">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-600 dark:text-cyan-400">
            Education & Certifications
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            Learning never stops.
          </h2>

          <p className="mt-4 max-w-2xl text-slate-600 dark:text-slate-400">
            My academic background and certifications reflect my commitment to
            continuously developing my technical skills.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Education */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 dark:border-white/10 dark:bg-white/[0.03]">
            {/* Header */}
            <div className="mb-7 flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-600 dark:text-cyan-400">
                <span className="text-lg">🎓</span>
              </div>

              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                Education
              </h3>
            </div>

            {/* Education Details */}
            <div className="border-l-2 border-cyan-500/30 pl-5">
              {education.map((item) => (
                <div key={item.degree}>
                  <p className="text-sm font-medium text-cyan-600 dark:text-cyan-400">
                    Bachelor's Degree
                  </p>

                  <h4 className="mt-2 text-lg font-semibold leading-7 text-slate-900 dark:text-white">
                    {item.degree}
                  </h4>

                  <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                    {item.institution}
                  </p>

                  <p className="mt-1 text-sm text-slate-500">{item.location}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 dark:border-white/10 dark:bg-white/[0.03]">
            {/* Header */}
            <div className="mb-7 flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-600 dark:text-cyan-400">
                <span className="text-lg">🏆</span>
              </div>

              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                Certifications
              </h3>
            </div>

            {/* Certification List */}
            <div className="space-y-5">
              {certifications.map((certification) => (
                <div
                  key={certification.name}
                  className="border-b border-slate-200 pb-5 last:border-0 last:pb-0 dark:border-white/5"
                >
                  <h4 className="font-semibold text-slate-900 dark:text-white">
                    {certification.name}
                  </h4>

                  <div className="mt-1 flex items-center justify-between gap-4">
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {certification.issuer}
                    </p>

                    {certification.year && (
                      <span className="text-xs text-slate-500">
                        {certification.year}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
