import './Testimonials.css';

function Testimonials() {
  const testimonials = [
    {
      name: "Person Name 1",
      title: "Job Title, Company",
      quote: "This is a placeholder testimonial. Replace this with actual feedback from someone you've worked with. A few sentences describing your skills, work ethic, and impact.",
      image: "/testimonial-1.jpg"
    },
    {
      name: "Person Name 2",
      title: "Job Title, Company",
      quote: "This is a placeholder testimonial. Replace this with actual feedback from someone you've worked with. A few sentences describing your skills, work ethic, and impact.",
      image: "/testimonial-2.jpg"
    },
    {
      name: "Person Name 3",
      title: "Job Title, Company",
      quote: "This is a placeholder testimonial. Replace this with actual feedback from someone you've worked with. A few sentences describing your skills, work ethic, and impact.",
      image: "/testimonial-3.jpg"
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
                  <span>Photo</span>
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
