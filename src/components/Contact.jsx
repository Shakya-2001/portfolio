import { motion } from "framer-motion";
import contactData from "../data/contactData";
import ContactCard from "./ContactCard";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-24 bg-slate-900 text-white"
    >
      <div className="max-w-5xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center"
        >
          Let's Connect
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center text-gray-400 mt-4 mb-16 max-w-2xl mx-auto"
        >
          I'm currently looking for AI / Machine Learning internship opportunities in France.
          Feel free to reach out if you'd like to collaborate or discuss opportunities.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-6">
          {contactData.map((contact) => (
            <ContactCard
              key={contact.id}
              contact={contact}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Contact;