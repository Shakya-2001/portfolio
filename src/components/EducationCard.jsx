import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaMapMarkerAlt,
  FaCalendarAlt,
} from "react-icons/fa";

const EducationCard = ({ education }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8 }}
      className="bg-slate-800 border border-slate-700 rounded-2xl p-8 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300"
    >
      {/* Degree */}
      <div className="flex items-start gap-4 mb-4">
        <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-blue-500/10 flex items-center justify-center">
          <FaGraduationCap className="text-2xl text-blue-400" />
        </div>

        <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">
          {education.degree}
        </h3>
      </div>

      {/* Institution */}
      <p className="text-lg text-blue-400 font-medium mb-4">
        {education.institution}
      </p>

      {/* Location + Period */}
      <div className="flex flex-wrap gap-5 text-gray-400 text-sm mb-6">
        <div className="flex items-center gap-2">
          <FaMapMarkerAlt className="text-blue-400" />
          {education.location}
        </div>

        <div className="flex items-center gap-2">
          <FaCalendarAlt className="text-blue-400" />
          {education.period}
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-400 leading-7 max-w-4xl">
        {education.description}
      </p>
    </motion.div>
  );
};

export default EducationCard;