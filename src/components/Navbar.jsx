import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-950/80 backdrop-blur-md border-b border-slate-800 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-white">
          Akash<span className="text-blue-500">.</span>
        </h1>

        {/* Navigation */}
        <ul className="hidden md:flex items-center gap-8 text-gray-300 font-medium">
          <li className="hover:text-blue-500 cursor-pointer transition">About</li>
          <li className="hover:text-blue-500 cursor-pointer transition">Skills</li>
          <li className="hover:text-blue-500 cursor-pointer transition">Projects</li>
          <li className="hover:text-blue-500 cursor-pointer transition">Experience</li>
          <li className="hover:text-blue-500 cursor-pointer transition">Contact</li>
        </ul>

        {/* Social Icons */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="text-gray-300 hover:text-blue-500 text-xl"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="text-gray-300 hover:text-blue-500 text-xl"
          >
            <FaLinkedin />
          </a>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;