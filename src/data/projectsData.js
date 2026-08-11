import meetingAssistantImage from "../assets/projects/meeting-assistent.png";
import dspPipelineImage from "../assets/projects/dsp-pipeline.png";
import bikeSharingImage from "../assets/projects/bike-sharing.png";
import statisticalLearningImage from "../assets/projects/statistical-learning.png";

const projectsData = [
  {
    id: 1,
    title: "AI Meeting Assistant",
    description:
      "An AI-powered meeting assistant that transcribes audio, generates concise summaries, and extracts action items using Whisper and transformer-based language models.",
    technologies: [
      "Python",
      "Whisper",
      "Transformers",
      "FastAPI",
      "Docker",
      "PostgreSQL",
    ],
    image: meetingAssistantImage,
    github: "#",
    demo: "#",
    featured: true,
  },

  {
    id: 2,
    title: "DSP Production Pipeline",
    description:
      "Production-ready machine learning pipeline built with FastAPI, Streamlit, PostgreSQL, Docker, and Apache Airflow.",
    technologies: [
      "FastAPI",
      "Docker",
      "PostgreSQL",
      "Airflow",
      "Streamlit",
    ],
    image: dspPipelineImage,
    github: "#",
    demo: "#",
    featured: true,
  },

  {
    id: 3,
    title: "Bike Sharing Prediction",
    description:
      "Machine learning model that predicts bike rental demand using feature engineering and regression techniques.",
    technologies: [
      "Python",
      "Scikit-learn",
      "Pandas",
      "Matplotlib",
    ],
    image: bikeSharingImage,
    github: "#",
    demo: "#",
    featured: false,
  },

  {
    id: 4,
    title: "Statistical Learning",
    description:
      "End-to-end statistical learning project covering regression, regularization, model evaluation, and cross-validation.",
    technologies: [
      "Python",
      "NumPy",
      "Scikit-learn",
    ],
    image: statisticalLearningImage,
    github: "#",
    demo: "#",
    featured: false,
  },
];

export default projectsData;