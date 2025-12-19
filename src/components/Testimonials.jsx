import './Testimonials.css';
import bill from '../assets/william.jpg'
import rick from '../assets/rick.jpg'
import abhijit from '../assets/abhijit.jpg'

function Testimonials() {
  const testimonials = [
    {
      name: "William Cliff",
      title: "Founder and CEO, Asesso Health",
      quote: "Mathew has demonstrated strong efficiency and technical expertise at Asesso Health, with deep knowledge in machine learning, AI enablement, and software development. His dedication and contributions make him a valuable and impactful member of the team.",
      image: bill
    },
    {
      name: "Rick MacKirdy",
      title: "CEO, Modus Advanced Inc.",
      quote: "Mathew made a huge impact at Modus Advanced Inc., especially in strengthening our cybersecurity efforts. He brought energy, care, and real thoughtfulness to his work, and his contributions genuinely made the team stronger and the organization more secure.",
      image: rick
    },
    {
      name: "Abhijit Limaye",
      title: "CPO, Asesso Health",
      quote: "He consistently demonstrates the ability to take on any task given to him, approaching challenges with confidence, adaptability, and strong technical skill. His willingness to step in wherever needed makes him a dependable and valued contributor at Asesso Health.",
      image: abhijit
    }
  ];

  return (
    <section id="testimonials" className="section testimonials-section">
      <h1 className="section-title">Testimonials</h1>
      <p className="testimonials-intro">What others say about working with me</p>

      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <div className="testimonial-header">
              <div className="testimonial-image">
                <div className="image-placeholder">
                  <img src={testimonial.image} alt={testimonial.name} />
                </div>
              </div>
              <div className="testimonial-info">
                <h3>{testimonial.name}</h3>
                <p className="testimonial-title">{testimonial.title}</p>
              </div>
            </div>
            <p className="testimonial-quote">"{testimonial.quote}"</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
