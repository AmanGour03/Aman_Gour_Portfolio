import { motion } from "motion/react";

const technologies = [
  {
    name: "Java",
    icon: "/icons/java.svg",
    position: "left-1/2 top-[-10px] -translate-x-1/2",
  },
  {
    name: "React",
    icon: "/icons/react.svg",
    position: "left-[12%] top-[18%]",
  },
  {
    name: "Spring Boot",
    icon: "/icons/springboot.svg",
    position: "right-[12%] top-[18%]",
  },
  {
    name: "JavaScript",
    icon: "/icons/javascript.svg",
    position: "left-[5%] bottom-[20%]",
  },
  {
    name: "PostgreSQL",
    icon: "/icons/postgresql.svg",
    position: "right-[5%] bottom-[20%]",
  },
  {
    name: "Git",
    icon: "/icons/git.svg",
    position: "left-1/2 bottom-[-10px] -translate-x-1/2",
  },
];

function SocialIcon({ href, icon, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 text-slate-700 transition duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-600 dark:border-white/10 dark:text-slate-300 dark:hover:text-cyan-400"
    >
      <span
        aria-hidden="true"
        className="h-5 w-5 bg-current"
        style={{
          maskImage: `url(${icon})`,
          WebkitMaskImage: `url(${icon})`,
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat",
          maskPosition: "center",
          WebkitMaskPosition: "center",
          maskSize: "contain",
          WebkitMaskSize: "contain",
        }}
      />
    </a>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-white px-6 pt-24 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-white"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/4 top-1/4 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl dark:bg-cyan-500/10" />

        <div className="absolute bottom-1/4 right-1/4 h-72 w-72 rounded-full bg-blue-400/10 blur-3xl dark:bg-blue-500/10" />
      </div>

      <div className="mx-auto grid min-h-[calc(100vh-6rem)] w-full max-w-6xl items-center gap-12 md:grid-cols-2">
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-600 dark:text-cyan-400">
            Cloud Support Engineer · Full-Stack Developer
          </p>

          <h1 className="text-5xl font-bold leading-tight tracking-tight text-slate-900 sm:text-6xl dark:text-white">
            Hi, I'm{" "}
            <span className="text-cyan-600 dark:text-cyan-400">Aman Gour</span>.
          </h1>

          <h2 className="mt-5 text-2xl font-semibold text-slate-700 sm:text-3xl dark:text-slate-300">
            I build reliable software and practical solutions.
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600 dark:text-slate-400">
            I'm a Computer Science Engineering graduate working at TCS as a
            Cloud Support Engineer, with a strong interest in backend and
            full-stack development. I enjoy turning ideas into practical
            applications and understanding how software works beyond just
            writing code.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition duration-300 hover:-translate-y-1 hover:bg-cyan-400"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="rounded-lg border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-600 dark:border-white/10 dark:text-slate-300 dark:hover:text-cyan-400"
            >
              Contact Me
            </a>
          </div>

          {/* Social Icons */}
          <div className="mt-8 flex items-center gap-4">
            <a
              href="https://github.com/AmanGour03"
              target="https://github.com/AmanGour03"
              rel="noreferrer"
              aria-label="GitHub"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white transition duration-200 hover:-translate-y-1 hover:border-cyan-400 hover:shadow-lg dark:border-white/10 dark:bg-slate-900"
            >
              <img src="/icons/github.svg" alt="" className="h-6 w-6" />
            </a>

            <a
              href="https://www.linkedin.com/in/aman-gour/"
              target="https://www.linkedin.com/in/aman-gour/"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white transition duration-200 hover:-translate-y-1 hover:border-cyan-400 hover:shadow-lg dark:border-white/10 dark:bg-slate-900"
            >
              <img src="/icons/linkedin.svg" alt="" className="h-6 w-6" />
            </a>

            <a
              href="mailto:compag2022@gmail.com"
              aria-label="Email"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white transition duration-200 hover:-translate-y-1 hover:border-cyan-400 hover:shadow-lg dark:border-white/10 dark:bg-slate-900"
            >
              <img src="/icons/mail.svg" alt="" className="h-6 w-6" />
            </a>
          </div>
        </motion.div>

        {/* RIGHT SIDE — ORBITAL TECHNOLOGY SYSTEM */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.9,
            delay: 0.2,
          }}
          className="relative mx-auto flex h-[500px] w-full max-w-[500px] items-center justify-center"
        >
          {/* Outer glow */}
          <div className="absolute h-[390px] w-[390px] rounded-full bg-cyan-400/5 blur-3xl dark:bg-cyan-500/10" />

          {/* OUTER ORBIT */}
          <motion.div
            className="absolute h-[440px] w-[440px] rounded-full border border-cyan-500/10 dark:border-cyan-400/10"
            animate={{ rotate: 360 }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* MIDDLE ORBIT */}
          <motion.div
            className="absolute h-[350px] w-[350px] rounded-full border border-cyan-500/20 dark:border-cyan-400/20"
            animate={{ rotate: -360 }}
            transition={{
              duration: 28,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* INNER ORBIT */}
          <motion.div
            className="absolute h-[270px] w-[270px] rounded-full border border-cyan-500/30 dark:border-cyan-400/25"
            animate={{ rotate: 360 }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* CENTER PHOTO */}
          <div className="relative z-20 h-64 w-64 overflow-hidden rounded-full border-4 border-cyan-400/40 bg-slate-100 shadow-2xl shadow-cyan-500/10 dark:bg-slate-900">
            <img
              src="/images/profile.png"
              alt="Aman Gour"
              className="h-full w-full object-cover"
            />
          </div>

          {/* TECHNOLOGY ICONS */}
          {technologies.map((technology, index) => (
            <motion.div
              key={technology.name}
              className={`absolute z-30 ${technology.position}`}
              initial={{
                opacity: 0,
                scale: 0.5,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.5,
                delay: 0.7 + index * 0.1,
              }}
            >
              <motion.div
                animate={{
                  y: [0, -7, 0],
                }}
                transition={{
                  duration: 4 + index * 0.3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="group flex h-14 w-14 items-center justify-center rounded-xl border border-slate-200 bg-white/95 shadow-lg backdrop-blur-sm transition duration-300 hover:scale-110 hover:border-cyan-400 dark:border-white/10 dark:bg-slate-900/95"
                title={technology.name}
              >
                <img
                  src={technology.icon}
                  alt={technology.name}
                  className="h-8 w-8 object-contain"
                />
              </motion.div>
            </motion.div>
          ))}

          {/* Small orbital dots */}
          <div className="absolute left-[19%] top-[43%] h-1.5 w-1.5 rounded-full bg-cyan-400/60" />

          <div className="absolute right-[19%] top-[57%] h-1.5 w-1.5 rounded-full bg-cyan-400/60" />

          <div className="absolute bottom-[28%] left-[32%] h-1 w-1 rounded-full bg-cyan-400/50" />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
