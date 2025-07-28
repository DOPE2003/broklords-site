import React, { useState } from "react";
import { FaTelegramPlane, FaEnvelope, FaChevronDown } from "react-icons/fa";
import "./Navbar.css";

export default function Navbar() {
  const [contactOpen, setContactOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="navbar">
      {/* Logo */}
      <div className="nav-logo">BROKLORDS</div>

      {/* Centered nav items */}
      <div className="nav-center">
        {/* Contact dropdown */}
        <div className="dropdown-wrapper">
          <button
            className="contact-btn btn-neon-purple"
            onClick={() => setContactOpen(o => !o)}
          >
            Contact Us <FaChevronDown />
          </button>
          {contactOpen && (
            <div className="dropdown-content">
              <a
                href="https://t.me/crypto_enjoyer01"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-neon-purple"
              >
                <FaTelegramPlane /> Telegram
              </a>
              <a
                href="mailto:saadaithammoucrypto@gmail.com"
                className="btn-neon-purple"
              >
                <FaEnvelope /> Email
              </a>
            </div>
          )}
        </div>

        {/* Main links */}
        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#portfolio">Portfolio</a>

          {/* Services dropdown */}
          <div className="dropdown-wrapper">
            <button
              className="btn-neon-purple"
              onClick={() => setServicesOpen(o => !o)}
            >
              Services <FaChevronDown />
            </button>
            {servicesOpen && (
              <div className="dropdown-content">
                <a href="#s1" className="btn-neon-purple">Community Moderation</a>
                <a href="#s2" className="btn-neon-purple">Raid Management</a>
                <a href="#s3" className="btn-neon-purple">Social Media</a>
                <a href="#s4" className="btn-neon-purple">Partnership Outreach</a>
                <a href="#s5" className="btn-neon-purple">Event Coordination</a>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
);
}
