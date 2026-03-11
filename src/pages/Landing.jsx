import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaWhatsapp, FaArrowRight, FaCode, FaRocket, FaTerminal } from "react-icons/fa";
import profile from "../assets/profile.PNG"; 
import "../styles/Landing.css";

const SLOGANS = [
  "Frontend Developer", "UI/UX Enthusiast", "React Specialist", "Creative Coder"
];
const WHATSAPP_NUMBER = "250796023452"; 

export default function Landing() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % SLOGANS.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero-section-nv">
      {/* Background Glows */}
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>

      <div className="hero-container">
        {/* Left Side: Text Content */}
        <div className="hero-content-left">
          <div className="badge-nv">
            <span className="pulse-dot"></span>
            Available for new projects
          </div>
          
          <h1 className="hero-title">
            Hi, I'm <span className="name-gradient">Aline Umugwaneza</span>
          </h1>

          <div className="dynamic-slogan">
            <FaTerminal className="term-icon" />
            <span className="typing-text">{SLOGANS[index]}</span>
          </div>

          <p className="hero-description">
            I craft high-performance, visually stunning web experiences. 
            Bridging the gap between <strong>clean code</strong> and <strong>modern design</strong>.
          </p>

          <div className="hero-actions">
            <Link to="/projectpage" className="btn-main">
              Explore My Work <FaArrowRight />
            </Link>
            <div className="social-group">
              <a href="https://github.com" className="social-link" target="_blank" rel="noreferrer"><FaGithub /></a>
              <a href="https://linkedin.com" className="social-link" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            </div>
          </div>
        </div>

        {/* Right Side: Image with Decorations */}
        <div className="hero-content-right">
          <div className="image-stack">
            <div className="image-border-decoration"></div>
            <img src={profile} alt="Aline Umugwaneza" className="main-hero-img" />
            
            {/* Floating Stats - Hidden on Mobile for clean look */}
            <div className="floating-card card-1">
              <FaCode className="card-icon" />
              <span>Clean Code</span>
            </div>
            <div className="floating-card card-2">
              <FaRocket className="card-icon" />
              <span>Fast Delivery</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button
      <a href={`https://wa.me{WHATSAPP_NUMBER}`} className="whatsapp-float" target="_blank" rel="noreferrer">
        <FaWhatsapp />
        <span className="wa-tooltip">Let's Chat!</span>
      </a> */}
    </section>
  );
}
