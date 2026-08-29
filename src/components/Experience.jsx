import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaMicrochip,
  FaCheckCircle,
} from "react-icons/fa";

import experienceData from "../data/experienceData";

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative py-28 bg-slate-950 text-white overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -right-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />

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
              04
            </span>

            <div className="h-px w-12 bg-blue-500/60" />

            <span className="text-gray-500 uppercase tracking-[0.3em] text-xs">
              Experience
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">

            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              Where I learned
              <span className="text-blue-400"> to ship.</span>
            </h2>

            <p className="text-gray-400 max-w-xl leading-7">
              From embedded systems to large-scale software engineering,
              each experience has shaped the way I approach technology.
            </p>

          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">

          {/* Center line */}
          <div
            className="
              hidden md:block
              absolute left-1/2 top-0 bottom-0
              w-px
              bg-gradient-to-b
              from-blue-500/60
              via-slate-700
              to-transparent
              -translate-x-1/2
            "
          />

          <div className="space-y-14">

            {experienceData.map((experience, index) => {

              const isLeft = index % 2 === 0;

              const isEmbedded =
                experience.role.toLowerCase().includes("embedded");

              return (
                <motion.div
                  key={experience.id}
                  initial={{
                    opacity: 0,
                    x: isLeft ? -50 : 50,
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
                  className="relative"
                >

                  {/* Timeline node */}
                  <div
                    className="
                      hidden md:flex
                      absolute left-1/2 top-8
                      -translate-x-1/2
                      w-14 h-14
                      rounded-full
                      bg-slate-900
                      border-2 border-blue-500/50
                      items-center justify-center
                      z-20
                      shadow-lg shadow-blue-500/10
                    "
                  >
                    {isEmbedded ? (
                      <FaMicrochip className="text-blue-400 text-xl" />
                    ) : (
                      <FaBriefcase className="text-blue-400 text-xl" />
                    )}
                  </div>

                  {/* Mobile node */}
                  <div className="md:hidden flex items-center gap-3 mb-4">

                    <div className="w-10 h-10 rounded-full bg-slate-800 border border-blue-500/50 flex items-center justify-center">
                      {isEmbedded ? (
                        <FaMicrochip className="text-blue-400" />
                      ) : (
                        <FaBriefcase className="text-blue-400" />
                      )}
                    </div>

                    <div className="h-px flex-1 bg-slate-800" />

                  </div>

                  {/* Card */}
                  <div
                    className={`
                      md:w-[calc(50%-4rem)]
                      ${
                        isLeft
                          ? "md:mr-auto"
                          : "md:ml-auto"
                      }
                    `}
                  >

                    <motion.div
                      whileHover={{ y: -8 }}
                      className="
                        group
                        relative
                        overflow-hidden
                        rounded-3xl
                        border border-slate-800
                        bg-slate-900/80
                        p-7 md:p-8
                        hover:border-blue-500/40
                        transition-all duration-500
                      "
                    >

                      {/* Decorative number */}
                      <span
                        className="
                          absolute
                          -right-3
                          -top-7
                          text-[100px]
                          font-bold
                          text-slate-800/40
                          leading-none
                          select-none
                        "
                      >
                        0{index + 1}
                      </span>

                      {/* Glow */}
                      <div
                        className="
                          absolute
                          -right-16
                          -bottom-16
                          w-44
                          h-44
                          rounded-full
                          bg-blue-500/5
                          blur-3xl
                          group-hover:bg-blue-500/10
                          transition
                        "
                      />

                      <div className="relative z-10">

                        {/* Period + Type */}
                        <div className="flex flex-wrap items-center gap-3 mb-6">

                          <span className="text-xs font-mono text-blue-400 bg-blue-500/10 border border-blue-500/20 px-3 py-1.5 rounded-lg">
                            {experience.period}
                          </span>

                          <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500">
                            {isEmbedded
                              ? "Embedded Systems"
                              : "Software Engineering"}
                          </span>

                        </div>

                        {/* Role */}
                        <h3 className="text-2xl md:text-3xl font-bold text-white">
                          {experience.role}
                        </h3>

                        {/* Company */}
                        <p className="text-blue-400 font-medium mt-2">
                          {experience.company}
                        </p>

                        {/* Description */}
                        <p className="text-gray-400 leading-7 mt-5">
                          {experience.description}
                        </p>

                        {/* Responsibilities */}
                        {experience.responsibilities?.length > 0 && (
                          <div className="mt-7 space-y-3">

                            {experience.responsibilities.map(
                              (responsibility, responsibilityIndex) => (
                                <div
                                  key={responsibilityIndex}
                                  className="
                                    flex
                                    gap-3
                                    items-start
                                    text-sm
                                    text-gray-300
                                    leading-6
                                  "
                                >
                                  <FaCheckCircle
                                    className="
                                      mt-1
                                      flex-shrink-0
                                      text-blue-400
                                    "
                                  />

                                  <span>
                                    {responsibility}
                                  </span>
                                </div>
                              )
                            )}

                          </div>
                        )}

                        {/* Bottom accent */}
                        <div className="mt-8 flex items-center gap-3">

                          <div className="h-px w-12 bg-blue-500/60" />

                          <span className="text-[10px] uppercase tracking-[0.2em] text-gray-600">
                            Experience {index + 1}
                          </span>

                        </div>

                      </div>

                    </motion.div>

                  </div>

                </motion.div>
              );
            })}

          </div>
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <span className="text-xs uppercase tracking-[0.35em] text-gray-600">
            Adapt · Engineer · Deliver
          </span>
        </motion.div>

      </div>
    </section>
  );
};

export default Experience;