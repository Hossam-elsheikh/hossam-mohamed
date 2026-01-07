"use client";
import React, { useState } from "react";
import PharmacySolutions from '@/public/projects/pharmasolutions.png'
import Image from "next/image";

const projects = [
  {
    title: "Pharmacy Solutions",
    description:
      "E-commerce platform for pharmacies with features such as product catalog, order management, and inventory tracking.",
    tech: ["React", "Next.js"],
    image: PharmacySolutions,
    link: "https://pharmasolutionskw.com/en",
  },
];

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }
  };

  // Mouse support
  const onMouseDown = (e: React.MouseEvent) => {
    setTouchEnd(null);
    setTouchStart(e.clientX);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (touchStart) {
      setTouchEnd(e.clientX);
    }
  };

  const onMouseUp = () => {
    onTouchEnd();
    setTouchStart(null);
    setTouchEnd(null);
  };

  const onMouseLeave = () => {
    if (touchStart) {
      onTouchEnd();
      setTouchStart(null);
      setTouchEnd(null);
    }
  };

  return (
    <section
      id="projects"
      className="section-padding"
      style={{ overflow: "hidden" }}
    >
      <div className="container">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "3rem",
          }}
        >
          <h2>FreeLancing Projects</h2>
          <div style={{ display: "flex", gap: "1rem" }}>
            <button
              onClick={prevSlide}
              className="glass-card"
              style={{
                padding: "0.8rem",
                color: "white",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
              aria-label="Previous Project"
            >
              ←
            </button>
            <button
              onClick={nextSlide}
              className="glass-card"
              style={{
                padding: "0.8rem",
                color: "white",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
              aria-label="Next Project"
            >
              →
            </button>
          </div>
        </div>

        <div
          style={{
            position: "relative",
            height: "450px",
            perspective: "1000px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "grab",
          }}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseLeave}
        >
          {projects.map((project, index) => {
            // Calculate relative position based on active index
            // We want to handle wrapping around the array visually if possible,
            // but for simple 3D stack we can just determine distance.

            // Simple logic: Center is active, left is previous, right is next.
            // Using modulo for circular logic requires careful index math

            let offset = index - activeIndex;
            // Handle wrap-around for endless loop feel for 4 items
            if (offset < -1) offset += projects.length;
            if (offset > 1) offset -= projects.length;

            // However, with 4 items, wrap logic can be tricky (e.g. is 2 steps away +2 or -2?).
            // Let's stick to a linear constrained view or a simpler standard carousel if logic gets complex.
            // Actually, let's do a strict circular focusing.

            const isActive = index === activeIndex;
            const isPrev =
              index === (activeIndex - 1 + projects.length) % projects.length;
            const isNext = index === (activeIndex + 1) % projects.length;

            let transform = "translateX(100%) scale(0.8) opacity(0)";
            let zIndex = 0;
            let opacity = 0;

            if (isActive) {
              transform = "translateX(0) scale(1) rotateY(0deg)";
              zIndex = 10;
              opacity = 1;
            } else if (isPrev) {
              transform = "translateX(-60%) scale(0.85) rotateY(15deg)";
              zIndex = 5;
              opacity = 0.6;
            } else if (isNext) {
              transform = "translateX(60%) scale(0.85) rotateY(-15deg)";
              zIndex = 5;
              opacity = 0.6;
            } else {
              // The 4th item (hidden/back)
              transform = "translateZ(-200px) scale(0.7)";
              zIndex = 1;
              opacity = 0; // hide it to avoid clutter
            }

            return (
              <div
                key={index}
                className="glass-card"
                style={{
                  position: "absolute",
                  width: "100%",
                  maxWidth: "500px",
                  height: "450px",
                  transition: "all 0.5s var(--ease-spring)",
                  transform,
                  zIndex,
                  opacity,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "220px",
                    borderRadius: "0.5rem",
                    marginBottom: "1.5rem",
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div
                  style={{ flex: 1, display: "flex", flexDirection: "column" }}
                >
                  <h3 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>
                    {project.title}
                  </h3>
                  <p
                    style={{
                      color: "var(--text-secondary)",
                      marginBottom: "1rem",
                      fontSize: "0.9rem",
                    }}
                  >
                    {project.description}
                  </p>

                  <ul
                    style={{
                      display: "flex",
                      gap: "0.5rem",
                      listStyle: "none",
                      flexWrap: "wrap",
                      marginBottom: "1.5rem",
                    }}
                  >
                    {project.tech.map((t) => (
                      <li
                        key={t}
                        style={{
                          fontSize: "0.75rem",
                          color: "var(--text-accent)",
                          background: "rgba(56, 189, 248, 0.1)",
                          padding: "0.2rem 0.6rem",
                          borderRadius: "12px",
                        }}
                      >
                        {t}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      marginTop: "auto",
                      color: "var(--brand-primary)",
                      fontWeight: 600,
                      fontSize: "0.9rem",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      textDecoration: "none",
                    }}
                  >
                    View Project
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pagination Dots */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "0.5rem",
            marginTop: "1rem",
          }}
        >
          {projects.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                background:
                  idx === activeIndex
                    ? "var(--brand-primary)"
                    : "var(--text-secondary)",
                border: "none",
                padding: 0,
                cursor: "pointer",
                opacity: idx === activeIndex ? 1 : 0.3,
                transition: "opacity 0.3s",
              }}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
