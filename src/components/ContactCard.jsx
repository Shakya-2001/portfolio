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
      className="bg-slate-800 border border-slate-700 rounded-2xl p-6 flex items-center gap-5 hover:border-blue-500 transition-all duration-300"
    >
      <div className="text-3xl text-blue-400">
        {icons[contact.title]}
      </div>

      <div>
        <h3 className="font-semibold text-lg">
          {contact.title}
        </h3>

        <p className="text-gray-400">
          {contact.value}
        </p>
      </div>
    </motion.a>
  );
};

export default ContactCard;