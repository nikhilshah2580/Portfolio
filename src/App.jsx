import { useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { ThemeProvider, useTheme } from "./context/ThemeContext";

function MainContent() {
  const mainRef = useRef(null);
  const { isDark } = useTheme();

  useEffect(() => {
    const elements = mainRef.current?.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-8");
          }
        });
      },
      { threshold: 0.15 }
    );

    elements?.forEach((section) => {
      section.classList.add("opacity-0", "translate-y-8", "transition-all", "duration-700", "ease-out");
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`relative min-h-screen overflow-x-hidden transition-colors duration-300 ${
        isDark ? "bg-slate-950 text-slate-100" : "bg-slate-50 text-slate-900"
      }`}
    >
      {/* Background Glow Effect */}
      <div
        className={`pointer-events-none absolute inset-0 -z-10 transition-opacity duration-500 ${
          isDark
            ? "bg-[radial-gradient(circle_at_top,rgba(6,182,212,0.12),transparent_40%)]"
            : "bg-[radial-gradient(circle_at_top,rgba(6,182,212,0.18),transparent_50%)]"
        }`}
      />
      <Navbar />
      <main ref={mainRef}>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <MainContent />
    </ThemeProvider>
  );
}

export default App;
