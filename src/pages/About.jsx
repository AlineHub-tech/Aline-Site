import "../styles/About.css";
import React, { useEffect, useState } from "react";
export default function About() {
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
    <section className="about section" id="about">
        {/* ⭐ Background Stars Layer */}
      <div className="stars"></div>

      {/* ⭐ Top Glow Light */}
      <div className="top-glow"></div>
      <div className="container">
        <h2>About Me</h2>
        <p>Creative Full-Stack-Oriented Frontend Developer | Graphic Designer | Photographer | ICT Specialist
A multidisciplinary creative and technologist passionate about building solutions that transform user experiences. I merge software development, design, and photography to create products that are functional, visually appealing, and user-centered.
With hands-on experience in frontend development, UI design, database systems, multimedia creation, and ICT tools, I focus on delivering clean code, beautiful visuals, and impactful systems that solve real-world problems.
.</p>

        <div className="about-grid">
          <div className="about-card">
            <h3>Experience</h3>
            <ul>
              <li>Frontend development  (React.js, JavaScript (ES6+), TailwindCSS, CSS3, HTML5)</li>
               <li>Backend development  (node, REST APIs, Form handling, LocalStorage + API workflows)</li>
              <li>Graphic design with Photoshop & Figma</li>
              <li>Photography, photo editing, and image optimization</li>
              <li>Building MVPs for civic tech (example: Smart saving)</li>
            </ul>
          </div>

          <div className="about-card">
            <h3>Workspace & Tools</h3>
            <ul>
              <li>Editors: VS Code, Sublime</li>
              <li>Design: Photoshop, Lightroom, Figma</li>
              <li>Platforms: GitHub, Vercel, Netlify</li>
              <li>Database: Postman, Postgress, MongoDB,Apache</li>
              <li>Office: Word, Excel, PowerPoint,publisher</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
