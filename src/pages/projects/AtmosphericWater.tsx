import ProjectGallery from '../../components/ProjectGallery'

export default function AtmosphericWaterGenerator() {
  return (
    <section className="project-page">
      <h1 className="page-title">
        Atmospheric Water Generator<span className="neon-dot">.</span>
      </h1>

      <p className="project-subtitle">
        Water generation from atmospheric humidity using thermoelectric cooling
        based on fundamental heat transfer and solid-state physics.
      </p>

      {/* OVERVIEW */}
      <div className="project-section">
        <h2>Overview</h2>
        <p>
          The Atmospheric Water Generator (AWG) is an engineering project aimed at
          addressing water scarcity by extracting moisture directly from humid
          ambient air. The system operates by cooling air below its dew point,
          causing water vapor to condense into liquid water.
        </p>
        <p>
          This project uses <strong>thermoelectric Peltier devices</strong> to
          achieve the required temperature drop in a compact, solid-state, and
          environmentally friendly manner.
        </p>
      </div>

      <ProjectGallery
        images={[
          '/projects/awg/img1.jpeg',
          '/projects/awg/img2.jpeg',
          '/projects/awg/img3.jpeg',
          '/projects/awg/img4.jpeg',
        ]}
      />

      {/* PHYSICS & PRINCIPLES */}
      <div className="project-section">
        <h2>Physics & Working Principles</h2>
        <p>
          The core working principle of the AWG is based on thermoelectric
          phenomena and basic thermodynamics:
        </p>
        <ul>
          <li>
            <strong>Peltier Effect (Reverse Seebeck Effect):</strong> When an
            electric current is passed through a junction of two dissimilar
            semiconductor materials, heat is absorbed at one junction and
            released at the other. This creates a cold side and a hot side,
            enabling active cooling.
          </li>
          <li>
            <strong>Reverse Thermoelectric Effect:</strong> Electrical energy is
            converted directly into a temperature gradient without any moving
            parts, making the system reliable and maintenance-free.
          </li>
          <li>
            <strong>Dew Point Condensation:</strong> When humid air comes in
            contact with the cold surface (below the dew point temperature),
            water vapor condenses into liquid droplets.
          </li>
          <li>
            <strong>Heat Transfer:</strong> Efficient heat dissipation from the
            hot side using heat sinks and forced convection is critical to
            maintaining a sufficient temperature difference.
          </li>
        </ul>
      </div>

      {/* SYSTEM DESIGN */}
      <div className="project-section">
        <h2>System Design</h2>
        <p>
          The system consists of a Peltier module sandwiched between a cold plate
          and a heat sink. The cold plate acts as the condensation surface, while
          the heat sink removes excess heat from the hot side.
        </p>
        <p>
          A fan-assisted airflow mechanism directs humid air towards the cold
          surface, improving condensation efficiency. Collected water is then
          guided into a storage container.
        </p>
      </div>

      {/* CHALLENGES */}
      <div className="project-section">
        <h2>Challenges & Learnings</h2>
        <ul>
          <li>
            Achieving temperatures below the dew point while managing the high
            power consumption of Peltier devices.
          </li>
          <li>
            Efficient thermal management to prevent heat buildup on the hot
            side.
          </li>
          <li>
            Understanding the trade-off between humidity levels, temperature
            difference, and water yield.
          </li>
          <li>
            Practical application of thermodynamics, heat transfer, and solid-
            state physics concepts.
          </li>
        </ul>
      </div>

      {/* LINKS */}
      {/* <div className="project-links">
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Project Documentation →
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Demo / Images →
        </a>
      </div> */}
    </section>
  )
}
