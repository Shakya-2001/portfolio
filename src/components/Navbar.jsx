import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Experience", id: "experience" },
    { name: "Education", id: "education" },
    { name: "Contact", id: "contact" },
  ];

  const handleNavigation = (id) => {
    setIsOpen(false);

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50">

      {/* Main Navbar */}
      <div className="bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/80">

        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* Logo */}
          <button
            onClick={() => handleNavigation("home")}
            className="group flex items-center"
          >
            <span className="text-2xl font-bold text-white">
              Akash
              <span className="text-blue-500 group-hover:text-cyan-400 transition">
                .
              </span>
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">

            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className="
                  relative
                  text-sm
                  text-gray-400
                  hover:text-white
                  transition
                  group
                "
              >
                {item.name}

                <span
                  className="
                    absolute
                    -bottom-2
                    left-0
                    w-0
                    h-px
                    bg-blue-500
                    group-hover:w-full
                    transition-all
                    duration-300
                  "
                />
              </button>
            ))}

          </div>

          {/* Desktop Socials */}
          <div className="hidden md:flex items-center gap-4">

            <a
              href="https://github.com/Shakya-2001"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="
                w-9 h-9
                rounded-lg
                border border-slate-800
                flex items-center justify-center
                text-gray-400
                hover:text-white
                hover:border-blue-500/50
                hover:bg-blue-500/10
                transition
              "
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/akash-kumar-117a39202"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="
                w-9 h-9
                rounded-lg
                border border-slate-800
                flex items-center justify-center
                text-gray-400
                hover:text-white
                hover:border-blue-500/50
                hover:bg-blue-500/10
                transition
              "
            >
              <FaLinkedin />
            </a>

          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="
              lg:hidden
              w-10 h-10
              rounded-lg
              border border-slate-800
              flex items-center justify-center
              text-gray-300
              hover:text-white
              hover:border-blue-500/50
              transition
            "
            aria-label="Toggle navigation"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>

        </div>

      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="
              lg:hidden
              bg-slate-950/95
              backdrop-blur-xl
              border-b
              border-slate-800
              overflow-hidden
            "
          >

            <div className="px-6 py-5 space-y-2">

              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: index * 0.05,
                  }}
                  onClick={() => handleNavigation(item.id)}
                  className="
                    w-full
                    text-left
                    px-4
                    py-3
                    rounded-xl
                    text-gray-300
                    hover:text-white
                    hover:bg-slate-900
                    transition
                  "
                >
                  <span className="text-blue-500 mr-3 font-mono text-xs">
                    0{index + 1}
                  </span>

                  {item.name}
                </motion.button>
              ))}

              {/* Mobile Socials */}
              <div className="flex gap-3 pt-4 mt-3 border-t border-slate-800">

                <a
                  href="https://github.com/Shakya-2001"
                  target="_blank"
                  rel="noreferrer"
                  className="
                    flex-1
                    flex
                    items-center
                    justify-center
                    gap-2
                    py-3
                    rounded-xl
                    bg-slate-900
                    border border-slate-800
                    text-gray-300
                    hover:text-white
                    hover:border-blue-500/50
                    transition
                  "
                >
                  <FaGithub />
                  GitHub
                </a>

                <a
                  href="https://www.linkedin.com/in/akash-kumar-117a39202"
                  target="_blank"
                  rel="noreferrer"
                  className="
                    flex-1
                    flex
                    items-center
                    justify-center
                    gap-2
                    py-3
                    rounded-xl
                    bg-slate-900
                    border border-slate-800
                    text-gray-300
                    hover:text-white
                    hover:border-blue-500/50
                    transition
                  "
                >
                  <FaLinkedin />
                  LinkedIn
                </a>

              </div>

            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </nav>
  );
};

export default Navbar;