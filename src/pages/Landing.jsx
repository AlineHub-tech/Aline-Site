import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import profile from "../assets/profile.PNG";
import "../styles/Landing.css";

const SLOGANS = [
  "Frontend Developer",
  "Backend Developer",
  "UI Developer",
  "Graphic Designer",
  "Photography Enthusiast",
  "Microsoft Office Pro",
  "Problem Solver",
  "Community Helper",
  "Continuous Learner",
  "Team Player"
];

export default function Landing() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((s) => (s + 1) % SLOGANS.length), 2200);
    return () => clearInterval(t);
  }, []);

  // ⭐ GENERATE MOVING STARS
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
    <section className="landing">

      {/* ⭐ Background Stars Layer */}
      <div className="stars"></div>

      {/* ⭐ Top Glow Light */}
      <div className="top-glow"></div>

      <div className="landing-inner">
        <div className="left">
          <img src={profile} alt="Aline" className="hero-photo" />
        </div>

        <div className="right">
          <h1>Hi I'm Umugwaneza Aline</h1>

          <section className="slogan">
            <h2 className="animated-slogan">
              {SLOGANS.map((s, index) => (
                <span key={index}>{s}</span>
              ))}
            </h2>
            <p style={{ fontSize: "15px", fontWeight: "bold" }}>
              Coding With Purpose, Design With Passion!
              Creativity + Code = Power to build the future
            </p>
          </section>
             <p style={{ fontSize: "15px", fontWeight: "bold" }}></p>
              My Development Work
            <div className="cta-row">
            <a className="btn primary"
              href="https://github.com/AlineHub-tech"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
           <FaGithub/> </a>
            <a className="btn ghost"
              href="https://www.linkedin.com/in/umugwaneza-aline-655146325"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            <FaLinkedin/></a>
            <Link className="btn outline" to="/projects">See Projects</Link>
          </div>

         
        </div>
      </div>

    </section>
  );
}
