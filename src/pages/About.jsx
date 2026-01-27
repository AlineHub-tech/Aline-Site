import "../styles/About.css";
import React from "react";
import { FaEye, FaRocket, FaHandsHelping, FaCheckCircle, FaLaptopCode, FaTools, FaVideo, FaLightbulb, FaArrowRight, FaStar, FaCodeBranch, FaUsers, FaGrinStars } from "react-icons/fa"; 
import { Link } from "react-router-dom";

export default function About() {
  return (
    <section className="about-page-nv" id="about">
      <div className="container-nv">
        
        {/* === SECTION 1: Header and Proven Excellence === */}
        <header className="about-header-nv">
            <p className="subtitle-nv">Our Journey of Excellence</p>
            <h1>Proven Excellence & Impact</h1>
            <div className="divider-nv"></div>
        </header>

        {/* Example Stats Card */}
        <div className="stats-showcase-nv">
            <div className="stat-card-nv">
                <FaStar className="stat-icon-nv"/>
                <span>15+ Projects Completed</span>
            </div>
            <div className="stat-card-nv">
                <FaCodeBranch className="stat-icon-nv"/>
                <span>3+ Years Experience</span>
            </div>
            <div className="stat-card-nv">
                <FaUsers className="stat-icon-nv"/>
                <span>Community Helper</span>
            </div>
            <div className="stat-card-nv">
                <FaGrinStars className="stat-icon-nv"/>
                <span>Satisfied Clients</span>
            </div>
        </div>
        
        {/* === SECTION 2: Built on Purpose (Vision, Mission, Expertise) === */}
        <div className="purpose-section-nv">
            <h2>Built on Purpose</h2>
            <div className="purpose-grid-nv">
                <div className="card-purpose-nv">
                    <FaEye className="purpose-icon-nv"/>
                    <h3>Vision</h3>
                    <p>To be a leading developer in building innovative and sustainable digital solutions that empower communities and drive technological advancement across Africa.</p>
                </div>
                <div className="card-purpose-nv">
                    <FaRocket className="purpose-icon-nv"/>
                    <h3>Mission</h3>
                    <p>To deliver high-quality, efficient, and user-centric web applications and creative media that solve real-world problems and exceed client expectations.</p>
                </div>
            </div>

            {/* Expertise Section inside Purpose */}
            <div className="expertise-container-nv">
                <h3>Expertise, Tools & Workspace</h3>
                <div className="expertise-grid-nv">
                    <div className="expertise-item-nv">
                        <FaLaptopCode className="expertise-icon-nv"/>
                        <h4>Software Development</h4>
                        <p>React.js, Node.js, JavaScript, Python, PostgreSQL, MongoDB, HTML5, CSS3/Tailwind CSS.</p>
                    </div>
                    <div className="expertise-item-nv">
                        <FaTools className="expertise-icon-nv"/>
                        <h4>Workspace & Editors</h4>
                        <p>VS Code, Sublime Text, GitHub, Vercel, Netlify, Postman, Apache.</p>
                    </div>
                    <div className="expertise-item-nv">
                        <FaVideo className="expertise-icon-nv"/>
                        <h4>Videography & Design</h4>
                        <p>Premiere Pro, After Effects, DaVinci Resolve, Photoshop, Figma, Lightroom.</p>
                    </div>
                </div>
            </div>
        </div>

        {/* === SECTION 3: What Drives Us === */}
        <div className="drives-us-section-nv">
            <h2>What Drives Us</h2>
            <div className="drives-content-nv">
                <FaHandsHelping className="drives-icon-nv"/>
                <p>Our passion lies in leveraging technology to create tangible impact. We are committed to continuous learning, team collaboration, and solving complex problems with purpose. This drive ensures every project is delivered with excellence and innovation.</p>
            </div>
        </div>

        {/* === SECTION 4: Ready to Transform Your Vision? (CTA) === */}
        <div className="cta-section-nv">
            <h2>Ready to Transform Your Vision?</h2>
            <p>Meet the visionary developer ready to bring your ideas to life.</p>
            <Link to="/contact" className="cta-button-nv">
                Let's Collaborate <FaArrowRight/>
            </Link>
        </div>

      </div>
    </section>
  );
}
