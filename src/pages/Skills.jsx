import React from "react";
import { Link } from "react-router-dom";
import { 
  FaCheckCircle, FaLaptopCode, FaTools, FaVideo, FaLightbulb, 
  FaArrowRight, FaCogs, FaRocket, FaChartBar, FaGlobe, FaServer, FaBullhorn 
} from "react-icons/fa";
import "../styles/Skills.css";

const skillGroups = [
  {
    title: "Frontend Development",
    icon: <FaLaptopCode />,
    items: ["React.js", "TailwindCSS", "JavaScript (ES6+)", "HTML5 & CSS3", "Responsive Design", "UI Animations"],
    color: "blue"
  },
  {
    title: "Digital Marketing",
    icon: <FaBullhorn />,
    items: ["SEO Optimization", "Meta Ads (FB/IG)", "Google Analytics", "Content Strategy", "Email Marketing", "SEM"],
    color: "gold"
  },
  {
    title: "Hosting & Domains",
    icon: <FaServer />,
    items: ["Web Hosting (Shared/VPS)", "Domain Name Setup", "SSL Certificates", "CPanel & FTP", "Cloud Deployment", "DNS Management"],
    color: "green"
  },
  {
    title: "Design & Multimedia",
    icon: <FaVideo />,
    items: ["Figma (UI/UX)", "Adobe Photoshop", "Premiere Pro", "After Effects", "Graphic Design", "Content Creation"],
    color: "purple"
  },
  {
    title: "Backend & Database",
    icon: <FaCogs />,
    items: ["Node.js", "Express", "REST APIs", "PostgreSQL", "MongoDB", "MySQL", "Firebase"],
    color: "red"
  },
  {
    title: "Technical Tools",
    icon: <FaTools />,
    items: ["Git & GitHub", "Docker", "Postman", "Vercel / Netlify", "VS Code", "Terminal / Bash"],
    color: "teal"
  }
];

export default function Skills() {
  return (
    <section className="skills-page-nv">
      <div className="skills-orb orb-left"></div>
      <div className="skills-orb orb-right"></div>

      <div className="container-nv">
        <header className="skills-header-nv">
          <span className="badge-nv">Expertise Stack</span>
          <h1>My Core <span className="highlight">Skills</span> & Competencies</h1>
          <p className="description-nv">
            I leverage a diverse set of modern technologies to build, host, and market digital products that drive real-world impact and business growth.
          </p>
        </header>

        <div className="skills-grid-nv">
          {skillGroups.map((group, index) => (
            <div className="skill-card-nv" key={index}>
              <div className="card-top-nv">
                <div className={`icon-box-nv ${group.color}`}>{group.icon}</div>
                <h4>{group.title}</h4>
              </div>
              <ul className="skill-list-nv">
                {group.items.map((item, idx) => (
                  <li key={idx}>
                    <FaCheckCircle className="skill-check-icon-nv" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="philosophy-nv">
          <h2 className="sub-title">Excellence by Design</h2>
          <div className="philosophy-grid-nv">
            <div className="philosophy-item-nv">
              <div className="phi-icon-box"><FaRocket /></div>
              <h3>Fast & Scalable</h3>
              <p>Optimized code and servers for maximum speed.</p>
            </div>
            <div className="philosophy-item-nv">
              <div className="phi-icon-box"><FaChartBar /></div>
              <h3>Data Driven</h3>
              <p>Using marketing insights to drive real user growth.</p>
            </div>
            <div className="philosophy-item-nv">
              <div className="phi-icon-box"><FaGlobe /></div>
              <h3>Global Standard</h3>
              <p>Building solutions that compete on a global scale.</p>
            </div>
          </div>
        </div>

        <div className="skills-cta-nv">
          <h2>Ready to Launch Your Project?</h2>
          <p>From Domain setup to the final Marketing campaign, I've got you covered.</p>
          <Link to="/contact" className="btn-main">
            Get Started Now <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}
