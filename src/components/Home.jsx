import './Home.css';
import headshot from '../assets/headshot.jpg'

function Home() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="home" className="section home-section">
      <div className="home-content">
        <div className="home-text">
          <h2 className="home-greeting">Hi, I'm</h2>
          <h1 className="home-name">Mathew Wagerman</h1>
          <p className="home-title">Software Engineer</p>
          <p className="home-description">
            Passionate about learning and building software
          </p>
          <div className="home-cta">
            <button className="cta-button primary" onClick={() => scrollToSection('resume')}>View My Work</button>
            <button className="cta-button secondary" onClick={() => scrollToSection('contact')}>Contact Me</button>
          </div>
        </div>
        <div className="home-image">
          <div className="image-placeholder">
            <img src={headshot} alt="Headshot" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
