import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
} from "react-icons/fa";

const icons = {
  Email: <FaEnvelope />,
  LinkedIn: <FaLinkedin />,
  GitHub: <FaGithub />,
  Location: <FaMapMarkerAlt />,
};

const ContactCard = ({ contact }) => {
  return (
    <motion.a
      href={contact.link || "#"}
      target={contact.link ? "_blank" : "_self"}
      rel="noreferrer"
      whileHover={{ y: -6 }}
      className="w-full min-w-0 bg-slate-800 border border-slate-700 rounded-2xl p-5 sm:p-6 flex items-center gap-4 sm:gap-5 hover:border-blue-500 transition-all duration-300"
    >
      {/* Icon */}
      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-slate-700 flex items-center justify-center text-2xl text-blue-400">
        {icons[contact.title]}
      </div>

      {/* Content */}
      <div className="min-w-0 flex-1">
        <h3 className="font-semibold text-lg text-white">
          {contact.title}
        </h3>

        <p className="text-gray-400 mt-1 break-words text-sm sm:text-base">
          {contact.value}
        </p>
      </div>
    </motion.a>
  );
};

export default ContactCard;