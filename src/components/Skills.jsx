import { motion } from "framer-motion";
import skillsData from "../data/skillsData";

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative py-28 bg-slate-900 text-white overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

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
              03
            </span>

            <div className="h-px w-12 bg-blue-500/60" />

            <span className="text-gray-500 uppercase tracking-[0.3em] text-xs">
              Toolbox
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">

            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              My engineering
              <span className="text-blue-400"> stack.</span>
            </h2>

            <p className="text-gray-400 max-w-xl leading-7">
              Technologies I use across machine learning, backend
              engineering, data, cloud infrastructure, and AI systems.
            </p>

          </div>
        </motion.div>

        {/* Skills */}
        <div className="grid md:grid-cols-2 gap-6">

          {skillsData.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              whileHover={{ y: -6 }}
              className="
                group
                relative
                overflow-hidden
                bg-slate-950/60
                border border-slate-800
                rounded-3xl
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
                  -top-8
                  text-[120px]
                  font-bold
                  text-slate-800/40
                  select-none
                  leading-none
                "
              >
                0{index + 1}
              </span>

              {/* Glow */}
              <div
                className="
                  absolute
                  -right-20
                  -bottom-20
                  w-48
                  h-48
                  rounded-full
                  bg-blue-500/5
                  blur-3xl
                  group-hover:bg-blue-500/10
                  transition
                "
              />

              <div className="relative z-10">

                {/* Category Header */}
                <div className="flex items-start justify-between mb-7">

                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-blue-400 mb-2">
                      Module 0{index + 1}
                    </p>

                    <h3 className="text-2xl font-bold text-white">
                      {category.title}
                    </h3>
                  </div>

                  <div className="text-4xl">
                    {category.icon}
                  </div>

                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2.5">

                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.3,
                        delay: index * 0.1 + skillIndex * 0.03,
                      }}
                      whileHover={{
                        scale: 1.06,
                      }}
                      className="
                        px-3.5
                        py-2
                        rounded-xl
                        bg-slate-900
                        border border-slate-700
                        text-sm
                        text-gray-300
                        hover:text-blue-300
                        hover:border-blue-500/40
                        transition-all
                      "
                    >
                      {skill}
                    </motion.span>
                  ))}

                </div>

                {/* Bottom line */}
                <div className="mt-8 flex items-center gap-3">

                  <div className="h-px flex-1 bg-slate-800 group-hover:bg-blue-500/30 transition" />

                  <span className="text-[10px] uppercase tracking-[0.2em] text-gray-600">
                    {category.skills.length} technologies
                  </span>

                </div>

              </div>

            </motion.div>
          ))}

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
            Learn · Build · Deploy
          </span>
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;