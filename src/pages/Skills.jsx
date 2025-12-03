import "../styles/Skills.css";
import React, { useEffect, useState } from "react";
const skillGroups = {
  "Frontend": ["React","TailwindCSS", "HTML", "CSS", "JavaScript (ES6+)", "Responsive Design", "Animations"],
    "Backend": ["REST APIs", "Form handling", "LocalStorage + API workflows" ,"node.js", "php"],
   "Programming": ["python", "java", "c/c++" ],
    "Design": ["Photoshop", "Figma", "Graphic Design", "Typography", "Color Theory"],
  "Tools": ["VS Code", "Git", "GitHub", "Postman", "Chrome DevTools"],
  "Office": ["PowerPoint", "Excel", "Word", "Publisher"]
};

export default function Skills(){
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
    <section className="skills section" id="skills">
         {/* ⭐ Background Stars Layer */}
      <div className="stars"></div>

      {/* ⭐ Top Glow Light */}
      <div className="top-glow"></div>
      <div className="container">
        <h2>Skills</h2>
        <div className="skills-grid">
          {Object.entries(skillGroups).map(([group, items])=>(
            <div className="skill-card" key={group}>
              <h4>{group}</h4>
              <ul>
                {items.map(it=> <li key={it}>{it}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
