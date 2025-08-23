// src/components/Portfolio.jsx
import React, { useMemo, useState } from "react";
import "./Portfolio.css";
import PortfolioChart from "./PortfolioChart";

// Adjust these if your counts are computed elsewhere
const COUNTS = {
  all: 4500 + 110 + 30, // sample: total of all categories
  raids: 4500,
  modding: 110,
  events: 30,
};

const TABS = [
  { key: "all", label: "All" },
  { key: "raids", label: "Raids" },
  { key: "modding", label: "Modding" },
  { key: "events", label: "Events" },
];

export default function Portfolio() {
  const [active, setActive] = useState("all");
  const count = useMemo(() => COUNTS[active] ?? 0, [active]);

  return (
    <section id="portfolio" className="section portfolio-section">
      <div className="container">
        <h2 className="section-title">Our Portfolio</h2>

        {/* Tabs */}
        <div className="pf-tabs" role="tablist" aria-label="Portfolio categories">
          {TABS.map(t => (
            <button
              key={t.key}
              role="tab"
              aria-selected={active === t.key}
              className={`pf-tab ${active === t.key ? "active" : ""}`}
              onClick={() => setActive(t.key)}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Counter strip */}
        <div className="pf-metrics-row">
          <div className="pf-metric-card">
            <div className="pf-metric-number">+{count}</div>
            <div className="pf-metric-label">
              {TABS.find(x => x.key === active)?.label} total
            </div>
          </div>
        </div>

        {/* Chart */}
        <PortfolioChart category={active} />

        {/* (Optional) Your portfolio cards can remain below */}
        {/* <div className="your-grid-here"> ... </div> */}
      </div>
    </section>
  );
}
