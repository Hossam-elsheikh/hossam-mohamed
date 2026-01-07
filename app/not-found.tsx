"use client";
import React from "react";
import Link from "next/link";
import "./globals.css"; // ensure styles are applied if this renders without layout? No, it uses root layout.

export default function NotFound() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          fontSize: "6rem",
          color: "var(--brand-primary)",
          marginBottom: "0",
        }}
      >
        404
      </h1>
      <h2 style={{ marginBottom: "2rem" }}>Page Not Found</h2>
      <Link
        href="/"
        style={{
          background: "var(--brand-gradient)",
          padding: "1rem 2rem",
          borderRadius: "50px",
          color: "white",
          fontWeight: 600,
        }}
      >
        Go Home
      </Link>
    </div>
  );
}
