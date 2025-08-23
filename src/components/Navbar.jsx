// src/components/Navbar.jsx
import React from "react";
import "./Navbar.css";

export default function Navbar() {
feat/mobile-hero
  return (
    <header className="navbar">
      <div className="brand">BROKLORDS</div>

  const [menuOpen, setMenuOpen] = useState(false);
  const [openContact, setOpenContact] = useState(false)
  const [openServices, setOpenServices] = useState(false)
  
  return (
    <header className="navbar">
      <div className="nav-logo">BROKLORDS</div>

      <div className="nav-center">
        {/* Contact Dropdown */}
        <div
          className={`dropdown-wrapper`}
          onClick={() => {
            setOpenContact(!openContact)
            setOpenServices(false)
          }}
        >
          <button className="nav-btn contact-btn">
             Contact Us ▾
          </button>
          {openContact && (
            <div className="dropdown-content contact-content">
              <a
                href="https://t.me/crypto_enjoyer01"
                target="_blank"
                rel="noopener noreferrer"
                className="dropdown-item"
              >                
                Telegram
              </a>
              <a
                href="mailto:saadaithammoucrypto@gmail.com"
                className="dropdown-item"
              >
                Email
              </a>
            </div>
          )}
        </div>
       main

      <nav className="nav-group">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#portfolio">Portfolio</a>
      </nav>

 feat/mobile-hero
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

          {/* Services Dropdown */}
          <div
            className="dropdown-wrapper"
            onClick={() => {
              setOpenServices(!openServices)
              setOpenContact(false)
            }}
          >
            <button className="nav-btn services-btn">
              Services ▾
            </button>
            {openServices && (
              <div className="dropdown-content services-content">
                 <a href="#24/7-modding" className="dropdown-item">
                  24/7 Modding
                </a>
                <a href="#community-raiding" className="dropdown-item">
                  Community Raiding
                </a>
                <a href="#growth-alchemy" className="dropdown-item">
                  Growth Alchemy
                </a>               
                <a href="#social-media-management" className="dropdown-item">
                  Social Media Management
                </a>
                 <a href="#meme-architectury" className="dropdown-item">
                  Meme Architectury
                </a>
                <a href="#content-creation" className="dropdown-item">
                  Content Creation
                </a>
                <a href="#crypto-advisory" className="dropdown-item">
                  Crypto Advisory
                </a>
                <a href="#custom-services" className="dropdown-item">
                  Custom Services
                </a>
              </div>
            )}
          </div>
        </nav>
 main
      </div>
    </header>
  );
}
