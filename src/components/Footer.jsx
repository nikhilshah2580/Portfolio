import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
} from "react-icons/fa6";

const socialLinks = [
  { name: "Facebook", url: "https://www.facebook.com/share/1GKtsEUTQF/?mibextid=wwXIfr", icon: FaFacebookF },
  { name: "Instagram", url: "https://www.instagram.com/nikhil__2083?igsh=MWx6aG1haTEyOHUzeA%3D%3D&utm_source=qr", icon: FaInstagram },
  { name: "TikTok", url: "https://www.tiktok.com/@nikhil__8290?_r=1&_t=ZS-97ePtfnHFDA", icon: FaTiktok },
  { name: "GitHub", url: "https://github.com/nikhilshah2580", icon: FaGithub },
];

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-slate-950 px-6 py-10 text-center text-sm text-slate-400">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">
        <div>
          <p className="font-semibold text-white">
            Copyright 2026{" "}
            <span className="text-cyan-300">Nikhil</span>{" "}
            <span className="text-fuchsia-300">Raj</span>{" "}
            <span className="text-amber-300">Sah</span>.
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
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-lg text-slate-200 transition duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-300"
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
