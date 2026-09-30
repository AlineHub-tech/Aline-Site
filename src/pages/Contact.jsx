import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaDev, FaXTwitter } from 'react-icons/fa6';
import '../styles/Contact.css';

export default function Contact() {
  return (
    <div className="ele-contact-page ele-view-fade">
      <div className="ele-section-header">
        <span className="ele-section-num">06 // CONNECTION MATRIX</span>
        <h2 className="ele-section-main-title">Let’s make something real.</h2>
      </div>

      <div className="ele-contact-editorial-layout">
        <div className="ele-contact-prompt-block">
          <p className="ele-contact-narrative-text">
            Whether it’s a digital product, creative project, collaboration, or simply an idea worth exploring — I’d love to hear about it.
          </p>
          <div className="ele-contact-parameters-list">
            <div className="ele-parameter-row-line">
              <span>Secure Mail Direct</span>
              <a href="mailto:umugwanezaaline77@gmail.com">umugwanezaaline77@gmail.com</a>
            </div>
            <div className="ele-parameter-row-line">
              <span>WhatsApp Terminal</span>
              <a href="https://wa.me" target="_blank" rel="noreferrer">+250 796 023 452</a>
            </div>
          </div>
        </div>

        <div className="ele-contact-channels-block">
          <div className="ele-channels-inner-box">
            <h4>ARCHIVE ARCHITECTURE PATHS</h4>
            <div className="ele-contact-pills-stack">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="ele-contact-capsule-btn">
                <FaGithub style={{ marginRight: '10px' }} /> GitHub Archive Hub ↗
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="ele-contact-capsule-btn">
                <FaLinkedin style={{ marginRight: '10px' }} /> LinkedIn Vector ↗
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="ele-contact-capsule-btn">
                <FaInstagram style={{ marginRight: '10px' }} /> Instagram Archive ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
