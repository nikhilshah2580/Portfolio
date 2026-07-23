import { FiBriefcase, FiCalendar } from "react-icons/fi";
import { useTheme } from "../context/ThemeContext";

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
  const { isDark } = useTheme();

  return (
    <section id="experience" className="px-6 py-20 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-bold uppercase tracking-[0.35em] text-cyan-700 dark:text-cyan-400">
          Experience
        </p>
        <h2
          className={`mt-4 text-3xl font-black sm:text-4xl transition-colors ${
            isDark ? "text-white" : "text-slate-950"
          }`}
        >
          Where I have built meaningful products.
        </h2>

        <div className="mt-10 space-y-6">
          {experiences.map((item) => (
            <div
              key={item.company}
              className={`rounded-3xl border p-8 shadow-lg transition duration-300 hover:-translate-y-1 ${
                isDark
                  ? "border-slate-800 bg-slate-900/70 shadow-black/20 hover:border-cyan-400/40"
                  : "border-slate-300 bg-white shadow-slate-200/80 hover:border-cyan-600/40"
              }`}
            >
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <FiBriefcase className="text-cyan-700 dark:text-cyan-400 text-xl" />
                    <h3
                      className={`text-2xl font-bold transition-colors ${
                        isDark ? "text-white" : "text-slate-950"
                      }`}
                    >
                      {item.role}
                    </h3>
                  </div>
                  <p className="mt-1 font-bold text-cyan-700 dark:text-cyan-400">
                    {item.company}
                  </p>
                </div>

                <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-sm font-bold text-cyan-700 dark:text-cyan-300 self-start md:self-auto">
                  <FiCalendar className="text-cyan-600 dark:text-cyan-400" />
                  {item.period}
                </span>
              </div>

              <p
                className={`mt-5 max-w-3xl leading-relaxed transition-colors ${
                  isDark ? "text-slate-300 font-normal" : "text-slate-800 font-medium"
                }`}
              >
                {item.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {item.stack.map((tech) => (
                  <span
                    key={tech}
                    className={`rounded-full border px-3 py-1 text-sm font-semibold transition-colors ${
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

export default Experience;
