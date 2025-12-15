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
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
