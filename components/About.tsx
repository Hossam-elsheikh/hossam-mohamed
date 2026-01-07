"use client";
import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="section-padding"
      style={{ position: "relative" }}
    >
      <div
        className="container"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "4rem",
          alignItems: "center",
        }}
      >
        <div>
          <div
            className="glass-card"
            style={{
              padding: "0",
              width: "70%",
              overflow: "hidden",
              transform: "rotate(-3deg)",
              margin: "0 auto",
            }}
          >
            <img
              src="/pic.png"
              alt="Hossam Mohamed Avatar"
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </div>
        </div>
        <div>
          <h2 style={{ marginBottom: "2rem" }}>About Me</h2>
          <p
            style={{
              color: "var(--text-secondary)",
              marginBottom: "1.5rem",
              fontSize: "1.1rem",
            }}
          >
            Hello! My name is Hossam Elsheikh, and I’m a 28-year-old software
            engineer . As a dedicated self-learner, I’ve followed the path of
            computer science through the Open Source Community University (OSCU)
            . After obtaining ITI certificate in web development using MERN
            stack, I've specialized in building modern and efficient web
            applications using the MERN stack (MongoDB, Express.js, React, and
            Node.js), combining my passion for technology with hands-on
            experience to deliver high-quality solutions.
          </p>
        
          <p
            style={{
              color: "var(--text-secondary)",
              marginBottom: "1.5rem",
              fontSize: "1.1rem",
            }}
          >
            Here are a few technologies I’ve been working with recently:
          </p>
          <ul
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, minmax(140px, 200px))",
              gap: "0.5rem",
              listStyle: "none",
            }}
          >
            {[
              "JavaScript (ES6+)",
              "TypeScript",
              "React",
              "Next.js",
              "Node.js",
              "Nest.js",
              "postgresql",
              "Tailwind CSS",
              "CSS3/Sass",
              "HtML5",
            ].map((tech) => (
              <li
                key={tech}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  color: "var(--text-secondary)",
                }}
              >
                <span style={{ color: "var(--brand-primary)" }}>▹</span> {tech}
              </li>
            ))}
          </ul>

          <div style={{ marginTop: "3rem" }}>
            <p
              style={{
                color: "var(--text-secondary)",
                marginBottom: "1rem",
                fontSize: "1rem",
              }}
            >
              Find me on:
            </p>
            <div style={{ display: "flex", gap: "1.5rem" }}>
              <a
                href="https://github.com/Hossam-elsheikh"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "var(--text-secondary)",
                  transition: "color 0.2s",
                }}
                title="GitHub"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.stroke = "var(--brand-primary)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.stroke = "currentColor")
                  }
                  style={{ transition: "stroke 0.2s" }}
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/hossam-elsheikh-5459a1166/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "var(--text-secondary)",
                  transition: "color 0.2s",
                }}
                title="LinkedIn"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.stroke = "#0a66c2")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.stroke = "currentColor")
                  }
                  style={{ transition: "stroke 0.2s" }}
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/hossam.elshie5"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "var(--text-secondary)",
                  transition: "color 0.2s",
                }}
                title="Facebook"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.stroke = "#1877f2")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.stroke = "currentColor")
                  }
                  style={{ transition: "stroke 0.2s" }}
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              {/* <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "var(--text-secondary)",
                  transition: "color 0.2s",
                }}
                title="Instagram"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.stroke = "#e4405f")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.stroke = "currentColor")
                  }
                  style={{ transition: "stroke 0.2s" }}
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
