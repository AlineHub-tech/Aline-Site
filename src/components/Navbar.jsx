import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";
import "../styles/Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="nav">
      <div className="nav-left">
        <Link to="/" className="brand">Umugwaneza Aline</Link>
      </div>

      <nav className={`nav-center ${open ? "open" : ""}`}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/projectpage">Projects</NavLink>
        <NavLink to="/skills">Skills</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>

      <div className="nav-right">
        <a href="https://github.com/AlineHub-tech" target="_blank" rel="noreferrer" aria-label="GitHub">
          <FaGithub />
        </a>
        <a  href="https://www.linkedin.com/in/umugwaneza-aline-655146325" target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <FaLinkedin />
        </a>

        <button className="nav-toggle" onClick={() => setOpen(!open)} aria-label="menu">
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </header>
  );
}
