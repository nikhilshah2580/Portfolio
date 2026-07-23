import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
} from "react-icons/fa6";
import { useTheme } from "../context/ThemeContext";

const socialLinks = [
  { name: "Facebook", url: "https://www.facebook.com/share/1GKtsEUTQF/?mibextid=wwXIfr", icon: FaFacebookF },
  { name: "Instagram", url: "https://www.instagram.com/nikhil__2083?igsh=MWx6aG1haTEyOHUzeA%3D%3D&utm_source=qr", icon: FaInstagram },
  { name: "TikTok", url: "https://www.tiktok.com/@nikhil__8290?_r=1&_t=ZS-97ePtfnHFDA", icon: FaTiktok },
  { name: "GitHub", url: "https://github.com/nikhilshah2580", icon: FaGithub },
];

const Footer = () => {
  const { isDark } = useTheme();

  return (
    <footer
      className={`border-t px-6 py-10 text-center text-sm transition-colors duration-300 ${
        isDark
          ? "border-slate-800 bg-slate-950 text-slate-400"
          : "border-slate-300 bg-white text-slate-800 font-medium"
      }`}
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">
        <div>
          <p
            className={`font-extrabold transition-colors ${
              isDark ? "text-white" : "text-slate-950"
            }`}
          >
            Copyright 2026{" "}
            <span className="text-cyan-600 dark:text-cyan-300">Nikhil</span>{" "}
            <span className="text-fuchsia-600 dark:text-fuchsia-300">Raj</span>{" "}
            <span className="text-amber-600 dark:text-amber-300">Sah</span>.
          </p>
          <p className="mt-1">Designed and developed by me. All rights reserved.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {socialLinks.map((link) => {
            const Icon = link.icon;

            return (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className={`flex h-10 w-10 items-center justify-center rounded-full border text-lg transition duration-300 hover:-translate-y-1 ${
                  isDark
                    ? "border-slate-800 bg-slate-900 text-slate-200 hover:border-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-300"
                    : "border-slate-300 bg-slate-100 text-slate-900 hover:border-cyan-600 hover:bg-cyan-500/10 hover:text-cyan-700"
                }`}
                aria-label={link.name}
              >
                <Icon aria-hidden="true" />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
