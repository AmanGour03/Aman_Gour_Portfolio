function About() {
  return (
    <section id="about" className="border-t border-white/5 px-6 py-24">
      <div className="mx-auto max-w-6xl">

        {/* Section heading */}
        <div className="mb-14">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            About Me
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Building software with purpose.
          </h2>
        </div>

        <div className="grid gap-12 md:grid-cols-2">

          {/* About text */}
          <div>
            <p className="text-lg leading-8 text-slate-300">
              I'm a Computer Science Engineering graduate and a Cloud Support Engineer at TCS, 
              with a strong interest in backend and full-stack development. I enjoy building 
              practical applications, solving real-world problems, and understanding the systems 
              behind the software I develop.
            </p>
            
            <p className="text-lg leading-8 text-slate-300">
              At TCS, I work with cloud technologies and gain hands-on experience in 
              troubleshooting, application support, and real-world production environments. 
              Alongside my professional role, I continue to strengthen my expertise in Java, Spring 
              Boot, React, REST APIs, and modern software development practices.
            </p>

            <p className="mt-6 leading-7 text-slate-400">
                I'm also exploring Artificial Intelligence and Machine Learning, with a long-term goal 
                of building intelligent, scalable, and reliable software solutions.
            </p>

            
          </div>

          {/* Information cards */}
          <div className="grid gap-4 sm:grid-cols-2">

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-cyan-400/30">
              <p className="text-sm text-slate-500">
                Education
              </p>

              <h3 className="mt-2 font-semibold text-white">
                B.Tech — Computer Science
              </h3>

              <p className="mt-2 text-sm text-slate-400">
                Oriental Institute of Science and Technology
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-cyan-400/30">
              <p className="text-sm text-slate-500">
                Primary Focus
              </p>

              <h3 className="mt-2 font-semibold text-white">
                Backend Development
              </h3>

              <p className="mt-2 text-sm text-slate-400">
                Java, Spring Boot, REST APIs
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-cyan-400/30">
              <p className="text-sm text-slate-500">
                Frontend
              </p>

              <h3 className="mt-2 font-semibold text-white">
                React Development
              </h3>

              <p className="mt-2 text-sm text-slate-400">
                React, JavaScript, Tailwind CSS
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-cyan-400/30">
              <p className="text-sm text-slate-500">
                Exploring
              </p>

              <h3 className="mt-2 font-semibold text-white">
                AI & Machine Learning
              </h3>

              <p className="mt-2 text-sm text-slate-400">
                AI fundamentals and intelligent applications
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default About;