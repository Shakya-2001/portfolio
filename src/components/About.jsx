import { motion } from "framer-motion";
import aboutData from "../data/aboutData";

const About = () => {
  return (
    <section
      id="about"
      className="py-28 bg-slate-900 text-white"
    >
      <div className="max-w-6xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-center"
        >
          {aboutData.title}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-slate-800 rounded-2xl p-10 shadow-xl border border-slate-700"
        >
          <p className="text-lg leading-9 text-gray-300 whitespace-pre-line">
            {aboutData.description}
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default About;