import ProjectCard from '../components/ProjectCard'

export default function Projects() {
  return (
    <section className="projects">
      <h1 className="page-title">
        Projects<span className="neon-dot">.</span>
      </h1>

      <p className="projects-lead">
        A collection of projects where I explored real-world problems using
        machine learning, computer vision, IoT, and full-stack development.
      </p>

      <div className="projects-grid">
        <ProjectCard
          title="Adaptive Matrix LED Headlights for Cars"
          desc="Designed a real-time vehicle detection system using YOLO and OpenCV to dynamically control an LED matrix. Integrated Raspberry Pi, Flask APIs, and grid-based coordinate mapping to reduce glare for oncoming drivers."
          url="/projects/smartbeamx"
          tags={['Computer Vision', 'YOLO', 'Raspberry Pi', 'OpenCV', 'Flask']}
        />

        <ProjectCard
          title="Real-Time Violence Detection System"
          desc="Built a deep learning–based system that analyzes live camera feeds to detect violent activity. Implemented a full-stack dashboard with React and Node, including real-time alerts and an SOS trigger."
          url="/projects/violence-detection"
          tags={['Deep Learning', 'Computer Vision', 'React', 'Node.js']}
        />

        <ProjectCard
          title="SmartStayAI — Pricing Recommendation Engine"
          desc="Developed an ML-powered decision-support system for short-term rental pricing. Combined predictive modeling with a full-stack architecture to deliver actionable insights to users."
          url="#"
          tags={['Machine Learning', 'Full-Stack', 'Analytics']}
        />

        <ProjectCard
          title="IoT-Based Smart Water Recycling System"
          desc="Proposed and designed an IoT solution to monitor, recycle, and reuse household water. Focused on sustainability, sensor integration, and embedded system design."
          url="#"
          tags={['IoT', 'Embedded Systems', 'Sustainability']}
        />

        <ProjectCard
          title="Atmospheric Water Generator"
          desc="Engineered a system using thermoelectric (Peltier) devices to generate water from atmospheric humidity by operating below the dew point. Applied core thermodynamics and heat transfer principles."
          url="#"
          tags={['Thermodynamics', 'Embedded Systems', 'Sustainability']}
        />

        <ProjectCard
          title="LeetCode Helper Chrome Extension"
          desc="Created a browser extension that provides hints, solutions, and performance tips for LeetCode problems. Utilized JavaScript, React, and Chrome Extension APIs to enhance the problem-solving experience."
          url="/projects/leetcode-helper"
          tags={['JavaScript', 'React', 'Chrome Extension']}
        />
      </div>
    </section>
  )
}
