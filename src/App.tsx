import React, { useState } from "react";

export default function App() {
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={dark ? "dark" : ""}>
      <nav className="navbar">
        <div className="logo">Alish GC</div>
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="#about">About</a>
          <a href="#videos">Videos</a>
          <a href="#blogs">Blogs</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>
        <button className="dark-btn" onClick={() => setDark(!dark)}>
          {dark ? "Light" : "Dark"}
        </button>
      </nav>

      <header className="hero">
        <h1>Welcome to Alish GC’s Site</h1>
        <p>BIT student from Nepal, passionate about tech and management.</p>
      </header>

      <section id="about">
        <h2>About Me</h2>
        <p>
          I am Alish GC, currently studying +2 Management and aiming to pursue
          Bachelor in Information Technology. Passionate about learning,
          technology, and personal growth.
        </p>
      </section>

      <section id="videos">
        <h2>Videos</h2>
        <div className="card-grid">
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Sample Video"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      <section id="blogs">
        <h2>Blogs</h2>
        <div className="card-grid">
          <div className="card">Coming soon...</div>
        </div>
      </section>

      <section id="contact">
        <h2>Contact</h2>
        <p>Email: alishgc@example.com</p>
      </section>
    </div>
  );
}
