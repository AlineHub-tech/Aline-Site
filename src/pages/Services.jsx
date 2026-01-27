import "../styles/Services.css";
import React from "react";
import { FaReact, FaNodeJs, FaDatabase, FaCamera, FaPaintBrush, FaMicrosoft, FaJava, FaVideo, FaCheckCircle, FaStar, FaQuoteLeft, FaArrowRight, FaUsers } from "react-icons/fa"; 
import { Link } from "react-router-dom";

const servicesList = [
  { icon: <FaReact/>, title: "Frontend Development", desc: "React.js, JavaScript (ES6+), TailwindCSS, UI/UX intuitive layouts & motion, Responsive UI, State Management." },
  { icon: <FaNodeJs/>, title: "Backend Development", desc: "Node.js, Express, REST APIs, simple PHP backends, Form handling, LocalStorage + API workflows." },
  { icon: <FaJava/>, title: "Programming Languages", desc: "Java, Python, C, C++ for various application logic and problem-solving scenarios." },
  { icon: <FaDatabase/>, title: "Database Management", desc: "MongoDB (NoSQL data design), PostgreSQL (relational database modelling), MySQL, Query optimization." },
  { icon: <FaCamera/>, title: "Photography", desc: "Camera handling, Composition, Lighting, Creative shooting, Mobile Photography & Visual Storytelling." },
  { icon: <FaPaintBrush/>, title: "Design & Creativity", desc: "Photoshop CC, Adobe Illustrator, Canva, Branding, Posters, Visual Identity, Photo Editing, Color Grading." },
  { icon: <FaVideo/>, title: "Videography & Content", desc: "Editing with Adobe Premiere Pro, After Effects, DaVinci Resolve. Content creation for social media and business." },
  { icon: <FaMicrosoft/>, title: "ICT & Productivity", desc: "Word, Excel, PowerPoint, Publisher, Google Apps, Cloud Storage, Documentation and basic IT support." }
];

export default function Services() {
  return (
    <section className="services-page-nv" id="services">
      <div className="container-nv">
        
        <header className="services-header-nv">
            <p className="subtitle-nv">Our Offerings</p>
            <h1>Comprehensive Digital Services</h1>
            <p className="description-nv">I offer a combination of technical and creative services — practical solutions you can use to grow your business or project.</p>
        </header>

        <div className="services-grid-nv">
          {servicesList.map((s, idx) => (
            <div key={idx} className="service-card-nv">
              <div className="service-icon-nv">{s.icon}</div>
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="why-choose-nv">
            <h2>Why Choose Us?</h2>
            <div className="choose-grid-nv">
                <div className="choose-item-nv">
                    <FaCheckCircle className="choose-icon-nv"/>
                    <h4>Expertise & Innovation</h4>
                    <p>Leveraging the latest technologies to build cutting-edge solutions tailored to your needs.</p>
                </div>
                <div className="choose-item-nv">
                    <FaCheckCircle className="choose-icon-nv"/>
                    <h4>Reliability & Support</h4>
                    <p>Committed to delivering robust solutions with ongoing support and clear communication.</p>
                </div>
                <div className="choose-item-nv">
                    <FaCheckCircle className="choose-icon-nv"/>
                    <h4>Versatility</h4>
                    <p>Blending technical development skills with graphic design and multimedia expertise for holistic results.</p>
                </div>
            </div>
        </div>

        <div className="testimonials-nv">
            <h2>What Our Clients Say</h2>
            <div className="testimonial-card-nv">
                <FaQuoteLeft className="quote-icon-nv"/>
                <p>"Aline delivered beyond our expectations! The website is fast, beautiful, and the video content she created took our marketing to the next level."</p>
                <p className="client-name-nv"><strong>— Happy Client, Kigali</strong></p>
            </div>
        </div>


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
