import React from 'react';
import { FaTerminal, FaCamera, FaGlobe, FaGithub } from 'react-icons/fa6';
import { SiFigma } from 'react-icons/si';
import '../styles/Landing.css';
import profileImg from '../assets/profile.png';

export default function Landing() {
  return (
    <div className="ele-landing-viewport">
      {/* BACKGROUND PORTRAIT HERO SYSTEM WITH TOP-ALIGNED CANVAS */}
      <div 
        className="ele-hero-backdrop-wrapper" 
        style={{ backgroundImage: `linear-gradient(to bottom, rgba(11, 11, 11, 0.15), rgba(11, 11, 11, 0.98)), url(${profileImg})` }}
      >
        <div className="ele-hero-master-container">
          
          {/* Top Metastamp Row Entry */}
          <div className="ele-top-badge-strip">
            <span className="ele-badge-dot"></span>
            <span className="ele-badge-txt">LEAD DEVELOPER · IDENTITY MAP ARCHIVE</span>
          </div>

          {/* Central Creative Layout System */}
          <div className="ele-hero-middle-layout">
            <div className="ele-hero-text-block">
              
              {/* Circular Avatar Badging Layer */}
              <div className="ele-circle-badge-avatar" style={{ backgroundImage: `url(${profileImg})` }}></div>
              
              <h1 className="ele-monumental-header">UMUGWANEZA ALINE</h1>
              <p className="ele-featured-collaborators">Full-Stack Developer · Graphic Designer · Photographer</p>
              
              <div className="ele-ep-pill-container">
                <span className="ele-pill-dot"></span>
                <span className="ele-pill-text">CURRENT FOCUS: <strong>CREATIVE TECHNOLOGY</strong> →</span>
              </div>

              <p className="ele-editorial-summary-para">
                I build digital experiences and creative work while exploring ideas that can become meaningful products, businesses, and initiatives. Out now across all digital networks.
              </p>

              {/* Streaming Platform Styled Pills (Real Icons Integration) */}
              <div className="ele-streaming-pills-grid">
                <a href="https://vercel.app" target="_blank" rel="noreferrer" className="ele-stream-pill">
                  <FaTerminal className="ele-pill-real-icon" /> <span>ByteFlow Ltd</span>
                </a>
                <a href="https://vercel.app" target="_blank" rel="noreferrer" className="ele-stream-pill">
                  <FaGlobe className="ele-pill-real-icon" /> <span>Foundation</span>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="ele-stream-pill">
                  <FaCamera className="ele-pill-real-icon" /> <span>Chapters Studio</span>
                </a>
                <a href="https://github.com" target="_blank" rel="noreferrer" className="ele-stream-pill">
                  <FaGithub className="ele-pill-real-icon" /> <span>GitHub Archive</span>
                </a>
              </div>
            </div>

            {/* Premium Glassmorphic Card Dedicated to ByteFlow Operations */}
            <div className="ele-floating-tour-card">
              <div className="ele-tour-card-inner">
                <div className="ele-tour-thumb" style={{ backgroundImage: `url(${profileImg})` }}></div>
                <div className="ele-tour-details">
                  <span className="ele-tour-tag">· VENTURE HUB</span>
                  <h3>ByteFlow Digital Launch 2026</h3>
                  <a href="https://vercel.app" target="_blank" rel="noreferrer" className="ele-tour-ticket-btn">LAUNCH SITE →</a>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Dynamic Horizontal Footer Status Tracker */}
        <div className="ele-hero-bottom-ticker-bar">
          <div className="ele-ticker-left">
            <span className="ele-green-live-dot"></span>
            <span>Ecosystem Node : Systems Fully Operational</span>
          </div>
          <div className="ele-ticker-right">BATSINDA, KIGALI</div>
        </div>

      </div>
    </div>
  );
}
