import { FiAward, FiLayers, FiLayout, FiMapPin, FiServer } from "react-icons/fi";
import { useTheme } from "../context/ThemeContext";

const highlights = [
  {
    title: "Frontend Expertise",
    icon: FiLayout,
    text: "Building performant, accessible UIs with modern frameworks and thoughtful interactions.",
  },
  {
    title: "Backend Proficiency",
    icon: FiServer,
    text: "Designing scalable APIs, secure auth flows, and robust database-backed services.",
  },
  {
    title: "Full Stack Vision",
    icon: FiLayers,
    text: "Understanding the full product lifecycle to ship polished, maintainable experiences.",
  },
];

const About = () => {
  const { isDark } = useTheme();

  return (
    <section id="about" className="px-6 py-20 sm:py-24 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-cyan-700 dark:text-cyan-400">
            About Me
          </p>
          <h2
            className={`mt-4 text-3xl font-black sm:text-4xl transition-colors ${
              isDark ? "text-white" : "text-slate-950"
            }`}
          >
            Professional Journey
          </h2>

          <div className="mt-4 flex flex-wrap gap-4 text-sm font-bold">
            <span className="flex items-center gap-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-cyan-700 dark:text-cyan-300">
              <FiMapPin /> Kathmandu, Nepal
            </span>
            <span className="flex items-center gap-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-cyan-700 dark:text-cyan-300">
              <FiAward /> BSc (Hons) Computing - Islington College
            </span>
          </div>

          <p
            className={`mt-6 text-lg leading-8 transition-colors ${
              isDark ? "text-slate-300 font-normal" : "text-slate-800 font-medium"
            }`}
          >
            I am a developer based in Kathmandu, Nepal, and I am a BSc (Hons)
            Computing student at Islington College, Kathmandu. I specialize in
            building modern web applications using React, Next.js, and Node.js.
          </p>
          <p
            className={`mt-4 text-lg leading-8 transition-colors ${
              isDark ? "text-slate-300 font-normal" : "text-slate-800 font-medium"
            }`}
          >
            I enjoy creating scalable dashboards, REST API integrations, and
            real-time applications with optimized performance. My work focuses
            on responsive user interfaces, secure authentication, and efficient
            state management.
          </p>
        </div>

        <div className="grid gap-4">
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={`rounded-2xl border p-6 shadow-lg transition duration-300 hover:-translate-y-1 ${
                  isDark
                    ? "border-slate-800 bg-slate-900/70 shadow-black/20 hover:border-cyan-400/40"
                    : "border-slate-300 bg-white shadow-slate-200/80 hover:border-cyan-600/40"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-700 dark:text-cyan-400">
                    <Icon className="text-xl" />
                  </div>
                  <h3
                    className={`text-xl font-bold transition-colors ${
                      isDark ? "text-white" : "text-slate-950"
                    }`}
                  >
                    {item.title}
                  </h3>
                </div>
                <p
                  className={`mt-3 transition-colors ${
                    isDark ? "text-slate-300" : "text-slate-800 font-medium"
                  }`}
                >
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
