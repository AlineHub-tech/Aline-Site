import React, { useState } from "react";
import "../styles/Footer.css";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaUserCircle, FaFolderOpen, FaPaperPlane, FaHome, FaCogs } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  const [email, setEmail] = useState("");
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    alert(`Subscribed with: ${email}. Check your email to confirm!`);
    setEmail("");
  };

  return (
    <footer className="site-footer-nv">
      <div className="footer-inner-nv">
        
        {/* Igice cya 1: Newsletter Subscribe Form */}
        <div className="footer-section-nv footer-newsletter-section">
          <h3>Subscribe to Newsletter</h3>
          <p>Stay updated with my latest work and insights.</p>
          <form onSubmit={handleNewsletterSubmit} className="newsletter-form-nv">
              <input 
                  type="email" 
                  placeholder="Your email address" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                  required 
              />
              <button type="submit" aria-label="Subscribe">
                  <FaPaperPlane />
              </button>
          </form>
          
          <div className="socials-nv">
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook"><FaFacebook/></a>
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram"><FaInstagram/></a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin/></a>
            <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub/></a>
          </div>
        </div>
        
        {/* Igice cya 2: Quick Links */}
        <div className="footer-section-nv">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/"><FaHome/> Home</Link></li>
            <li><Link to="/about"><FaUserCircle/> About Me</Link></li>
            <li><Link to="/services"><FaCogs/> Services</Link></li>
            <li><Link to="/projectpage"><FaFolderOpen/> Projects</Link></li>
            <li><Link to="/contact"><FaEnvelope/> Contact</Link></li>
          </ul>
        </div>

        {/* Igice cya 3: Contact Us & Location */}
        <div className="footer-section-nv">
          <h3>Contact & Location</h3>
          <p>Reach out to us today to collaborate on your next project.</p>
          <div className="contact-item-nv">
            <FaPhoneAlt />
            <span>+250 796 023 452</span>
          </div>
          <div className="contact-item-nv">
            <FaEnvelope />
            <span>umugwanezaaline77@gmail.com</span>
          </div>
          <div className="contact-item-nv">
            <FaMapMarkerAlt />
            <span>Kigali, Rwanda</span>
          </div>
        </div>

        {/* Igice cya 4: About Us */}
        <div className="footer-section-nv">
          <h3>About Umugwaneza Aline</h3>
          <p>
            Full-stack Developer • Graphic Designer • Photography & Videography. 
            Building modern, high-impact web solutions with purpose and passion.
          </p>
        </div>
        
      </div>

      <div className="copyright-nv">
          <p>&copy; {new Date().getFullYear()} Umugwaneza Aline. All rights reserved | Developed by <a href="https://aline-site-seven.vercel.app" target="_blank" rel="noopener noreferrer">
              <span className="developer-name">Umugwaneza Aline</span>
            </a></p>
      </div>
    </footer>
  );
}
