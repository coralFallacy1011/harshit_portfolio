export default function SmartBeamX() {
  return (
    <section className="project-page">
      <h1 className="page-title">
        SmartBeamX<span className="neon-dot">.</span>
      </h1>

      <p className="project-subtitle">
        Adaptive matrix LED headlight system using real-time computer vision and
        embedded control to reduce glare for oncoming vehicles.
      </p>

      {/* OVERVIEW */}
      <div className="project-section">
        <h2>Overview</h2>
        <p>
          SmartBeamX is an intelligent automotive lighting system designed to
          dynamically control a headlight’s LED matrix based on real-time road
          conditions. The primary objective of the system is to maintain optimal
          road illumination while selectively dimming LEDs that would otherwise
          cause glare for oncoming drivers.
        </p>
        <p>
          The project combines <strong>computer vision, embedded systems, and
          low-latency communication</strong> to achieve adaptive beam control in
          real-world driving scenarios.
        </p>
      </div>

      {/* SYSTEM ARCHITECTURE */}
      <div className="project-section">
        <h2>System Architecture</h2>
        <p>
          The system is built around a hybrid architecture where vision
          processing and decision-making are handled on a Raspberry Pi, while
          real-time actuation is performed by microcontrollers.
        </p>
        <ul>
          <li>
            A Pi Camera captures the live road feed, which is processed using
            OpenCV-based computer vision algorithms.
          </li>
          <li>
            Detected vehicle positions are mapped onto an <strong>8×16 LED
            matrix grid</strong>, corresponding to the physical PCB layout.
          </li>
          <li>
            Control commands are transmitted to embedded controllers for precise
            LED actuation.
          </li>
        </ul>
      </div>

      {/* TECH STACK */}
      <div className="project-section">
        <h2>Tech Stack</h2>
        <ul>
          <li>Python, OpenCV (Computer Vision)</li>
          <li>YOLO-based vehicle detection</li>
          <li>Raspberry Pi with Pi Camera</li>
          <li>STM32 & Arduino (Embedded Control)</li>
          <li>Custom 8×16 LED Matrix PCB</li>
          <li>Flask-based IoT API</li>
        </ul>
      </div>

      {/* HOW IT WORKS */}
      <div className="project-section">
        <h2>How It Works</h2>
        <p>
          The camera feed is continuously analyzed to detect oncoming vehicles
          in real time. Once a vehicle is detected, its bounding box coordinates
          are translated into corresponding LED matrix zones.
        </p>
        <p>
          LEDs that fall within the detected vehicle region are selectively
          dimmed, while the remaining LEDs continue to illuminate the road. This
          approach ensures glare reduction without compromising overall
          visibility.
        </p>
      </div>

      {/* COMMUNICATION */}
      <div className="project-section">
        <h2>Communication & Control</h2>
        <p>
          Efficient and low-latency communication between the Raspberry Pi and
          microcontrollers was critical to the system’s performance.
        </p>
        <ul>
          <li>
            Designed custom communication protocols between the Pi and
            STM32/Arduino controllers.
          </li>
          <li>
            Ensured fast response times to support real-time LED updates.
          </li>
          <li>
            Implemented a lightweight Flask-based API for testing, monitoring,
            and remote configuration.
          </li>
        </ul>
      </div>

      {/* CHALLENGES */}
      <div className="project-section">
        <h2>Challenges & Learnings</h2>
        <ul>
          <li>
            Running real-time computer vision on resource-constrained hardware.
          </li>
          <li>
            Accurate coordinate mapping between camera space and LED matrix
            layout.
          </li>
          <li>
            Minimizing latency across vision, communication, and actuation
            layers.
          </li>
          <li>
            Bridging the gap between software perception and hardware control.
          </li>
        </ul>
      </div>

      {/* LINKS */}
      <div className="project-links">
        <a
          href="https://github.com/coralFallacy1011/EL_SEM3"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub Repository →
        </a>
      </div>
    </section>
  )
}
