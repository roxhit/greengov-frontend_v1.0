import React from 'react';
import './CTASection.css';

const CTASection = () => (
  <section className="cta-section">
    <div className="cta-inner">
      <div className="cta-bg-ring ring-1" />
      <div className="cta-bg-ring ring-2" />

      <div className="cta-content">
        <span className="cta-eyebrow">Join the Green Revolution</span>
        <h2 className="cta-title">
          Start Your Sustainability
          <br />Journey Today
        </h2>
        <p className="cta-sub">
          Whether you're a citizen applying for solar subsidies, a business seeking green
          compliance, or an officer managing programs — GreenGov is your gateway.
        </p>
        <div className="cta-buttons">
          <a href="/register" className="cta-btn primary">
            Create Free Account
          </a>
          <a href="/contact" className="cta-btn secondary">
            Contact Support
          </a>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="gg-footer">
    <div className="footer-container">
      <div className="footer-brand">
        <div className="footer-logo">
          <svg viewBox="0 0 40 40" fill="none" width="36">
            <circle cx="20" cy="20" r="19" stroke="var(--mint)" strokeWidth="1.5" />
            <path d="M20 30 C20 30 10 22 10 16 C10 11 14.5 8 20 12 C25.5 8 30 11 30 16 C30 22 20 30 20 30Z"
              fill="var(--mint)" opacity="0.9" />
            <path d="M20 30 L20 18" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <span>GreenGov</span>
        </div>
        <p>India's premier digital platform for environmental governance and green sustainability.</p>
        <div className="footer-socials">
          <a href="#" aria-label="Twitter">𝕏</a>
          <a href="#" aria-label="LinkedIn">in</a>
          <a href="#" aria-label="YouTube">▶</a>
        </div>
      </div>

      <div className="footer-links-group">
        <h4>Platform</h4>
        <ul>
          <li><a href="#">Programs</a></li>
          <li><a href="#">Incentives</a></li>
          <li><a href="#">Compliance</a></li>
          <li><a href="#">Analytics</a></li>
        </ul>
      </div>

      <div className="footer-links-group">
        <h4>For Users</h4>
        <ul>
          <li><a href="#">Citizens Portal</a></li>
          <li><a href="#">Business Registration</a></li>
          <li><a href="#">Officer Login</a></li>
          <li><a href="#">Auditor Access</a></li>
        </ul>
      </div>

      <div className="footer-links-group">
        <h4>Government</h4>
        <ul>
          <li><a href="#">Ministry of Environment</a></li>
          <li><a href="#">Energy Board</a></li>
          <li><a href="#">Policy Guidelines</a></li>
          <li><a href="#">RTI Requests</a></li>
        </ul>
      </div>

      <div className="footer-links-group">
        <h4>Support</h4>
        <ul>
          <li><a href="#">Help Center</a></li>
          <li><a href="#">Documentation</a></li>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">Grievances</a></li>
        </ul>
      </div>
    </div>

    <div className="footer-bottom">
      <span>© 2025 GreenGov — Government of India. All Rights Reserved.</span>
      <div className="footer-bottom-links">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
        <a href="#">Accessibility</a>
      </div>
    </div>
  </footer>
);

export { CTASection, Footer };
