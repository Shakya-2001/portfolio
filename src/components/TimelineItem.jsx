import { motion } from "framer-motion";

const TimelineItem = ({ item, isLast }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative flex gap-6"
    >
      {/* Timeline */}
      <div className="flex flex-col items-center">
        <div className="w-5 h-5 rounded-full bg-blue-500 border-4 border-slate-900"></div>

        {!isLast && (
          <div className="w-1 flex-1 bg-slate-700 mt-2"></div>
        )}
      </div>

      {/* Content */}
      <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 flex-1 mb-10 hover:border-blue-500 transition-all duration-300">

        <p className="text-blue-400 text-sm font-medium">
          {item.period}
        </p>

        <h3 className="text-2xl font-bold mt-2">
          {item.role}
        </h3>

        <h4 className="text-lg text-gray-300 mt-1">
          {item.company}
        </h4>

        <p className="text-gray-400 mt-4 leading-7">
          {item.description}
        </p>

      </div>
    </motion.div>
  );
};

export default TimelineItem;