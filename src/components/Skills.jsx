import { motion } from "framer-motion";
import skillsData from "../data/skillsData";
import SkillCard from "./SkillCard";

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-24 bg-slate-900 text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center"
        >
          Technical Skills
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center text-gray-400 mt-4 mb-16 max-w-2xl mx-auto"
        >
          Technologies and tools I use to build AI applications,
          scalable backend systems, and production-ready software.
        </motion.p>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">

          {skillsData.map((category) => (
            <SkillCard
              key={category.id}
              category={category}
            />
          ))}

        </div>

      </div>
    </section>
  );
};

export default Skills;