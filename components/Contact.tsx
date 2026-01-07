"use client";
import React from "react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="section-padding"
      style={{ textAlign: "center" }}
    >
      <div className="container" style={{ maxWidth: "600px" }}>
        <p
          style={{
            color: "var(--brand-primary)",
            fontFamily: "var(--font-mono)",
            marginBottom: "1rem",
          }}
        >
      What's Next?
        </p>
        <h2 style={{ fontSize: "3rem", marginBottom: "2rem" }}>Get In Touch</h2>
        <p
          style={{
            color: "var(--text-secondary)",
            fontSize: "1.2rem",
            marginBottom: "4rem",
          }}
        >
          I'm currently looking for new opportunities, my inbox is always open.
          Whether you have a question or just want to say hi, I'll try my best
          to get back to you!
        </p>
        <a
          href="mailto:hossam.m.elsheikh@gmail.com"
          className="glass-card"
          style={{
            display: "inline-block",
            padding: "1.25rem 3rem",
            fontSize: "1.2rem",
            color: "var(--brand-primary)",
            borderColor: "var(--brand-primary)",
            textDecoration: "none",
          }}
        >
          Say Hello
        </a>
      </div>
    </section>
  );
}
