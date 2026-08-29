import { motion } from "framer-motion";
import {
  FaBrain,
  FaCode,
  FaRocket,
  FaMapMarkerAlt,
  FaGraduationCap,
  FaBriefcase,
} from "react-icons/fa";

import aboutData from "../data/aboutData";

const iconMap = {
  "Software Engineering": <FaCode />,
  "AI & Machine Learning": <FaBrain />,
  "Production Systems": <FaRocket />,
  "MSc AI Systems": <FaGraduationCap />,
};

const About = () => {
  return (
    <section
      id="about"
      className="relative py-24 bg-slate-950 text-white overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-blue-400 font-mono text-sm mb-3">
            01 / ABOUT ME
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            {aboutData.title}
          </h2>

          <p className="text-gray-400 text-lg mt-4 max-w-2xl leading-8">
            {aboutData.subtitle}
          </p>
        </motion.div>

        {/* Main About Layout */}
        <div className="grid lg:grid-cols-[1.35fr_1fr] gap-8">

          {/* LEFT — JOURNEY */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="
              relative
              bg-slate-800
              border
              border-slate-700
              rounded-3xl
              p-7
              md:p-10
              overflow-hidden
            "
          >
            {/* Decorative circles */}
            <div className="absolute -top-20 -right-20 w-56 h-56 border border-blue-500/20 rounded-full" />
            <div className="absolute -top-12 -right-12 w-40 h-40 border border-blue-500/10 rounded-full" />

            {/* Header */}
            <div className="relative flex items-center justify-between mb-10">

              <div>
                <p className="text-blue-400 font-mono text-sm mb-2">
                  MY JOURNEY
                </p>

                <h3 className="text-3xl md:text-4xl font-bold">
                  From software
                  <span className="text-blue-400"> to AI.</span>
                </h3>
              </div>

              <div className="
                hidden sm:flex
                w-14
                h-14
                rounded-2xl
                bg-blue-500/10
                border
                border-blue-500/20
                items-center
                justify-center
                text-blue-400
                text-xl
              ">
                <FaBrain />
              </div>
            </div>

            {/* Journey Timeline */}
            <div className="relative">

              {/* Vertical Line */}
              <div className="
                absolute
                left-[7px]
                top-2
                bottom-2
                w-px
                bg-gradient-to-b
                from-blue-500
                via-blue-500/40
                to-transparent
              " />

              {/* Step 1 */}
              <div className="relative pl-9 mb-10">

                <div className="
                  absolute
                  left-0
                  top-1
                  w-4
                  h-4
                  rounded-full
                  bg-blue-500
                  border-4
                  border-slate-800
                  shadow-lg
                  shadow-blue-500/30
                " />

                <p className="text-blue-400 text-sm font-medium mb-2">
                  SOFTWARE ENGINEERING
                </p>

                <p className="text-gray-300 leading-7">
                  Started my professional journey as a Software Developer,
                  working on backend systems and enterprise applications
                  using C#, ASP.NET, SQL Server and REST APIs.
                </p>
              </div>

              {/* Step 2 */}
              <div className="relative pl-9 mb-10">

                <div className="
                  absolute
                  left-0
                  top-1
                  w-4
                  h-4
                  rounded-full
                  bg-blue-500
                  border-4
                  border-slate-800
                  shadow-lg
                  shadow-blue-500/30
                " />

                <p className="text-blue-400 text-sm font-medium mb-2">
                  TRANSITION TO AI
                </p>

                <p className="text-gray-300 leading-7">
                  Expanded my engineering background into Machine Learning,
                  Deep Learning, Computer Vision, NLP and modern AI
                  technologies.
                </p>
              </div>

              {/* Step 3 */}
              <div className="relative pl-9">

                <div className="
                  absolute
                  left-0
                  top-1
                  w-4
                  h-4
                  rounded-full
                  bg-blue-400
                  border-4
                  border-slate-800
                  shadow-lg
                  shadow-blue-500/30
                " />

                <p className="text-blue-400 text-sm font-medium mb-2">
                  TODAY
                </p>

                <p className="text-gray-300 leading-7">
                  Currently pursuing an MSc in Artificial Intelligence
                  Systems at EPITA in Paris, focusing on building
                  production-ready AI systems and intelligent applications.
                </p>
              </div>

            </div>

            {/* Bottom Status */}
            <div className="
              mt-10
              pt-6
              border-t
              border-slate-700
              flex
              flex-wrap
              items-center
              gap-4
              text-sm
            ">
              <span className="flex items-center gap-2 text-gray-400">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                Open to AI opportunities
              </span>

              <span className="text-slate-600">•</span>

              <span className="flex items-center gap-2 text-gray-400">
                <FaMapMarkerAlt className="text-blue-400" />
                Paris, France
              </span>
            </div>

          </motion.div>


          {/* RIGHT — PROFILE SNAPSHOT */}
          <div className="grid grid-cols-2 gap-5">

            {aboutData.highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{ y: -6 }}
                className="
                  group
                  relative
                  bg-slate-800
                  border
                  border-slate-700
                  rounded-2xl
                  p-6
                  overflow-hidden
                  hover:border-blue-500/60
                  transition-all
                  duration-300
                "
              >

                {/* Card Glow */}
                <div className="
                  absolute
                  -top-10
                  -right-10
                  w-28
                  h-28
                  bg-blue-500/10
                  rounded-full
                  blur-2xl
                  group-hover:bg-blue-500/20
                  transition
                " />

                {/* Icon */}
                <div className="
                  relative
                  w-12
                  h-12
                  rounded-xl
                  bg-slate-700
                  border
                  border-slate-600
                  flex
                  items-center
                  justify-center
                  text-blue-400
                  text-lg
                  mb-7
                  group-hover:border-blue-500/50
                  transition
                ">
                  {iconMap[item.title] || item.emoji}
                </div>

                {/* Label */}
                <p className="text-gray-500 text-xs font-medium uppercase tracking-wider">
                  {item.title}
                </p>

                {/* Main Value */}
                <h4 className="text-xl font-bold text-white mt-3 leading-7">
                  {item.value}
                </h4>

                {/* Company */}
                {item.company && (
                  <p className="text-blue-400 text-sm mt-2">
                    {item.company}
                  </p>
                )}

              </motion.div>
            ))}

            {/* Current Focus Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="
                col-span-2
                relative
                bg-gradient-to-br
                from-blue-600/10
                to-slate-800
                border
                border-blue-500/20
                rounded-2xl
                p-6
                overflow-hidden
              "
            >

              <div className="flex items-start justify-between gap-4">

                <div>
                  <p className="text-blue-400 text-xs uppercase tracking-wider font-medium">
                    CURRENT FOCUS
                  </p>

                  <h4 className="text-2xl font-bold mt-3">
                    Building intelligent systems.
                  </h4>

                  <p className="text-gray-400 text-sm leading-6 mt-3 max-w-md">
                    Machine Learning • Deep Learning • LLMs •
                    Computer Vision • MLOps
                  </p>
                </div>

                <div className="
                  w-12
                  h-12
                  shrink-0
                  rounded-xl
                  bg-blue-500/10
                  border
                  border-blue-500/20
                  flex
                  items-center
                  justify-center
                  text-blue-400
                ">
                  <FaRocket />
                </div>

              </div>

              {/* Progress Line */}
              <div className="mt-6 h-1 bg-slate-700 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "75%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                  className="h-full bg-blue-500 rounded-full"
                />
              </div>

            </motion.div>

          </div>

        </div>


        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-8">

          {aboutData.stats.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="
                bg-slate-800
                border
                border-slate-700
                rounded-2xl
                p-6
                text-center
                hover:border-blue-500/50
                transition-all
                duration-300
              "
            >

              <h3 className="text-3xl md:text-4xl font-bold text-blue-400">
                {item.number}
              </h3>

              <p className="text-gray-400 text-sm mt-2">
                {item.label}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default About;