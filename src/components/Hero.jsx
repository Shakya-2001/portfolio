import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaArrowRight,
  FaDownload,
  FaMapMarkerAlt,
  FaBrain,
  FaCode,
  FaDatabase,
  FaGraduationCap,
} from "react-icons/fa";

import heroData from "../data/heroData";
import profileImage from "../assets/profile.jpeg";

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((currentIndex) => {
        return (currentIndex + 1) % heroData.roles.length;
      });
    }, 2500);

    return () => clearInterval(interval);
  }, []);
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-slate-950 text-white pt-24"
    >
      {/* Background Glow */}
      <div className="absolute top-[-200px] left-[-150px] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px]" />

      <div className="absolute bottom-[-200px] right-[-150px] w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[140px]" />

      {/* Background Grid */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(#60a5fa 1px, transparent 1px), linear-gradient(90deg, #60a5fa 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 min-h-[calc(100vh-6rem)] flex items-center">

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center w-full">

          {/* =====================================================
              LEFT SIDE
          ====================================================== */}

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >

            {/* Small Label */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 text-sm font-medium mb-7"
            >
              <FaBrain />

              <span>AI · MACHINE LEARNING · SOFTWARE</span>
            </motion.div>

            {/* Greeting */}
            <p className="text-blue-400 font-medium text-lg mb-3">
              {heroData.greeting}
            </p>

            {/* Name */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.05]">
              {heroData.name.split(" ")[0]}
              <span className="text-blue-500">
                {" "}{heroData.name.split(" ").slice(1).join(" ")}
              </span>
            </h1>

            {/* Role */}
            <div className="mt-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                Software Engineer
              </h2>

              <div className="flex items-center gap-3 mt-2">
                <div className="h-px w-10 bg-blue-500" />

                <div className="relative h-10 overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={heroData.roles[roleIndex]}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.4 }}
                      className="block text-xl sm:text-2xl md:text-3xl font-semibold text-blue-400 whitespace-nowrap"
                    >
                      → {heroData.roles[roleIndex]}
                    </motion.span>
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="mt-7 text-gray-400 text-base sm:text-lg leading-8 max-w-xl">
              {heroData.description}
            </p>

            {/* Location */}
            <div className="flex items-center gap-2 mt-5 text-gray-400">
              <FaMapMarkerAlt className="text-blue-400" />
              <span>Paris, France</span>
            </div>

            {/* Technology Chips */}
            <div className="flex flex-wrap gap-2 mt-6 max-w-xl">
              <span className="px-3 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-xs sm:text-sm text-gray-300">
                Python
              </span>

              <span className="px-3 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-xs sm:text-sm text-gray-300">
                Machine Learning
              </span>

              <span className="px-3 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-xs sm:text-sm text-gray-300">
                FastAPI
              </span>

              <span className="px-3 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-xs sm:text-sm text-gray-300">
                Docker
              </span>

              <span className="px-3 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-xs sm:text-sm text-gray-300">
                PostgreSQL
              </span>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-8">

              <a
                href="#projects"
                className="group inline-flex justify-center items-center gap-3 px-6 py-3.5 bg-blue-600 hover:bg-blue-500 rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-blue-600/20"
              >
                View Projects

                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="/Akash_Kumar_Resume.pdf"
                download="Akash_Kumar_Resume.pdf"
                className="inline-flex justify-center items-center gap-3 px-6 py-3.5 border border-slate-700 bg-slate-900/50 hover:border-blue-500 hover:bg-slate-800 rounded-xl font-semibold transition-all duration-300"
              >
                Download Resume
                <FaDownload />
              </a>

            </div>

            {/* Bottom Identity Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-10 max-w-xl">

              <div className="border border-slate-800 bg-slate-900/60 rounded-xl p-4">
                <FaBrain className="text-blue-400 mb-3" />

                <p className="text-white font-semibold text-sm">
                  AI / ML
                </p>

                <p className="text-gray-500 text-xs mt-1">
                  Engineering
                </p>
              </div>

              <div className="border border-slate-800 bg-slate-900/60 rounded-xl p-4">
                <FaCode className="text-blue-400 mb-3" />

                <p className="text-white font-semibold text-sm">
                  Software
                </p>

                <p className="text-gray-500 text-xs mt-1">
                  Development
                </p>
              </div>

              <div className="border border-slate-800 bg-slate-900/60 rounded-xl p-4">
                <FaDatabase className="text-blue-400 mb-3" />

                <p className="text-white font-semibold text-sm">
                  Data
                </p>

                <p className="text-gray-500 text-xs mt-1">
                  Driven Systems
                </p>
              </div>

            </div>

          </motion.div>


          {/* =====================================================
              RIGHT SIDE - CREATIVE PHOTO
          ====================================================== */}

          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >

            <div className="relative w-[270px] sm:w-[350px] md:w-[430px] h-[420px] sm:h-[500px] md:h-[530px]">

              {/* Main Glow */}
              <div className="absolute inset-10 bg-blue-600/20 blur-[90px] rounded-full" />

              {/* Decorative Circle */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-4 rounded-full border border-blue-500/20 border-dashed"
              />

              {/* Second Orbit */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{
                  duration: 40,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-[-5px] rounded-full border border-slate-700/40"
              />

              {/* Orbit Dot */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-[-5px]"
              >
                <div className="absolute top-4 left-1/2 w-3 h-3 rounded-full bg-blue-400 shadow-lg shadow-blue-400/50" />
              </motion.div>


              {/* Photo Frame */}
              <div className="absolute inset-7 sm:inset-9 md:inset-10">

                {/* Blue Border */}
                <div className="absolute inset-0 rounded-[45%_45%_42%_42%] border-[3px] border-blue-500/70 rotate-3" />

                {/* Inner Border */}
                <div className="absolute inset-2 rounded-[45%_45%_42%_42%] border border-blue-300/20 -rotate-2" />

                {/* Image */}
                <div className="absolute inset-3 rounded-[45%_45%_42%_42%] overflow-hidden bg-slate-900">

                  <img
                    src={profileImage}
                    alt="Akash Kumar"
                    className="w-full h-full object-cover object-center"
                  />

                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent" />

                </div>

              </div>


              {/* AI Floating Badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-10 right-0 sm:right-2 bg-slate-900/90 backdrop-blur-md border border-slate-700 rounded-2xl px-4 py-3 shadow-xl"
              >
                <div className="flex items-center gap-3">

                  <div className="w-9 h-9 rounded-xl bg-blue-500/10 flex items-center justify-center">
                    <FaBrain className="text-blue-400" />
                  </div>

                  <div>
                    <p className="text-white text-sm font-semibold">
                      AI / ML
                    </p>

                    <p className="text-gray-500 text-xs">
                      Engineering
                    </p>
                  </div>

                </div>
              </motion.div>


              {/* Education Floating Card */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-5 left-[-5px] sm:bottom-8 sm:left-[-25px] bg-slate-900/95 backdrop-blur-md border border-slate-700 rounded-2xl p-4 shadow-2xl w-[200px] sm:w-[220px]"
              >

                <div className="flex items-start gap-3">

                  <div className="w-10 h-10 shrink-0 rounded-xl bg-blue-500/10 flex items-center justify-center">
                    <FaGraduationCap className="text-blue-400 text-lg" />
                  </div>

                  <div>
                    <p className="text-gray-500 text-xs">
                      Currently pursuing
                    </p>

                    <p className="text-white text-sm font-semibold mt-1">
                      MSc Artificial Intelligence Systems
                    </p>

                    <p className="text-blue-400 text-xs mt-1">
                      EPITA · Paris
                    </p>
                  </div>

                </div>

              </motion.div>


              {/* Small Decorative Elements */}
              <div className="absolute top-[45%] left-0 w-2 h-2 rounded-full bg-blue-400" />

              <div className="absolute top-[25%] right-[-10px] w-1.5 h-1.5 rounded-full bg-blue-300" />

              <div className="absolute bottom-[25%] right-5 w-2 h-2 rounded-full bg-indigo-400" />

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Hero;