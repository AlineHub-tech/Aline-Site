import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { 
  FaBars, FaTimes, FaCode, FaHome, FaCogs, FaFolderOpen, 
  FaUserCircle, FaEnvelope, FaLightbulb // Added FaLightbulb icon
} from "react-icons/fa"; 
import "../styles/Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="nav-nv">
      <div className="nav-left-nv">
        <Link to="/" className="brand-nv">
          <FaCode className="brand-icon-nv" /> 
          Umugwaneza Aline
        </Link>
      </div>

      <nav className={`nav-center-nv ${open ? "open" : ""}`}>
        {/* Linki nshya zifite icons */}
        <NavLink to="/" onClick={() => setOpen(false)}>
            <FaHome className="nav-icon-nv"/> Home
        </NavLink>
        <NavLink to="/about" onClick={() => setOpen(false)}>
            <FaUserCircle className="nav-icon-nv"/> About
        </NavLink>
        <NavLink to="/services" onClick={() => setOpen(false)}>
            <FaCogs className="nav-icon-nv"/> Services
        </NavLink>
        <NavLink to="/projectpage" onClick={() => setOpen(false)}>
            <FaFolderOpen className="nav-icon-nv"/> Projects
        </NavLink>
        
        {/* Link Nshya ya Skills */}
        <NavLink to="/skills" onClick={() => setOpen(false)}>
            <FaLightbulb className="nav-icon-nv"/> Skills
        </NavLink>
        
        <NavLink to="/contact" onClick={() => setOpen(false)}>
            <FaEnvelope className="nav-icon-nv"/> Contact
        </NavLink>
      </nav>

      <div className="nav-right-nv">
        {/* Link za LinkedIn na GitHub zavanyweho */}
        
        <button className="nav-toggle-nv" onClick={() => setOpen(!open)} aria-label="menu">
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </header>
  );
}
