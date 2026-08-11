import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaArrowRight,
  FaDownload,
} from "react-icons/fa";

import heroData from "../data/heroData";
import profileImage from "../assets/profile.jpeg";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-slate-950 text-white pt-20"
    >
      <div className="max-w-7xl mx-auto px-6 w-full">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Greeting */}
            <p className="text-blue-400 text-lg font-medium mb-4">
              {heroData.greeting}
            </p>

            {/* Name */}
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              {heroData.name}
            </h1>

            {/* Roles */}
            <div className="mt-5 text-2xl md:text-3xl font-semibold">
              <span className="text-gray-300">
                Software Engineer
              </span>

              <span className="text-blue-400"> → AI Engineer</span>
            </div>

            {/* Description */}
            <p className="mt-6 text-gray-400 text-lg leading-8 max-w-2xl">
              {heroData.description}
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-8">

              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg font-semibold transition"
              >
                View Projects
                <FaArrowRight />
              </a>

              <a
                href={heroData.resume}
                className="inline-flex items-center gap-2 px-6 py-3 border border-slate-700 hover:border-blue-500 rounded-lg font-semibold transition"
              >
                Download Resume
                <FaDownload />
              </a>

            </div>

            {/* Social Links */}
            <div className="flex gap-5 mt-8">

              <a
                href={heroData.github}
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-blue-400 text-2xl transition"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>

              <a
                href={heroData.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-blue-400 text-2xl transition"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>

            </div>
          </motion.div>


          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">

              {/* Glow */}
              <div className="absolute -inset-4 bg-blue-500/10 rounded-full blur-3xl" />

              {/* Image Container */}
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-blue-500/30 shadow-2xl">
                <img
                  src={profileImage}
                  alt="Akash Kumar"
                  className="w-full h-full object-cover"
                />
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;