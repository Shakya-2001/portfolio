import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import heroData from "../data/heroData";

const Hero = () => {
  return (
    <section className="min-h-screen bg-slate-950 text-white flex items-center relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute w-96 h-96 bg-blue-600/20 rounded-full blur-3xl -top-20 -left-20"></div>
      <div className="absolute w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl bottom-0 right-0"></div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-blue-400 text-lg mb-3">
            {heroData.greeting}
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            {heroData.name}
          </h1>

          <div className="text-2xl md:text-3xl text-blue-400 font-semibold mt-5 h-12">
            <TypeAnimation
              sequence={[
                ...heroData.roles.flatMap((role) => [role, 2000]),
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>

          <p className="text-gray-400 mt-8 leading-8 max-w-xl">
            {heroData.description}
          </p>

          <div className="flex flex-wrap gap-4 mt-10">

            <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-lg font-semibold">
              <FaDownload />
              Resume
            </button>

            <button className="border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white transition px-6 py-3 rounded-lg font-semibold">
              Projects
            </button>

          </div>

          <div className="flex gap-5 mt-8 text-3xl">

            <a
              href={heroData.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-400 transition"
            >
              <FaGithub />
            </a>

            <a
              href={heroData.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-400 transition"
            >
              <FaLinkedin />
            </a>

          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative">

            <div className="absolute inset-0 rounded-full bg-blue-500 blur-3xl opacity-40 animate-pulse"></div>

            <div className="relative w-80 h-80 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-7xl font-bold shadow-2xl">
              AK
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;