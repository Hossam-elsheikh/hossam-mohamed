"use client";
import React from "react";

const experiences = [
  {
    company: "Nojeed Software Solutions",
    role: "Full Stack Developer",
    period: "2025 - Present",
    description:
      "Developing scalable web applications using Next.js and React. ",
    website: "https://www.nojeed.me/en",
    linkedin: "https://www.linkedin.com/company/106983437",
    skills: ["React", "Next.js", "TypeScript", "GraphQL","Node.js","Express.js","PostgreSQL","Nest.js"],
  },
  {
    company: "Robone",
    role: "Full Stack Developer",
    period: "2024 - 2025",
    description:
      "Collaborated with designers to deliver pixel-perfect websites for high-profile clients. Specialized in complex animations and interactive UIs.",
    website: "https://www.robonero.com/",
    linkedin: "https://www.linkedin.com/company/robone-eg",
    skills: ["React", "GSAP", "Sass", "Webpack","Node.js","Express.js","PostgreSQL","Nest.js"],
  }
 
];

export default function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="container">
        <h2 style={{ marginBottom: "3rem" }}>Where I've Worked</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="glass-card"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                position: "relative",
                animation: `fadeUp 0.5s ease-out forwards ${index * 0.2}s`,
                opacity: 0,
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  gap: "1rem",
                  borderBottom: "1px solid var(--border-light)",
                  paddingBottom: "1rem",
                }}
              >
                <div>
                  <h3
                    style={{ fontSize: "1.5rem", color: "var(--text-primary)" }}
                  >
                    {exp.role}
                  </h3>
                  <a
                    href={exp.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "var(--brand-primary)",
                      fontSize: "1.1rem",
                      fontWeight: 500,
                    }}
                  >
                    @{exp.company}
                  </a>
                </div>
                <div style={{ textAlign: "right" }}>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.9rem",
                      color: "var(--text-secondary)",
                    }}
                  >
                    {exp.period}
                  </span>
                  <div
                    style={{
                      marginTop: "0.5rem",
                      display: "flex",
                      gap: "0.5rem",
                      justifyContent: "flex-end",
                    }}
                  >
                    {/* Website Icon */}
                    <a
                      href={exp.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "var(--text-secondary)" }}
                      title="Company Website"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="2" y1="12" x2="22" y2="12"></line>
                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                      </svg>
                    </a>
                    {/* LinkedIn Icon */}
                    <a
                      href={exp.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "var(--text-secondary)" }}
                      title="Company LinkedIn"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              <p style={{ color: "var(--text-secondary)", maxWidth: "800px" }}>
                {exp.description}
              </p>

              <ul
                style={{
                  display: "flex",
                  gap: "1rem",
                  flexWrap: "wrap",
                  listStyle: "none",
                  marginTop: "0.5rem",
                }}
              >
                {exp.skills.map((skill) => (
                  <li
                    key={skill}
                    style={{
                      fontSize: "0.85rem",
                      color: "var(--text-accent)",
                      background: "rgba(56, 189, 248, 0.1)",
                      padding: "0.25rem 0.75rem",
                      borderRadius: "15px",
                    }}
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
