"use client";
import { useEffect, useState } from "react";

export default function Portfolio() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  const featured = [
  {
    name: "Newbnet",
    description: "The Decentralized Learning for Web3",
    detail:
      "A next-generation learning platform built for the Web3 ecosystem. Newbnet empowers learners with decentralized, open-access education — bridging the gap between traditional learning and the blockchain world.",
    github: "https://github.com/Josh565565/newb-bot-backend",
    live: "",
    tags: ["Web3", "Decentralized", "Education"],
  },
  {
    name: "TM Ventures",
    description: "A user-friendly POS website managing sales, inventory & more",
    detail:
      "A website that offers seamless payment processing, real-time inventory tracking and insightful sales reports, all designed to streamline operations and boost sales. With intuitive navigation and mobile responsiveness, managing your business is easier than ever.",
    github: "https://github.com/samue247/tm-ventures",
    live: "https://tm-ventures.netlify.app",
    tags: ["POSsystem", "Ecommerce", "SalesTracking"],
  },
  {
    name: "TM-Care Health Center",
    description: "A comprehensive healthcare management system",
    detail:
      "A healthcare management system that streamlines patient care, appointment scheduling, real-time staff notifications and medical record management. With a user-friendly interface and robust features, it enhances efficiency for healthcare providers while ensuring a seamless experience for patients.",
    github: "https://github.com/samue247/health-center",
    live: "",
    tags: ["Healthcare", "Management", "MedicalRecords"],
  }
];

  const placeholders = [
    {
      name: "Project Two",
      description: "Coming soon — your next build.",
      github: "#",
      tags: ["TBD"],
    },
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
          position: sticky;
          top: 0;
          left: 0;
          right: 0;
          width: 100%;
          z-index: 1000;
          color: #1a1a1a;
          background: #f7f6f4;
          body {
  padding-top: 70px; /* match your navbar height */
}
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
          text-decoration: none;
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

        .nav-links a:hover, .nav-links a.active { color: #1a1a1a; }

        /* PAGE HEADER */
        .page-header {
          max-width: 1200px;
          margin: 0 auto;
          padding: 5rem 4rem 3rem;
          border-bottom: 1px solid #e0ddd8;
        }

        .page-tag {
          font-size: 0.75rem;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #888;
          margin-bottom: 1rem;
        }

        .page-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2.8rem, 6vw, 4.5rem);
          font-weight: 300;
          line-height: 1.05;
          color: #111;
        }

        .page-title em {
          font-style: italic;
          color: #666;
        }

        /* FEATURED PROJECT */
        .featured-section {
          max-width: 1200px;
          margin: 0 auto;
          padding: 4rem 4rem 0;
        }

        .section-label {
          font-size: 0.7rem;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: #aaa;
          margin-bottom: 2rem;
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .section-label::after {
          content: '';
          flex: 1;
          height: 1px;
          background: #e0ddd8;
        }

        .featured-card {
          display: grid;
          grid-template-columns: 1fr 1fr;
          background: #fff;
          border: 1px solid #e0ddd8;
          overflow: hidden;
          transition: box-shadow 0.3s;
        }

        .featured-card:hover {
          box-shadow: 0 8px 40px rgba(0,0,0,0.07);
        }

        .featured-visual {
          background: #1a1a1a;
          min-height: 360px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }

        .featured-visual::before {
          content: '';
          position: absolute;
          inset: 0;
          background: repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 8px,
            rgba(255,255,255,0.03) 8px,
            rgba(255,255,255,0.03) 9px
          );
        }

        .featured-visual-label {
          font-family: 'Cormorant Garamond', serif;
          font-size: 4rem;
          font-weight: 300;
          color: rgba(255,255,255,0.12);
          letter-spacing: 0.1em;
          z-index: 1;
          text-align: center;
          padding: 2rem;
          line-height: 1.1;
        }

        .featured-content {
          padding: 3rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .featured-number {
          font-family: 'Cormorant Garamond', serif;
          font-size: 5rem;
          font-weight: 300;
          color: #e8e5e0;
          line-height: 1;
          margin-bottom: 1.5rem;
        }

        .featured-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: 2.2rem;
          font-weight: 400;
          color: #111;
          margin-bottom: 0.5rem;
        }

        .featured-tagline {
          font-size: 0.85rem;
          color: #888;
          font-style: italic;
          margin-bottom: 1.5rem;
        }

        .featured-detail {
          font-size: 0.9rem;
          line-height: 1.8;
          color: #555;
          font-weight: 300;
          margin-bottom: 2rem;
        }

        .tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 2rem;
        }

        .tag {
          font-size: 0.7rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 0.3rem 0.75rem;
          border: 1px solid #ddd;
          color: #777;
        }

        .project-links {
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
        }

        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.7rem 1.5rem;
          background: #1a1a1a;
          color: #f7f6f4;
          text-decoration: none;
          font-size: 0.78rem;
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
          padding: 0.7rem 1.5rem;
          border: 1px solid #ccc;
          color: #444;
          text-decoration: none;
          font-size: 0.78rem;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          transition: border-color 0.2s, color 0.2s, transform 0.2s;
        }

        .btn-secondary:hover {
          border-color: #1a1a1a;
          color: #1a1a1a;
          transform: translateY(-1px);
        }

        /* GRID PROJECTS */
        .grid-section {
          max-width: 1200px;
          margin: 0 auto;
          padding: 4rem 4rem 7rem;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1px;
          background: #e0ddd8;
          border: 1px solid #e0ddd8;
        }

        .project-card {
          background: #f7f6f4;
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          transition: background 0.2s;
          min-height: 260px;
        }

        .project-card:hover { background: #fff; }

        .project-card.placeholder {
          justify-content: center;
          align-items: center;
          text-align: center;
          border: 2px dashed #ddd;
          background: transparent;
        }

        .project-card.placeholder:hover { background: #fff; }

        .placeholder-text {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.1rem;
          color: #bbb;
          font-style: italic;
        }

        .placeholder-sub {
          font-size: 0.75rem;
          color: #ccc;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .card-number {
          font-family: 'Cormorant Garamond', serif;
          font-size: 2.5rem;
          font-weight: 300;
          color: #ddd;
          line-height: 1;
        }

        .card-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.5rem;
          font-weight: 400;
          color: #111;
        }

        .card-desc {
          font-size: 0.85rem;
          color: #777;
          line-height: 1.65;
          font-weight: 300;
          flex: 1;
        }

        .card-footer {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-top: auto;
        }

        .card-link {
          font-size: 0.75rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #444;
          text-decoration: none;
          border-bottom: 1px solid #ccc;
          padding-bottom: 2px;
          transition: border-color 0.2s, color 0.2s;
        }

        .card-link:hover {
          color: #111;
          border-color: #111;
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
          nav { padding: 1.5rem; }
          .nav-links { gap: 1.5rem; }
          .page-header { padding: 3rem 1.5rem 2rem; }
          .featured-section { padding: 3rem 1.5rem 0; }
          .featured-card { grid-template-columns: 1fr; }
          .featured-visual { min-height: 200px; }
          .featured-content { padding: 2rem 1.5rem; }
          .grid-section { padding: 3rem 1.5rem 4rem; }
          .projects-grid { grid-template-columns: 1fr; }
          footer { padding: 1.5rem; flex-direction: column; gap: 0.5rem; text-align: center; }
        }
      `}</style>

      <div className={`page ${visible ? "visible" : ""}`}>
        {/* NAV */}
        <nav>
          <a href="/" className="nav-logo">WamiriX</a>
          <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/portfolio" className="active">Portfolio</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>

        {/* PAGE HEADER */}
        <div className="page-header">
          <p className="page-tag">Selected Work</p>
          <h1 className="page-title">Things I've <em>built</em></h1>
        </div>

        {/* FEATURED PROJECT */}
<section className="featured-section">
  <p className="section-label">Featured Projects</p>
  {featured.map((project, i) => (
    <div className="featured-card" key={i} style={{ marginBottom: "1px" }}>
      <div className="featured-visual">
        <div className="featured-visual-label">{project.name}</div>
      </div>
      <div className="featured-content">
        <div>
          <div className="featured-number">0{i + 1}</div>
          <h2 className="featured-name">{project.name}</h2>
          <p className="featured-tagline">{project.description}</p>
          <p className="featured-detail">{project.detail}</p>
          <div className="tags">
            {project.tags.map((tag) => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
        </div>
        <div className="project-links">
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-primary">
            ⌥ View on GitHub
          </a>
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              ↗ Live Site
            </a>
          )}
        </div>
      </div>
    </div>
  ))}
</section>
        {/* GRID */}
        <section className="grid-section">
          <p className="section-label">More Projects</p>
          <div className="projects-grid">
            {placeholders.map((project, i) => (
              <div key={i} className="project-card placeholder">
                <p className="placeholder-text">Next project coming soon</p>
                <p className="placeholder-sub">Work in progress</p>
              </div>
            ))}
            <div className="project-card placeholder">
              <p className="placeholder-text">Your project here</p>
              <p className="placeholder-sub">Add when ready</p>
            </div>
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