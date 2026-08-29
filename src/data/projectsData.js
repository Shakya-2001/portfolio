const projectsData = [
  {
    id: 1,
    title: "AI Meeting Assistant",
    description:
      "An AI-powered meeting assistant that transcribes meeting recordings, generates concise summaries, and extracts actionable insights using Whisper and transformer-based language models.",
    technologies: [
      "Python",
      "Whisper",
      "Transformers",
      "PyTorch",
      "Streamlit",
    ],
    github: "https://github.com/Shakya-2001/AI_Meeting_Assistant.git",
    demo: "https://youtu.be/LCEgNTIgf-Y?si=nOoIVkkAzn56C2Jp",
    featured: true,
  },

  {
    id: 2,
    title: "EmojiMirror",
    description:
      "A real-time computer vision application that detects facial landmarks and maps facial expressions to animated emoji overlays using OpenCV and Dlib.",
    technologies: [
      "Python",
      "OpenCV",
      "Dlib",
      "Computer Vision",
      "Image Processing",
    ],
    github: "https://github.com/Shakya-2001/EmojiMirror.git",
    featured: true,
  },

  {
    id: 3,
    title: "Bike Sharing Demand Prediction",
    description:
      "A 4-member group machine learning project focused on predicting bike-sharing demand through exploratory data analysis, feature engineering, and regression-based modeling.",
    technologies: [
      "Python",
      "Pandas",
      "Scikit-learn",
      "Streamlit",
      "Docker",
    ],
    role: "EDA, Model Training, Streamlit & Docker",
    teamSize: 4,
    contribution:
      "Contributed to exploratory data analysis and model training, developed the Streamlit frontend, and worked on Docker-based deployment.",
    featured: false,
  },
];

export default projectsData;