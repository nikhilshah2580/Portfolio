const experiences = [
  {
    role: "Frontend Developer",
    company: "Sipalya Infotech",
    period: "Jan 2025 - Present",
    description:
      "Developing high-performance web applications using React and TypeScript. Implemented virtualization, optimized lifecycle handling, and improved rendering performance.",
    stack: ["React", "TypeScript", "State Management"],
  },
  {
    role: "Frontend Developer",
    company: "Aarawan Tech",
    period: "Feb 2024 - Dec 2024",
    description:
      "Built responsive mobile-first interfaces using React.js and Tailwind CSS while creating reusable component systems and improved rendering patterns.",
    stack: ["React", "Tailwind CSS", "UI Components"],
  },
  {
    role: "Frontend Developer",
    company: "KSW Techzone",
    period: "Feb 2023 - Dec 2023",
    description:
      "Developed dynamic dashboards and integrated external REST APIs for data-driven applications.",
    stack: ["React", "REST APIs", "JavaScript"],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="px-6 py-20 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
          Experience
        </p>
        <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
          Where I have built meaningful products.
        </h2>

        <div className="mt-10 space-y-6">
          {experiences.map((item) => (
            <div
              key={item.company}
              className="rounded-3xl border border-white/10 bg-slate-900/70 p-8 shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40"
            >
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-2xl font-semibold text-white">{item.role}</h3>
                  <p className="mt-1 text-cyan-400">{item.company}</p>
                </div>
                <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-sm text-cyan-300">
                  {item.period}
                </span>
              </div>
              <p className="mt-5 max-w-3xl text-slate-300">{item.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {item.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-slate-800 px-3 py-1 text-sm text-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
