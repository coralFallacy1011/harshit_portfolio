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
          title="SmartBeamX"
          desc="Designed a real-time vehicle detection system using YOLO and OpenCV to dynamically control an LED matrix. Integrated Raspberry Pi, Flask APIs, and grid-based coordinate mapping to reduce glare for oncoming drivers."
          url="/projects/smartbeamx"
          tags={['Computer Vision', 'YOLO', 'Raspberry Pi', 'OpenCV', 'Flask']}
        />

        <ProjectCard
          title="SafeguardAI"
          desc="Built a deep learning–based system that analyzes live camera feeds to detect violent activity. Implemented a full-stack dashboard with React and Node, including real-time alerts and an SOS trigger."
          url="/projects/violence-detection"
          tags={['Deep Learning', 'Computer Vision', 'React', 'Node.js']}
        />

        <ProjectCard
          title="Atmospheric Water Generator"
          desc="Engineered a system using thermoelectric (Peltier) devices to generate water from atmospheric humidity by operating below the dew point. Applied core thermodynamics and heat transfer principles."
          url="/projects/atmospheric-water-generator"
          tags={['Thermodynamics', 'Embedded Systems', 'Sustainability']}
        />

        <ProjectCard
          title="LeetCode Helper Chrome Extension"
          desc="Created a browser extension that provides hints, solutions, and performance tips for LeetCode problems. Utilized JavaScript, React, and Chrome Extension APIs to enhance the problem-solving experience."
          url="/projects/leetcode-helper"
          tags={['JavaScript', 'React', 'Chrome Extension']}
        />

        <ProjectCard
          title="Job Mil Jaye SimSim"
          desc="Developed a full-stack job portal connecting job seekers with employers. Implemented features like resume uploads, job recommendations, and application tracking using MERN stack technologies."
          url="/projects/job-mil-jaye-simsim"
          tags={['MERN Stack', 'Full-Stack Development', 'Job Portal']}
        />

        <ProjectCard
          title="IoT Geyser Dry-Run Protection"
          desc="Designed an IoT-based system to prevent dry-run conditions in geysers using water level sensors and microcontrollers. Developed a web dashboard for real-time monitoring and alerts."
          url="/projects/iot-geyser-protection"
          tags={['IoT', 'Embedded Systems', 'Web Dashboard']}
        />

        <ProjectCard
          title="Autism Risk Screening using ML"
          desc="Built a machine learning system to assess autism risk from questionnaire responses. Trained ensemble models for improved accuracy and interpretability."
          url="/projects/autism-risk-screening"
          tags={['Machine Learning', 'Ensemble Models', 'Healthcare']}
        />

        <ProjectCard
          title="V2V Charging & Communication"
          desc="Researched vehicle-to-vehicle wireless charging and communication protocols. Proposed a framework for dynamic power transfer and data exchange between electric vehicles."
          url="/projects/v2v-charging-communication"
          tags={['Wireless Charging', 'V2V Communication', 'Electric Vehicles']}
        />
      </div>
    </section>
  )
}
