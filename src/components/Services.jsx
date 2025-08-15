import React from "react";
import {
  FaShieldAlt,
  FaBolt,
  FaChartLine,
  FaTwitter,
  FaUsers,
  FaFire,
  FaPhone,
  FaLaptop
} 
from "react-icons/fa";
import "./Services.css";

export default function Services() {
  const services = [ 
    {
      slug: "24/7-modding",
      icon: <FaShieldAlt />,
      title: "24/7 Modding",
      desc: "Keep your channels wild yet watchful"
    },
    {
      slug: "community-raiding",
      icon: <FaBolt />,
      title: "Community Raiding",
      desc: "Coordinated hype pushes"
    },
    {
      slug: "growth-alchemy",
      icon: <FaChartLine />,
      title: "Growth Alchemy",
      desc: "Convert visitors to holders"
    },
    {
      slug: "social-media-management",
      icon: <FaTwitter/>,
      title:"Social Media Management",
      desc:"Dashboards to track your growth and engagement",
    },
    {
      slug: "content-creation",
      icon: <FaUsers />,
      title: "Content Creation",
      desc: "Videos, graphics, and more to boost your brand"
    },
    {
      slug: "meme-architectury",
      icon: <FaFire />,
      title: "Meme Architectury",
      desc: "Memes that turn viewers into holders"
    },
    
    {
      slug: "crypto-advisory",
      icon: <FaPhone />,
      title: "Crypto Advisory",
      desc: "Expert guidance for your crypto journey"
    },
    {
      slug: "custom-services",
      icon: <FaLaptop />,
      title: "Custom Services",
      desc: "Tailored solutions for your unique needs"
    }
    
  ];

  return (
    <section id="services" className="services-section">
      <h2 className="services-title">Our Core Services</h2>

      <div className="services-grid" role="list">
        {services.map((s) => (
          <article
            id={`service-${s.slug}`}
            className="service-card"
            role="listitem"
            key={s.slug}
          >
            <div className="service-icon" aria-hidden="true">
              {s.icon}
            </div>
            <h3 className="service-name">{s.title}</h3>
            <p className="service-desc">{s.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}