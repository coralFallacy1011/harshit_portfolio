export default function ViolenceDetection() {
  return (
    <section className="project-page">
      <h1 className="page-title">
        Safeguard-AI<span className="neon-dot">.</span>
      </h1>

      <p className="project-subtitle">
        Real-time violence detection system using deep learning for proactive
        surveillance and safety monitoring.
      </p>

      {/* OVERVIEW */}
      <div className="project-section">
        <h2>Overview</h2>
        <p>
          Safeguard-AI is a deep learning–based system designed to detect violent
          behavior in video streams. The project focuses on analyzing
          spatiotemporal patterns in human activity to identify potentially
          violent situations in real time.
        </p>
        <p>
          The system is built as a full pipeline — from video preprocessing and
          model inference to real-time visualization through a web dashboard.
        </p>
      </div>

      {/* TECH STACK */}
      <div className="project-section">
        <h2>Tech Stack</h2>
        <ul>
          <li>Python</li>
          <li>TensorFlow (Deep Learning)</li>
          <li>CNN-LSTM architecture</li>
          <li>OpenCV (Video preprocessing)</li>
          <li>Flask (Backend API)</li>
          <li>React (Frontend dashboard)</li>
        </ul>
      </div>

      {/* MODEL & APPROACH */}
      <div className="project-section">
        <h2>Model & Approach</h2>
        <p>
          The core of the system is a <strong>CNN-LSTM architecture</strong>
          designed to capture both spatial and temporal information from video
          sequences.
        </p>
        <ul>
          <li>
            CNN layers extract spatial features from individual video frames.
          </li>
          <li>
            LSTM layers model temporal dependencies across consecutive frames.
          </li>
          <li>
            This combination enables the model to distinguish between isolated
            actions and sustained violent behavior.
          </li>
        </ul>
      </div>

      {/* DATA PREPROCESSING */}
      <div className="project-section">
        <h2>Data Preprocessing</h2>
        <p>
          Video data is preprocessed using OpenCV to prepare it for efficient
          model training and inference.
        </p>
        <ul>
          <li>Frame extraction from video sequences</li>
          <li>Normalization and resizing</li>
          <li>Data augmentation to improve generalization</li>
        </ul>
      </div>

      {/* PERFORMANCE */}
      <div className="project-section">
        <h2>Performance & Evaluation</h2>
        <p>
          The model was evaluated using standard classification metrics to ensure
          reliable detection performance.
        </p>
        <ul>
          <li>Precision, Recall, and F1-Score</li>
          <li>Balanced performance across violent and non-violent classes</li>
          <li>Optimized for real-time inference</li>
        </ul>
      </div>

      {/* CHALLENGES */}
      <div className="project-section">
        <h2>Challenges & Learnings</h2>
        <ul>
          <li>
            Handling temporal context to reduce false positives in dynamic
            environments.
          </li>
          <li>
            Balancing model accuracy with real-time performance constraints.
          </li>
          <li>
            Designing an end-to-end pipeline from video input to UI alerts.
          </li>
          <li>
            Understanding ethical considerations in surveillance-based AI
            systems.
          </li>
        </ul>
      </div>

      {/* LINKS */}
      <div className="project-links">
        <a
          href="https://github.com/coralFallacy1011/dtl"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub Repository →
        </a>
        <a
          href="https://safeguard-ai.onrender.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Live Demo →
        </a>
      </div>
    </section>
  )
}
