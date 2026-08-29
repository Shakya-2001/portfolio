import { motion } from "framer-motion";
import projectsData from "../data/projectsData";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative py-28 bg-slate-950 text-white overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-1/3 -left-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -right-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="text-blue-400 font-mono text-sm">
              02
            </span>

            <div className="h-px w-12 bg-blue-500/60" />

            <span className="text-gray-500 uppercase tracking-[0.3em] text-xs">
              Selected Work
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">

            <div>
              <h2 className="text-4xl md:text-6xl font-bold leading-tight">
                Things I've
                <span className="text-blue-400"> built.</span>
              </h2>
            </div>

            <p className="text-gray-400 max-w-xl leading-7">
              A selection of AI, machine learning, computer vision, and
              production-oriented engineering projects.
            </p>

          </div>
        </motion.div>

        {/* Projects */}
        <div className="space-y-8">

          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
              }}
            >
              <ProjectCard
                project={project}
                index={index}
              />
            </motion.div>
          ))}

        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-14 flex items-center gap-4"
        >
          <div className="h-px flex-1 bg-slate-800" />

          <span className="text-xs uppercase tracking-[0.25em] text-gray-600">
            Build · Learn · Iterate
          </span>

          <div className="h-px flex-1 bg-slate-800" />
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;