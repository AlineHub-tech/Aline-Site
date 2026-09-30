import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';

export default function Navbar() {
  const location = useLocation();
  const navigationItems = [
    { path: '/', label: 'Home' },
    { path: '/journey', label: 'Journey' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects & Ventures' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <header className="ele-navbar">
      <div className="ele-nav-brand">
        <Link to="/" className="ele-brand-link">UMUGWANEZA ALINE</Link>
      </div>
      <nav className="ele-nav-menu">
        {navigationItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`ele-nav-link ${location.pathname === item.path ? 'active' : ''}`}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
