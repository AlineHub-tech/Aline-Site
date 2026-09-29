import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';

export default function Navbar() {
  const location = useLocation();

  // Map y'amapaji yawe asobanutse neza nta magambo ya template vavanze
  const links = [
    { path: '/', label: 'Home' },
    { path: '/journey', label: 'Journey' },
    { path: '/about', label: 'About' },
    { path: '/skills', label: 'Skills' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <header className="ele-nav-header">
      <div className="ele-nav-brand-block">
        <Link to="/" className="ele-nav-logo">
          UMUGWANEZA ALINE <span className="ele-logo-sub">. ARCHIVE</span>
        </Link>
      </div>
      <nav className="ele-nav-links-wrapper">
        {links.map((link) => {
          const isActive = location.pathname === link.path;
          return (
            <Link 
              key={link.path} 
              to={link.path} 
              className={`ele-nav-item-link ${isActive ? 'active' : ''} ${link.path === '/contact' ? 'ele-nav-btn-highlight' : ''}`}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
