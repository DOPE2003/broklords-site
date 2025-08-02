import React from "react";
import {
  FaBolt,
  FaShieldAlt,
  FaFire,
  FaUsers
} from "react-icons/fa";
import "./Services.css";

export default function Services() {
  const services = [
    {
      icon: <FaBolt />,
      title: "Community Raiding",
      desc: "Data-driven hit-waves to spark organic virality"
    },
    {
      icon: <FaShieldAlt />,
      title: "24/7 Modding",
      desc: "Keep your channels wild yet watchful"
    },
    {
      icon: <FaFire />,
      title: "Memetic Engineering",
      desc: "Dank meme campaigns to break the chain"
    },
    {
      icon: <FaUsers />,
      title: "Growth Alchemy",
      desc: "On-chain outreach & rogue partnerships"
    }
  ];

  return (
    <section id="services" className="services-section">
      <h2 className="services-title">Our Core Services</h2>
      <div className="services-grid">
        {services.map((s, i) => (
          <div className="service-card" key={i}>
            <div className="service-icon">{s.icon}</div>
            <h3 className="service-name">{s.title}</h3>
            <p className="service-desc">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
