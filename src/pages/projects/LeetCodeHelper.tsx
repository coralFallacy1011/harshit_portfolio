export default function LeetCodeHelper() {
  return (
    <section className="project-page">
      <h1 className="page-title">
        LeetCode Helper <span className="neon-dot">.</span>
      </h1>

      <p className="project-subtitle">
        A browser-based assistant designed to guide users through LeetCode
        problems by providing structured hints and problem-solving approaches.
      </p>

      {/* OVERVIEW */}
      <div className="project-section">
        <h2>Overview</h2>
        <p>
          LeetCode Helper is a browser extension aimed at improving the learning
          experience of users practicing data structures and algorithms on the
          LeetCode platform. Instead of directly revealing solutions, the tool
          focuses on offering <strong>conceptual guidance</strong>, helping users
          think in the right direction.
        </p>
        <p>
          The goal of this project is to reduce friction during problem-solving
          while still encouraging independent thinking and skill development.
        </p>
      </div>

      {/* TECH STACK */}
      <div className="project-section">
        <h2>Tech Stack</h2>
        <ul>
          <li>JavaScript</li>
          <li>React</li>
          <li>Chrome Extension APIs</li>
          <li>Backend APIs (planned)</li>
        </ul>
      </div>

      {/* HOW IT WORKS */}
      <div className="project-section">
        <h2>How It Works</h2>
        <p>
          The extension reads the problem statement directly from the LeetCode
          page and processes key information such as constraints, input-output
          patterns, and problem category.
        </p>
        <p>
          Based on this analysis, the system generates <strong>high-level hints</strong>,
          recommended `approaches, and algorithmic strategies that guide the user
          toward an efficient solution without exposing full code implementations.
        </p>
      </div>

      {/* STATUS */}
      <div className="project-section">
        <h2>Current Status</h2>
        <p>
          This project is currently <strong>under active development</strong>.
          The core browser extension and basic hint-generation workflow have been
          implemented and tested.
        </p>
      </div>

      {/* FUTURE WORK */}
      <div className="project-section">
        <h2>Future Enhancements</h2>
        <ul>
          <li>
            User authentication and login system to enable personalized
            experiences.
          </li>
          <li>
            Customized hints and guidance based on user skill level and past
            performance.
          </li>
          <li>
            Improved context awareness for different problem categories
            (DP, graphs, trees, etc.).
          </li>
          <li>
            Analytics to help users track learning progress over time.
          </li>
        </ul>
      </div>

      {/* CHALLENGES */}
      <div className="project-section">
        <h2>Challenges & Learnings</h2>
        <ul>
          <li>
            Handling LeetCode’s dynamically rendered content inside a browser
            extension environment.
          </li>
          <li>
            Designing guidance that is helpful without encouraging dependency.
          </li>
          <li>
            Balancing performance with real-time content analysis.
          </li>
        </ul>
      </div>

      {/* LINKS */}
      <div className="project-links">
        <a
          href="https://github.com/coralFallacy1011/leetcode-extension"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub Repository →
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          Demo (Coming Soon) →
        </a>
      </div>
    </section>
  )
}
