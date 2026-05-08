import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`gg-navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        {/* Logo */}
        <a href="/" className="nav-brand">
          <div className="brand-icon">
            <svg viewBox="0 0 40 40" fill="none">
              <circle cx="20" cy="20" r="19" stroke="currentColor" strokeWidth="1.5" />
              <path d="M20 30 C20 30 10 22 10 16 C10 11 14.5 8 20 12 C25.5 8 30 11 30 16 C30 22 20 30 20 30Z"
                fill="currentColor" opacity="0.9" />
              <path d="M20 30 L20 18" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M20 22 C20 22 15 19 13 15" stroke="white" strokeWidth="1" strokeLinecap="round" opacity="0.7" />
            </svg>
          </div>
          <div className="brand-text">
            <span className="brand-name">GreenGov</span>
            <span className="brand-tagline">Sustainability Platform</span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <ul className="nav-links">
          <li><a href="#programs">Programs</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#impact">Impact</a></li>
          <li><a href="#compliance">Compliance</a></li>
          <li><a href="#about">About</a></li>
        </ul>

        {/* Actions */}
        <div className="nav-actions">
          <a href="/login" className="btn-login">Sign In</a>
          <a href="/register" className="btn-register">
            <span>Get Started</span>
            <svg viewBox="0 0 16 16" fill="none" width="14">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          <span className={menuOpen ? 'open' : ''}></span>
          <span className={menuOpen ? 'open' : ''}></span>
          <span className={menuOpen ? 'open' : ''}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? 'active' : ''}`}>
        <ul>
          <li><a href="#programs" onClick={() => setMenuOpen(false)}>Programs</a></li>
          <li><a href="#features" onClick={() => setMenuOpen(false)}>Features</a></li>
          <li><a href="#impact" onClick={() => setMenuOpen(false)}>Impact</a></li>
          <li><a href="#compliance" onClick={() => setMenuOpen(false)}>Compliance</a></li>
          <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
          <li className="mobile-cta">
            <a href="/login">Sign In</a>
            <a href="/register" className="mobile-register">Get Started</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
