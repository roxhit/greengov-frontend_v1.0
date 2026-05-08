import React, { useState } from 'react';
import './RolesSection.css';

const roles = [
  {
    id: 'citizen',
    icon: '🧑‍🌾',
    title: 'Citizens & Businesses',
    color: '#7ec8a0',
    tagline: 'Apply, Track & Benefit',
    actions: [
      'Register and verify identity documents',
      'Apply for renewable energy programs',
      'Track incentive disbursements',
      'Monitor sustainability project status',
      'Receive real-time notifications',
    ],
    cta: 'Register as Citizen',
    link: '/register/citizen',
  },
  {
    id: 'officer',
    icon: '👷',
    title: 'Environmental Officers',
    color: '#4a9b6f',
    tagline: 'Validate & Manage',
    actions: [
      'Review and validate applications',
      'Manage sustainability projects',
      'Disburse approved incentives',
      'Update project milestones',
      'Generate compliance reports',
    ],
    cta: 'Officer Portal',
    link: '/login/officer',
  },
  {
    id: 'manager',
    icon: '📐',
    title: 'Program Managers',
    color: '#c9a84c',
    tagline: 'Oversee & Optimize',
    actions: [
      'Design and oversee energy programs',
      'Monitor budget utilization',
      'Analyze program performance KPIs',
      'Manage resource allocation',
      'Access advanced analytics',
    ],
    cta: 'Manager Console',
    link: '/login/manager',
  },
  {
    id: 'auditor',
    icon: '🔍',
    title: 'Auditors & Compliance',
    color: '#1a6b4a',
    tagline: 'Review & Ensure',
    actions: [
      'Audit compliance records',
      'Review program utilization data',
      'Access immutable audit logs',
      'Generate compliance findings',
      'Monitor policy adherence',
    ],
    cta: 'Auditor Dashboard',
    link: '/login/auditor',
  },
];

const RolesSection = () => {
  const [active, setActive] = useState('citizen');
  const role = roles.find(r => r.id === active);

  return (
    <section className="roles-section" id="about">
      <div className="roles-bg-shape" />
      <div className="section-container">
        <div className="section-header light">
          <span className="section-eyebrow light-eyebrow">Built for Everyone</span>
          <h2 className="section-title white">
            One Platform,
            <span className="title-em-light"> Multiple Roles</span>
          </h2>
          <p className="section-desc light-desc">
            GreenGov serves every stakeholder in the green governance ecosystem —
            from a rooftop solar applicant to a government auditor.
          </p>
        </div>

        <div className="roles-layout">
          {/* Tabs */}
          <div className="roles-tabs">
            {roles.map(r => (
              <button
                key={r.id}
                className={`role-tab ${active === r.id ? 'active' : ''}`}
                onClick={() => setActive(r.id)}
                style={active === r.id ? { borderColor: r.color, color: r.color } : {}}
              >
                <span className="rt-icon">{r.icon}</span>
                <div className="rt-text">
                  <span className="rt-title">{r.title}</span>
                  <span className="rt-sub">{r.tagline}</span>
                </div>
                {active === r.id && <span className="rt-active-dot" style={{ background: r.color }} />}
              </button>
            ))}
          </div>

          {/* Detail Panel */}
          <div className="role-detail" key={active}>
            <div className="rd-header" style={{ borderColor: `${role.color}40` }}>
              <div className="rd-icon" style={{ background: `${role.color}22`, color: role.color }}>
                {role.icon}
              </div>
              <div>
                <h3 className="rd-title">{role.title}</h3>
                <span className="rd-tagline" style={{ color: role.color }}>{role.tagline}</span>
              </div>
            </div>
            <ul className="rd-actions">
              {role.actions.map((a, i) => (
                <li key={i} className="rd-action-item">
                  <span className="rd-check" style={{ color: role.color }}>✓</span>
                  <span>{a}</span>
                </li>
              ))}
            </ul>
            <a href={role.link} className="rd-cta" style={{ background: role.color }}>
              {role.cta}
              <svg viewBox="0 0 16 16" fill="none" width="14">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RolesSection;
