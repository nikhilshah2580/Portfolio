const highlights = [
  {
    title: "Frontend Expertise",
    text: "Building performant, accessible UIs with modern frameworks and thoughtful interactions.",
  },
  {
    title: "Backend Proficiency",
    text: "Designing scalable APIs, secure auth flows, and robust database-backed services.",
  },
  {
    title: "Full Stack Vision",
    text: "Understanding the full product lifecycle to ship polished, maintainable experiences.",
  },
];

const About = () => {
  return (
    <section id="about" className="px-6 py-20 sm:py-24 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
            About Me
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
            Professional Journey
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            I am a developer based in Kathmandu, Nepal, and I am a BSc (Hons)
            Computing student at Islington College, Kathmandu. I specialize in
            building modern web applications using React, Next.js, and Node.js.
          </p>
          <p className="mt-4 text-lg leading-8 text-slate-300">
            I enjoy creating scalable dashboards, REST API integrations, and
            real-time applications with optimized performance. My work focuses
            on responsive user interfaces, secure authentication, and efficient
            state management.
          </p>
        </div>

        <div className="grid gap-4">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-white/10 bg-slate-900/70 p-6 shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40"
            >
              <h3 className="text-xl font-semibold text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-slate-300">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
