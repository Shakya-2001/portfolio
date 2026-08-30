import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";

import contactData from "../data/contactData";

const Contact = () => {
  const email = contactData.find(
    (contact) => contact.title === "Email"
  );

  const linkedin = contactData.find(
    (contact) => contact.title === "LinkedIn"
  );

  const github = contactData.find(
    (contact) => contact.title === "GitHub"
  );

  const location = contactData.find(
    (contact) => contact.title === "Location"
  );

  return (
    <section
      id="contact"
      className="relative py-28 bg-slate-950 text-white overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Small label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="text-blue-400 font-mono text-sm">
            06
          </span>

          <div className="h-px w-12 bg-blue-500/60" />

          <span className="text-gray-500 uppercase tracking-[0.3em] text-xs">
            Contact
          </span>
        </motion.div>

        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="
            relative
            rounded-[2rem]
            border border-slate-800
            bg-slate-900/70
            overflow-hidden
            p-8 md:p-14
          "
        >

          {/* Large decorative text */}
          <span
            className="
              absolute
              -right-5
              -top-8
              text-[130px]
              md:text-[180px]
              font-bold
              text-slate-800/30
              leading-none
              select-none
            "
          >
            06
          </span>

          {/* Glow */}
          <div className="absolute -right-20 -bottom-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />

          <div className="relative z-10">

            <p className="text-blue-400 font-mono text-sm mb-5">
              HAVE AN IDEA?
            </p>

            <h2 className="text-4xl md:text-6xl font-bold leading-tight max-w-4xl">
              Let's build something
              <span className="text-blue-400"> intelligent.</span>
            </h2>

            <p className="text-gray-400 text-lg leading-8 max-w-2xl mt-6">
              I'm currently looking for AI, Machine Learning, DataScience, NLP and MLOps-related internship/job
              opportunities in France. If you're working on an interesting
              problem, building an AI product, or simply want to connect,
              I'd love to hear from you.
            </p>

            {/* Email CTA */}
            {email && (
              <motion.a
                href={email.link}
                whileHover={{ x: 6 }}
                className="
                  inline-flex
                  items-center
                  gap-3
                  mt-9
                  px-6
                  py-3.5
                  rounded-xl
                  bg-blue-600
                  hover:bg-blue-500
                  font-semibold
                  transition
                "
              >
                <FaEnvelope />
                Get in touch
                <FaArrowRight />
              </motion.a>
            )}

            {/* Divider */}
            <div className="h-px bg-slate-800 my-10" />

            {/* Contact information */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

              {/* Email */}
              {email && (
                <a
                  href={email.link}
                  className="group"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <FaEnvelope className="text-blue-400" />

                    <span className="text-xs uppercase tracking-[0.2em] text-gray-500">
                      Email
                    </span>
                  </div>

                  <p className="text-sm text-gray-300 group-hover:text-blue-400 transition break-all">
                    {email.value}
                  </p>
                </a>
              )}

              {/* LinkedIn */}
              {linkedin && (
                <a
                  href={linkedin.link}
                  target="_blank"
                  rel="noreferrer"
                  className="group"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <FaLinkedin className="text-blue-400" />

                    <span className="text-xs uppercase tracking-[0.2em] text-gray-500">
                      LinkedIn
                    </span>
                  </div>

                  <p className="text-sm text-gray-300 group-hover:text-blue-400 transition break-all">
                    Connect with me
                  </p>
                </a>
              )}

              {/* GitHub */}
              {github && (
                <a
                  href={github.link}
                  target="_blank"
                  rel="noreferrer"
                  className="group"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <FaGithub className="text-blue-400" />

                    <span className="text-xs uppercase tracking-[0.2em] text-gray-500">
                      GitHub
                    </span>
                  </div>

                  <p className="text-sm text-gray-300 group-hover:text-blue-400 transition">
                    View my projects
                  </p>
                </a>
              )}

              {/* Location */}
              {location && (
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <FaMapMarkerAlt className="text-blue-400" />

                    <span className="text-xs uppercase tracking-[0.2em] text-gray-500">
                      Location
                    </span>
                  </div>

                  <p className="text-sm text-gray-300">
                    {location.value}
                  </p>
                </div>
              )}

            </div>

          </div>
        </motion.div>

        {/* Footer statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-gray-600 text-xs">
            © {new Date().getFullYear()} Akash Kumar
          </p>

          <p className="text-gray-600 text-xs uppercase tracking-[0.25em]">
            Build · Learn · Innovate
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;