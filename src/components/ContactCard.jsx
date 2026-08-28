import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";

const icons = {
  Email: <FaEnvelope />,
  LinkedIn: <FaLinkedin />,
  GitHub: <FaGithub />,
  Location: <FaMapMarkerAlt />,
};

const ContactCard = ({ contact }) => {
  const isClickable = Boolean(contact.link);

  return (
    <motion.a
      href={contact.link || "#"}
      target={isClickable ? "_blank" : "_self"}
      rel={isClickable ? "noreferrer" : undefined}
      whileHover={isClickable ? { y: -6 } : undefined}
      className={`group bg-slate-800 border border-slate-700 rounded-2xl p-6 flex items-center gap-5 transition-all duration-300 ${
        isClickable
          ? "hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/10 cursor-pointer"
          : "cursor-default"
      }`}
      onClick={(e) => {
        if (!isClickable) {
          e.preventDefault();
        }
      }}
    >
      {/* Icon */}
      <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-blue-500/10 flex items-center justify-center">
        <div className="text-2xl text-blue-400">
          {icons[contact.title]}
        </div>
      </div>

      {/* Contact Information */}
      <div className="flex-1 min-w-0">
        <h3 className="font-semibold text-lg text-white">
          {contact.title}
        </h3>

        <p className="text-gray-400 mt-1 truncate">
          {contact.value}
        </p>
      </div>

      {/* Arrow for clickable contacts */}
      {isClickable && (
        <FaArrowRight className="text-gray-500 group-hover:text-blue-400 group-hover:translate-x-1 transition-all duration-300" />
      )}
    </motion.a>
  );
};

export default ContactCard;