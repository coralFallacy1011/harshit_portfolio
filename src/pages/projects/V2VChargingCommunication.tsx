export default function V2VChargingCommunication() {
  return (
    <section className="project-page">
      <h1 className="page-title">
        Vehicle-to-Vehicle Charging & Communication<span className="neon-dot">.</span>
      </h1>

      <p className="project-subtitle">
        A decentralized system enabling vehicle-to-vehicle energy sharing using
        real-time communication and smart negotiation protocols.
      </p>

      {/* OVERVIEW */}
      <div className="project-section">
        <h2>Overview</h2>
        <p>
          This project explores a Vehicle-to-Vehicle (V2V) charging and
          communication framework where electric vehicles can directly exchange
          energy without relying solely on centralized charging infrastructure.
        </p>
        <p>
          The goal is to enable flexible, peer-to-peer energy sharing during
          emergencies, low-charge scenarios, or in regions with limited charging
          availability.
        </p>
      </div>

      {/* SYSTEM ARCHITECTURE */}
      <div className="project-section">
        <h2>System Architecture</h2>
        <p>
          The system is designed as a distributed architecture involving
          embedded nodes, a communication broker, and energy transfer control
          logic.
        </p>
        <ul>
          <li>
            Each vehicle is equipped with an embedded controller responsible for
            energy monitoring and communication.
          </li>
          <li>
            A central coordination node (Raspberry Pi) acts as a message broker
            and system orchestrator during the prototype phase.
          </li>
          <li>
            Vehicles communicate using lightweight messaging protocols to
            exchange status and negotiation data.
          </li>
        </ul>
      </div>

      {/* COMMUNICATION PROTOCOL */}
      <div className="project-section">
        <h2>Communication Protocol</h2>
        <p>
          A structured messaging protocol was designed to enable reliable and
          extensible communication between vehicles.
        </p>
        <ul>
          <li>Status updates (battery level, availability)</li>
          <li>Discovery requests and responses</li>
          <li>Negotiation messages for energy exchange</li>
          <li>Coordination and confirmation messages</li>
        </ul>
        <p>
          Communication is implemented using a publish-subscribe model to ensure
          scalability and low latency.
        </p>
      </div>

      {/* ENERGY TRANSFER LOGIC */}
      <div className="project-section">
        <h2>Energy Transfer Logic</h2>
        <p>
          Each node continuously monitors its battery state and determines
          whether it can act as an energy provider or consumer.
        </p>
        <ul>
          <li>
            Safety checks to prevent over-discharge or unsafe energy transfer
          </li>
          <li>
            Threshold-based decision making for charging eligibility
          </li>
          <li>
            Controlled relay or power interface for prototype-level energy flow
          </li>
        </ul>
      </div>

      {/* TECH STACK */}
      <div className="project-section">
        <h2>Tech Stack</h2>
        <ul>
          <li>ESP32 (Vehicle nodes)</li>
          <li>Raspberry Pi (Coordinator / Broker)</li>
          <li>MQTT / HTTP (Communication)</li>
          <li>Python (Backend logic)</li>
          <li>Embedded C / Arduino framework</li>
        </ul>
      </div>

      {/* CHALLENGES */}
      <div className="project-section">
        <h2>Challenges & Learnings</h2>
        <ul>
          <li>
            Designing reliable communication between multiple mobile nodes
          </li>
          <li>
            Synchronizing energy negotiation and confirmation steps
          </li>
          <li>
            Ensuring safety constraints in energy-sharing scenarios
          </li>
          <li>
            Understanding real-world limitations of decentralized energy
            systems
          </li>
        </ul>
      </div>

      {/* FUTURE SCOPE */}
      <div className="project-section">
        <h2>Future Scope</h2>
        <ul>
          <li>
            Fully decentralized peer-to-peer communication without a central
            broker
          </li>
          <li>
            Secure authentication and encryption between vehicles
          </li>
          <li>
            Integration with mobile applications for user consent and tracking
          </li>
          <li>
            Support for real-world EV battery management systems
          </li>
        </ul>
      </div>

      {/* STATUS */}
      <div className="project-section">
        <h2>Current Status</h2>
        <p>
          This project is currently under active development, with a working
          prototype demonstrating multi-node communication and simulated
          energy-sharing workflows.
        </p>
      </div>

      {/* LINKS */}
      {/* <div className="project-links">
        <a href="#" target="_blank" rel="noopener noreferrer">
          GitHub Repository →
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          Demo / Prototype →
        </a>
      </div> */}
    </section>
  )
}
