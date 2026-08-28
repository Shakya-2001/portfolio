import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-gray-400">
      <div className="max-w-6xl mx-auto px-6 py-10">

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Name / Description */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-white">
              Akash Kumar
            </h3>

            <p className="text-sm mt-1">
              Software Engineer · AI Engineer
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-5">

            <a
              href="https://github.com/Shakya-2001"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-xl hover:text-blue-400 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/akash-kumar-117a39202"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-xl hover:text-blue-400 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:ak520047@gmail.com"
              aria-label="Email"
              className="text-xl hover:text-blue-400 transition"
            >
              <FaEnvelope />
            </a>

          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 my-8"></div>

        {/* Copyright */}
        <div className="text-center text-sm">
          © {new Date().getFullYear()} Akash Kumar. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;