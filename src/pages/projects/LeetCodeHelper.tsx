export default function LeetCodeHelper() {
    return (
        <section className="project-page">
            <h1 className="page-title">
                LeetCode_Helper<span className="neon-dot">.</span>
            </h1>
            <p className="project-subtitle">
                A tool to help you solve LeetCode problems faster.
            </p>
            
            <div className="project-section">
                <h2>Overview</h2>
                <p>
                    LeetCode Helper is a browser extension that provides hints, solutions, and performance tips for LeetCode problems. It integrates seamlessly with the LeetCode platform to enhance your problem-solving experience.
                </p>
            </div>

            <div className="project-section">
                <h2>Tech Stack</h2>
                <ul>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Chrome Extension APIs</li>
                </ul>
            </div>

            <div className="project-section">
                <h2>How it works</h2>
                <p>
                    LeetCode Helper works by analyzing the current problem and providing contextual hints and solutions. It uses a combination of machine learning algorithms and pre-defined patterns to offer insights that help you solve problems more efficiently.
                </p>
            </div>

            <div className="project-section">
                <h2>Challenges and Learnings</h2>
                <ul>
                    <li>Integrating with LeetCode's dynamic content and ensuring compatibility with various problem types.</li>
                    <li>Designing an intuitive user interface that provides value without overwhelming the user.</li>
                    <li>Implementing efficient algorithms to analyze problems in real-time.</li>
                </ul>
            </div>

            <div className="project-links">
                <a href='https://github.com/coralFallacy1011/leetcode-extension' target="_blank">
                    GitHub Repository -&gt;
                </a>
                <a href="#" target="_blank">
                    Live Demo -&gt;
                </a>
            </div>
        </section>
    )
}