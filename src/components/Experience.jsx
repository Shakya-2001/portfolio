import { motion } from "framer-motion";
import experienceData from "../data/experienceData";
import TimelineItem from "./TimelineItem";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 bg-slate-950 text-white"
    >
      <div className="max-w-5xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center"
        >
          Experience
        </motion.h2>

        <p className="text-center text-gray-400 mt-4 mb-16 max-w-2xl mx-auto">
          My journey from software engineering to artificial intelligence.
        </p>

        {experienceData.map((item, index) => (
          <TimelineItem
            key={item.id}
            item={item}
            isLast={index === experienceData.length - 1}
          />
        ))}

      </div>
    </section>
  );
};

export default Experience;