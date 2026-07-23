import { FiExternalLink, FiFolder } from "react-icons/fi";
import { useTheme } from "../context/ThemeContext";

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
    description: "only frontend and work is going on",
    stack: ["React", "Tailwind CSS", "Vercel"],
  },
];

const Projects = () => {
  const { isDark } = useTheme();

  return (
    <section id="projects" className="px-6 py-20 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-bold uppercase tracking-[0.35em] text-cyan-700 dark:text-cyan-400">
          Featured Projects
        </p>
        <h2
          className={`mt-4 text-3xl font-black sm:text-4xl transition-colors ${
            isDark ? "text-white" : "text-slate-950"
          }`}
        >
          Selected work that blends usability with technical depth.
        </h2>

        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className={`group flex flex-col justify-between rounded-3xl border p-8 shadow-lg transition duration-300 hover:-translate-y-2 ${
                isDark
                  ? "border-slate-800 bg-slate-900/70 shadow-black/20 hover:border-cyan-400/40"
                  : "border-slate-300 bg-white shadow-slate-200/80 hover:border-cyan-600/40"
              }`}
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 transition group-hover:scale-110">
                    <FiFolder className="text-2xl" />
                  </div>
                  <div className="text-slate-500 dark:text-slate-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition">
                    <FiExternalLink className="text-xl" />
                  </div>
                </div>

                <h3
                  className={`mt-6 text-2xl font-black transition-colors ${
                    isDark ? "text-white" : "text-slate-950"
                  }`}
                >
                  {project.title}
                </h3>

                <p
                  className={`mt-4 leading-relaxed transition-colors ${
                    isDark ? "text-slate-300 font-normal" : "text-slate-800 font-medium"
                  }`}
                >
                  {project.description}
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-2 pt-4 border-t border-cyan-500/10">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className={`rounded-full border px-3 py-1 text-xs font-bold transition-colors ${
                      isDark
                        ? "border-slate-700 bg-slate-800 text-slate-200"
                        : "border-slate-300 bg-slate-100 text-slate-900 shadow-2xs"
                    }`}
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
