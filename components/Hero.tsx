"use client";
import React from "react";

export default function Hero() {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        paddingTop: "80px",
      }}
    >
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>

      <div
        className="container"
        style={{ textAlign: "center", position: "relative", zIndex: 1 }}
      >
        <p
          className="animate-fade-up"
          style={{
            color: "var(--brand-primary)",
            fontWeight: 600,
            letterSpacing: "2px",
            marginBottom: "1rem",
            textTransform: "uppercase",
            fontSize: "0.9rem",
          }}
        >
          Hi, my name is
        </p>
        <h1 className="animate-fade-up delay-100">Hossam Mohamed.</h1>
        <h2
          className="animate-fade-up delay-200"
          style={{
            marginTop: "1rem",
            color: "var(--text-secondary)",
            fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
            fontWeight: 600,
          }}
        >
          I build <span className="text-gradient">digital experiences</span>{" "}
          that live.
        </h2>
        <p
          className="animate-fade-up delay-300"
          style={{
            maxWidth: "600px",
            margin: "2rem auto",
            color: "var(--text-secondary)",
            fontSize: "1.1rem",
          }}
        >
          I'm a Frontend React Developer specialized in creating beautiful,
          functional, and lively web applications.
        </p>

        <div
          className="animate-fade-up delay-300"
          style={{ marginTop: "3rem" }}
        >
          <a
            href="#projects"
            style={{
              background: "var(--brand-gradient)",
              padding: "1rem 2.5rem",
              borderRadius: "50px",
              fontWeight: 600,
              display: "inline-block",
              boxShadow: "0 10px 30px -10px var(--brand-secondary)",
            }}
          >
            Check out my work
          </a>
        </div>
      </div>
    </section>
  );
}
