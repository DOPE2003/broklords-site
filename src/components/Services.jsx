import React from 'react';

export default function Services() {
  const services = [
    {
      title: 'Community Moderation',
      desc: 'Safe, engaged spaces across Discord and Telegram.',
    },
    {
      title: 'Raid Management',
      desc: 'Organized hype waves to boost visibility.',
    },
    {
      title: 'Social Media',
      desc: 'Cross-platform branding and daily engagement.',
    },
    {
      title: 'Partnership Outreach',
      desc: 'Connecting you with the right allies in Web3.',
    },
  ];

  return (
    <section id="services" className="d-flex flex-column justify-content-center align-items-center text-center" style={{ minHeight: '100vh', padding: '3rem 1rem' }}>
      <h2 style={{ color: '#00f9ff', fontSize: '2.5rem', marginBottom: '2rem' }}>Our Services</h2>
      <div className="container">
        <div className="row g-4">
          {services.map(({ title, desc }, i) => (
            <div className="col-md-6 col-lg-3" key={i}>
              <div
                className="p-4 rounded text-light h-100"
                style={{
                  background: '#1e1e2f',
                  boxShadow: 'inset 6px 6px 12px #141421, inset -6px -6px 12px #2a2a40',
                  borderRadius: '1rem',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                }}
              >
                <h5 style={{ color: '#00f9ff' }}>{title}</h5>
                <p className="small mb-0">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
