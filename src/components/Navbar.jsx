// src/components/Navbar.jsx
import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="brand">BROKLORDS</div>

      <nav className="nav-group">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#portfolio">Portfolio</a>
      </nav>

      <div className="contact-wrap">
        <a
          className="contact-btn"
          href="https://t.me/crypto_enjoyer01"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open Telegram chat"
        >
          TELEGRAM
        </a>
      </div>
    </header>
  );
}
