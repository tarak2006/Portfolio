import React from 'react';
import './App.css';

// --- Header Component ---
const Header = () => (
  <header className="site-header">
    <nav>
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href="#skills">Skills</a>
      <a href="#resume">Résumé</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>
);

// --- Hero Section Component ---
const Hero = () => (
  <section id="hero" className="hero-section">
    <div className="hero-content">
      <h1>Hi, I'm Tarak.</h1>
      <p>A third-year B.Tech student passionate about building elegant and effective software solutions.</p>
    </div>
  </section>
);

// --- About Section Component ---
const About = () => (
  <section id="about" className="content-section">
    <h2>About Me</h2>
    <p>
      I am a dedicated and curious Computer Science student with a strong foundation in software development
      and problem-solving. My goal is to leverage my technical skills to create technology that makes a
      meaningful impact. I am constantly exploring new technologies and am eager to contribute to innovative projects.
    </p>
  </section>
);

// --- Projects Section Component ---
const Projects = () => (
  <section id="projects" className="content-section">
    <h2>Projects</h2>
    <div className="project-grid">
      {/* Personal Portfolio */}
      <div className="project-item">
        <h3>Personal Portfolio</h3>
        <p>
          A clean, responsive portfolio website built to showcase my skills and work. Inspired by minimalist design principles.
        </p>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>React</span>
        </div>
      </div>

      {/* SnapDish */}
      <div className="project-item">
        <h3>SnapDish</h3>
        <p>
          A food and grocery delivery app that helps users order meals, vegetables, and essentials with real-time tracking and a smooth UI.
        </p>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>ReactJS</span>
        </div>
      </div>
    </div>
  </section>
);

// --- Skills Section Component ---
const Skills = () => (
  <section id="skills" className="content-section skills-section">
    <h2 className="section-title">Technical Skills</h2>
    <div className="skills-grid">
      <div className="skill-category">
        <h3>Languages</h3>
        <p>C++, Python, Java, JavaScript</p>
      </div>
      <div className="skill-category">
        <h3>Web Development</h3>
        <p>HTML, CSS, React, Node.js</p>
      </div>
      <div className="skill-category">
        <h3>Databases</h3>
        <p>SQL (PostgreSQL), NoSQL (MongoDB)</p>
      </div>
      <div className="skill-category">
        <h3>Tools & Platforms</h3>
        <p>Git, Docker, VS Code</p>
      </div>
    </div>
  </section>
);

// --- Résumé Section Component ---
const Resume = () => (
  <section id="resume" className="content-section resume-section">
    <h2>Résumé</h2>
    <p>You can view and download my comprehensive résumé by clicking the button below.</p>
    <a href="/tarak-resume.pdf" className="contact-button" download>Download Résumé</a>
  </section>
);

// --- Contact Section Component ---
const Contact = () => (
  <section id="contact" className="content-section">
    <h2>Contact</h2>
    <div className="contact-details">
      <p>I'm always open to new opportunities and collaborations. Feel free to reach out!</p>
      <p><strong>Email:</strong> <a>tarakasrinivasande@gmail.com</a></p>
      <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit" target="_blank" rel="noopener noreferrer">linkedin.com/in/tarak</a></p>
      <p><strong>GitHub:</strong> <a href="https://github.com/tarak2006" target="_blank" rel="noopener noreferrer">github.com/tarak</a></p>
    </div>
  </section>
);

// --- Footer Component ---
const Footer = () => (
  
  <footer className="site-footer">
    <p>&copy; 2025 Tarak. All Rights Reserved.</p>
  </footer>
);

// --- Main App Component ---
function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
