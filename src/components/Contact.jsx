import { FiGithub, FiMail, FiMessageSquare } from "react-icons/fi";
import { useTheme } from "../context/ThemeContext";

const Contact = () => {
  const { isDark } = useTheme();

  return (
    <section id="contact" className="px-6 py-20 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div
          className={`relative overflow-hidden rounded-3xl border p-8 text-center shadow-xl sm:p-12 transition-all duration-300 ${
            isDark
              ? "border-cyan-500/20 bg-gradient-to-br from-cyan-950/30 via-slate-900 to-slate-950 shadow-cyan-950/30"
              : "border-cyan-500/40 bg-gradient-to-br from-cyan-50/80 via-white to-slate-50 shadow-cyan-500/15"
          }`}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-cyan-700 dark:text-cyan-400">
            <FiMessageSquare />
            <span>Get In Touch</span>
          </div>

          <div className="mx-auto mt-4 h-0.5 w-20 bg-cyan-500/50" />

          <h2
            className={`mt-6 text-3xl font-black sm:text-4xl transition-colors ${
              isDark ? "text-white" : "text-slate-950"
            }`}
          >
            I’m always interested in new opportunities and collaborations.
          </h2>

          <p
            className={`mx-auto mt-4 max-w-2xl text-lg leading-8 transition-colors ${
              isDark ? "text-slate-300 font-normal" : "text-slate-800 font-semibold"
            }`}
          >
            Whether you have a question or a project proposal, I would love to hear from you.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:shahnikhil98198@gmail.com"
              className="flex items-center gap-2 rounded-full bg-cyan-500 px-6 py-3 font-bold text-slate-950 transition duration-300 hover:-translate-y-1 hover:bg-cyan-400 hover:shadow-lg hover:shadow-cyan-500/25"
            >
              <FiMail className="text-lg" />
              <span>Send me an email</span>
            </a>

            <a
              href="https://github.com/nikhilshah2580"
              target="_blank"
              rel="noreferrer"
              className={`flex items-center gap-2 rounded-full border px-6 py-3 font-bold transition duration-300 hover:-translate-y-1 ${
                isDark
                  ? "border-slate-700 text-white hover:border-cyan-400 hover:text-cyan-300"
                  : "border-slate-400 bg-white text-slate-900 shadow-sm hover:border-cyan-600 hover:text-cyan-700"
              }`}
            >
              <FiGithub className="text-lg" />
              <span>Connect on GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
