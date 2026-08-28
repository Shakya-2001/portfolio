import { motion } from "framer-motion";
import { FaBriefcase, FaMicrochip } from "react-icons/fa";
import experienceData from "../data/experienceData";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 bg-slate-950 text-white"
    >
      <div className="max-w-5xl mx-auto px-6">

        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold">
            Experience
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            My professional journey across software development and
            embedded systems.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">

          {/* Vertical Line */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-slate-700 md:left-1/2 md:-translate-x-1/2"></div>

          {experienceData.map((experience, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={experience.id}
                initial={{
                  opacity: 0,
                  x: isLeft ? -40 : 40,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                className="relative mb-12 last:mb-0"
              >

                {/* Timeline Dot */}
                <div className="absolute left-5 top-6 -translate-x-1/2 w-10 h-10 rounded-full bg-slate-800 border-2 border-blue-500 flex items-center justify-center z-10 md:left-1/2">
                  {experience.role.includes("Embedded") ? (
                    <FaMicrochip className="text-blue-400" />
                  ) : (
                    <FaBriefcase className="text-blue-400" />
                  )}
                </div>

                {/* Card */}
                <div
                  className={`ml-12 md:ml-0 md:w-[calc(50%-3rem)] ${
                    isLeft
                      ? "md:mr-auto"
                      : "md:ml-auto"
                  }`}
                >
                  <div className="bg-slate-800 border border-slate-700 rounded-2xl p-7 hover:border-blue-500 hover:-translate-y-1 transition-all duration-300">

                    {/* Period */}
                    <span className="inline-block text-sm font-medium text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full mb-4">
                      {experience.period}
                    </span>

                    {/* Role */}
                    <h3 className="text-2xl font-bold text-white">
                      {experience.role}
                    </h3>

                    {/* Company */}
                    <p className="text-blue-400 font-medium mt-1">
                      {experience.company}
                    </p>

                    {/* Description */}
                    <p className="text-gray-400 leading-7 mt-4">
                      {experience.description}
                    </p>

                    {/* Responsibilities */}
                    <ul className="mt-5 space-y-3">
                      {experience.responsibilities.map(
                        (responsibility, responsibilityIndex) => (
                          <li
                            key={responsibilityIndex}
                            className="flex gap-3 text-gray-300 text-sm leading-6"
                          >
                            <span className="text-blue-400 mt-2">
                              •
                            </span>

                            <span>
                              {responsibility}
                            </span>
                          </li>
                        )
                      )}
                    </ul>

                  </div>
                </div>

              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default Experience;