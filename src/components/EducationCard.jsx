import { motion } from "framer-motion";
import { FaGraduationCap, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";

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
      <div className="flex items-center gap-3 mb-4">
        <FaGraduationCap className="text-3xl text-blue-400" />
        <h3 className="text-2xl font-bold">{education.degree}</h3>
      </div>

      <p className="text-lg text-gray-300 mb-4">
        {education.institution}
      </p>

      <div className="flex flex-wrap gap-6 text-gray-400 text-sm mb-6">
        <div className="flex items-center gap-2">
          <FaMapMarkerAlt />
          {education.location}
        </div>

        <div className="flex items-center gap-2">
          <FaCalendarAlt />
          {education.period}
        </div>
      </div>

      <p className="text-gray-400 leading-7">
        {education.description}
      </p>
    </motion.div>
  );
};

export default EducationCard;