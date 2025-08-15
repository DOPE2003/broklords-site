import React from "react";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <video className="hero-video" autoPlay muted loop>
        <source src="/bg.mp4" type="video/mp4" />
      </video>

      <div className="hero-content">
        <h2>THE CULT OF WEB-3 GROWTH</h2>
        <p>We don’t just build hype / We build movements</p>
        <a href="#services" className="btn-neon">
          Explore Services
        </a>
      </div>
    </section>
  );
}
