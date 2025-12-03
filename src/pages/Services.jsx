import React, { useEffect, useState } from "react";
import "../styles/Services.css";
import { FaReact, FaNodeJs,FaDatabase, FaCamera, FaPaintBrush, FaMicrosoft, FaJava } from "react-icons/fa";

const services = [
  { icon: <FaReact/>, title: "Frontend", desc: "React.js, JavaScript (ES6+), TailwindCSS, CSS3, HTML5, UI/UX intuitive layouts & motion,Responsive UI, Components, State Management" },
  { icon: <FaNodeJs/>, title: "Backend", desc: "Node.js, Express, REST APIs, simple PHP backends,Form handling, LocalStorage + API workflows" },
  { icon: <FaJava/>, title: "Programming", desc: " java, pyton, c, c++" },
  { icon: <FaDatabase/>, title: "Database", desc: "MongoDB (NoSQL data design),PostgreSQL (relational database modelling),MySQL & MySQLi,Query optimization & clean schema design" },
  { icon: <FaCamera/>, title: "Photography", desc: "Camera handling (ISO, Aperture, Shutter Speed)Composition, Lighting, Creative shooting Mobile Photography & Visual Storytelling" },
  { icon: <FaPaintBrush/>, title: "Design & Creativity", desc: "Photoshop CC, Adobe Illustrator, Canva ,Branding, Posters, Visual Identity ,Photo Editing, Color Grading, Manipulation" },
  { icon: <FaMicrosoft/>, title: "ICT & Productivity", desc: "Word, Excel, PowerPoint, Publisher,Google Apps, Cloud Storage, Documentation" }
];
export default function Services() {
  const [i, setI] = useState(0);
  useEffect(() => {
        const stars = document.querySelector(".stars");
        for (let i = 0; i < 80; i++) {
          let star = document.createElement("div");
          star.classList.add("star");
    
          star.style.top = Math.random() * window.innerHeight + "px";
          star.style.left = Math.random() * window.innerWidth + "px";
          star.style.animationDuration = 3 + Math.random() * 6 + "s";
    
          stars.appendChild(star);
        }
      }, []);
  return (
    <section className="services section" id="services">
          {/* ⭐ Background Stars Layer */}
      <div className="stars"></div>

      {/* ⭐ Top Glow Light */}
      <div className="top-glow"></div>
      <div className="container">
        <h2>Services</h2>
        <p className="muted">I offer a combination of technical and creative services — practical solutions you can use.</p>

        <div className="services-grid">
          {services.map((s, idx) => (
            <div key={idx} className="service-card">
              <div className="service-icon">{s.icon}</div>
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
