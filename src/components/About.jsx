import { motion } from "motion/react";

function About() {
  return (
    <section
      id="about"
      className="border-t border-slate-200 bg-white px-6 py-24 text-slate-900 transition-colors duration-300 dark:border-white/5 dark:bg-slate-950 dark:text-white"
    >
      <div className="mx-auto max-w-6xl">

        {/* Section Heading */}
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-600 dark:text-cyan-400">
            About Me
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            Building software with purpose.
          </h2>
        </motion.div>

        <div className="grid gap-12 md:grid-cols-2">

          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-300">
              I'm a Computer Science Engineering graduate and a Cloud
              Support Engineer at TCS, with a strong interest in backend
              and full-stack development. I enjoy building practical
              applications, solving real-world problems, and understanding
              the systems behind the software I develop.
            </p>

            <p className="mt-6 leading-7 text-slate-600 dark:text-slate-400">
              At TCS, I gain hands-on experience with cloud technologies,
              troubleshooting, application support, and real-world
              production environments. Alongside my professional role,
              I continue to strengthen my expertise in Java, Spring Boot,
              React, REST APIs, and modern software development practices.
            </p>

            <p className="mt-6 leading-7 text-slate-600 dark:text-slate-400">
              I'm also exploring Artificial Intelligence and Machine
              Learning, with a long-term goal of building intelligent,
              scalable, and reliable software solutions.
            </p>
          </motion.div>

          {/* Information Cards */}
          <motion.div
            className="grid gap-4 sm:grid-cols-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <InfoCard
              label="Current Role"
              title="Cloud Support Engineer"
              description="Tata Consultancy Services"
            />

            <InfoCard
              label="Primary Focus"
              title="Backend Development"
              description="Java, Spring Boot, REST APIs"
            />

            <InfoCard
              label="Frontend"
              title="React Development"
              description="React, JavaScript, Tailwind CSS"
            />

            <InfoCard
              label="Exploring"
              title="AI & Machine Learning"
              description="Intelligent software applications"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}

function InfoCard({ label, title, description }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-slate-200/50 dark:border-white/10 dark:bg-white/[0.03] dark:shadow-none dark:hover:bg-white/[0.05]">

      <p className="text-sm font-medium text-slate-500">
        {label}
      </p>

      <h3 className="mt-2 font-semibold text-slate-900 dark:text-white">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
        {description}
      </p>

    </div>
  );
}

export default About;