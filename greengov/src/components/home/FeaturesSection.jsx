import React, { useEffect, useRef } from 'react';
import './FeaturesSection.css';

const features = [
  {
    icon: '🌞',
    title: 'Renewable Energy Programs',
    desc: 'Apply for solar, wind, and clean energy programs. Track approval status, disbursements, and project milestones in real-time.',
    tag: 'Energy',
    color: '#c9a84c',
  },
  {
    icon: '💰',
    title: 'Incentive & Subsidy Management',
    desc: 'Automated allocation and transparent tracking of green subsidies and incentives for eligible citizens and businesses.',
    tag: 'Finance',
    color: '#7ec8a0',
  },
  {
    icon: '📋',
    title: 'Compliance Monitoring',
    desc: 'Stay ahead of environmental regulations. Automated alerts, audit trails, and compliance dashboards for every program.',
    tag: 'Compliance',
    color: '#4a9b6f',
  },
  {
    icon: '📊',
    title: 'Analytics & Reporting',
    desc: 'Rich dashboards and KPI reports for program efficiency, budget utilization, and sustainability impact metrics.',
    tag: 'Analytics',
    color: '#c9a84c',
  },
  {
    icon: '🏗️',
    title: 'Infrastructure Tracking',
    desc: 'Monitor solar plants, wind farms, and recycling units — capacity, status, location, and maintenance schedules.',
    tag: 'Infrastructure',
    color: '#7ec8a0',
  },
  {
    icon: '🔔',
    title: 'Smart Notifications',
    desc: 'Instant in-app, SMS, and email alerts for program updates, approval milestones, compliance deadlines, and audits.',
    tag: 'Alerts',
    color: '#4a9b6f',
  },
];

const FeaturesSection = () => {
  const ref = useRef();

  useEffect(() => {
    const cards = ref.current?.querySelectorAll('.feat-card');
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.style.opacity = '1';
          e.target.style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    cards?.forEach((c, i) => {
      c.style.transitionDelay = `${i * 0.08}s`;
      obs.observe(c);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <section className="features-section" id="features" ref={ref}>
      <div className="section-container">
        <div className="section-header">
          <span className="section-eyebrow">What GreenGov Offers</span>
          <h2 className="section-title">
            Everything You Need to
            <span className="title-em"> Govern Green</span>
          </h2>
          <p className="section-desc">
            A comprehensive platform built for India's environmental governance — from citizen applications
            to auditor reporting, all in one secure, scalable system.
          </p>
        </div>

        <div className="features-grid">
          {features.map((f, i) => (
            <div className="feat-card" key={i}>
              <div className="feat-top">
                <div className="feat-icon" style={{ background: `${f.color}18`, color: f.color }}>
                  {f.icon}
                </div>
                <span className="feat-tag" style={{ color: f.color, background: `${f.color}15` }}>
                  {f.tag}
                </span>
              </div>
              <h3 className="feat-title">{f.title}</h3>
              <p className="feat-desc">{f.desc}</p>
              <div className="feat-arrow" style={{ color: f.color }}>
                Learn more
                <svg viewBox="0 0 16 16" fill="none" width="14">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
