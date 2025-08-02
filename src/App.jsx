// src/App.jsx
import React, { useEffect } from "react";
import Navbar    from "./components/Navbar";
import Hero      from "./components/Hero";
import About     from "./components/About";
import Portfolio from "./components/Portfolio";
import Services  from "./components/Services";
import "./style.css";

export default function App() {
  // smooth-scroll on anchor clicks
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(link =>
      link.addEventListener("click", e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute("href"));
        if (target) target.scrollIntoView({ behavior: "smooth" });
      })
    );
  }, []);

  return (
    <>
      <Navbar />

      <main>
        {/* Hero / Landing */}
        <section id="home">
          <Hero />
        </section>

        {/* About Us */}
        <section id="about">
          <About />
        </section>

        {/* Portfolio */}
        <section id="portfolio">
          <Portfolio />
        </section>

        {/* Our Core Services */}
        <section id="services">
          <Services />
        </section>
      </main>
    </>
  );
}
