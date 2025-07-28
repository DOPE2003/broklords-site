import React from "react";
import { FaBolt, FaShieldAlt, FaFire, FaUsers } from "react-icons/fa";
import "./About.css";

export default function About() {
  const features = [
    { icon: <FaBolt />, title: "Community Raiding", text: "Explosive engagement for your project" },
    { icon: <FaShieldAlt />, title: "24/7 Modding",     text: "Keep your chat clean and hype-alive" },
    { icon: <FaFire />, title: "Meme Warfare",         text: "Viral content to dominate the timeline" },
    { icon: <FaUsers />, title: "Growth Strategy",     text: "Turn holders into cult believers" },
  ];

  return (
    <section id="about" className="about-section">
      <h2 className="neon-title">About Us</h2>
      <p className="about-text">
        We are Broklords – the shadow syndicate powering Web3 projects through unstoppable community energy. From raiding to viral memes, we make your project thrive in the trenches.
      </p>

      <div className="features-grid">
        {features.map((f, i) => (
          <div key={i} className="feature-card">
            <div className="icon-wrapper">{f.icon}</div>
            <h3>{f.title}</h3>
            <p>{f.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
