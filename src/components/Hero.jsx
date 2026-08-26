import { useEffect, useState } from "react";
import { FiArrowRight, FiCheckCircle, FiCode, FiZap } from "react-icons/fi";
import { useTheme } from "../context/ThemeContext";
import myImage from "../assets/myimage.jpeg";

const roles = [
  "Fullstack Developer",
  "MERN Stack Developer",
];

function TypewriterRole() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const { isDark } = useTheme();

  useEffect(() => {
    const fullText = roles[roleIndex];

    let timer;

    if (!isDeleting) {
      if (currentText.length < fullText.length) {
        timer = setTimeout(() => {
          setCurrentText(fullText.slice(0, currentText.length + 1));
        }, 90);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 1800);
      }
    } else {
      if (currentText.length > 0) {
        timer = setTimeout(() => {
          setCurrentText(fullText.slice(0, currentText.length - 1));
        }, 45);
      } else {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex]);

  return (
    <span className="inline-flex items-center min-h-10">
      <span
        className={`font-black ${
          isDark
            ? "bg-linear-to-r from-cyan-400 via-fuchsia-400 to-amber-300 bg-clip-text text-transparent"
            : "text-cyan-700"
        }`}
      >
        {currentText}
      </span>
      <span className="inline-block w-0.5 h-6 sm:h-7 bg-cyan-600 dark:bg-cyan-400 animate-pulse ml-1" />
    </span>
  );
}

function Hero() {
  const { isDark } = useTheme();

  return (
    <section
      id="home"
      className="relative overflow-hidden px-6 py-24 sm:py-32 lg:px-8"
    >
      {/* Background Gradients */}
      <div
        className={`absolute inset-0 -z-10 transition-opacity duration-500 ${
          isDark
            ? "bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.16),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(244,114,182,0.16),transparent_28%)]"
            : "bg-[radial-gradient(circle_at_top_left,rgba(6,182,212,0.15),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(236,72,153,0.12),transparent_30%)]"
        }`}
      />

      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-700 dark:text-cyan-300">
            <FiZap className="text-cyan-600 dark:text-cyan-400 animate-pulse" />
            <span>Welcome to my portfolio</span>
          </div>

          <h1 className="animate-pulse text-4xl font-black tracking-tight sm:text-5xl lg:text-7xl">
            <span className="text-cyan-600 dark:text-cyan-300">Nikhil</span>{" "}
            <span className="text-fuchsia-600 dark:text-fuchsia-300">Raj</span>{" "}
            <span className="text-amber-600 dark:text-amber-300">Sah</span>
          </h1>

          {/* Dynamic Typewriter Animation */}
          <div className="mt-6 flex items-center gap-2 text-xl font-bold sm:text-2xl lg:text-3xl">
            <FiCode className="text-cyan-600 dark:text-cyan-400 shrink-0 text-2xl" />
            <TypewriterRole />
          </div>

          <p
            className={`mt-4 max-w-2xl text-lg leading-8 transition-colors ${
              isDark ? "text-slate-300 font-normal" : "text-slate-800 font-semibold"
            }`}
          >
            I build modern, responsive web and mobile experiences with clean UI,
            modern JavaScript, and reliable full-stack solutions.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="flex items-center gap-2 rounded-full bg-cyan-500 px-6 py-3 font-bold text-slate-950 transition duration-300 hover:-translate-y-1 hover:bg-cyan-400 hover:shadow-lg hover:shadow-cyan-500/25"
            >
              <span>Explore My Work</span>
              <FiArrowRight className="text-lg" />
            </a>

            <a
              href="#contact"
              className={`rounded-full border px-6 py-3 font-bold transition duration-300 hover:-translate-y-1 ${
                isDark
                  ? "border-slate-700 text-white hover:border-cyan-400 hover:text-cyan-300"
                  : "border-slate-400 bg-white text-slate-900 shadow-sm hover:border-cyan-600 hover:text-cyan-700"
              }`}
            >
              Get In Touch
            </a>
          </div>
        </div>

        <div className="space-y-8">
          <div
            className={`mx-auto aspect-square w-full max-w-md overflow-hidden rounded-full border-4 shadow-2xl transition duration-300 hover:-translate-y-1 ${
              isDark
                ? "border-slate-800 bg-slate-900/70 shadow-cyan-500/5"
                : "border-slate-300 bg-white shadow-slate-300/60"
            }`}
          >
            <img
              src={myImage}
              alt="Nikhil Raj Sah"
              loading="eager"
              className="h-full w-full object-cover object-[center_65%] animate-[hero-photo-enter_900ms_ease-out_both]"
            />
          </div>

          <div
            className={`rounded-3xl border p-8 shadow-2xl backdrop-blur transition duration-300 hover:-translate-y-1 ${
              isDark
                ? "border-slate-800 bg-slate-900/70 shadow-cyan-500/5 text-slate-100"
                : "border-slate-300 bg-white shadow-slate-300/60 text-slate-950"
            }`}
          >
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-cyan-700 dark:text-cyan-400">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
              <span>Currently available for work</span>
            </div>

            <h2
              className={`mt-4 text-2xl font-black transition-colors ${
                isDark ? "text-white" : "text-slate-950"
              }`}
            >
              I create fast, polished products for ambitious teams.
            </h2>

            <ul
              className={`mt-6 space-y-3 transition-colors ${
                isDark ? "text-slate-300" : "text-slate-800 font-semibold"
              }`}
            >
              <li className="flex items-start gap-2.5">
                <FiCheckCircle className="mt-1 text-cyan-600 dark:text-cyan-400 shrink-0" />
                <span>React, Next.js, TypeScript, and Tailwind workflows.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <FiCheckCircle className="mt-1 text-cyan-600 dark:text-cyan-400 shrink-0" />
                <span>Responsive UI and optimized mobile performance.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <FiCheckCircle className="mt-1 text-cyan-600 dark:text-cyan-400 shrink-0" />
                <span>Secure authentication and API-driven applications.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
