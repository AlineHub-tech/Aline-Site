import React from "react";
import { 
  FaUserTie, FaRocket, FaHandsHelping, FaLaptopCode, FaTools, 
  FaVideo, FaArrowRight, FaStar, FaCodeBranch, FaCheckCircle, 
  FaChartLine, FaGlobe, FaCogs, FaQuoteLeft 
} from "react-icons/fa"; 
import { Link } from "react-router-dom";
import "../styles/About.css";

export default function About() {
  const expertStats = [
    { icon: <FaUserTie />, label: "Founder, ByteFlow Ltd" },
    { icon: <FaCodeBranch />, label: "Full-Stack Specialist" },
    { icon: <FaChartLine />, label: "Digital Strategist" },
    { icon: <FaGlobe />, label: "Web Hosting Expert" },
  ];

  return (
    <section className="about-page-nv">
      <div className="about-glow"></div>

      <div className="container-nv">
        {/* Header Section */}
        <header className="about-header-nv">
          <span className="badge-nv">Executive Profile</span>
          <h1 className="section-title">Umugwaneza <span className="highlight">Aline</span></h1>
          <p className="header-desc">
            Founder of <strong>ByteFlow Ltd</strong>. A multidisciplinary technologist dedicated to building 
            high-impact digital ecosystems through code, strategy, and creative media.
          </p>
        </header>

        {/* Professional Stats */}
        <div className="stats-grid-nv">
          {expertStats.map((stat, index) => (
            <div className="stat-card-nv" key={index}>
              <div className="stat-icon-wrapper">{stat.icon}</div>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
        
        {/* Personal Story & ByteFlow Ltd */}
        <div className="grid-two-cols">
          <div className="purpose-card-nv">
            <div className="p-icon-bg"><FaStar /></div>
            <h3>Who I Am</h3>
            <p>I am a <strong>Full-Stack Developer</strong> and <strong>Creative Director</strong> with a mission 
            to redefine the digital landscape in Rwanda and beyond. My expertise spans across technical 
            development and market psychology.</p>
          </div>
          <div className="purpose-card-nv">
            <div className="p-icon-bg"><FaRocket /></div>
            <h3>The ByteFlow Vision</h3>
            <p>As the <strong>Founder of ByteFlow Ltd</strong>, I lead a vision to provide 360° solutions: 
            from <strong>Domain Names</strong> and <strong>Web Hosting</strong> to <strong>SEO</strong>, 
            <strong>Photography</strong>, and <strong>Videography</strong>.</p>
          </div>
        </div>

        {/* Core Competencies (Expertise) */}
        <div className="expertise-section-nv">
          <h2 className="sub-title">Core Competencies</h2>
          <div className="expertise-grid-nv">
            <div className="expertise-card">
              <FaLaptopCode className="exp-icon" />
              <h4>Development & Infrastructure</h4>
              <p>Full-Stack Web Apps, Secure Web Hosting, Domain Management, and SSL Implementation.</p>
            </div>
            <div className="expertise-card">
              <FaChartLine className="exp-icon marketing-icon" />
              <h4>Growth & Strategy</h4>
              <p>Advanced SEO, Digital Marketing campaigns, Meta Ads, and Data Analytics for ROI.</p>
            </div>
            <div className="expertise-card">
              <FaVideo className="exp-icon creative-icon" />
              <h4>Creative Production</h4>
              <p>Professional Videography, Photography, and High-End Video Editing for modern brands.</p>
            </div>
          </div>
        </div>

        {/* CEO Quote / Philosophy */}
        <div className="ceo-quote-nv">
          <FaQuoteLeft className="quote-icon" />
          <p>
            "At the heart of every great project is a perfect balance between technical 
            excellence and creative storytelling. I founded <strong>ByteFlow Ltd</strong> to be 
            the home of that balance."
          </p>
          <span className="quote-author">— Umugwaneza Aline</span>
        </div>

        {/* Final CTA */}
        <div className="about-cta-nv">
          <h2>Ready to Launch Your Vision?</h2>
          <p>Let's collaborate on your next big project and scale your brand together.</p>
          <Link to="/contact" className="btn-main">
            Let's Talk Business <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}
