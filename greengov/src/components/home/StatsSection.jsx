import React, { useEffect, useRef, useState } from 'react';
import './StatsSection.css';

const stats = [
  { val: 1247, suffix: '+', label: 'Active Projects', icon: '🌿', color: '#7ec8a0' },
  { val: 840, suffix: ' Cr', prefix: '₹', label: 'Subsidies Disbursed', icon: '💰', color: '#c9a84c' },
  { val: 98.7, suffix: '%', label: 'Compliance Rate', icon: '✅', color: '#4a9b6f' },
  { val: 2400, suffix: ' MW', label: 'Renewable Capacity', icon: '⚡', color: '#7ec8a0' },
  { val: 120000, suffix: '+', label: 'Beneficiaries', icon: '👥', color: '#c9a84c' },
  { val: 99.9, suffix: '%', label: 'Platform Uptime', icon: '🛡️', color: '#4a9b6f' },
];

const useCounter = (target, duration = 1800, start = false) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    const step = target / (duration / 16);
    let current = 0;
    const timer = setInterval(() => {
      current = Math.min(current + step, target);
      setCount(current);
      if (current >= target) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, start]);
  return count;
};

const StatCard = ({ stat, animate }) => {
  const count = useCounter(stat.val, 1800, animate);
  const display = stat.val % 1 !== 0 ? count.toFixed(1) : Math.floor(count).toLocaleString('en-IN');
  return (
    <div className="stat-card">
      <div className="stat-icon" style={{ background: `${stat.color}22`, color: stat.color }}>
        {stat.icon}
      </div>
      <div className="stat-num" style={{ color: stat.color }}>
        {stat.prefix || ''}{display}{stat.suffix}
      </div>
      <div className="stat-name">{stat.label}</div>
    </div>
  );
};

const StatsSection = () => {
  const [animate, setAnimate] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setAnimate(true); obs.disconnect(); }
    }, { threshold: 0.2 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="stats-section" ref={ref}>
      <div className="stats-inner">
        <div className="stats-label">
          <span className="sl-line" />
          <span>Platform at a Glance</span>
          <span className="sl-line" />
        </div>
        <div className="stats-grid">
          {stats.map((s, i) => <StatCard key={i} stat={s} animate={animate} />)}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
