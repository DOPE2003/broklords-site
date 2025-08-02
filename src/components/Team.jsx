import React from "react";

export default function Team() {
  const members = [
    ["ASHUSKI-XII", "Founder & Web3 Strategist", "Growth, Vision, Strategy"],
    ["TEJO-LXVI", "Tech Director", "Tech, UI/UX"],
    ["TIWWY-XIX", "Community Lead", "Ops, Engagement"],
    ["MOBIUS-LVV", "Designer", "UI/UX, Branding"],
    ["SALAH-III", "Partnerships", "B2B, Network, Collabs"],
    ["ALLUSH-VII", "Web2 Strategist", "Web2, Marketing, Outreach"],
  ];

  return (
    <div className="container">
      <h2>Meet the Team</h2>
      <div className="grid">
        {members.map(([name, role, skills], i) => (
          <div className="card" key={i}>
            <h3>{name}</h3>
            <p>{role}</p>
            <small>{skills}</small>
          </div>
        ))}
      </div>
    </div>
  );
}
