import React from "react";
import "./Hero.css";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <video
        className="hero-media"
        src="/bg.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="hero-shell">
        <h1 className="hero-title">THE CULT OF WEB-3 GROWTH</h1>
        <p className="hero-sub">We don’t just build hype / We build movements</p>
        <a href="#services" className="btn-primary">Explore Services</a>
      </div>
    </section>
  );
}

