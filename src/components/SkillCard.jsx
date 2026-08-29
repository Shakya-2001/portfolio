import { motion } from "framer-motion";

const SkillCard = ({ category }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8 }}
      className="bg-slate-800 border border-slate-700 rounded-2xl p-6 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300"
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <span className="text-3xl md:text-4xl flex-shrink-0">
          {category.icon}
        </span>

        <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">
          {category.title}
        </h3>
      </div>

      {/* Skills */}
      <div className="flex flex-wrap gap-2.5">
        {category.skills.map((skill) => (
          <motion.span
            key={skill}
            whileHover={{ scale: 1.08 }}
            className="px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-slate-700 text-blue-300 text-sm cursor-default transition"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillCard;