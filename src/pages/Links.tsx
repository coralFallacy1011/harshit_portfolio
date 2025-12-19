export default function Links() {
  return (
    <section className="links">
      <h1 className="page-title"> Links<span className="neon-dot">.</span></h1>

      <p className="links-lead">
        Everything important — projects, profiles, and resume — in one place.
      </p>

      <div className="links-grid">
        <a
          className="link-card"
          href="https://github.com/coralFallacy1011"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3>GitHub</h3>
          <p>Code, projects, experiments</p>
        </a>

        <a
          className="link-card"
          href="https://www.linkedin.com/in/harshitsaroha"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3>LinkedIn</h3>
          <p>Professional profile & experience</p>
        </a>

        <a
          className="link-card"
          href="/Resume_HarshitSaroha.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3>Resume</h3>
          <p>Download my latest resume (PDF)</p>
        </a>

        <a
          className="link-card"
          href="mailto:harshitsaroha22@gmail.com"
        >
          <h3>Email</h3>
          <p>harshitsaroha22@gmail.com</p>
        </a>
      </div>
    </section>
  )
}
