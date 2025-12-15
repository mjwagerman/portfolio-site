import './Resume.css';

function Resume() {
  return (
    <section id="resume" className="section resume-section">
      <h1 className="section-title">Resume</h1>
      <p className="resume-intro">View my professional experience, education, and qualifications.</p>

      <div className="resume-links">
        <a href="https://drive.google.com/file/d/1vF9WSa4M9afdd6W5jJlzF603FMODw952/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="resume-link">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <line x1="16" y1="13" x2="8" y2="13"></line>
            <line x1="16" y1="17" x2="8" y2="17"></line>
            <polyline points="10 9 9 9 8 9"></polyline>
          </svg>
          <div className="link-content">
            <h3>View Resume</h3>
            <p>Download PDF</p>
          </div>
        </a>
      </div>
    </section>
  );
}

export default Resume;
