"use client";
import React, { useState } from "react";
import Cyber from '@/public/certificates/cyber.png'
import ITI from '@/public/certificates/iti.jpg'
import SqlUdemy from '@/public/certificates/sql-udemy.jpg'
import NestUdemy from '@/public/certificates/nest-udemy.jpg'
import ReactLinkedin from '@/public/certificates/react-linkedin.jpg'
import ReactUdemy from '@/public/certificates/react-udemy.jpg'
import JSFCC from '@/public/certificates/js.png'
import RWD from '@/public/certificates/RWD.png'
import Image from "next/image";
const certificates = [
  {
    title: "React - The Complete Guide",
    image: ReactUdemy,
    link: "https://www.udemy.com/certificate/UC-3bb3c897-01ca-46e3-a5dd-7366acd42bfa/",
    issuer: "Udemy",
  },
  {
    title: "Full Stack web development using MEARN ",
    image: ITI,
    
    link: "https://drive.google.com/file/d/1w4xhAuVK7zRcVNcEo-xXPM7kynH_qE_x/view?usp=sharing",
    issuer: "Information Technology Institute ITI-Sohag",
  },
  {
    title: "SQL and PostgreSQL: The Complete Developer's Guide",
    image: SqlUdemy,

    link: "https://www.udemy.com/certificate/UC-53e56135-6ba0-4706-93cd-8a8714fc0dfe/",
    issuer: "Udemy",
  },
  {
    title: "NestJS Masterclass - NodeJS Framework Backend Development",
    image: NestUdemy,

    link: "https://www.udemy.com/certificate/UC-44de9a50-f4ea-4a43-8f96-92b2c01ef2f9/",
    issuer: "Udemy",
  },
   {
    title: "Google Cybersecurity Professional Certificate V2",
    image: Cyber,
    link: "https://www.credly.com/badges/26a0937e-f9ee-47c6-8fb2-2705e6d71320/linked_in_profile",
    issuer: "Coursera",
  },
  {
    title: "React: Design Patterns",
    image: ReactLinkedin,

    link: "https://www.linkedin.com/learning/certificates/8bacd0853628a56039169d808a774319db9cef782077094510326502aa4b50e4",
    issuer: "Linkedin",
  },
  {
    title: "JavaScript Algorithms and Data Structures",
    image: JSFCC,

    link: "https://freecodecamp.org/certification/fccab0dfc69-d48c-48b6-ac1a-d83e15d060bc/javascript-algorithms-and-data-structures-v8",
    issuer: "freeCodeCamp",
  },
  {
    title: "Responsive Web Design",
    image: RWD,

    link: "https://freecodecamp.org/certification/hoss_am/responsive-web-design",
    issuer: "freeCodeCamp",
  },
];

export default function Certificates() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % certificates.length);
  };

  const prevSlide = () => {
    setActiveIndex(
      (prev) => (prev - 1 + certificates.length) % certificates.length
    );
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
      id="certificates"
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
          <h2>Certifications</h2>
          <div style={{ display: "flex", gap: "1rem" }}>
            <button
              onClick={prevSlide}
              className="glass-card"
              style={{
                padding: "0.8rem",
                borderRadius: "50%",
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
              aria-label="Previous Certificate"
            >
              ←
            </button>
            <button
              onClick={nextSlide}
              className="glass-card"
              style={{
                padding: "0.8rem",
                borderRadius: "50%",
                display: "flex",
                color: "white",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
              aria-label="Next Certificate"
            >
              →
            </button>
          </div>
        </div>

        <div
          style={{
            position: "relative",
            height: "400px",
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
          {certificates.map((cert, index) => {
            const isActive = index === activeIndex;
            const isPrev =
              index ===
              (activeIndex - 1 + certificates.length) % certificates.length;
            const isNext = index === (activeIndex + 1) % certificates.length;

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
              transform = "translateZ(-200px) scale(0.7)";
              zIndex = 1;
              opacity = 0;
            }

            return (
              <div
                key={index}
                className="glass-card"
                style={{
                  position: "absolute",
                  width: "100%",
                  maxWidth: "500px",
                  height: "400px",
                  transition: "all 0.5s var(--ease-spring)",
                  transform,
                  zIndex,
                  opacity,
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "220px",
                    overflow: "hidden",
                    borderRadius: "0.5rem",
                    flexShrink: 0,
                  }}
                >
                  <Image
                  objectFit="cover"
                  fill
                    src={cert.image}
                    alt={cert.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    flex: 1,
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontSize: "0.9rem",
                        color: "var(--brand-primary)",
                        marginBottom: "0.5rem",
                        fontWeight: 600,
                      }}
                    >
                      {cert.issuer}
                    </div>
                    <h3
                      style={{
                        fontSize: "1.25rem",
                        marginBottom: "0.75rem",
                        lineHeight: 1.3,
                      }}
                    >
                      {cert.title}
                    </h3>
                    
                  </div>

                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      fontSize: "0.9rem",
                      fontWeight: 600,
                      color: "var(--text-primary)",
                      textDecoration: "none",
                    }}
                  >
                    Show Credential
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
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
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
            marginTop: "2rem",
          }}
        >
          {certificates.map((_, idx) => (
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
