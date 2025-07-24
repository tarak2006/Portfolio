import React, { useState, useEffect } from 'react';
import './App.css';

// ❗ IMPORTANT: Place your actual image filenames in src/assets
import profilePhoto from './assets/photo.png'; // Make sure you have your actual photo here
import portfolioProjectImg from './assets/port.png'; // Example project image
import snapdishProjectImg from './assets/download.png'; // Example project image
// Import the image for the about section, assuming it's the same as profilePhoto
import aboutPhoto from './assets/photo2.png'; // Using the same photo as profile for consistency


const Header = () => (
  <header className="site-header">
    <h1>My Portfolio</h1>
    <nav>
      <ul>
        <li><a href="#hero" aria-label="Scroll to Home section">Home</a></li>
        <li><a href="#about" aria-label="Scroll to About Me section">About</a></li>
        <li><a href="#projects" aria-label="Scroll to Projects section">Projects</a></li>
        <li><a href="#skills" aria-label="Scroll to Skills section">Skills</a></li>
        <li><a href="#resume" aria-label="Scroll to Résumé section">Résumé</a></li>
        <li><a href="#contact" aria-label="Scroll to Contact section">Contact</a></li>
      </ul>
    </nav>
  </header>
);

const Hero = () => (
  <section id="hero" className="hero-section full-width-section">
    <div className="hero-content section-content-wrapper">
      <div className="hero-photo-container">
        <img src={profilePhoto} alt="Tarak" className="hero-photo" />
       </div>
      <div className="hero-text-content">
        <h1>Hi, I'm Tarak.</h1>
        <p>A third-year B.Tech student passionate about building elegant and effective software solutions.</p>
      </div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="content-section full-width-section">
    <div className="section-content-wrapper about-wrapper">
      <h2>About Me</h2>
      <div className="about-content-layout"> {/* New div for layout */}
        <div className="about-image-container"> {/* New container for image */}
          <img src={aboutPhoto} alt="Tarak" className="about-image" /> {/* Image for about section */}
        </div>
        <div className="about-text-content"> {/* Content wrapper for text */}
          <h3>Hi, I'm Ande Taraka Srinivas!</h3>
          <p>
            I am a third-year Computer Science Engineering student at Amrita Vishwa Vidyapeetham,
            Coimbatore, with a keen interest in developing robust and user-friendly software solutions.
            My passion lies in full-stack development, delving into the intricacies of
            algorithm performance, and mastering data structures.
          </p>
          <p>
            I thrive on transforming complex challenges into efficient code, whether it involves
            crafting dynamic web applications or optimizing algorithms for peak speed and resource utilization.
            I am always on the lookout for innovative tools and technologies that can broaden my
            horizons as a developer and critical thinker.
          </p>
          <p>
            Beyond my academic pursuits, I dedicate time to personal projects, continually refining
            both my frontend and backend capabilities. I'm driven by a curiosity to understand
            the fundamental logic and design behind effective software.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const Projects = () => (
  <section id="projects" className="content-section full-width-section">
    <div className="section-content-wrapper">
      <h2>Projects</h2> {/* Reverted heading to "Projects" */}
      <div className="project-grid">
        {/* Personal Portfolio */}
        <div className="project-item">
          <img src={portfolioProjectImg} alt="Personal Portfolio Screenshot" className="project-image" />
          <h3>Personal Portfolio</h3>
          <p>
            A clean, responsive portfolio website built to showcase my skills and work. Inspired by minimalist design principles.
          </p>
          <div className="project-tags">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>React</span>
          </div>
          <div className="project-buttons">
            <a href="https://github.com/tarak2006/YourPortfolioRepo" target="_blank" rel="noopener noreferrer" className="project-button">View Code</a> {/* Placeholder */}
            <a href="#" target="_blank" rel="noopener noreferrer" className="project-button">Live Demo</a> {/* Placeholder */}
          </div>
        </div>

        {/* SnapDish */}
        <div className="project-item">
          <img src={snapdishProjectImg} alt="SnapDish App Screenshot" className="project-image" />
          <h3>SnapDish</h3>
          <p>
            A food and grocery delivery app that helps users order meals, vegetables, and essentials with real-time tracking and a smooth UI.
          </p>
          <div className="project-tags">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>ReactJS</span>
          </div>
          <div className="project-buttons">
            <a href="https://github.com/tarak2006/SnapDish" target="_blank" rel="noopener noreferrer" className="project-button">View Code</a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="project-button">Live Demo</a> {/* Placeholder */}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Skills = () => (
  <section id="skills" className="skills-section content-section full-width-section">
    <div className="section-content-wrapper">
      <h2>Technical Skills</h2>
      <div className="skills-grid-container">
        {/* Programming Languages */}
        <div className="skills-category-card">
          <h3>Programming Languages</h3>
          <div className="skills-list">
            <span className="skill-item">C++</span>
            <span className="skill-item">Python</span>
            <span className="skill-item">Java</span>
            <span className="skill-item">C</span>
          </div>
        </div>

        {/* Frontend */}
        <div className="skills-category-card">
          <h3>Frontend</h3>
          <div className="skills-list">
            <span className="skill-item">React.js</span>
            <span className="skill-item">HTML</span>
            <span className="skill-item">CSS</span>
          </div>
        </div>

        {/* Databases */}
        <div className="skills-category-card">
          <h3>Databases</h3>
          <div className="skills-list">
            <span className="skill-item">MongoDB</span>
            <span className="skill-item">MySQL</span>
          </div>
        </div>

        {/* Dev Tools */}
        <div className="skills-category-card">
          <h3>Dev Tools</h3>
          <div className="skills-list">
            <span className="skill-item">Git</span>
            <span className="skill-item">GitHub</span>
            <span className="skill-item">Docker</span>
            <span className="skill-item">Vercel</span>
            <span className="skill-item">Jupyter Notebook</span>
            <span className="skill-item">Kaggle</span>
          </div>
        </div>

        {/* Machine Learning */}
        <div className="skills-category-card">
          <h3>Machine Learning</h3>
          <div className="skills-list">
            <span className="skill-item">Supervised Learning</span>
            <span className="skill-item">Unsupervised Learning</span>
          </div>
        </div>

        {/* Deep Learning */}
        <div className="skills-category-card">
          <h3>Deep Learning</h3>
          <div className="skills-list">
            <span className="skill-item">Neural Networks</span>
            <span className="skill-item">TensorFlow</span>
            <span className="skill-item">PyTorch</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Resume = () => (
  <section id="resume" className="resume-section content-section full-width-section">
    <div className="section-content-wrapper">
      <h2>Résumé</h2>
      <p>You can view and download my comprehensive résumé by clicking the button below.</p>
      <a href="/tarak_resume.pdf" className="cta-button" download>Download Résumé</a>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="content-section full-width-section">
    <div className="contact-details section-content-wrapper">
      <h2>Contact</h2>
      <p>I'm always open to new opportunities and collaborations. Feel free to reach out!</p>
      <p><strong>Email:</strong> <a href="mailto:tarakasrinivasande@gmail.com">tarakasrinivasande@gmail.com</a></p>
      <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/tarak" target="_blank" rel="noopener noreferrer">linkedin.com/in/tarak</a></p>
      <p><strong>GitHub:</strong> <a href="https://github.com/tarak2006" target="_blank" rel="noopener noreferrer">github.com/tarak2006</a></p>
    </div>
  </section>
);

const Footer = () => (
  <footer className="site-footer">
    <p>&copy; {new Date().getFullYear()} Tarak. All Rights Reserved.</p>
  </footer>
);

function App() {
  useEffect(() => {
    const sectionsToAnimate = Array.from(document.querySelectorAll('.full-width-section:not(#hero)'));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    sectionsToAnimate.forEach((section) => {
      section.classList.add('hidden');
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

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