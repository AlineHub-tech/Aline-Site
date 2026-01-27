import "../styles/Skills.css";
import React from "react";
import { Link } from "react-router-dom";
// HANO NIHO IKIBAZO CYARI: Twongereyemo FaCheckCircle
import { FaLaptopCode, FaTools, FaVideo, FaLightbulb, FaArrowRight, FaCogs, FaRocket, FaHandsHelping, FaCheckCircle } from "react-icons/fa";

const skillGroups = {
  "Frontend Development": ["React", "TailwindCSS", "HTML5", "CSS3", "JavaScript (ES6+)", "Responsive Design", "UI Animations"],
  "Backend Development": ["REST APIs", "Node.js", "Express", "PHP", "Form Handling", "API Workflows"],
  "Programming Languages": ["Python", "Java", "C/C++", "C# (basic)"],
  "Data Management": ["MongoDB (NoSQL)", "PostgreSQL", "MySQL", "Query Optimization"],
  "Design & Multimedia": ["Photoshop", "Figma", "Graphic Design", "Typography", "Color Theory"],
  "Videography & Content": ["Premiere Pro", "After Effects", "DaVinci Resolve", "Content Creation", "Social Media Mgt"],
  "Tools & Platforms": ["VS Code", "Git", "GitHub", "Vercel", "Netlify", "Postman", "Chrome DevTools"],
  "Office & Productivity": ["PowerPoint", "Excel", "Word", "Publisher", "Google Workspace"]
};

export default function Skills(){
    // Twakuyemo animation y'inyenyeri kuko NexVentures ikoresha background isukuye
  
    return (
      <section className="skills-page-nv" id="skills">
        <div className="container-nv">
          
          {/* === SECTION 1: Header === */}
          <header className="skills-header-nv">
              <p className="subtitle-nv">Technical & Creative Expertise</p>
              <h1>My Core Skills & Competencies</h1>
              <p className="description-nv">I leverage a diverse set of tools and technologies to create effective, modern, and user-centric solutions. Here’s a breakdown of my expertise.</p>
          </header>
  
          {/* === SECTION 2: Skills Grid === */}
          <div className="skills-grid-nv">
            {Object.entries(skillGroups).map(([group, items])=>(
              <div className="skill-card-nv" key={group}>
                <h4>{group}</h4>
                <ul>
                  {/* Hano niho byari byakoreshejwe ariko bitari byashyizwemo hejuru */}
                  {items.map(it=> <li key={it}><FaCheckCircle className="skill-check-icon-nv"/> {it}</li>)}
                </ul>
              </div>
            ))}
          </div>

          {/* === SECTION 3: Our Philosophy (Why we do what we do) === */}
          <div className="philosophy-nv">
              <h2>Our Philosophy: Excellence by Design</h2>
              <div className="philosophy-grid-nv">
                  <div className="philosophy-item-nv">
                      <FaCogs className="philosophy-icon-nv"/>
                      <h3>Technical Proficiency</h3>
                      <p>Mastering tools to ensure robust and scalable solutions.</p>
                  </div>
                  <div className="philosophy-item-nv">
                      <FaLightbulb className="philosophy-icon-nv"/>
                      <h3>Innovation First</h3>
                      <p>Always seeking creative ways to solve complex problems.</p>
                  </div>
                  <div className="philosophy-item-nv">
                      <FaRocket className="philosophy-icon-nv"/>
                      <h3>Result Driven</h3>
                      <p>Focusing on impact and measurable success for clients.</p>
                  </div>
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
