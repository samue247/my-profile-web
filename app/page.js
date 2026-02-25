"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  const skills = [
    { category: "Languages", items: ["HTML", "CSS", "JavaScript"] },
    { category: "Frontend", items: ["React", "Next.js", "Responsive Design"] },
    { category: "Database", items: ["SQL", "Database Management"] },
    { category: "Tools", items: ["Git", "GitHub", "VS Code"] },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        body {
          background: #f7f6f4;
          color: #1a1a1a;
          font-family: 'DM Sans', sans-serif;
        }

        .page {
          min-height: 100vh;
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }

        .page.visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* NAV */
        nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 2rem 4rem;
          border-bottom: 1px solid #e0ddd8;
        }

        .nav-logo {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.4rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          color: #1a1a1a;
        }

        .nav-links {
          display: flex;
          gap: 2.5rem;
          list-style: none;
        }

        .nav-links a {
          text-decoration: none;
          color: #555;
          font-size: 0.85rem;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          transition: color 0.2s;
        }

        .nav-links a:hover { color: #1a1a1a; }

        /* HERO */
        .hero {
          display: grid;
          grid-template-columns: 1fr 380px;
          gap: 4rem;
          align-items: center;
          padding: 6rem 4rem 5rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .hero-tag {
          font-size: 0.75rem;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #888;
          margin-bottom: 1.5rem;
        }

        .hero-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(3.5rem, 7vw, 5.5rem);
          font-weight: 300;
          line-height: 1.05;
          letter-spacing: -0.01em;
          color: #111;
          margin-bottom: 1rem;
        }

        .hero-name span {
          font-style: italic;
          color: #444;
        }

        .hero-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.35rem;
          font-weight: 400;
          color: #666;
          margin-bottom: 2rem;
          font-style: italic;
        }

        .hero-bio {
          font-size: 0.95rem;
          line-height: 1.85;
          color: #555;
          max-width: 520px;
          font-weight: 300;
          margin-bottom: 2.5rem;
        }

        .hero-actions {
          display: flex;
          gap: 1rem;
          align-items: center;
          flex-wrap: wrap;
        }

        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.75rem;
          background: #1a1a1a;
          color: #f7f6f4;
          text-decoration: none;
          font-size: 0.8rem;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          transition: background 0.2s, transform 0.2s;
        }

        .btn-primary:hover {
          background: #333;
          transform: translateY(-1px);
        }

        .btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.75rem;
          border: 1px solid #ccc;
          color: #444;
          text-decoration: none;
          font-size: 0.8rem;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          transition: border-color 0.2s, color 0.2s, transform 0.2s;
          background: transparent;
        }

        .btn-secondary:hover {
          border-color: #1a1a1a;
          color: #1a1a1a;
          transform: translateY(-1px);
        }

        /* PHOTO */
        .photo-wrap {
          position: relative;
        }

        .photo-frame {
          width: 100%;
          aspect-ratio: 3/4;
          background: #e8e5e0;
          position: relative;
          overflow: hidden;
        }

        .photo-frame::before {
          content: '';
          position: absolute;
          inset: 0;
          background: repeating-linear-gradient(
            45deg,
            transparent,
            transparent 4px,
            rgba(0,0,0,0.03) 4px,
            rgba(0,0,0,0.03) 5px
          );
        }

        .photo-placeholder {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          color: #aaa;
        }

        .photo-placeholder svg {
          width: 56px;
          height: 56px;
          opacity: 0.4;
        }

        .photo-placeholder p {
          font-size: 0.75rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .photo-accent {
          position: absolute;
          bottom: -12px;
          right: -12px;
          width: 80%;
          height: 80%;
          border: 1px solid #ccc;
          z-index: -1;
        }

        /* DIVIDER */
        .section-divider {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 4rem;
        }

        .section-divider::before,
        .section-divider::after {
          content: '';
          flex: 1;
          height: 1px;
          background: #e0ddd8;
        }

        .section-label {
          font-size: 0.7rem;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: #aaa;
          white-space: nowrap;
        }

        /* SKILLS */
        .skills-section {
          max-width: 1200px;
          margin: 0 auto;
          padding: 5rem 4rem 7rem;
        }

        .skills-header {
          margin-bottom: 3.5rem;
        }

        .skills-header h2 {
          font-family: 'Cormorant Garamond', serif;
          font-size: 2.8rem;
          font-weight: 300;
          color: #111;
        }

        .skills-header h2 em {
          font-style: italic;
          color: #666;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1px;
          background: #e0ddd8;
          border: 1px solid #e0ddd8;
        }

        .skill-card {
          background: #f7f6f4;
          padding: 2rem 1.75rem;
          transition: background 0.2s;
        }

        .skill-card:hover {
          background: #fff;
        }

        .skill-category {
          font-size: 0.7rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #aaa;
          margin-bottom: 1.25rem;
          font-weight: 500;
        }

        .skill-items {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .skill-item {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.15rem;
          color: #333;
          font-weight: 400;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .skill-item::before {
          content: '—';
          color: #ccc;
          font-size: 0.9rem;
        }

        /* FOOTER */
        footer {
          border-top: 1px solid #e0ddd8;
          padding: 2rem 4rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        footer p {
          font-size: 0.78rem;
          color: #aaa;
          letter-spacing: 0.05em;
        }

        /* RESPONSIVE */
        @media (max-width: 768px) {
          nav { padding: 1.5rem 1.5rem; }
          .nav-links { gap: 1.5rem; }
          .hero {
            grid-template-columns: 1fr;
            padding: 3rem 1.5rem 2rem;
            gap: 3rem;
          }
          .photo-wrap { max-width: 280px; }
          .skills-section { padding: 3rem 1.5rem 4rem; }
          .skills-grid { grid-template-columns: repeat(2, 1fr); }
          .section-divider { padding: 0 1.5rem; }
          footer { padding: 1.5rem; flex-direction: column; gap: 0.5rem; text-align: center; }
        }
      `}</style>

      <div className={`page ${visible ? "visible" : ""}`}>
        {/* NAV */}
        <nav>
          <span className="nav-logo">WamiriX</span>
          <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/portfolio">Portfolio</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>

        {/* HERO */}
        <section className="hero">
          <div>
            <p className="hero-tag">Frontend Developer &amp; CSC Student</p>
            <h1 className="hero-name">
              Wamiri<span>X</span>
            </h1>
            <p className="hero-title">Building clean, user-centered digital experiences.</p>
            <p className="hero-bio">
              Detail-oriented and highly motivated computer student with a strong foundation
              in programming and web development. Proficient in HTML, CSS and JavaScript —
              with experience in front-end development and database management.
              I create visually appealing and user-friendly digital experiences.
            </p>
            <div className="hero-actions">
              <a href="/portfolio" className="btn-primary">
                View Portfolio →
              </a>
              <a href="mailto:ayedunsamueloluwawamiri@gmail.com" className="btn-secondary">
                ✉ Email Me
              </a>
              <a
                href="https://github.com/samue247"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                ⌥ GitHub
              </a>
              <a
                href="https://twitter.com/oluwawamiri247"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                𝕏 Twitter
              </a>
              <a
                href="https://wa.me/2348073747214"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                💬 WhatsApp
              </a>
            </div>
          </div>

          {/* PHOTO */}
          <div className="photo-wrap">
            <div className="photo-frame">
              <div className="photo-placeholder">
                <img src="C:\Users\user\my-profile\app\images\WhatsApp Image 2026-02-25 at 00.18.52.jpeg"
                alt="Profile Picture" />  
                <p>Your Photo</p>
              </div>
            </div>
            <div className="photo-accent" />
          </div>
        </section>

        {/* DIVIDER */}
        <div className="section-divider">
          <span className="section-label">Skills &amp; Technologies</span>
        </div>

        {/* SKILLS */}
        <section className="skills-section">
          <div className="skills-header">
            <h2>What I <em>work with</em></h2>
          </div>
          <div className="skills-grid">
            {skills.map((group) => (
              <div key={group.category} className="skill-card">
                <p className="skill-category">{group.category}</p>
                <div className="skill-items">
                  {group.items.map((item) => (
                    <span key={item} className="skill-item">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <footer>
          <p>© {new Date().getFullYear()} WamiriX. All rights reserved.</p>
          <p>Built with Next.js</p>
        </footer>
      </div>
    </>
  );
}