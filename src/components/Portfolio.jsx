import React, { useState } from "react";
import CountUp from "react-countup";
import "./Portfolio.css";

export default function Portfolio() {
  const categories = [
    { name: "All",    count: 5000 },
    { name: "Raids",  count: 4500 },
    { name: "Modding",count: 110  },
    { name: "Events", count: 30   },
  ];

  const [active, setActive] = useState("All");
  const { count } = categories.find(c => c.name === active);

  return (
    <div className="portfolio-container">
      <h2 className="portfolio-title">Our Portfolio</h2>

      <div className="portfolio-buttons">
        {categories.map(cat => (
          <button
            key={cat.name}
            className={`portfolio-btn${active === cat.name ? " active" : ""}`}
            onClick={() => setActive(cat.name)}
          >
            {cat.name}
          </button>
        ))}
      </div>

      <div className="portfolio-count">
        <CountUp prefix="+" end={count} duration={2} />
      </div>
    </div>
  );
}
