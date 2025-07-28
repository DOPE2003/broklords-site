import React from "react";
import { FaChevronDown } from "react-icons/fa";
import "./Hero.css";

export default function Hero() {
  const scrollToServices = () =>
    document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="hero">
      {/* Hero-only video */}
      <video
        className="hero-video"
        src="/bg.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Fade overlay to black */}
      <div className="fade-overlay" />

      <div className="hero-content">
        <p className="hero-subtitle">
          THE CULT OF WEB-3 GROWTH
        </p>
        <p className="hero-subtitle">
          We dont just build hype / We build movements
        </p>
        <button className="hero-btn" onClick={scrollToServices}>
           Explore Services
        </button>
      </div>

      <div className="scroll-down" onClick={scrollToServices}>
        <FaChevronDown />
      </div>
    </section>
  );
}
