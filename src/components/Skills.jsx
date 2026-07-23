import { FiDatabase, FiLayout, FiServer, FiTool } from "react-icons/fi";
import { useTheme } from "../context/ThemeContext";

const sections = [
  {
    title: "Frontend",
    icon: FiLayout,
    items: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "React Native"],
  },
  {
    title: "Backend",
    icon: FiServer,
    items: ["Node.js", "Express.js", "Fastify", "REST APIs", "JWT Authentication"],
  },
  {
    title: "Database",
    icon: FiDatabase,
    items: ["MySQL", "MongoDB", "Appwrite"],
  },
  {
    title: "Tools",
    icon: FiTool,
    items: ["Git", "GitHub", "Postman", "Vercel", "Docker", "Zustand", "Redux"],
  },
];

const Skills = () => {
  const { isDark } = useTheme();

  return (
    <section id="skills" className="px-6 py-20 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-cyan-700 dark:text-cyan-400">
            Skills & Expertise
          </p>
          <h2
            className={`mt-4 text-3xl font-black sm:text-4xl transition-colors ${
              isDark ? "text-white" : "text-slate-950"
            }`}
          >
            The toolkit I use to build modern products.
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {sections.map((group) => {
            const Icon = group.icon;
            return (
              <div
                key={group.title}
                className={`rounded-2xl border p-6 shadow-lg transition duration-300 hover:-translate-y-1 ${
                  isDark
                    ? "border-slate-800 bg-slate-900/70 shadow-black/20 hover:border-cyan-400/40"
                    : "border-slate-300 bg-white shadow-slate-200/80 hover:border-cyan-600/40"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-700 dark:text-cyan-400">
                    <Icon className="text-lg" />
                  </div>
                  <h3 className="text-xl font-extrabold text-cyan-700 dark:text-cyan-300">
                    {group.title}
                  </h3>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className={`rounded-full border px-3 py-1 text-sm font-semibold transition-colors ${
                        isDark
                          ? "border-slate-700 bg-slate-800 text-slate-200"
                          : "border-slate-300 bg-slate-100 text-slate-900 shadow-2xs"
                      }`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
