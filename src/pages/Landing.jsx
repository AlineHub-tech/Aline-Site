import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaWhatsapp, FaArrowRight, FaCode, FaPaintBrush } from "react-icons/fa";
import profile from "../assets/profile.png"; 
import "../styles/Landing.css";

const SLOGANS = [
  "Crafting Digital Experiences", "Innovating with Code", "Turning Ideas into Reality", 
  "Building Modern Web Solutions", "Design Meets Functionality", "Problem Solver at Heart", 
  "Your Next Tech Partner", "Passionate about Web Dev", "Clean Code Advocate", "Frontend Expert"
];
const WHATSAPP_NUMBER = "0796023452";

export default function Landing() {
  const [currentSloganIndex, setCurrentSloganIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSloganIndex(prevIndex => (prevIndex + 1) % SLOGANS.length);
    }, 2500); 
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="landing-nexventures full-page-layout">
      <div className="blue-glow-bg"></div>
      <div className="landing-inner-content">
        <div className="left-side-nv">
          <p className="subtitle-nv">Welcome to my Portfolio</p>
          
          {/* Buto ebyiri zikuru ziri mu mwanya w'izina n'description */}
          <div className="main-slogan-buttons">
              <button className="btn-nv primary-nv slogan-btn">
                  <FaCode/> Coding With Purpose, Design With Passion! 
              </button>
              <button className="btn-nv ghost-nv slogan-btn">
                  <FaPaintBrush/> Creativity + Code = Power to build the future
              </button>
          </div>

          <section className="slogan-container-nv">
            <h2 className="animated-slogan-text-nv">
              {SLOGANS[currentSloganIndex]}
            </h2>
          </section>
             
          {/* Description nshya icumita ku ntego */}
          <p className="tagline-nv strong-description">
            I specialize in building elegant, efficient, and user-friendly solutions. Explore how creativity and code combine to power the future of your projects.
          </p>
          <div className="cta-row-nv social-buttons">
            <Link className="btn-nv primary-nv" to="/projects">View My Portfolio <FaArrowRight /></Link>
            <a className="btn-nv ghost-nv" href="https://github.com" target="_blank" rel="noreferrer">GitHub <FaGithub /></a>
            <a className="btn-nv ghost-nv" href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn <FaLinkedin /></a>
          </div>
        </div>
        
        <div className="right-side-nv">
          <img src={profile} alt="Aline Umugwaneza" className="hero-photo-circle-nv" />
        </div>
      </div>
      <a href={`https://wa.me{WHATSAPP_NUMBER}`} className="whatsapp-float-nv" target="_blank" rel="noopener noreferrer" aria-label="Chat with Aline on WhatsApp">
        <FaWhatsapp className="whatsapp-icon-nv" />
      </a>
    </section>
  );
}

