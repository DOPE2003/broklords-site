import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";      // ← New
import "./style.css";

export default function App() {
  useEffect(() => {
    // smooth scroll
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) =>
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute("href"));
        if (target) target.scrollIntoView({ behavior: "smooth" });
      })
    );
  }, []);

  const sectionStyle = {
    minHeight: "100vh",
    padding: "4rem 1rem",
    background: "black", // pure black
    color: "white",
  };

  return (
    <div>
      <Navbar />

      {/* Hero with its own video */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Services */}
      <section id="services" style={sectionStyle}>
        <h2 className="section-title">Our Services</h2>
        <div className="container d-flex flex-wrap justify-content-center">
          {[
            ["Community Moderation", "Safe, engaged spaces across Discord and Telegram."],
            ["Raid Management", "Organized hype waves to boost visibility."],
            ["Community Building", "Sustainable, organic growth strategies."],
            ["Social Media Management", "Cross-platform presence and branding."],
            ["Partnership Outreach", "Connecting with the right Web3 allies."],
            ["Event Coordination", "From AMAs to hackathons — fully managed."],
          ].map(([title, desc], i) => (
            <div className="col-md-3 card-neu" key={i}>
              <h5>{title}</h5>
              <p className="small">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section id="team" style={sectionStyle}>
        <h2 className="section-title">Meet the Team</h2>
        <div className="container d-flex flex-wrap justify-content-center">
          {[
            ["ASHUSKI-XII", "Founder & WEB3 Strategist", "Growth, Vision, Strategy"],
            ["TEJO-LXVI", "Tech Director", "Tech, UI/UX"],
            ["TIWWY-XIX", "Community Lead", "Ops, Engagement, Telegram/Discord"],
            ["MOBIUS-LVV", "Designer", "UI/UX, Branding, Visuals"],
            ["SALAH-III", "Partnerships", "B2B, Network, Collabs, Development"],
            ["ALLUSH-VII", "WEB2 Strategist", "Web2, Marketing, Outreach"],
          ].map(([name, role, skills], i) => (
            <div className="col-md-3 card-neu" key={i}>
              <h5>{name}</h5>
              <p>{role}</p>
              <small>{skills}</small>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" style={sectionStyle}>
        <h2 className="section-title">Past Projects</h2>
        <div className="container d-flex flex-wrap justify-content-center">
          {[
            ["DegenVerse", "10K Discord users in 3 weeks with 24/7 moderation and raid campaigns."],
            ["ChainHeroes", "Grew Twitter by 120% through coordinated Twitter raids."],
            ["BlockFiesta", "Managed a multi-chain hackathon with 500+ participants."],
          ].map(([name, desc], i) => (
            <div className="col-md-3 card-neu" key={i}>
              <h5>{name}</h5>
              <p className="small">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" style={sectionStyle}>
        <h2 className="section-title">Contact Us</h2>
        <div className="text-center">
          <p>
            Email:{" "}
            <a href="mailto:saadaithammoucrypto@gmail.com" className="text-light">
              saadaithammoucrypto@gmail.com
            </a>
          </p>
          <div className="d-flex justify-content-center gap-4 my-3">
            <a
              href="https://t.me/crypto_enjoyer01"
              className="text-light"
              target="_blank"
              rel="noopener noreferrer"
            >
              Telegram
            </a>
          </div>
          <p className="text-muted mt-4">© 2025 BROKLORDS. All rights reserved.</p>
        </div>
      </section>
    </div>
  );
}
