import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  FaFacebook, FaInstagram, FaLinkedin, FaGithub, FaTwitter, FaDev,
  FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaPaperPlane, FaArrowRight 
} from "react-icons/fa";
import "../styles/Footer.css";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    alert(`Mwarakoze kwiyandikisha: ${email}`);
    setEmail("");
  };

  return (
    <footer className="site-footer-nv">
      <div className="footer-glow"></div>
      
      <div className="footer-container-nv">
        <div className="footer-top-grid">
          
          {/* Section 1: Brand & About */}
          <div className="footer-brand-section">
            <h2 className="footer-logo">Umugwaneza <span className="highlight">Aline</span></h2>
            <p className="footer-bio">
              Full-stack Developer & Digital Strategist helping brands grow through modern code and creative storytelling.
            </p>
            <div className="footer-socials">
              <a href="https://github.com/AlineHub-tech" target="_blank" rel="noreferrer"><FaGithub/></a>
              <a href="https://www.facebook.com/share/1CGmESiTA3/" target="_blank" rel="noreferrer"><FaFacebook/></a>
              <a href="https://www.linkedin.com/in/umugwaneza-aline-655146325?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer"><FaLinkedin/></a>
              <a href="https://x.com/Umugwaneza3183?t=4A3A4C8KYpGQ-PlZEfOg1g&s=09" target="_blank" rel="noreferrer"><FaTwitter/></a>
              <a href="https://www.instagram.com/a_li_ne97?igsh=dGs5MXVnbnpsbzIz" target="_blank" rel="noreferrer"><FaInstagram/></a>
              <a href="https://dev.to/alinehubtech" target="_blank" rel="noreferrer"><FaDev/></a>
            </div>
          </div>

          {/* Section 2: Quick Links */}
          <div className="footer-links-section">
            <h3>Explore</h3>
            <ul className="footer-links">
              <li><Link to="/"><FaArrowRight className="link-icon"/> Home</Link></li>
              <li><Link to="/about"><FaArrowRight className="link-icon"/> About Me</Link></li>
              <li><Link to="/services"><FaArrowRight className="link-icon"/> Services</Link></li>
              <li><Link to="/projectpage"><FaArrowRight className="link-icon"/> Projects</Link></li>
              <li><Link to="/skills"><FaArrowRight className="link-icon"/> Skills</Link></li>
            </ul>
          </div>

          {/* Section 3: Contact Info */}
          <div className="footer-contact-section">
            <h3>Get in Touch</h3>
            <div className="f-contact-item">
              <FaPhoneAlt className="f-icon"/>
              <span>+250 796 023 452</span>
            </div>
            <div className="f-contact-item">
              <FaEnvelope className="f-icon"/>
              <span>umugwanezaaline77@gmail.com</span>
            </div>
            <div className="f-contact-item">
              <FaMapMarkerAlt className="f-icon"/>
              <span>Kigali, Batsinda KG 24 AVE</span>
            </div>
          </div>

          {/* Section 4: Newsletter */}
          <div className="footer-newsletter-section">
            <h3>Newsletter</h3>
            <p>Get the latest tech insights and project updates.</p>
            <form onSubmit={handleNewsletterSubmit} className="f-newsletter-form">
              <input 
                type="email" 
                placeholder="Email Address" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
              />
              <button type="submit"><FaPaperPlane /></button>
            </form>
          </div>

        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} <strong>Umugwaneza Aline</strong>. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#!">Privacy Policy</a>
            <a href="#!">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

