export default function SmartBeamX() {
  return (
    <section className="project-page">
      <h1 className="page-title">
        SmartBeamX<span className="neon-dot">.</span>
      </h1>

      <p className="project-subtitle">
        Real-time computer vision system to reduce glare for oncoming vehicles.
      </p>

      {/* OVERVIEW */}
      <div className="project-section">
        <h2>Overview</h2>
        <p>
          This project focuses on dynamically controlling an LED headlight matrix
          using real-time vehicle detection. The goal is to maintain road
          illumination while preventing glare for oncoming drivers.
        </p>
      </div>

      {/* TECH STACK */}
      <div className="project-section">
        <h2>Tech Stack</h2>
        <ul>
          <li>Python, OpenCV</li>
          <li>YOLO for vehicle detection</li>
          <li>Raspberry Pi</li>
          <li>Flask for data communication</li>
        </ul>
      </div>

      {/* HOW IT WORKS */}
      <div className="project-section">
        <h2>How It Works</h2>
        <p>
          The camera feed is processed in real time using YOLO. Detected vehicle
          coordinates are mapped onto a grid corresponding to the LED matrix,
          allowing selective dimming of LEDs.
        </p>
      </div>

      {/* CHALLENGES */}
      <div className="project-section">
        <h2>Challenges & Learnings</h2>
        <ul>
          <li>Optimizing real-time detection on limited hardware</li>
          <li>Handling false positives in dynamic environments</li>
          <li>Designing efficient coordinate-mapping logic</li>
        </ul>
      </div>

      {/* LINKS */}
      <div className="project-links">
        <a href="https://github.com/coralFallacy1011/EL_SEM3" target="_blank">
          GitHub Repository →
        </a>
        {/* <a href="#" target="_blank">
          Demo / Video →
        </a> */}
      </div>
    </section>
  )
}
