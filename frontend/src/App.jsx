import React, { useState, useEffect } from 'react'; 
import './App.css';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScrolled(window.scrollY > 50);
    });
  }, []);

  const projects = [
    {
      title: "Item Manager",
      description: "Full-featured item management platform, file sharing, typing records, and Todos.",
      tech: ["React", "Node.js", "MongoDB"],
      image: "Item List;",
      demo: "https://item-manager-skgn.vercel.app/",
      github: "https://github.com/safran6ix"
    },
    {
      title: "TaskFlow Pro",
      description: "Team productivity suite with drag-drop task management, due dates, comments, and email notifications.",
      tech: ["MERN", "Tailwind", "JWT", "Nodemailer"],
      image: "Task List!",
      demo: "#",
      github: "https://github.com/safran6ix"
    },
    {
      title: "E-Commerce API",
      description: "Scalable REST API for online stores with authentication, payments, and admin dashboard.",
      tech: ["Node.js", "Express", "MongoDB", "Stripe"],
      image: "E-COM🛒,",
      demo: "#",
      github: "https://github.com/safran6ix"
    },
    {
      title: "Portfolio 2024",
      description: "Modern developer portfolio with smooth animations, responsive design, and contact form.",
      tech: ["React", "CSS3", "Framer Motion"],
      image: "Portfolio.",
      demo: "https://prof-portfolio-mu.vercel.app/#",
      github: "https://github.com/safran6ix"
    }
  ];

  const skills = [
    { name: "React.js", level: 92 },
    { name: "Node.js", level: 86 },
    { name: "Express.js", level: 85 },
    { name: "MongoDB", level: 82 },
    { name: "JavaScript", level: 92 },
    { name: "TypeScript", level: 75 },
    { name: "HTML/CSS", level: 98 },
    { name: "Git/GitHub", level: 90 }
  ];

  return (
    <div className="portfolio">
      {/* Navigation */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <a href="#home" className="logo"> Safran.dev</a>

          <div className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
            <a href="#home" onClick={() => setMobileMenuOpen(false)}>Home</a>
            <a href="#work" onClick={() => setMobileMenuOpen(false)}>Work</a>
            <a href="#skills" onClick={() => setMobileMenuOpen(false)}>Skills</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a>
          </div>

          <button className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            ☰
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-greeting">
              <span className="wave"></span> Hello, I'm
            </div>
            <h1 className="hero-title">
              Mohammed <span className="highlight">Safran</span>
            </h1>
            <div className="hero-role">
              <span className="role-text">Full Stack Developer</span>
            </div>
            <p className="hero-description">
              I build exceptional digital experiences that combine beautiful design
              with powerful functionality. Specialized in MERN stack and real-time applications.
            </p>
            <div className="hero-buttons">
              <a href="#work" className="btn-primary">View Projects →</a>
              <a href="#contact" className="btn-secondary">Get In Touch</a>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <div className="stat-number">10+</div>
                <div className="stat-label">Projects Done</div>
              </div>
              <div className="stat">
                <div className="stat-number">2+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat">
                <div className="stat-number">100%</div>
                <div className="stat-label">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="work">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Featured Work</span>
            <h2 className="section-title">Selected Projects</h2>
            <p className="section-subtitle">Some of my best work</p>
          </div>
          <div className="work-grid">
            {projects.map((project, i) => (
              <div className="work-card" key={i}>
                <div className="card-image">{project.image}</div>
                <div className="card-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="card-tech">
                    {project.tech.map((tech, j) => (
                      <span key={j} className="tech-pill">{tech}</span>
                    ))}
                  </div>
                  <div className="card-links">
                    <a href={project.demo} className="card-link">Live Demo →</a>
                    <a href={project.github} className="card-link">GitHub</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">My Expertise</span>
            <h2 className="section-title">Technical Skills</h2>
            <p className="section-subtitle">Technologies I work with</p>
          </div>
          <div className="skills-container">
            {skills.map((skill, i) => (
              <div className="skill-item" key={i}>
                <div className="skill-header">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percent">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: `${skill.level}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Get In Touch</span>
            <h2 className="section-title">Let's Work Together</h2>
            <p className="section-subtitle">Have a project in mind? Let's talk</p>
          </div>
          <div className="contact-container">
            <div className="contact-info">
              <div className="info-item">
                <div className="info-icon">📧</div>
                <div>
                  <h4>Email</h4>
                  <a href="mailto:mohammedsafran6ix@gmail.com">mohammedsafran6ix@gmail.com</a>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon">📱</div>
                <div>
                  <h4>Phone / wa.me</h4>
                  <p><a href='https://wa.me/+940702980947?text=contact-from-portfolio!'>+94 702980947</a></p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon">📍</div>
                <div>
                  <h4>Location</h4>
                  <p>Sri Lanka</p>
                </div>
              </div>
            </div>
            <form className="contact-form">
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Your Email" />
              <textarea rows="5" placeholder="Your Message"></textarea>
              <button type="submit" className="btn-primary">
                <a href='https://wa.me/+940702980947?text=contact-from-portfolio!'>Send Message →</a></button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <p>© 2024 Mohammed Safran. All rights reserved.</p>
            <div className="footer-links">
              <a href="https://github.com/safran6ix">GitHub</a>
              <a href="https://www.linkedin.com/in/safran-mohammed-985a412a0/">LinkedIn</a>
              <a href="https://youtube.com/codify6ix">YouTube</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;