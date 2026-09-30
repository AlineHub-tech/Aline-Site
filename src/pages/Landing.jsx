import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaTerminal, FaCamera, FaGlobe, FaGithub, FaChevronRight } from 'react-icons/fa6';
import '../styles/Landing.css';
import profileImg from '../assets/profile.png';

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="ele-landing-viewport animate-fade-in">
      
      {/* ================= HERO SECTION SYSTEM ================= */}
      <section 
        className="ele-hero-backdrop-wrapper" 
        style={{ backgroundImage: `linear-gradient(to bottom, rgba(11, 11, 11, 0.15), rgba(11, 11, 11, 0.98)), url(${profileImg})` }}
      >
        <div className="ele-hero-master-container">
          <div className="ele-top-badge-strip">
            <span className="ele-badge-dot"></span>
            <span className="ele-badge-txt">VOL. I // PORTFOLIO GENESIS ARCHIVE</span>
          </div>

          <div className="ele-hero-middle-layout">
            <div className="ele-hero-text-block">
              <div className="ele-circle-badge-avatar" style={{ backgroundImage: `url(${profileImg})` }}></div>
              <h1 className="ele-monumental-header">UMUGWANEZA ALINE</h1>
              <p className="ele-featured-collaborators">“I build. I create. I document the journey.”</p>
              
              <div className="ele-ep-pill-container">
                <span className="ele-pill-dot"></span>
                <span className="ele-pill-text">Full-Stack Developer · Graphic Designer · Photographer · Founder & Builder</span>
              </div>

              <p className="ele-hero-geotag-label">Based in Kigali, Rwanda.</p>

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

            <div className="ele-floating-tour-card">
              <div className="ele-tour-card-inner">
                <div className="ele-tour-thumb" style={{ backgroundImage: `url(${profileImg})` }}></div>
                <div className="ele-tour-details">
                  <span className="ele-tour-tag">· CURRENT MATRIX</span>
                  <h3>Continuous Growth Protocol 2026</h3>
                  <button onClick={() => navigate('/journey')} className="ele-tour-ticket-btn">EXPLORE TIMELINE →</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="ele-hero-bottom-ticker-bar">
          <div className="ele-ticker-left">
            <span className="ele-green-live-dot"></span>
            <span>SYSTEM MONITOR : ACTIVE ARCHIVES SECURED</span>
          </div>
          <div className="ele-ticker-right">SCROLL TO UNFOLD NARRATIVE // ↓</div>
        </div>
      </section>
      {/* ================= A LITTLE ABOUT ME SECTION ================= */}
      <section className="ele-editorial-block-section">
        <div className="ele-container-inner">
          <div className="ele-asymmetric-row-grid">
            <div className="ele-meta-sidebar">
              <span className="ele-chapter-indicator">01 / OVERVIEW</span>
              <h2 className="ele-editorial-section-title">A little about me</h2>
            </div>
            <div className="ele-main-body-content">
              <p className="ele-editorial-lead-essay">
                I’m Aline — a young Rwandan creator and builder exploring the space between technology, creativity, and entrepreneurship.
              </p>
              <p className="ele-editorial-body-essay">
                I started with Software Development, kept learning through different experiences, and gradually turned what I learned into projects, creative work, and ventures of my own.
              </p>
              <div className="ele-editorial-motto-callout">
                <p>“Still learning. Still building. Still becoming.”</p>
              </div>
              <button onClick={() => navigate('/about')} className="ele-editorial-arrow-action-btn">
                Read my story <span className="ele-arrow-glyph">→</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SELECTED WORK SECTION ================= */}
      <section className="ele-editorial-block-section ele-darker-bg-section">
        <div className="ele-container-inner">
          <div className="ele-asymmetric-row-grid">
            <div className="ele-meta-sidebar">
              <span className="ele-chapter-indicator">02 / PRODUCTION</span>
              <h2 className="ele-editorial-section-title">Selected Work</h2>
              <p className="ele-sidebar-sub-context">A few things I’ve built, designed, and explored along the way.</p>
            </div>
            <div className="ele-main-body-content">
              <div className="ele-linear-work-stack">
                <div className="ele-work-strip-item">
                  <h3>LifeOS</h3>
                  <p>A personal productivity and accountability platform.</p>
                </div>
                <div className="ele-work-strip-item">
                  <h3>Nexus News Network</h3>
                  <p>A digital news platform built for a modern Rwandan audience.</p>
                </div>
                <div className="ele-work-strip-item">
                  <h3>Kigali Bites</h3>
                  <p>A food discovery, ordering and delivery platform concept.</p>
                </div>
                <div className="ele-work-strip-item">
                  <h3>Buy & Get</h3>
                  <p>A full-stack e-commerce experience.</p>
                </div>
              </div>
              <button onClick={() => navigate('/projects')} className="ele-editorial-arrow-action-btn ele-spacing-top-boost">
                View all work <span className="ele-arrow-glyph">→</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MORE THAN CODE SECTION ================= */}
      <section className="ele-editorial-block-section">
        <div className="ele-container-inner">
          <div className="ele-asymmetric-row-grid">
            <div className="ele-meta-sidebar">
              <span className="ele-chapter-indicator">03 / MANIFESTO</span>
              <h2 className="ele-editorial-section-title">More than code.</h2>
            </div>
            <div className="ele-main-body-content">
              <div className="ele-three-worlds-editorial-grid">
                <div className="ele-world-node-box">
                  <h4>BUILD</h4>
                  <p>Digital products, websites and systems.</p>
                </div>
                <div className="ele-world-node-box">
                  <h4>CREATE</h4>
                  <p>Photography, design and visual stories.</p>
                </div>
                <div className="ele-world-node-box">
                  <h4>FOUND</h4>
                  <p>Ideas, ventures and initiatives built with purpose.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ================= MY JOURNEY TEASER SECTION ================= */}
      <section className="ele-editorial-block-section ele-darker-bg-section">
        <div className="ele-container-inner">
          <div className="ele-asymmetric-row-grid">
            <div className="ele-meta-sidebar">
              <span className="ele-chapter-indicator">04 / TRACKWAY</span>
              <h2 className="ele-editorial-section-title">My Journey</h2>
            </div>
            <div className="ele-main-body-content">
              <p className="ele-editorial-body-essay ele-text-white-boost">
                From finishing Software Development in 2024, to learning ICT at Kepler, exploring Photography and Graphic Design at Greenland Film School, and developing my understanding of FinTech through Dreamize Africa — every chapter has shaped the person I’m becoming.
              </p>
              <div className="ele-journey-trajectory-pills-matrix">
                <span className="ele-trajectory-node-token">Learning</span>
                <FaChevronRight className="ele-token-divider-icon" />
                <span className="ele-trajectory-node-token">Creating</span>
                <FaChevronRight className="ele-token-divider-icon" />
                <span className="ele-trajectory-node-token">Building</span>
                <FaChevronRight className="ele-token-divider-icon" />
                <span className="ele-trajectory-node-token">Founding</span>
                <FaChevronRight className="ele-token-divider-icon" />
                <span className="ele-trajectory-node-token">Growing</span>
              </div>
              <button onClick={() => navigate('/journey')} className="ele-editorial-arrow-action-btn ele-spacing-top-boost">
                Explore my journey <span className="ele-arrow-glyph">→</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHAT I’M BUILDING SECTION ================= */}
      <section className="ele-editorial-block-section">
        <div className="ele-container-inner">
          <div className="ele-asymmetric-row-grid">
            <div className="ele-meta-sidebar">
              <span className="ele-chapter-indicator">05 / VENTURES</span>
              <h2 className="ele-editorial-section-title">What I’m building</h2>
            </div>
            <div className="ele-main-body-content">
              <div className="ele-ventures-editorial-stack-container">
                <div className="ele-venture-editorial-node">
                  <div className="ele-v-header-line">
                    <h3>ByteFlow Ltd</h3>
                    <span className="ele-v-tag">Founder & Builder</span>
                  </div>
                  <p className="ele-v-slogan-italic">*Engineering Digital Success.*</p>
                </div>
                <div className="ele-venture-editorial-node">
                  <div className="ele-v-header-line">
                    <h3>A Better Tomorrow Foundation</h3>
                    <span className="ele-v-tag">Founder</span>
                  </div>
                  <p className="ele-v-slogan-italic">*Restoring Hope, Building Future.*</p>
                </div>
                <div className="ele-venture-editorial-node">
                  <div className="ele-v-header-line">
                    <h3>Chapters Studio</h3>
                    <span className="ele-v-tag">Founder & Creative</span>
                  </div>
                  <p className="ele-v-slogan-italic">*Capturing Moments. Telling Stories.*</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CURRENTLY SECTION ================= */}
      <section className="ele-editorial-block-section ele-darker-bg-section">
        <div className="ele-container-inner">
          <div className="ele-asymmetric-row-grid">
            <div className="ele-meta-sidebar">
              <span className="ele-chapter-indicator">06 / CURRENT ERA</span>
              <h2 className="ele-editorial-section-title">Currently</h2>
            </div>
            <div className="ele-main-body-content">
              <ul className="ele-currently-list-bullets">
                <li>Building digital products.</li>
                <li>Growing ideas into something real.</li>
                <li>Exploring visual storytelling.</li>
                <li>Learning something new every day.</li>
              </ul>
              <h3 className="ele-currently-not-finished-banner">“This is not the finished story.”</h3>
            </div>
          </div>
        </div>
      </section>

      {/* ================= LET'S MAKE SOMETHING REAL SECTION ================= */}
      <section className="ele-editorial-block-section">
        <div className="ele-container-inner">
          <div className="ele-asymmetric-row-grid">
            <div className="ele-meta-sidebar">
              <span className="ele-chapter-indicator">07 / OUTRO CONNECTION</span>
              <h2 className="ele-editorial-section-title">Let’s make something real.</h2>
            </div>
            <div className="ele-main-body-content">
              <p className="ele-editorial-lead-essay ele-text-dim-tweak">
                Have an idea, a project, or something worth building?
              </p>
              <button onClick={() => navigate('/contact')} className="ele-editorial-arrow-action-btn ele-heavy-action-boost">
                Let’s talk <span className="ele-arrow-glyph">→</span>
              </button>
              <div className="ele-outro-location-timestamp-footer">
                <span>Kigali, Rwanda · 2026</span>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
