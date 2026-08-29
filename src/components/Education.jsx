import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaBrain,
} from "react-icons/fa";

import educationData from "../data/educationData";

const Education = () => {
  return (
    <section
      id="education"
      className="relative py-28 bg-slate-900 text-white overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute -left-40 top-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute -right-40 bottom-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="text-blue-400 font-mono text-sm">
              05
            </span>

            <div className="h-px w-12 bg-blue-500/60" />

            <span className="text-gray-500 uppercase tracking-[0.3em] text-xs">
              Education
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">

            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              Built on strong
              <span className="text-blue-400"> foundations.</span>
            </h2>

            <p className="text-gray-400 max-w-xl leading-7">
              The academic path that shaped my foundation in engineering,
              computer science, mathematics, and artificial intelligence.
            </p>

          </div>
        </motion.div>

        {/* Education Timeline */}
        <div className="relative">

          {/* Timeline line */}
          <div
            className="
              hidden md:block
              absolute left-8 top-0 bottom-0
              w-px
              bg-gradient-to-b
              from-blue-500/60
              via-slate-700
              to-transparent
            "
          />

          <div className="space-y-8">

            {educationData.map((education, index) => (
              <motion.div
                key={education.id}
                initial={{
                  opacity: 0,
                  x: -40,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                }}
                className="relative md:pl-20"
              >

                {/* Timeline icon */}
                <div
                  className="
                    hidden md:flex
                    absolute left-0 top-7
                    w-16 h-16
                    rounded-2xl
                    bg-slate-950
                    border border-blue-500/40
                    items-center justify-center
                    z-10
                    shadow-lg shadow-blue-500/10
                  "
                >
                  <FaGraduationCap className="text-blue-400 text-2xl" />
                </div>

                {/* Card */}
                <motion.div
                  whileHover={{ y: -6 }}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-3xl
                    bg-slate-950/70
                    border border-slate-800
                    p-7 md:p-9
                    hover:border-blue-500/40
                    transition-all duration-500
                  "
                >

                  {/* Large background number */}
                  <span
                    className="
                      absolute
                      right-5
                      -top-5
                      text-[110px]
                      font-bold
                      leading-none
                      text-slate-800/40
                      select-none
                    "
                  >
                    0{index + 1}
                  </span>

                  {/* Decorative circle */}
                  <div
                    className="
                      absolute
                      -right-16
                      -bottom-16
                      w-44
                      h-44
                      rounded-full
                      border border-blue-500/10
                      group-hover:border-blue-500/20
                      transition
                    "
                  />

                  <div className="relative z-10">

                    {/* Top metadata */}
                    <div className="flex flex-wrap items-center gap-3 mb-6">

                      <span className="flex items-center gap-2 text-xs font-mono text-blue-400 bg-blue-500/10 border border-blue-500/20 px-3 py-1.5 rounded-lg">
                        <FaCalendarAlt />
                        {education.period}
                      </span>

                      <span className="flex items-center gap-2 text-xs text-gray-500">
                        <FaMapMarkerAlt />
                        {education.location}
                      </span>

                    </div>

                    {/* Degree */}
                    <h3 className="text-2xl md:text-3xl font-bold max-w-3xl">
                      {education.degree}
                    </h3>

                    {/* Institution */}
                    <p className="text-blue-400 font-medium text-lg mt-3">
                      {education.institution}
                    </p>

                    {/* Description */}
                    <p className="text-gray-400 leading-7 mt-5 max-w-3xl">
                      {education.description}
                    </p>

                    {/* Specialization */}
                    {index === 0 && (
                      <div className="mt-7 p-5 rounded-2xl bg-slate-900 border border-slate-800">

                        <div className="flex items-center gap-3 mb-4">
                          <FaBrain className="text-blue-400" />

                          <span className="text-xs uppercase tracking-[0.2em] text-gray-500">
                            Current Focus
                          </span>
                        </div>

                        <div className="flex flex-wrap gap-2">

                          {[
                            "Machine Learning",
                            "Deep Learning",
                            "NLP",
                            "Computer Vision",
                            "MLOps",
                            "AI Systems",
                          ].map((item) => (
                            <span
                              key={item}
                              className="
                                px-3 py-1.5
                                rounded-lg
                                bg-slate-800
                                border border-slate-700
                                text-xs
                                text-gray-300
                              "
                            >
                              {item}
                            </span>
                          ))}

                        </div>

                      </div>
                    )}

                    {/* Bottom accent */}
                    <div className="mt-8 flex items-center gap-3">

                      <div className="h-px w-12 bg-blue-500/60" />

                      <span className="text-[10px] uppercase tracking-[0.2em] text-gray-600">
                        Academic Foundation
                      </span>

                    </div>

                  </div>

                </motion.div>

              </motion.div>
            ))}

          </div>
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-14 text-center"
        >
          <span className="text-xs uppercase tracking-[0.35em] text-gray-600">
            Study · Experiment · Evolve
          </span>
        </motion.div>

      </div>
    </section>
  );
};

export default Education;