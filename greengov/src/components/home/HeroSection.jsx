import React, { useEffect, useRef } from 'react';
import './HeroSection.css';

const HeroSection = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animFrame;
    let particles = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Create floating particles
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 2 + 0.5,
        vx: (Math.random() - 0.5) * 0.3,
        vy: -Math.random() * 0.5 - 0.2,
        alpha: Math.random() * 0.5 + 0.1,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(126, 200, 160, ${p.alpha})`;
        ctx.fill();
        p.x += p.vx;
        p.y += p.vy;
        if (p.y < 0) { p.y = canvas.height; p.x = Math.random() * canvas.width; }
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
      });
      animFrame = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animFrame);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <section className="hero-section" id="hero">
      {/* BG Canvas */}
      <canvas ref={canvasRef} className="hero-canvas" />

      {/* BG Layers */}
      <div className="hero-bg">
        <div className="bg-orb orb-1" />
        <div className="bg-orb orb-2" />
        <div className="bg-orb orb-3" />
      </div>

      {/* Decorative Grid */}
      <div className="hero-grid-overlay" />

      <div className="hero-content">
        {/* Badge */}
        <div className="hero-badge fade-up" style={{ animationDelay: '0.1s' }}>
          <span className="badge-dot" />
          <span>India's Premier Green Governance Platform</span>
        </div>

        {/* Headline */}
        <h1 className="hero-headline fade-up" style={{ animationDelay: '0.25s' }}>
          Powering a
          <span className="headline-accent"> Sustainable</span>
          <br />
          Future for India
        </h1>

        <p className="hero-sub fade-up" style={{ animationDelay: '0.4s' }}>
          A unified digital platform for environmental ministries, energy boards, and citizens
          to manage green initiatives, track compliance, and accelerate India's clean energy transition.
        </p>

        {/* CTA Buttons */}
        <div className="hero-ctas fade-up" style={{ animationDelay: '0.55s' }}>
          <a href="/register" className="cta-primary">
            <span>Start Your Green Journey</span>
            <svg viewBox="0 0 20 20" fill="none" width="18">
              <path d="M4 10h12M12 6l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </a>
          <a href="#programs" className="cta-secondary">
            <svg viewBox="0 0 20 20" fill="none" width="18">
              <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5" />
              <path d="M8 7l5 3-5 3V7z" fill="currentColor" />
            </svg>
            <span>Explore Programs</span>
          </a>
        </div>

        {/* Stat Pills */}
        <div className="hero-stats fade-up" style={{ animationDelay: '0.7s' }}>
          <div className="stat-pill">
            <span className="stat-val">2.4 GW</span>
            <span className="stat-label">Renewable Capacity</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-pill">
            <span className="stat-val">₹840 Cr</span>
            <span className="stat-label">Subsidies Distributed</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-pill">
            <span className="stat-val">1.2 Lakh</span>
            <span className="stat-label">Active Beneficiaries</span>
          </div>
        </div>
      </div>

      {/* Right Visual */}
      <div className="hero-visual fade-up" style={{ animationDelay: '0.4s' }}>
        <div className="visual-card float">
          <div className="vis-inner">
            {/* Circular chart mock */}
            <div className="donut-wrap">
              <svg viewBox="0 0 120 120" className="donut-svg">
                <circle cx="60" cy="60" r="48" fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="14" />
                <circle cx="60" cy="60" r="48" fill="none" stroke="#7ec8a0" strokeWidth="14"
                  strokeDasharray="220 80" strokeDashoffset="60" strokeLinecap="round" />
                <circle cx="60" cy="60" r="48" fill="none" stroke="#c9a84c" strokeWidth="14"
                  strokeDasharray="60 240" strokeDashoffset="-160" strokeLinecap="round" />
                <text x="60" y="56" textAnchor="middle" fill="white" fontSize="18" fontWeight="700" fontFamily="Playfair Display, serif">73%</text>
                <text x="60" y="72" textAnchor="middle" fill="rgba(255,255,255,0.6)" fontSize="9" fontFamily="DM Sans, sans-serif">Green Target</text>
              </svg>
            </div>

            <div className="vis-legend">
              <div className="legend-item">
                <span className="leg-dot" style={{ background: '#7ec8a0' }} />
                <span>Renewable</span>
                <strong>73%</strong>
              </div>
              <div className="legend-item">
                <span className="leg-dot" style={{ background: '#c9a84c' }} />
                <span>In Progress</span>
                <strong>18%</strong>
              </div>
              <div className="legend-item">
                <span className="leg-dot" style={{ background: 'rgba(255,255,255,0.2)' }} />
                <span>Pending</span>
                <strong>9%</strong>
              </div>
            </div>

            <div className="vis-projects">
              <div className="mini-proj">
                <div className="mp-icon solar">☀️</div>
                <div className="mp-info">
                  <span>Solar Initiative Phase 3</span>
                  <div className="mp-bar"><div style={{ width: '82%', background: '#c9a84c' }} /></div>
                </div>
                <span className="mp-pct">82%</span>
              </div>
              <div className="mini-proj">
                <div className="mp-icon wind">💨</div>
                <div className="mp-info">
                  <span>Wind Farm Expansion</span>
                  <div className="mp-bar"><div style={{ width: '65%', background: '#7ec8a0' }} /></div>
                </div>
                <span className="mp-pct">65%</span>
              </div>
              <div className="mini-proj">
                <div className="mp-icon recycle">♻️</div>
                <div className="mp-info">
                  <span>Urban Recycling Network</span>
                  <div className="mp-bar"><div style={{ width: '48%', background: '#4a9b6f' }} /></div>
                </div>
                <span className="mp-pct">48%</span>
              </div>
            </div>
          </div>

          {/* Floating mini cards */}
          <div className="floating-badge badge-top">
            <span className="fb-icon">🌱</span>
            <div>
              <div className="fb-val">+14.2%</div>
              <div className="fb-label">YoY Growth</div>
            </div>
          </div>
          <div className="floating-badge badge-bottom">
            <span className="fb-icon">⚡</span>
            <div>
              <div className="fb-val">98.7%</div>
              <div className="fb-label">Compliance Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="scroll-cue">
        <div className="scroll-mouse">
          <div className="scroll-wheel" />
        </div>
        <span>Scroll to explore</span>
      </div>
    </section>
  );
};

export default HeroSection;
