import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { 
  FaBars, FaTimes, FaCode, FaHome, FaCogs, FaFolderOpen, 
  FaUserCircle, FaEnvelope, FaLightbulb 
} from "react-icons/fa"; 
import "../styles/Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Guhindura ibara rya nva igihe umuntu amanuka (scroll)
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/", icon: <FaHome /> },
    { name: "About", path: "/about", icon: <FaUserCircle /> },
    { name: "Skills", path: "/skills", icon: <FaLightbulb /> },
    { name: "Services", path: "/services", icon: <FaCogs /> },
    { name: "Projects", path: "/projectpage", icon: <FaFolderOpen /> },
    { name: "Contact", path: "/contact", icon: <FaEnvelope /> },
  ];

  return (
    <header className={`nav-nv ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container-nv">
        <Link to="/" className="brand-nv">
          <div className="brand-logo-bg">
            <FaCode className="brand-icon-nv" />
          </div>
          <span className="brand-text">Umugwaneza <span className="highlight">Aline</span></span>
        </Link>

        {/* Desktop Menu */}
        <nav className={`nav-menu-nv ${open ? "open" : ""}`}>
          {navLinks.map((link) => (
            <NavLink 
              key={link.path} 
              to={link.path} 
              className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
              onClick={() => setOpen(false)}
            >
              <span className="nav-icon-wrapper">{link.icon}</span>
              {link.name}
            </NavLink>
          ))}
        </nav>

        <div className="nav-actions-nv">
          <button 
            className={`nav-toggle-nv ${open ? "is-active" : ""}`} 
            onClick={() => setOpen(!open)} 
            aria-label="Toggle menu"
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </header>
  );
}
