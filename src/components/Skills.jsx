const sections = [
  {
    title: "Frontend",
    items: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "React Native"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "Fastify", "REST APIs", "JWT Authentication"],
  },
  {
    title: "Database",
    items: ["MySQL", "MongoDB", "Appwrite"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "Postman", "Vercel", "Docker", "Zustand", "Redux"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="px-6 py-20 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
            Skills & Expertise
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
            The toolkit I use to build modern products.
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {sections.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-white/10 bg-slate-900/70 p-6 shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40"
            >
              <h3 className="text-xl font-semibold text-cyan-300">{group.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-slate-800 px-3 py-1 text-sm text-slate-200"
                  >
                    {item}
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

export default Skills;
