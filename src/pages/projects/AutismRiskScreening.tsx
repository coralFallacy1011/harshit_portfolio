export default function AutismRiskScreening() {
  return (
    <section className="project-page">
      <h1 className="page-title">
        Autism Risk Screening using Machine Learning<span className="neon-dot">.</span>
      </h1>

      <p className="project-subtitle">
        Machine learning–based screening system using ensemble models to assess
        autism risk from questionnaire responses.
      </p>

      {/* OVERVIEW */}
      <div className="project-section">
        <h2>Overview</h2>
        <p>
          This project focuses on building a machine learning–based screening
          tool to assess the likelihood of autism spectrum traits in individuals
          based on standardized questionnaire responses.
        </p>
        <p>
          The system is designed as a <strong>decision-support and early
          screening tool</strong>, not as a medical diagnostic system. The goal
          is to assist individuals and caregivers in identifying potential risk
          indicators and encouraging timely professional consultation.
        </p>
      </div>

      {/* INPUT DATA */}
      <div className="project-section">
        <h2>Input Features</h2>
        <p>
          The model takes responses to a set of 10 behavioral questions
          (A1–A10), each answered in a binary <strong>Yes / No</strong> format.
        </p>
        <ul>
          <li>Questions are derived from commonly used autism screening forms</li>
          <li>Binary encoding simplifies model interpretability</li>
          <li>Additional demographic features may be incorporated later</li>
        </ul>
      </div>

      {/* ML MODELS */}
      <div className="project-section">
        <h2>Machine Learning Models</h2>
        <p>
          Multiple classification models are trained independently to capture
          different decision boundaries and patterns in the data.
        </p>
        <ul>
          <li>
            <strong>Logistic Regression</strong> – provides a strong linear
            baseline with high interpretability
          </li>
          <li>
            <strong>Support Vector Machine (SVM)</strong> – effective for
            handling complex class boundaries
          </li>
          <li>
            <strong>XGBoost</strong> – captures non-linear relationships and
            feature interactions efficiently
          </li>
        </ul>
      </div>

      {/* ENSEMBLING */}
      <div className="project-section">
        <h2>Ensemble Strategy</h2>
        <p>
          To improve robustness and reduce model bias, predictions from all
          three models are combined using an ensemble approach.
        </p>
        <ul>
          <li>
            Individual model predictions are aggregated using voting or
            weighted averaging
          </li>
          <li>
            Ensemble output provides a more stable and reliable screening
            result
          </li>
          <li>
            Helps mitigate overfitting and model-specific weaknesses
          </li>
        </ul>
      </div>

      {/* OUTPUT */}
      <div className="project-section">
        <h2>Output & Interpretation</h2>
        <p>
          The system outputs a probabilistic assessment indicating whether an
          individual may exhibit autism spectrum–related traits.
        </p>
        <p>
          Clear disclaimers are provided to emphasize that the result is a
          <strong>screening indication</strong> and not a clinical diagnosis.
        </p>
      </div>

      {/* CONSULTATION */}
      <div className="project-section">
        <h2>Consultation & Support (Planned)</h2>
        <p>
          As a future enhancement, the platform will include an optional
          consultation feature.
        </p>
        <ul>
          <li>
            Users identified as high-risk can be guided toward licensed
            professionals
          </li>
          <li>
            Integration with psychiatrists, psychologists, or therapists for
            professional evaluation
          </li>
          <li>
            Aim is to bridge the gap between early screening and expert care
          </li>
        </ul>
      </div>

      {/* CHALLENGES */}
      <div className="project-section">
        <h2>Challenges & Learnings</h2>
        <ul>
          <li>
            Handling sensitive health-related data responsibly and ethically
          </li>
          <li>
            Ensuring model fairness and avoiding biased predictions
          </li>
          <li>
            Balancing model accuracy with interpretability
          </li>
          <li>
            Understanding the limitations of ML in healthcare applications
          </li>
        </ul>
      </div>

      {/* STATUS */}
      <div className="project-section">
        <h2>Current Status</h2>
        <p>
          This project is currently <strong>under active development</strong>.
          Model training and ensemble evaluation are in progress, with frontend
          integration and consultation features planned for the next phase.
        </p>
      </div>

      {/* LINKS */}
      <div className="project-links">
        <a href="https://github.com/coralFallacy1011/ML-EL" target="_blank" rel="noopener noreferrer">
          GitHub Repository →
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          Demo (Coming Soon) →
        </a>
      </div>
    </section>
  )
}
