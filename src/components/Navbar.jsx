import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const navItems = [
  "About",
  "Skills",
  "Experience",
  "Projects",
  "Contact",
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Always show navbar near the top
      if (currentScrollY < 50) {
        setShowNavbar(true);
      } else if (currentScrollY > lastScrollY) {
        // Hide when scrolling down
        setShowNavbar(false);
      } else {
        // Show when scrolling up
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur-xl border-b border-white/10 transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between h-20 px-6">
        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-bold tracking-widest text-cyan-400"
        >
          NRS
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative text-slate-300 transition hover:text-cyan-400 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full"
            >
              {item}
            </a>
          ))}

          <a
            href="#contact"
            className="rounded-full bg-cyan-500 px-5 py-2 font-semibold text-black transition hover:bg-cyan-400"
          >
            Hire Me
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-3xl"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          menuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <nav className="bg-slate-900/95 backdrop-blur-xl border-t border-white/10 flex flex-col">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="px-6 py-4 text-slate-300 transition hover:bg-cyan-500/10 hover:text-cyan-400"
            >
              {item}
            </a>
          ))}

          <div className="p-6">
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="block rounded-full bg-cyan-500 py-3 text-center font-semibold text-black transition hover:bg-cyan-400"
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