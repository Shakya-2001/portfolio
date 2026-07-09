import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300">

      {/* Image Placeholder */}
      <div className="relative h-52 bg-slate-700 flex items-center justify-center">

            {project.featured && (
                <span className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Featured
                </span>
            )}

            <span className="text-gray-400">
                Screenshot Coming Soon
            </span>

       </div>

      {/* Content */}
      <div className="p-6">

        <h3 className="text-2xl font-bold text-white mb-3">
          {project.title}
        </h3>

        <p className="text-gray-400 leading-7 mb-6">
          {project.description}
        </p>

        {/* Technology Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-full bg-slate-700 text-sm text-blue-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-4">

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition"
          >
            <FaGithub />
            GitHub
          </a>

          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition"
          >
            <FaExternalLinkAlt />
            Demo
          </a>

        </div>

      </div>

    </div>
  );
};

export default ProjectCard;