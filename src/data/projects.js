export const projects = [
  {
    id: "ai-storybook",
    title: "My AI Storybook",
    category: "Beginner",
    level: "Class 6 & 7",
    difficulty: "Easy",
    overview: "An interactive, animated storybook where characters respond dynamically based on user choices. Students use AI image generators to design characters and block coding to bring them to life.",
    learningObjectives: [
      "Understand prompt engineering for image generation",
      "Apply logical sequencing in block-based coding",
      "Develop creative writing skills with AI assistance"
    ],
    technologies: ["Scratch", "Midjourney/DALL-E", "ChatGPT"],
    expectedOutcome: "A fully playable interactive digital story with 3+ alternate endings.",
    workflow: [
      "Brainstorm story concept with AI",
      "Generate character and background assets",
      "Code the interactive logic in Scratch",
      "Present and share the final storybook"
    ],
    image: "storybook"
  },
  {
    id: "smart-study-buddy",
    title: "Smart Study Buddy",
    category: "Intermediate",
    level: "Class 8 & 9",
    difficulty: "Medium",
    overview: "A custom chatbot designed to help students learn Science and Math. The bot uses rule-based logic and API integrations to answer homework questions interactively rather than just giving the answers.",
    learningObjectives: [
      "Learn Python variables, conditionals, and loops",
      "Understand basic Natural Language Processing (NLP)",
      "Design a conversational user interface"
    ],
    technologies: ["Python", "Chatbot Frameworks", "OpenAI API Basics"],
    expectedOutcome: "A functional command-line or web-based chatbot capable of handling 50+ study questions.",
    workflow: [
      "Define the subject matter and intent map",
      "Write the Python logic for the chatbot",
      "Integrate an LLM for conversational fallback",
      "Test with classmates and refine responses"
    ],
    image: "chatbot"
  },
  {
    id: "attendance-system",
    title: "Face Recognition Attendance",
    category: "Intermediate",
    level: "Class 8 & 9",
    difficulty: "Medium",
    overview: "A computer vision system that uses a webcam to recognize student faces and automatically log their attendance in a digital spreadsheet.",
    learningObjectives: [
      "Understand the basics of Computer Vision",
      "Use pre-trained AI models for face detection",
      "Work with external libraries and CSV files in Python"
    ],
    technologies: ["Python", "OpenCV", "Teachable Machine", "Pandas"],
    expectedOutcome: "A working Python script that detects faces and updates an attendance list.",
    workflow: [
      "Collect and label image data",
      "Train a face recognition model",
      "Write a Python script to capture webcam feed",
      "Log recognized names with timestamps"
    ],
    image: "attendance"
  },
  {
    id: "weather-prediction",
    title: "Weather Prediction Model",
    category: "Advanced",
    level: "Class 10-12",
    difficulty: "Hard",
    overview: "A machine learning model that predicts the temperature and chance of rain for the next day based on historical weather dataset.",
    learningObjectives: [
      "Data cleaning and preprocessing using Pandas",
      "Train a linear regression and classification model",
      "Evaluate model accuracy and error rates"
    ],
    technologies: ["Python", "Scikit-Learn", "NumPy", "Matplotlib"],
    expectedOutcome: "A trained ML model and a simple visual dashboard showing predictions.",
    workflow: [
      "Download historical weather data",
      "Clean data and handle missing values",
      "Train a regression model",
      "Visualize the predictions against real data"
    ],
    image: "weather"
  },
  {
    id: "healthcare-assistant",
    title: "AI Healthcare Assistant",
    category: "Advanced",
    level: "Class 10-12",
    difficulty: "Hard",
    overview: "A predictive model and chatbot interface designed to analyze basic symptoms and predict the likelihood of common ailments based on a medical dataset.",
    learningObjectives: [
      "Work with sensitive categorical datasets",
      "Implement classification algorithms (Random Forest, SVM)",
      "Deploy a machine learning app to the web"
    ],
    technologies: ["Python", "Scikit-Learn", "Streamlit", "Gradio"],
    expectedOutcome: "A deployed web application where users can input symptoms and see predictions.",
    workflow: [
      "Process medical symptom dataset",
      "Train a classification model",
      "Build a web interface using Streamlit",
      "Deploy the app to a public URL"
    ],
    image: "healthcare"
  }
];
