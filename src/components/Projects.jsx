import { motion } from "framer-motion";
import projectsData from "../data/projectsData";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-24 bg-slate-900 text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center"
        >
          Featured Projects
        </motion.h2>

        <p className="text-center text-gray-400 mt-4 mb-16 max-w-2xl mx-auto">
          A selection of AI and software engineering projects that demonstrate
          my experience in machine learning, backend development, and production-ready systems.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;