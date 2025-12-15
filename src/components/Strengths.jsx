import './Strengths.css';
import disciplineIcon from '../assets/discipline.svg';
import responsibilityIcon from '../assets/responsibility.svg';
import wooIcon from '../assets/woo.svg';
import relatorIcon from '../assets/relator.svg';
import deliberativeIcon from '../assets/deliberative.svg';

function Strengths() {
  const strengths = [
    {
      name: "Discipline",
      description: "I enjoy routine and structure. My world is best described by the order I create.",
      icon: disciplineIcon
    },
    {
      name: "Responsibility",
      description: "I take psychological ownership of what I say I will do. I am committed to stable values such as honesty and loyalty.",
      icon: responsibilityIcon
    },
    {
      name: "Woo",
      description: "I love the challenge of meeting new people and winning them over. I derive satisfaction from breaking the ice and making a connection with someone.",
      icon: wooIcon
    },
    {
      name: "Relator",
      description: "I enjoy close relationships with others. I find deep satisfaction in working hard with friends to achieve a goal.",
      icon: relatorIcon
    },
    {
      name: "Deliberative",
      description: "I am best described by the serious care I take in making decisions or choices. I anticipate obstacles.",
      icon: deliberativeIcon
    }
  ];

  return (
    <section id="strengths" className="section strengths-section">
      <h1 className="section-title">My Strengths</h1>
      <p className="strengths-source">Source: <em>StrengthsFinder 2.0</em></p>

      <div className="strengths-container">
        {strengths.map((strength) => (
          <div key={strength.name} className="strength-item">
            <img src={strength.icon} alt={strength.name} className="strength-icon" />
            <h3 className="strength-title">{strength.name}</h3>
            <div className="strength-dropdown">
              <p>{strength.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="strengths-report">
        <a href="https://drive.google.com/file/d/1c_LdgQI7VYCvb-cNadN5EtXMNtsxrKKs/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="report-link">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <line x1="16" y1="13" x2="8" y2="13"></line>
            <line x1="16" y1="17" x2="8" y2="17"></line>
            <polyline points="10 9 9 9 8 9"></polyline>
          </svg>
          View Full StrengthsFinder Report
        </a>
      </div>
    </section>
  );
}

export default Strengths;
