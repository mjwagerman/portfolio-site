import './Home.css';
import headshot from '../assets/headshot.jpg'

function Home() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (!element) return;

    const headerOffset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - headerOffset;
    const startPosition = window.scrollY;
    const distance = offsetPosition - startPosition;
    const duration = 800;
    let start = null;

    function animation(currentTime) {
      if (start === null) start = currentTime;
      const timeElapsed = currentTime - start;
      const run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
  };

  return (
    <section id="home" className="section home-section">
      <div className="home-content">
        <div className="home-text">
          <h2 className="home-greeting">Hi, I'm</h2>
          <h1 className="home-name">Mathew Wagerman</h1>
          <p className="home-title">Software Engineer</p>
          <p className="home-description">
            Passionate about learning and building secure software
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
