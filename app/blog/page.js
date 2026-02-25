"use client";
import { useEffect, useState } from "react";

const posts = [
  {
    id: 1,
    type: "external",
    tag: "Press Feature",
    title: "Smart Ideas from a School Fishpond: How 17-Year-Old Samuel Ayedun Aims to Transform Nigeria's Agric with Tech",
    excerpt:
      "AgroCentric features my vision for using technology to revolutionize Nigeria's agricultural industry — starting from a simple school fishpond project.",
    date: "May 28, 2025",
    readTime: "4 min read",
    link: "https://agrocentric.com/2025/05/28/meet-17-year-old-samuel-ayedun-who-believes-technology-can-transform-nigerias-agricultural-industry/",
    org: "AgroCentric",
  },
  {
    id: 2,
    type: "internal",
    tag: "Web3",
    title: "Getting Started with Web3: What Every Beginner Developer Should Know",
    excerpt:
      "Web3 can feel overwhelming at first — decentralized apps, smart contracts, wallets. Here's a clear, beginner-friendly breakdown of where to start and what actually matters.",
    date: "Coming Soon",
    readTime: "5 min read",
    link: "#",
  },
  {
    id: 3,
    type: "internal",
    tag: "Personal",
    title: "My Journey Learning JavaScript: Mistakes, Breakthroughs and Lessons",
    excerpt:
      "From confusing callbacks to finally understanding async/await — an honest account of learning JavaScript as a self-driven computer science student in Nigeria.",
    date: "Coming Soon",
    readTime: "6 min read",
    link: "#",
  },
  {
    id: 4,
    type: "internal",
    tag: "Tips",
    title: "5 Practical Tips for Beginner Developers That Nobody Talks About",
    excerpt:
      "Beyond tutorials and YouTube courses — the real habits, mindset shifts, and tools that actually helped me grow faster as a developer just starting out.",
    date: "Coming Soon",
    readTime: "4 min read",
    link: "#",
  },
];

export default function Blog() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

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

        /* POSTS LIST */
        .posts-section {
          max-width: 1200px;
          margin: 0 auto;
          padding: 4rem 4rem 7rem;
        }

        .post-item {
          display: grid;
          grid-template-columns: 160px 1fr auto;
          gap: 2.5rem;
          align-items: start;
          padding: 2.5rem 0;
          border-bottom: 1px solid #e0ddd8;
          text-decoration: none;
          color: inherit;
          transition: background 0.2s;
          position: relative;
        }

        .post-item:first-child {
          border-top: 1px solid #e0ddd8;
        }

        .post-item:hover .post-title {
          color: #555;
        }

        .post-item:hover .post-arrow {
          transform: translateX(4px);
        }

        /* FEATURED BADGE */
        .post-item.featured {
          background: #fff;
          padding: 2.5rem;
          border: 1px solid #e0ddd8;
          margin-bottom: 1px;
        }

        .post-item.featured:first-child {
          border-top: 1px solid #e0ddd8;
        }

        /* LEFT META */
        .post-meta {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
          padding-top: 0.2rem;
        }

        .post-tag {
          font-size: 0.68rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #fff;
          background: #1a1a1a;
          padding: 0.25rem 0.6rem;
          width: fit-content;
          font-weight: 500;
        }

        .post-tag.external {
          background: #2d6a4f;
        }

        .post-tag.coming {
          background: transparent;
          color: #bbb;
          border: 1px solid #ddd;
        }

        .post-date {
          font-size: 0.75rem;
          color: #aaa;
          letter-spacing: 0.05em;
        }

        .post-readtime {
          font-size: 0.72rem;
          color: #ccc;
        }

        /* CENTER CONTENT */
        .post-content {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .post-org {
          font-size: 0.72rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #2d6a4f;
          font-weight: 500;
        }

        .post-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.55rem;
          font-weight: 400;
          color: #111;
          line-height: 1.25;
          transition: color 0.2s;
        }

        .post-excerpt {
          font-size: 0.875rem;
          color: #777;
          line-height: 1.75;
          font-weight: 300;
          max-width: 600px;
        }

        /* RIGHT ARROW */
        .post-arrow {
          font-size: 1.2rem;
          color: #ccc;
          padding-top: 0.4rem;
          transition: transform 0.2s, color 0.2s;
        }

        .post-item:hover .post-arrow {
          color: #888;
        }

        /* COMING SOON OVERLAY */
        .post-item.draft {
          opacity: 0.6;
          pointer-events: none;
          cursor: default;
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
          .posts-section { padding: 3rem 1.5rem 4rem; }
          .post-item {
            grid-template-columns: 1fr;
            gap: 0.75rem;
            padding: 2rem 0;
          }
          .post-item.featured { padding: 1.5rem; }
          .post-arrow { display: none; }
          footer { padding: 1.5rem; flex-direction: column; gap: 0.5rem; text-align: center; }
        }
      `}</style>

      <div className={`page ${visible ? "visible" : ""}`}>
        {/* NAV */}
        <nav>
          <a href="/" className="nav-logo">WamiriX</a>
          <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/portfolio">Portfolio</a></li>
            <li><a href="/blog" className="active">Blog</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>

        {/* PAGE HEADER */}
        <div className="page-header">
          <p className="page-tag">Thoughts & Writing</p>
          <h1 className="page-title">Things I've <em>written</em></h1>
        </div>

        {/* POSTS */}
        <section className="posts-section">
          {posts.map((post) => (
            <a
              key={post.id}
              href={post.link}
              target={post.type === "external" ? "_blank" : "_self"}
              rel={post.type === "external" ? "noopener noreferrer" : ""}
              className={`post-item ${post.type === "external" ? "featured" : ""} ${post.date === "Coming Soon" ? "draft" : ""}`}
            >
              {/* META */}
              <div className="post-meta">
                <span className={`post-tag ${post.type === "external" ? "external" : post.date === "Coming Soon" ? "coming" : ""}`}>
                  {post.tag}
                </span>
                <span className="post-date">{post.date}</span>
                <span className="post-readtime">{post.readTime}</span>
              </div>

              {/* CONTENT */}
              <div className="post-content">
                {post.org && <span className="post-org">— {post.org}</span>}
                <h2 className="post-title">{post.title}</h2>
                <p className="post-excerpt">{post.excerpt}</p>
              </div>

              {/* ARROW */}
              <span className="post-arrow">→</span>
            </a>
          ))}
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