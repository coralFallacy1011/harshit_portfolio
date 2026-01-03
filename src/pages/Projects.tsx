import ProjectCard from '../components/ProjectCard'

export default function Projects() {
  return (
    <section className="projects">
      <h1 className="page-title">
        Projects<span className="neon-dot">.</span>
      </h1>

      <p className="projects-lead">
        A collection of projects spanning software systems, machine learning,
        computer vision, and hardware-driven engineering solutions.
      </p>

      {/* ================= SOFTWARE PROJECTS ================= */}
      <h2 className="projects-section-title">Software Projects</h2>

      <div className="projects-grid">
        <ProjectCard
          title="SafeguardAI"
          desc="Deep learning–based system for real-time violence detection using CNN-LSTM architecture with a live monitoring dashboard."
          url="/projects/violence-detection"
          tags={['Deep Learning', 'Computer Vision', 'React', 'Flask']}
        />

        <ProjectCard
          title="LeetCode Helper Chrome Extension"
          desc="Browser extension that provides structured hints and algorithmic guidance for LeetCode problems."
          url="/projects/leetcode-helper"
          tags={['JavaScript', 'React', 'Chrome Extension']}
        />

        <ProjectCard
          title="Job Mil Jaye SimSim"
          desc="NLP and ML-powered job recommendation platform that matches user profiles with relevant roles and skill suggestions."
          url="/projects/job-mil-jaye-simsim"
          tags={['TypeScript', 'NLP', 'Machine Learning']}
        />

        <ProjectCard
          title="Autism Risk Screening using ML"
          desc="Machine learning–based screening tool using ensemble models to assess autism risk from questionnaire responses."
          url="/projects/autism-risk-screening"
          tags={['Machine Learning', 'Ensemble Models', 'Healthcare']}
        />
      </div>

      {/* ================= HARDWARE / SYSTEMS PROJECTS ================= */}
      <h2 className="projects-section-title">Hardware & Systems Projects</h2>

      <div className="projects-grid">
        <ProjectCard
          title="SmartBeamX"
          desc="Adaptive matrix LED headlight system using real-time vehicle detection and embedded control to reduce glare."
          url="/projects/smartbeamx"
          tags={['Computer Vision', 'Embedded Systems', 'Raspberry Pi', 'STM32']}
        />

        <ProjectCard
          title="Atmospheric Water Generator"
          desc="Thermoelectric-based system using Peltier devices to extract water from atmospheric humidity."
          url="/projects/atmospheric-water-generator"
          tags={['Thermodynamics', 'Embedded Systems', 'Sustainability']}
        />

        <ProjectCard
          title="IoT Geyser Dry-Run Protection"
          desc="Safety-critical embedded and IoT system to prevent dry-run and overheating in electric geysers."
          url="/projects/iot-geyser-protection"
          tags={['IoT', 'Embedded Systems', 'STM32', 'ESP32']}
        />

        <ProjectCard
          title="V2V Charging & Communication"
          desc="Prototype framework enabling vehicle-to-vehicle energy sharing using real-time communication and negotiation protocols."
          url="/projects/v2v-charging-communication"
          tags={['V2V Communication', 'Electric Vehicles', 'Embedded Systems']}
        />
      </div>
    </section>
  )
}
