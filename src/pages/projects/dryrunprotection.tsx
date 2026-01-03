export default function IoTGeyserProtection() {
  return (
    <section className="project-page">
      <h1 className="page-title">
        IoT-Based Geyser Protection & Dry Run Prevention
        <span className="neon-dot">.</span>
      </h1>

      <p className="project-subtitle">
        Embedded and IoT-based safety system to prevent dry-run and overheating
        in electric geysers using real-time sensing and control.
      </p>

      {/* OVERVIEW */}
      <div className="project-section">
        <h2>Overview</h2>
        <p>
          This project focuses on improving the safety and reliability of
          domestic electric geysers by preventing dry-run and overheating
          conditions. Dry-run operation, where the heating element is powered
          without sufficient water, can lead to severe damage and safety risks.
        </p>
        <p>
          The system continuously monitors water level and temperature, and
          intelligently controls the heating element based on real-time sensor
          feedback.
        </p>
      </div>

      {/* SYSTEM ARCHITECTURE */}
      <div className="project-section">
        <h2>System Architecture</h2>
        <p>
          The solution is built around a dual-controller architecture, combining
          deterministic embedded control with IoT-based monitoring.
        </p>
        <ul>
          <li>
            An <strong>STM32 microcontroller</strong> handles real-time sensing
            and relay control for the heating element.
          </li>
          <li>
            An <strong>ESP32 module</strong> acts as a communication bridge,
            transmitting data to a web interface for monitoring and control.
          </li>
        </ul>
      </div>

      {/* TECH STACK */}
      <div className="project-section">
        <h2>Tech Stack</h2>
        <ul>
          <li>STM32 (Embedded C)</li>
          <li>ESP32 (IoT communication)</li>
          <li>One-Wire Protocol (Temperature sensing)</li>
          <li>UART communication between controllers</li>
          <li>Relay-based power control</li>
          <li>Web-based dashboard</li>
        </ul>
      </div>

      {/* HOW IT WORKS */}
      <div className="project-section">
        <h2>How It Works</h2>
        <p>
          A float-type water level sensor is used to detect the presence of
          sufficient water inside the geyser tank. Simultaneously, a
          temperature sensor using the One-Wire protocol monitors the water
          temperature in real time.
        </p>
        <p>
          Based on these inputs, the STM32 executes control logic to safely
          switch the heating element via a relay. If a dry-run or overheating
          condition is detected, the system immediately cuts off power to
          prevent damage.
        </p>
      </div>

      {/* IOT & DASHBOARD */}
      <div className="project-section">
        <h2>IoT Monitoring & Control</h2>
        <p>
          Sensor data and system status are transmitted from the STM32 to the
          ESP32 over UART. The ESP32 publishes this information to a web-based
          dashboard.
        </p>
        <ul>
          <li>Real-time monitoring of water level and temperature</li>
          <li>Remote configuration of safety thresholds</li>
          <li>Manual override and system status visualization</li>
        </ul>
      </div>

      {/* CHALLENGES */}
      <div className="project-section">
        <h2>Challenges & Learnings</h2>
        <ul>
          <li>
            Designing fail-safe embedded logic for a safety-critical appliance.
          </li>
          <li>
            Reliable sensor interfacing and noise handling in real-world
            conditions.
          </li>
          <li>
            Ensuring robust UART communication between STM32 and ESP32.
          </li>
          <li>
            Bridging low-level embedded control with a high-level IoT interface.
          </li>
        </ul>
      </div>

      {/* LINKS */}
      {/* <div className="project-links">
        <a href="#" target="_blank" rel="noopener noreferrer">
          GitHub Repository →
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          Demo / Dashboard →
        </a>
      </div> */}
    </section>
  )
}
