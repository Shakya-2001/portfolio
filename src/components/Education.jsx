import { motion } from "framer-motion";
import educationData from "../data/educationData";
import EducationCard from "./EducationCard";

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 bg-slate-950 text-white"
    >
      <div className="max-w-6xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center"
        >
          Education
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center text-gray-400 mt-4 mb-16 max-w-2xl mx-auto"
        >
          My academic journey and the foundation of my AI career.
        </motion.p>

        <div className="space-y-8">
          {educationData.map((education) => (
            <EducationCard
              key={education.id}
              education={education}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Education;