import React, { useEffect, useState } from 'react';

function App() {
  const [theme, setTheme] = useState(() => {
    const current = localStorage.getItem('theme');
    if (current) return current;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(t => (t === 'dark' ? 'light' : 'dark'));

  return (
    <>
      <header className="header">
        <div className="container">
          <nav className="nav">
            <div className="logo">XZ</div>
            <button id="theme-toggle" className="theme-toggle" aria-label="Toggle dark mode" onClick={toggleTheme}>
              <i className={theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon'}></i>
            </button>
          </nav>
          <div className="hero">
            <h1>Xu Zhu</h1>
            <p className="subtitle">Computer Science Student @ TUM</p>
            <p className="description">Passionate about software development and creating impactful solutions</p>
            <div className="cta-buttons">
              <a href="#contact" className="btn primary">Get in Touch</a>
              <a href="#projects" className="btn secondary">View My Work</a>
            </div>
          </div>
        </div>
      </header>

      <main className="container">
        <section id="about" className="section">
          <h2>About Me</h2>
          <p>Hello! I'm Xu, a Computer Science student at Technical University of Munich with a passion for software development. I enjoy turning complex problems into simple, beautiful, and intuitive solutions.</p>
        </section>

        <section id="experience" className="section">
          <h2>Experience</h2>
          <div className="experience-item">
            <h3>Working Student - Software Development</h3>
            <p className="muted">Company Name • 2023 - Present</p>
            <p>Working on developing and maintaining web applications using modern technologies.</p>
          </div>
        </section>

        <section id="projects" className="section">
          <h2>Projects</h2>
          <div className="project-grid">
            <div className="project-card">
              <h3>Project 1</h3>
              <p>Description of project 1 and the technologies used.</p>
              <div className="project-links">
                <a href="#" className="link">View Project</a>
                <a href="#" className="link">GitHub</a>
              </div>
            </div>
            <div className="project-card">
              <h3>Project 2</h3>
              <p>Description of project 2 and the technologies used.</p>
              <div className="project-links">
                <a href="#" className="link">View Project</a>
                <a href="#" className="link">GitHub</a>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section">
          <h2>Get In Touch</h2>
          <p>I'm currently looking for new opportunities. Feel free to reach out if you'd like to collaborate or just say hi!</p>
          <a href="mailto:zhuxu1304@gmail.com" className="btn primary">Email Me</a>
        </section>
      </main>

      <footer className="container">
        <p className="muted small">© Xu Zhu · Built for GitHub Pages</p>
      </footer>
    </>
  );
}

export default App;
