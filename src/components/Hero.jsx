function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden px-6 py-24 sm:py-32 lg:px-8"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.16),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(244,114,182,0.16),transparent_28%)]" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <div className="mb-6 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300">
            👋 Welcome to my portfolio
          </div>
          <h1 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-7xl">
            <span className="text-cyan-300">Nikhil</span>{" "}
            <span className="text-fuchsia-300">Raj</span>{" "}
            <span className="text-amber-300">Sah</span>
          </h1>
          <p className="mt-6 text-xl font-semibold text-cyan-400 sm:text-2xl">
            Frontend / Full Stack Developer
          </p>
          <p className="mt-3 text-xl font-semibold  text-cyan-400 sm:text-2xl">
            Java Developer
          </p>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
            I build modern, responsive web and mobile experiences with clean UI,
            modern JavaScript, and reliable full-stack solutions.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition duration-300 hover:-translate-y-1 hover:bg-cyan-400"
            >
              Explore My Work
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/15 px-6 py-3 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-300"
            >
              Get In Touch
            </a>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/10 p-8 shadow-2xl shadow-cyan-500/10 backdrop-blur transition duration-300 hover:-translate-y-1">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
            Currently available
          </p>
          <h2 className="mt-4 text-2xl font-semibold text-white">
            I create fast, polished products for ambitious teams.
          </h2>
          <ul className="mt-6 space-y-3 text-slate-300">
            <li>• React, Next.js, TypeScript, and Tailwind workflows.</li>
            <li>• Responsive UI and optimized performance.</li>
            <li>• Secure authentication and API-driven applications.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Hero;
