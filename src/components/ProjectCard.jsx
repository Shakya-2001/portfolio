import {
  FaGithub,
  FaExternalLinkAlt,
  FaMicrophone,
  FaSmile,
  FaBicycle,
  FaArrowUp,
} from "react-icons/fa";

const ProjectCard = ({ project, index }) => {

  const getProjectIcon = () => {
    switch (project.title) {
      case "AI Meeting Assistant":
        return <FaMicrophone />;

      case "EmojiMirror":
        return <FaSmile />;

      case "Bike Sharing Demand Prediction":
        return <FaBicycle />;

      default:
        return null;
    }
  };

  const getProjectType = () => {
    switch (project.title) {
      case "AI Meeting Assistant":
        return "AI / NLP";

      case "EmojiMirror":
        return "Computer Vision";

      case "Bike Sharing Demand Prediction":
        return "Machine Learning";

      default:
        return "Engineering";
    }
  };

  return (
    <div
      className="
        group relative overflow-hidden
        bg-slate-900
        border border-slate-800
        rounded-3xl
        hover:border-blue-500/50
        transition-all duration-500
      "
    >

      {/* Background decorative circle */}
      <div
        className="
          absolute -right-24 -top-24
          w-72 h-72
          rounded-full
          border border-blue-500/10
          group-hover:border-blue-500/20
          transition
        "
      />

      <div
        className="
          absolute -right-12 -top-12
          w-48 h-48
          rounded-full
          border border-blue-500/10
        "
      />

      <div className="relative z-10 p-7 md:p-10">

        {/* Top row */}
        <div className="flex items-center justify-between mb-8">

          <div className="flex items-center gap-4">

            {/* Project number */}
            <span className="font-mono text-sm text-gray-600">
              0{index + 1}
            </span>

            <div className="h-px w-8 bg-slate-700" />

            {/* Type */}
            <span className="text-xs uppercase tracking-[0.2em] text-blue-400">
              {getProjectType()}
            </span>

          </div>

          {/* Featured */}
          {project.featured && (
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
              Featured
            </span>
          )}

        </div>

        {/* Main content */}
        <div>

          {/* Left */}
          <div>

            {/* Icon */}
            <div
              className="
                w-14 h-14
                rounded-2xl
                bg-blue-500/10
                border border-blue-500/20
                flex items-center justify-center
                text-blue-400
                text-2xl
                mb-6
                group-hover:bg-blue-500/15
                group-hover:scale-105
                transition-all duration-300
              "
            >
              {getProjectIcon()}
            </div>

            {/* Title */}
            <h3
              className="
                text-3xl md:text-4xl
                font-bold
                text-white
                group-hover:text-blue-400
                transition-colors duration-300
              "
            >
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-gray-400 leading-8 mt-5 max-w-3xl">
              {project.description}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mt-7">

              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="
                    px-3 py-1.5
                    rounded-lg
                    bg-slate-800
                    border border-slate-700
                    text-xs
                    text-gray-300
                    hover:border-blue-500/40
                    hover:text-blue-300
                    transition
                  "
                >
                  {tech}
                </span>
              ))}

            </div>

            {/* Special information */}
            {project.title === "Bike Sharing Prediction" && (
              <div className="mt-7 p-4 rounded-xl bg-slate-800/70 border border-slate-700">

                <p className="text-xs uppercase tracking-wider text-blue-400 mb-2">
                  Team Project · 4 Members
                </p>

                <p className="text-sm text-gray-400 leading-6">
                  My contribution included Streamlit frontend development,
                  Docker integration, exploratory data analysis, and model
                  training.
                </p>

              </div>
            )}

            {/* Links */}
            <div className="flex flex-wrap gap-5 mt-8">

              {project.github && project.github !== "#" && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    flex items-center gap-2
                    text-blue-400
                    hover:text-blue-300
                    font-medium
                    transition
                  "
                >
                  <FaGithub />
                  GitHub
                </a>
              )}

              {project.demo && project.demo !== "#" && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    flex items-center gap-2
                    text-blue-400
                    hover:text-blue-300
                    font-medium
                    transition
                  "
                >
                  <FaExternalLinkAlt />
                  Live Demo
                </a>
              )}

            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default ProjectCard;