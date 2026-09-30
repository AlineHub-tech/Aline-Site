import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import '../styles/Footer.css';

export default function Footer() {
  return (
    <footer className="ele-footer">
      <div className="ele-footer-container">
        <div className="ele-footer-meta">
          <h3>UMUGWANEZA ALINE</h3>
          <p>Full-Stack Developer · Designer · Photographer · Founder</p>
          <p className="ele-footer-loc">Kigali, Rwanda</p>
        </div>
        <div className="ele-footer-socials">
          <a href="mailto:umugwanezaaline77@gmail.com" aria-label="Email"><FaEnvelope /></a>
          <a href="https://wa.me" target="_blank" rel="noreferrer" aria-label="WhatsApp"><FaWhatsapp /></a>
          <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram"><FaInstagram /></a>
        </div>
      </div>
      <div className="ele-footer-bottom">
        <p className="ele-footer-faith">“Jesus is my forever.”</p>
        <p className="ele-footer-copy">Learning · Creating · Building · Founding · Growing. &copy; {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
