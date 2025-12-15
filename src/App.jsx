import './App.css'
import Home from './components/Home'
import About from './components/About'
import Strengths from './components/Strengths'
import Resume from './components/Resume'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'

function App() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (!element) return;

    const headerOffset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - headerOffset;
    const startPosition = window.scrollY;
    const distance = offsetPosition - startPosition;
    const duration = 800; // 800ms for quick scroll
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
    <div className="app">
      <header className="header">
        <div className="header-content">
          <div className="logo" onClick={() => scrollToSection('home')}>
            MW
          </div>
          <nav className="nav">
            <button onClick={() => scrollToSection('home')}>Home</button>
            <button onClick={() => scrollToSection('about')}>About</button>
            <button onClick={() => scrollToSection('strengths')}>Strengths</button>
            <button onClick={() => scrollToSection('resume')}>Resume</button>
            <button onClick={() => scrollToSection('testimonials')}>Testimonials</button>
            <button onClick={() => scrollToSection('contact')} className="nav-contact">Contact</button>
          </nav>
        </div>
      </header>

      <main>
        <Home />
        <About />
        <Strengths />
        <Resume />
        <Testimonials />
        <Contact />
      </main>
    </div>
  )
}

export default App
