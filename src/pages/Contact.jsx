import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaDev, FaXTwitter } from 'react-icons/fa6';
import '../styles/Contact.css';

export default function Contact() {
  return (
    <div className="ele-contact-viewport">
      <div className="ele-contact-container">
        
        <div className="ele-contact-header">
          <span className="ele-contact-num">05 // CHANNEL SEPARATION</span>
          <h2 className="ele-contact-title">Leave a note.</h2>
        </div>

        <div className="ele-contact-split-grid">
          
          <div className="ele-contact-left-block">
            <p className="ele-contact-editorial-prompt">
              Whether deploying high-performance applications via <strong>ByteFlow Ltd</strong>, aligning photography directions with <strong>Chapters Studio</strong>, or coordinating social restoration systems—let's build something real.
            </p>
            
            <div className="ele-direct-matrix-channels">
              <div className="ele-channel-line-row">
                <span>Secure Email</span>
                <a href="mailto:umugwanezaaline77@gmail.com">umugwanezaaline77@gmail.com</a>
              </div>
              <div className="ele-channel-line-row">
                <span>Direct Signal / WhatsApp</span>
                <a href="https://wa.me" target="_blank" rel="noreferrer">+250 796 023 452</a>
              </div>
              <div className="ele-channel-line-row">
                <span>HQ Coordinates</span>
                <span className="ele-static-value-txt">Kigali, Batsinda KG 24 AVE</span>
              </div>
            </div>
          </div>

          <div className="ele-contact-right-block">
            <div className="ele-terminal-network-card">
              <h4>VERIFIED VECTOR CONNECTIONS</h4>
              <ul className="ele-terminal-links-list">
                <li>
                  <FaGithub className="ele-terminal-link-icon" />
                  <span>GitHub:</span>
                  <a href="https://github.com" target="_blank" rel="noreferrer">@AlineHub-tech</a>
                </li>
                <li>
                  <FaLinkedin className="ele-terminal-link-icon" />
                  <span>LinkedIn:</span>
                  <a href="https://linkedin.com" target="_blank" rel="noreferrer">Umugwaneza Aline</a>
                </li>
                <li>
                  <FaDev className="ele-terminal-link-icon" />
                  <span>DEV Community:</span>
                  <a href="https://dev.to" target="_blank" rel="noreferrer">@alinehubtech</a>
                </li>
                <li>
                  <FaXTwitter className="ele-terminal-link-icon" />
                  <span>X / Twitter:</span>
                  <a href="https://x.com" target="_blank" rel="noreferrer">@Umugwaneza3183</a>
                </li>
                <li>
                  <FaInstagram className="ele-terminal-link-icon" />
                  <span>Instagram:</span>
                  <a href="https://instagram.com" target="_blank" rel="noreferrer">@a_li_ne97</a>
                </li>
              </ul>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
