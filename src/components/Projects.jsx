const projects = [
  {
    title: "Mobile Repair System",
    description:
      "Appointment booking system for user, and customer roles with a polished experience and secure workflows.",
    stack: ["React.js", "Next.js", "Postgres", "Clerk"],
  },
  {
    title: "ShoesMandu",
    description:
      "A complete ecommerce website with authentication, CRUD operations, and a modern UI powered by eclipse.",
    stack: ["Java", "Tailwind CSS", "Vercel"],
  },

  {
    title: "Momos",
    description:
      "only frontend and work is going on",
    stack: ["react", "Tailwind CSS", "Vercel"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="px-6 py-20 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
          Featured Projects
        </p>
        <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
          Selected work that blends usability with technical depth.
        </h2>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group rounded-3xl border border-white/10 bg-slate-900/70 p-8 shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/40"
            >
              <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
              <p className="mt-4 text-slate-300">{project.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
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

export default Projects;
