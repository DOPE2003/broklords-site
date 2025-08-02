import React, { useState } from 'react'
import './Navbar.css'

export default function Navbar() {
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

        {/* Main Links */}
        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#portfolio">Portfolio</a>

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
                <a href="#community-moderation" className="dropdown-item">
                  Community Moderation
                </a>
                <a href="#raid-management" className="dropdown-item">
                  Raid Management
                </a>
                <a href="#social-media" className="dropdown-item">
                  Social Media Management
                </a>
                {/* etc... */}
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  )
}
