import { FiExternalLink, FiFolder } from "react-icons/fi";
import { useTheme } from "../context/ThemeContext";

const projects = [
  {
    title: "Momo Fullstacks",
    description:
      "A full-stack food ordering experience with a polished interface and practical user flows.",
    stack: ["React", "Tailwind CSS", "Vercel"],
    link: "https://momofullstacks.vercel.app/",
  },
  {
    title: "Restaurant Frontend",
    description:
      "A responsive restaurant frontend focused on clear navigation, menu discovery, and a smooth ordering experience.",
    stack: ["React", "Tailwind CSS", "Vercel"],
    link: "https://restaurant-project-six-gamma.vercel.app/",
  },
  {
    title: "Fixro Tech Mobile Repair",
    description:
      "A focused mobile repair website with service information, appointment booking, and a polished customer experience.",
    stack: ["React.js", "Next.js", "Vercel"],
    link: "https://fixro-tech-mobile-repair-website.vercel.app/",
  },
  {
    title: "FullStack IT Training Management System",
    description:
      "A streamlined platform for managing IT training programs, learners, schedules, and progress.",
    stack: ["React", "Tailwind CSS", "Vercel"],
    link: "https://it-training-management-system.vercel.app/",
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
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open ${project.title}`}
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
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
