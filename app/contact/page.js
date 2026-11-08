"use client";
import { useEffect, useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [visible, setVisible] = useState(false);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const formRef = useRef(null);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.sendForm(
        "service_iqg5orr",
        "template_lowo5gm",
        formRef.current,
        "g5IMbpNCIErJ8AJUD"
      );
      setStatus("success");
      formRef.current.reset();
    } catch (error) {
      setStatus("error");
    }
  };

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

        /* CONTACT LAYOUT */
        .contact-layout {
          display: grid;
          grid-template-columns: 1fr 1.6fr;
          max-width: 1200px;
          margin: 0 auto;
          padding: 5rem 4rem 7rem;
          gap: 6rem;
          align-items: start;
        }

        /* LEFT INFO */
        .contact-info h2 {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.8rem;
          font-weight: 300;
          color: #111;
          margin-bottom: 1rem;
        }

        .contact-info p {
          font-size: 0.9rem;
          line-height: 1.85;
          color: #666;
          font-weight: 300;
          margin-bottom: 2.5rem;
        }

        .contact-details {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .contact-item {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
        }

        .contact-item-label {
          font-size: 0.68rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #aaa;
          font-weight: 500;
        }

        .contact-item-value {
          font-size: 0.9rem;
          color: #333;
          text-decoration: none;
          border-bottom: 1px solid transparent;
          transition: border-color 0.2s, color 0.2s;
          width: fit-content;
        }

        .contact-item-value:hover {
          color: #111;
          border-color: #ccc;
        }

        .divider {
          width: 40px;
          height: 1px;
          background: #ddd;
          margin: 2rem 0;
        }

        /* FORM */
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.25rem;
        }

        .form-field {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .form-field label {
          font-size: 0.7rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #888;
          font-weight: 500;
        }

        .form-field input,
        .form-field textarea {
          background: #fff;
          border: 1px solid #e0ddd8;
          padding: 0.85rem 1rem;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.9rem;
          color: #1a1a1a;
          font-weight: 300;
          outline: none;
          transition: border-color 0.2s;
          resize: none;
          width: 100%;
        }

        .form-field input:focus,
        .form-field textarea:focus {
          border-color: #1a1a1a;
        }

        .form-field textarea {
          min-height: 160px;
        }

        .btn-submit {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 0.85rem 2rem;
          background: #1a1a1a;
          color: #f7f6f4;
          border: none;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.8rem;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          cursor: pointer;
          transition: background 0.2s, transform 0.2s;
          align-self: flex-start;
        }

        .btn-submit:hover:not(:disabled) {
          background: #333;
          transform: translateY(-1px);
        }

        .btn-submit:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        /* STATUS MESSAGES */
        .status-msg {
          padding: 0.85rem 1rem;
          font-size: 0.85rem;
          font-weight: 400;
          letter-spacing: 0.03em;
        }

        .status-success {
          background: #f0faf0;
          border: 1px solid #c3e6cb;
          color: #2d6a4f;
        }

        .status-error {
          background: #fff5f5;
          border: 1px solid #f5c6cb;
          color: #721c24;
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
          .contact-layout {
            grid-template-columns: 1fr;
            padding: 3rem 1.5rem 4rem;
            gap: 3rem;
          }
          .form-row { grid-template-columns: 1fr; }
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
            <li><a href="/blog">Blog</a></li>
            <li><a href="/contact" className="active">Contact</a></li>
          </ul>
        </nav>

        {/* PAGE HEADER */}
        <div className="page-header">
          <p className="page-tag">Get In Touch</p>
          <h1 className="page-title">Let's <em>work together</em></h1>
        </div>

        {/* CONTACT LAYOUT */}
        <div className="contact-layout">
          {/* LEFT */}
          <div className="contact-info">
            <h2>Have a project in mind?</h2>
            <p>
              I'm always open to new opportunities, collaborations, or just a good conversation
              about tech and web development. Fill out the form and I'll get back to you as soon as possible.
            </p>
            <div className="contact-details">
              <div className="contact-item">
                <span className="contact-item-label">Email</span>
                <a href="mailto:ayedunsamueloluwawamiri@gmail.com" className="contact-item-value">
                  ayedunsamueloluwawamiri@gmail.com
                </a>
              </div>
              <div className="contact-item">
                <span className="contact-item-label">GitHub</span>
                <a href="https://github.com/samue247" target="_blank" rel="noopener noreferrer" className="contact-item-value">
                  github.com/samue247
                </a>
              </div>
              <div className="contact-item">
                <span className="contact-item-label">WhatsApp</span>
                <a href="https://wa.me/2348073747214" target="_blank" rel="noopener noreferrer" className="contact-item-value">
                  Send a message
                </a>
              </div>
            </div>
            <div className="divider" />
            <p style={{ fontSize: "0.8rem", color: "#aaa" }}>
              Based in Nigeria · Available for remote work
            </p>
          </div>

          {/* FORM */}
          <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
            <div className="form-row">
              <div className="form-field">
                <label htmlFor="from_name">Name</label>
                <input type="text" id="from_name" name="from_name" placeholder="Your name" required />
              </div>
              <div className="form-field">
                <label htmlFor="from_email">Email</label>
                <input type="email" id="from_email" name="from_email" placeholder="your@email.com" required />
              </div>
            </div>
            <div className="form-field">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" placeholder="What's this about?" required />
            </div>
            <div className="form-field">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" placeholder="Tell me about your project or inquiry..." required />
            </div>

            {status === "success" && (
              <div className="status-msg status-success">
                ✓ Message sent successfully! I'll get back to you soon.
              </div>
            )}
            {status === "error" && (
              <div className="status-msg status-error">
                ✕ Something went wrong. Please try again or email me directly.
              </div>
            )}

            <button type="submit" className="btn-submit" disabled={status === "sending"}>
              {status === "sending" ? "Sending..." : "Send Message →"}
            </button>
          </form>
        </div>

        {/* FOOTER */}
        <footer>
          <p>© {new Date().getFullYear()} WamiriX. All rights reserved.</p>
          <p>Built with ❤️</p>
        </footer>
      </div>
    </>
  );
}