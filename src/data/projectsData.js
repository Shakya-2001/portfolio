const projectsData = [
  {
    id: 1,
    title: "AI Meeting Assistant",
    description:
      "A full-stack AI application that transforms meeting recordings into actionable insights. It uses OpenAI Whisper for speech-to-text transcription and transformer-based NLP models to generate concise summaries, identify action items, and extract important meeting information. The application also provides meeting history, analytics, downloadable reports, and an AI meeting copilot for asking questions about recorded meetings.",
    technologies: [
      "Python",
      "Whisper",
      "Transformers",
      "Streamlit",
      "FastAPI",
      "PostgreSQL",
      "Docker",
    ],
    github: "#",
    demo: "#",
    featured: true,
  },

  {
    id: 2,
    title: "EmojiMirror",
    description:
      "A real-time computer vision application that detects facial landmarks and transforms a user's facial expressions into dynamic emoji-based visual effects. Built with OpenCV and dlib, the system processes webcam input in real time, detects facial features, and maps expressions to corresponding emoji overlays, demonstrating practical applications of computer vision and real-time image processing.",
    technologies: [
      "Python",
      "OpenCV",
      "dlib",
      "Computer Vision",
      "Machine Learning",
    ],
    github: "#",
    demo: "#",
    featured: true,
  },

  {
    id: 3,
    title: "Bike Sharing Prediction",
    description:
      "A machine learning project designed to predict bike rental demand from historical usage and environmental data. The project includes data preprocessing, exploratory data analysis, feature engineering, model training, and evaluation using regression techniques. It demonstrates an end-to-end machine learning workflow for solving a real-world demand forecasting problem.",
    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Matplotlib",
      "Machine Learning",
    ],
    github: "#",
    demo: "#",
    featured: false,
  },
];

export default projectsData;