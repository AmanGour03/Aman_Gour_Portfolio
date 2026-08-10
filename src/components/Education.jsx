const education = [
  {
    degree: "B.Tech — Computer Science Engineering",
    institution: "Oriental Institute of Science and Technology",
    location: "Bhopal, Madhya Pradesh",
  },
];

const certifications = [
  {
    name: "OCI AI Foundations Associate",
    issuer: "Oracle",
    year: "2025",
  },
  {
    name: "Core Java",
    issuer: "Coursera",
    year: "",
  },
  {
    name: "MERN Stack",
    issuer: "Certification",
    year: "",
  },
];

function Education() {
  return (
    <section
      id="education"
      className="border-t border-white/5 px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <div className="mb-14">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Education & Certifications
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Learning never stops.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">

          {/* Education */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-400">
                🎓
              </div>

              <h3 className="text-xl font-semibold text-white">
                Education
              </h3>
            </div>

            <div className="border-l border-cyan-400/30 pl-5">
              {education.map((item) => (
                <div key={item.degree}>
                  <p className="text-sm font-medium text-cyan-400">
                    Bachelor's Degree
                  </p>

                  <h4 className="mt-2 text-lg font-semibold text-white">
                    {item.degree}
                  </h4>

                  <p className="mt-2 text-sm text-slate-400">
                    {item.institution}
                  </p>

                  <p className="mt-1 text-sm text-slate-500">
                    {item.location}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-400">
                🏆
              </div>

              <h3 className="text-xl font-semibold text-white">
                Certifications
              </h3>
            </div>

            <div className="space-y-5">
              {certifications.map((certification) => (
                <div
                  key={certification.name}
                  className="border-b border-white/5 pb-5 last:border-0 last:pb-0"
                >
                  <h4 className="font-semibold text-white">
                    {certification.name}
                  </h4>

                  <div className="mt-1 flex items-center justify-between gap-4">
                    <p className="text-sm text-slate-400">
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