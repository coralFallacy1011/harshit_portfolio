import ProjectGallery from '../../components/ProjectGallery'

export default function JobMilJayeSimSim() {
  return (
    <section className="project-page">
      <h1 className="page-title">
        Job Mil Jaye SimSim<span className="neon-dot">.</span>
      </h1>

      <p className="project-subtitle">
        A job discovery and recommendation platform built using NLP and machine
        learning to personalize job search and skill growth.
      </p>

      {/* OVERVIEW */}
      <div className="project-section">
        <h2>Overview</h2>
        <p>
          Job Mil Jaye SimSim is a web-based platform designed to simplify and
          personalize the job search process. The goal of the project was to
          create a seamless experience where users can discover relevant job
          opportunities based on their profile and receive actionable
          recommendations for skill improvement.
        </p>
        <p>
          The system focuses on aligning a user’s existing skill set with market
          demand using natural language processing and machine learning
          techniques.
        </p>
      </div>

            {/* ACHIEVEMENT */}
      <div className="project-section">
        <h2>Recognition & Achievement</h2>
        <p>
          This project received a <strong>Special Mention Award</strong> at a
          national-level hackathon, selected from over{' '}
          <strong>500 teams in the first round</strong> and approximately{' '}
          <strong>50 teams in the final round</strong>.
        </p>
        <p>
          The recognition was awarded for the project’s practical approach to
          job discovery, effective use of machine learning, and focus on
          real-world usability.
        </p>
      </div>

      <ProjectGallery
        images={[
          '/projects/jmss/img1.jpeg',
          '/projects/jmss/img2.jpeg',
          '/projects/jmss/img3.jpeg',
        ]}
      />

      {/* TECH STACK */}
      <div className="project-section">
        <h2>Tech Stack</h2>
        <ul>
          <li>TypeScript</li>
          <li>Natural Language Processing (NLP)</li>
          <li>Machine Learning</li>
          <li>Web Scraping</li>
          <li>Web-based frontend & backend architecture</li>
        </ul>
      </div>

      {/* SYSTEM DESIGN */}
      <div className="project-section">
        <h2>System Design</h2>
        <p>
          The platform analyzes user profiles by extracting key skills,
          experience, and interests using NLP techniques. Job listings are
          collected from multiple sources through automated web scraping and
          normalized into a structured format.
        </p>
        <p>
          Both user profiles and job descriptions are represented in a common
          feature space, enabling meaningful comparison and recommendation.
        </p>
      </div>

      {/* RECOMMENDATION ENGINE */}
      <div className="project-section">
        <h2>Recommendation Engine</h2>
        <p>
          A machine learning–based recommendation system matches users with job
          roles that closely align with their profiles.
        </p>
        <ul>
          <li>
            Job recommendations based on similarity between user skills and job
            requirements.
          </li>
          <li>
            Skill gap analysis to identify missing or emerging skills.
          </li>
          <li>
            Personalized suggestions for new skills to improve employability.
          </li>
        </ul>
      </div>

      {/* CHALLENGES */}
      <div className="project-section">
        <h2>Challenges & Learnings</h2>
        <ul>
          <li>
            Handling unstructured and inconsistent job data collected from
            multiple sources.
          </li>
          <li>
            Designing reliable profile analysis using NLP techniques.
          </li>
          <li>
            Iteratively debugging and refining recommendation logic to improve
            relevance.
          </li>
          <li>
            Understanding the balance between automation and personalization in
            user-centric systems.
          </li>
        </ul>
      </div>

      {/* LINKS */}
      <div className="project-links">
        <a href="https://github.com/coralFallacy1011/TeamGitbasher_AIML" target="_blank" rel="noopener noreferrer">
          GitHub Repository →
        </a>
        {/* <a href="#" target="_blank" rel="noopener noreferrer">
          Live Demo →
        </a> */}
      </div>
    </section>
  )
}
