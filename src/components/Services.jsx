import React, { useEffect, useMemo, useState } from "react";
import { FaBolt, FaShieldAlt, FaFire, FaUsers, FaHandshake, FaCalendarAlt } from "react-icons/fa";
import "./Services.css";

const SERVICES = [
  {
    id: "raiding",
    icon: <FaBolt />,
    title: "Community Raiding",
    desc: "Data-driven hit-waves to spark organic virality.",
    bullets: [
      "High-signal raids with human commentary",
      "Safe rotation windows (shadowban aware)",
      "Cross-platform sync (X, TG, Discord)"
    ],
    kpis: ["CTR ↑", "Trending probability ↑", "Bot ratio ↓"],
    portfolioFilter: "Raids",
  },
  {
    id: "modding",
    icon: <FaShieldAlt />,
    title: "24/7 Modding",
    desc: "Keep your channels wild yet watchful.",
    bullets: [
      "Round-the-clock coverage",
      "Spam & scam auto-triage",
      "Tone & culture calibration"
    ],
    kpis: ["CSAT ↑", "Spam rate ↓", "Retention ↑"],
    portfolioFilter: "Modding",
  },
  {
    id: "memetics",
    icon: <FaFire />,
    title: "Memetic Engineering",
    desc: "Dank meme campaigns to break the chain.",
    bullets: [
      "Concept lab → iteration → seeding",
      "Format testing (video, static, threads)",
      "Creator network amplification"
    ],
    kpis: ["Share rate ↑", "Saves ↑", "Virality odds ↑"],
    portfolioFilter: "Memes",
  },
  {
    id: "growth",
    icon: <FaUsers />,
    title: "Growth Alchemy",
    desc: "On-chain outreach & rogue partnerships.",
    bullets: [
      "Partner mapping & warm intros",
      "Co-marketing kits & tracking",
      "Performance-based experiments"
    ],
    kpis: ["Qualified intros ↑", "CPA ↓", "LTV ↑"],
    portfolioFilter: "Growth",
  },
  {
    id: "partnerships",
    icon: <FaHandshake />,
    title: "Partnership Outreach",
    desc: "Pipeline, outreach, and co-branded plays.",
    bullets: [
      "Target list & contact framework",
      "Offer packaging & promos",
      "Deal tracking & follow-ups"
    ],
    kpis: ["Reply rate ↑", "Signed deals ↑", "Time-to-close ↓"],
    portfolioFilter: "Partnerships",
  },
  {
    id: "events",
    icon: <FaCalendarAlt />,
    title: "Event Coordination",
    desc: "AMAs, spaces, and hackathons—end to end.",
    bullets: [
      "Agenda & run-of-show",
      "Guest lineup & rehearsal",
      "Post-event recap & clips"
    ],
    kpis: ["Attendance ↑", "Watch time ↑", "Community growth ↑"],
    portfolioFilter: "Events",
  },
];

export default function Services() {
  const [openId, setOpenId] = useState(null);

  const selected = useMemo(
    () => SERVICES.find(s => s.id === openId) || null,
    [openId]
  );

  // Deep-link support: #services?open=raiding
  useEffect(() => {
    const hash = window.location.hash || "";
    if (hash.startsWith("#services")) {
      const qs = new URLSearchParams(hash.split("?")[1]);
      const id = qs.get("open");
      if (id && SERVICES.some(s => s.id === id)) setOpenId(id);
    }
  }, []);

  const open = (id) => {
    setOpenId(id);
    const base = "#services";
    const qs = new URLSearchParams({ open: id }).toString();
    window.location.hash = `${base}?${qs}`;
  };

  const close = () => {
    setOpenId(null);
    if (window.location.hash.startsWith("#services")) {
      window.location.hash = "#services";
    }
  };

  const goPortfolio = (filter) => {
    // let your Portfolio read ?filter=
    const url = new URL(window.location.href);
    url.searchParams.set("filter", filter);
    window.history.replaceState({}, "", url);
    window.location.hash = "#portfolio";
  };

  const goContact = (serviceId) => {
    // let your Contact read ?service=
    const url = new URL(window.location.href);
    url.searchParams.set("service", serviceId);
    window.history.replaceState({}, "", url);
    window.location.hash = "#contact";
  };

  return (
    <section id="services" className="services-section section">
      <h2 className="services-title">Our Core Services</h2>

      <div className="services-grid">
        {SERVICES.map(s => (
          <button
            key={s.id}
            className="service-card"
            onClick={() => open(s.id)}
            onKeyDown={(e) => e.key === "Enter" && open(s.id)}
            aria-haspopup="dialog"
            aria-controls={`svc-modal-${s.id}`}
          >
            <div className="service-icon">{s.icon}</div>
            <h3 className="service-name">{s.title}</h3>
            <p className="service-desc">{s.desc}</p>
            <span className="service-cta">Learn more</span>
          </button>
        ))}
      </div>

      {/* Modal */}
      {selected && (
        <div
          className="svc-modal"
          role="dialog"
          aria-modal="true"
          id={`svc-modal-${selected.id}`}
        >
          <div className="svc-modal__backdrop" onClick={close} />
          <div className="svc-modal__card" role="document">
            <button className="svc-modal__close" aria-label="Close" onClick={close}>×</button>

            <div className="svc-modal__header">
              <div className="svc-modal__icon">{selected.icon}</div>
              <h3 className="svc-modal__title">{selected.title}</h3>
              <p className="svc-modal__subtitle">{selected.desc}</p>
            </div>

            <div className="svc-modal__content">
              <div className="svc-col">
                <h4>What you get</h4>
                <ul>
                  {selected.bullets.map((b, i) => <li key={i}>{b}</li>)}
                </ul>
              </div>
              <div className="svc-col">
                <h4>Targets & KPIs</h4>
                <ul>
                  {selected.kpis.map((k, i) => <li key={i}>{k}</li>)}
                </ul>
              </div>
            </div>

            <div className="svc-modal__actions">
              <button className="btn-neon" onClick={() => goPortfolio(selected.portfolioFilter)}>
                View results
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
