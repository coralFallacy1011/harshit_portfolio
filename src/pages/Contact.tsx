export default function Contact() {
  return (
    <section className="contact">
      <h1 className="page-title">
        Contact <span className="neon-dot">.</span>
      </h1>

      <p className="contact-lead">
        If you’d like to discuss opportunities, projects, or just talk tech,
        feel free to reach out.
      </p>

      <div className="contact-box">
        <div className="contact-item">
          <span>Email</span>
          <a href="mailto:harshitsaroha@email.com">
            harshitsaroha@email.com
          </a>
        </div>

        <div className="contact-item">
          <span>LinkedIn</span>
          <a
            href="https://www.linkedin.com/in/harshitsaroha"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/harshitsaroha
          </a>
        </div>

        <div className="contact-item">
          <span>GitHub</span>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/yourusername
          </a>
        </div>
      </div>

      <p className="contact-ending">
        I’m actively learning and building —  
        always open to meaningful conversations and opportunities.
      </p>
    </section>
  )
}
