import {
  FaGithub,
  FaExternalLinkAlt,
  FaMicrophone,
  FaSmile,
  FaBicycle,
} from "react-icons/fa";

const ProjectCard = ({ project }) => {
  const getProjectIcon = () => {
    switch (project.title) {
      case "AI Meeting Assistant":
        return <FaMicrophone className="text-blue-400 text-2xl" />;

      case "EmojiMirror":
        return <FaSmile className="text-blue-400 text-2xl" />;

      case "Bike Sharing Prediction":
        return <FaBicycle className="text-blue-400 text-2xl" />;

      default:
        return null;
    }
  };

  return (
    <div className="bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300">

      <div className="p-6">

        {/* Project Header */}
        <div className="flex flex-col gap-4 mb-5">

          {/* Featured Badge */}
          {project.featured && (
            <span className="self-start bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
              Featured
            </span>
          )}

          {/* Icon + Title */}
          <div className="flex items-center gap-4">

            <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-slate-700 flex items-center justify-center">
              {getProjectIcon()}
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">
              {project.title}
            </h3>

          </div>

        </div>

        {/* Description */}
        <p className="text-gray-400 leading-7 mb-6">
          {project.description}
        </p>

        {/* Technology Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-full bg-slate-700 text-sm text-blue-300 border border-slate-600"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700 mb-5"></div>

        {/* Buttons */}
        <div className="flex flex-wrap items-center gap-5">

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition font-medium"
          >
            <FaGithub />
            GitHub
          </a>

          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition font-medium"
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