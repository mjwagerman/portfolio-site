import './About.css';

function About() {
  return (
    <section id="about" className="section about-section">
      <h1 className="section-title">About Me</h1>
      <div className="about-content">
        <div className="about-image">
          <div className="image-placeholder">
            <span> Photo Here</span>
          </div>
        </div>
        <div className="about-text">
          <p className="about-paragraph">
           I have had a long-standing passion for building and understanding computers and software. I began working professionally in software engineering and cybersecurity at 18 and have continued to grow in the field since.
          </p>
          <div className="about-document">
            <a href="https://drive.google.com/file/d/1ffI-yqlinya1Kc_Oi_CttuvaMSkA5grB/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="pdf-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
              View My MVVG Paper
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
