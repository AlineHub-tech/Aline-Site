import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub, FaTwitter, FaDev } from 'react-icons/fa';
import '../styles/Footer.css';

export default function Footer() {
  return (
    <footer className="ele-app-footer">
      <div className="ele-footer-inner">
        <div className="ele-footer-top-row">
          <div className="ele-footer-brand-info">
            <h3>UMUGWANEZA ALINE</h3>
            <p>Full-Stack Developer · Graphic Designer · Photographer</p>
          </div>
          <div className="ele-footer-social-vectors">
            <a href="https://github.com" target="_blank" rel="noreferrer"><FaGithub/></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedin/></a>
            <a href="https://x.com" target="_blank" rel="noreferrer"><FaTwitter/></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram/></a>
            <a href="https://dev.to" target="_blank" rel="noreferrer"><FaDev/></a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebook/></a>
          </div>
        </div>
        
        <div className="ele-footer-bottom-row">
          <p className="ele-footer-motto">“Jesus is my forever.”</p>
          <p className="ele-footer-copyright">
            &copy; {new Date().getFullYear()} Umugwaneza Aline. Still learning. Still building. Still becoming.
          </p>
        </div>
      </div>
    </footer>
  );
}
