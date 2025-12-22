export default function ViolenceDetection() {
    return (
        <section className="project-page">
            <h1 className="page-title">
                Violence Detection<span className="neon-dot">.</span>
            </h1>
            <p className="project-subtitle">
                A tool to help you solve LeetCode problems faster.
            </p>
            
            <div className="project-section">
                <h2>Overview</h2>
                <p>
                    Violence Detection is a deep learning-based system that analyzes live camera feeds to detect violent activity. It includes a full-stack dashboard with React and Node.js, featuring real-time alerts and an SOS trigger.
                </p>
            </div>

            <div className="project-section">
                <h2>Tech Stack</h2>
                <ul>
                    <li>Python</li>
                    <li>TensorFlow/PyTorch</li>
                    <li>React</li>
                    <li>Node.js</li>
                    <li>OpenCV</li>
                    <li>WebSockets for real-time communication</li>
                </ul>
            </div>

            <div className="project-section">
                <h2>How it works</h2>
                <p>
                    The system uses a convolutional neural network (CNN) trained on a dataset of violent and non-violent activities. It processes video frames in real-time, extracting features and classifying them to detect potential violence. When violent activity is detected, the system sends alerts to the dashboard and can trigger an SOS signal if necessary.
                </p>
            </div>

            <div className="project-section">
                <h2>Challenges and Learnings</h2>
                <ul>
                    <li>Collecting and preprocessing a diverse dataset for training the model.</li>
                    <li>Optimizing the model for real-time performance without sacrificing accuracy.</li>
                    <li>Designing a user-friendly dashboard for monitoring and alerts.</li>
                    <li>Implementing secure and reliable real-time communication between the backend and frontend.</li>
                    <li>Handling false positives in dynamic environments.</li>
                </ul>
            </div>

            <div className="project-links">
                <a href='https://github.com/coralFallacy1011/dtl' target="_blank">
                    GitHub Repository -&gt;
                </a>
                <a href="https://safeguard-ai.onrender.com/" target="_blank">
                    Live Demo -&gt;
                </a>
            </div>
        </section>
    )
}