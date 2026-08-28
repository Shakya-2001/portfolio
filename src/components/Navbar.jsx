import { useState } from "react";
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-950/80 backdrop-blur-md border-b border-slate-800 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">

        {/* Top Navigation Bar */}
        <div className="flex items-center justify-between">

          {/* Logo */}
          <a
            href="#hero"
            onClick={handleNavClick}
            className="text-2xl font-bold text-white"
          >
            Akash<span className="text-blue-500">.</span>
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8 text-gray-300 font-medium">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="hover:text-blue-500 transition-colors duration-200"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop Social Icons */}
          <div className="hidden md:flex items-center gap-4">

            <a
              href="https://github.com/Shakya-2001"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-gray-300 hover:text-blue-500 text-xl transition-colors duration-200"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/akash-kumar-117a39202"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-gray-300 hover:text-blue-500 text-xl transition-colors duration-200"
            >
              <FaLinkedin />
            </a>

          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:text-blue-500 text-2xl transition-colors duration-200"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>

        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-5 pb-4 border-t border-slate-800 pt-5">

            <ul className="flex flex-col gap-5 text-gray-300 font-medium">

              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={handleNavClick}
                    className="block hover:text-blue-500 transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                </li>
              ))}

            </ul>

            {/* Mobile Social Icons */}
            <div className="flex items-center gap-5 mt-6 pt-5 border-t border-slate-800">

              <a
                href="https://github.com/Shakya-2001"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="text-gray-300 hover:text-blue-500 text-xl transition-colors duration-200"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com/in/akash-kumar-117a39202"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="text-gray-300 hover:text-blue-500 text-xl transition-colors duration-200"
              >
                <FaLinkedin />
              </a>

            </div>

          </div>
        )}

      </div>
    </nav>
  );
};

export default Navbar;