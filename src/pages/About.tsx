export default function About() {
  return (
    <section className="about">
      <h1 className="page-title">
        About Me <span className="neon-dot">.</span>
      </h1>

      <p className="about-lead">
        I’m an engineering student who likes to build things that actually work —
        not just slides, not just theory, but systems you can run, test, and break.
      </p>

      <div className="about-block">
        <h2>How I Think</h2>
        <p>
          I don’t claim to be an expert in everything. In fact, I’m a classic
          <strong> jack of all trades — master of none (yet)</strong>.
          But what I do have is strong fundamentals, curiosity, and the ability
          to learn fast when a problem demands it.
        </p>
        <p>
          I enjoy understanding systems end-to-end — from how data is generated,
          how models process it, how hardware reacts, and how users finally
          interact with it through an interface.
        </p>
      </div>

      <div className="about-block">
        <h2>What I Build</h2>
        <ul>
          <li>Real-time computer vision & ML systems</li>
          <li>Full-stack applications (React, Node, APIs)</li>
          <li>IoT & embedded integrations using Raspberry Pi / microcontrollers</li>
          <li>Engineering projects with real-world constraints</li>
        </ul>
      </div>

      <div className="about-block">
        <h2>Beyond Code</h2>
        <p>
          Apart from building projects, I actively participate in hackathons,
          college tech events, and coding communities. I’ve helped organize events,
          mentored juniors, and worked in teams where communication mattered as
          much as technical skill.
        </p>
        <p>
          I believe good engineers are not just good coders — they are good
          collaborators.
        </p>
      </div>

      <div className="about-ending">
        <p>
          Right now, I’m focused on learning, building, and improving every day.
          If you’re looking for someone who is adaptable, curious, and ready to
          grow into responsibility —
        </p>
        <p className="highlight">
          I’d love to be part of your team.
        </p>
      </div>
    </section>
  )
}
