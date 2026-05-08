import React from 'react';
import './ProgramsSection.css';

const programs = [
  {
    emoji: '☀️',
    title: 'National Solar Mission',
    category: 'Solar Energy',
    budget: '₹240 Cr',
    status: 'Open',
    statusColor: '#4a9b6f',
    progress: 68,
    applicants: '4,812',
    desc: 'Subsidies for rooftop solar installations for homes and small businesses across India.',
  },
  {
    emoji: '💨',
    title: 'Wind Energy Expansion',
    category: 'Wind Power',
    budget: '₹180 Cr',
    status: 'Open',
    statusColor: '#4a9b6f',
    progress: 45,
    applicants: '2,340',
    desc: 'Incentives for wind energy installations in coastal and high-wind regions.',
  },
  {
    emoji: '♻️',
    title: 'Urban Recycling Initiative',
    category: 'Recycling',
    budget: '₹95 Cr',
    status: 'Closing Soon',
    statusColor: '#c9a84c',
    progress: 82,
    applicants: '8,127',
    desc: 'Support for urban recycling centers, waste management units, and circular economy startups.',
  },
  {
    emoji: '🌊',
    title: 'Water Conservation Program',
    category: 'Water',
    budget: '₹120 Cr',
    status: 'Coming Soon',
    statusColor: '#7ec8a0',
    progress: 12,
    applicants: '—',
    desc: 'Grants for rainwater harvesting, watershed restoration, and smart irrigation systems.',
  },
];

const ProgramsSection = () => (
  <section className="programs-section" id="programs">
    <div className="section-container">
      <div className="programs-header">
        <div>
          <span className="section-eyebrow">Active Initiatives</span>
          <h2 className="section-title">
            Current <span className="title-em">Green Programs</span>
          </h2>
          <p className="section-desc">
            Apply for government-backed renewable energy and sustainability programs.
            Track your applications and disbursements in real-time.
          </p>
        </div>
        <a href="/programs" className="view-all-btn">
          View All Programs
          <svg viewBox="0 0 16 16" fill="none" width="14">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </a>
      </div>

      <div className="programs-grid">
        {programs.map((p, i) => (
          <div className="prog-card" key={i}>
            <div className="prog-head">
              <div className="prog-emoji">{p.emoji}</div>
              <div className="prog-meta">
                <span className="prog-category">{p.category}</span>
                <span
                  className="prog-status"
                  style={{ color: p.statusColor, background: `${p.statusColor}18` }}
                >
                  {p.status}
                </span>
              </div>
            </div>

            <h3 className="prog-title">{p.title}</h3>
            <p className="prog-desc">{p.desc}</p>

            <div className="prog-progress">
              <div className="prog-prog-info">
                <span>Budget Utilized</span>
                <span>{p.progress}%</span>
              </div>
              <div className="prog-bar">
                <div
                  className="prog-bar-fill"
                  style={{ width: `${p.progress}%`, background: p.progress > 75 ? '#c9a84c' : '#4a9b6f' }}
                />
              </div>
            </div>

            <div className="prog-footer">
              <div className="prog-stat">
                <span className="ps-val">{p.budget}</span>
                <span className="ps-label">Total Budget</span>
              </div>
              <div className="prog-stat">
                <span className="ps-val">{p.applicants}</span>
                <span className="ps-label">Applicants</span>
              </div>
              <a
                href={`/programs/apply`}
                className="prog-apply"
                style={p.status === 'Coming Soon' ? { opacity: 0.5, pointerEvents: 'none' } : {}}
              >
                {p.status === 'Coming Soon' ? 'Notify Me' : 'Apply Now'}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProgramsSection;
