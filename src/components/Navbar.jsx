import { useEffect, useState } from "react";
import { FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "../context/ThemeContext";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { toggleTheme, isDark } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "shadow-md py-1" : "py-0"
      } ${
        isDark
          ? "bg-slate-950/90 border-b border-slate-800 text-slate-100 backdrop-blur-xl shadow-black/30"
          : "bg-white/90 border-b border-slate-200 text-slate-950 backdrop-blur-xl shadow-slate-200/50"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between h-20 px-6">
        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-black tracking-wider flex items-center gap-2 group"
        >
          <span className="text-cyan-600 dark:text-cyan-500 transition group-hover:scale-105">NRS</span>
          <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border border-cyan-500/30">
            Dev
          </span>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`relative text-sm font-semibold transition duration-200 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-cyan-500 after:transition-all after:duration-300 hover:after:w-full ${
                isDark ? "text-slate-200 hover:text-cyan-400" : "text-slate-800 hover:text-cyan-600"
              }`}
            >
              {item.name}
            </a>
          ))}

          {/* Theme Toggle Button Desktop */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className={`p-2.5 rounded-full transition duration-300 border flex items-center justify-center cursor-pointer ${
              isDark
                ? "bg-slate-900 border-slate-700 text-amber-400 hover:bg-slate-800 hover:border-amber-400/50"
                : "bg-slate-100 border-slate-300 text-cyan-700 hover:bg-slate-200 hover:border-cyan-500"
            }`}
            title={`Switch to ${isDark ? "Light" : "Dark"} Mode`}
          >
            {isDark ? (
              <FiSun className="text-xl transition-transform duration-300 hover:rotate-45" />
            ) : (
              <FiMoon className="text-xl transition-transform duration-300 hover:-rotate-12" />
            )}
          </button>

          <a
            href="#contact"
            className="rounded-full bg-cyan-500 px-5 py-2 text-sm font-bold text-slate-950 transition duration-300 hover:bg-cyan-400 hover:shadow-md hover:shadow-cyan-500/25 active:scale-95"
          >
            Hire Me
          </a>
        </nav>

        {/* Mobile Action Controls */}
        <div className="flex items-center gap-3 md:hidden">
          {/* Theme Toggle Button Mobile */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className={`p-2 rounded-full border transition flex items-center justify-center cursor-pointer ${
              isDark
                ? "bg-slate-900 border-slate-700 text-amber-400"
                : "bg-slate-100 border-slate-300 text-cyan-700"
            }`}
          >
            {isDark ? <FiSun className="text-lg" /> : <FiMoon className="text-lg" />}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle mobile menu"
            className={`p-2 text-2xl transition rounded-lg cursor-pointer ${
              isDark ? "text-slate-100 hover:bg-slate-900" : "text-slate-900 hover:bg-slate-100"
            }`}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav
          className={`flex flex-col border-t px-6 py-4 space-y-2 ${
            isDark
              ? "bg-slate-950/95 border-slate-800 text-slate-200"
              : "bg-white/95 border-slate-200 text-slate-900 shadow-lg"
          }`}
        >
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className={`px-4 py-2.5 rounded-xl text-base font-semibold transition ${
                isDark
                  ? "hover:bg-slate-900 hover:text-cyan-400"
                  : "hover:bg-slate-100 hover:text-cyan-600"
              }`}
            >
              {item.name}
            </a>
          ))}

          <div className="pt-2">
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="block rounded-xl bg-cyan-500 py-3 text-center font-bold text-slate-950 transition hover:bg-cyan-400"
            >
              Hire Me
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;