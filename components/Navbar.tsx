"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: "1.5rem 2rem",
        transition: "all 0.3s ease",
        background:
          scrolled || mobileMenuOpen ? "rgba(5, 5, 5, 0.95)" : "transparent",
        backdropFilter: scrolled || mobileMenuOpen ? "blur(10px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.05)" : "none",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link
          href="/"
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            letterSpacing: "-1px",
            zIndex: 101, // Ensure logo stays above menu overlay if needed
            position: "relative",
          }}
          onClick={() => setMobileMenuOpen(false)}
        >
          HM<span style={{ color: "var(--brand-primary)" }}>.</span>
        </Link>

        {/* Desktop Menu */}
        <div
          className="desktop-only"
          style={{ gap: "2rem", alignItems: "center" }}
        >
          {["About", "Experience", "Certificates", "Projects", "Contact"].map(
            (item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                style={{
                  fontSize: "0.9rem",
                  color: "var(--text-secondary)",
                  fontWeight: 500,
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--text-primary)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--text-secondary)")
                }
              >
                {item}
              </Link>
            )
          )}
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="mobile-only"
          onClick={toggleMenu}
          style={{
            background: "transparent",
            border: "none",
            color: "var(--text-primary)",
            zIndex: 101,
            padding: "0.5rem",
          }}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>

        {/* Mobile Menu Dropdown */}
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            background: "var(--bg-secondary)",
            backdropFilter: "blur(10px)",
            borderBottom: "1px solid var(--border-light)",
            borderTop: "1px solid var(--border-light)",
            padding: "2rem",
            display: mobileMenuOpen ? "flex" : "none",
            flexDirection: "column",
            gap: "1.5rem",
            alignItems: "center",
            boxShadow: "0 10px 40px -10px rgba(0,0,0,0.5)",
            transformOrigin: "top",
            animation: mobileMenuOpen
              ? "fadeUp 0.3s ease-out forwards"
              : "none",
          }}
        >
          {["About", "Experience", "Certificates", "Projects", "Contact"].map(
            (item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  fontSize: "1.1rem",
                  fontWeight: 500,
                  color: "var(--text-primary)",
                  width: "100%",
                  textAlign: "center",
                  padding: "0.5rem 0",
                }}
              >
                {item}
              </Link>
            )
          )}
        </div>
      </div>
    </nav>
  );
}
