import React from "react";
import { Link } from "react-router-dom";
import { 
  FaReact, FaNodeJs, FaServer, FaChartLine, FaSearchDollar, 
  FaVideo, FaPaintBrush, FaCheckCircle, FaQuoteLeft, FaArrowRight, 
  FaGlobe, FaShieldAlt, FaRocket 
} from "react-icons/fa"; 
import "../styles/Services.css";

const servicesList = [
  { 
    icon: <FaReact/>, 
    title: "Web Development", 
    desc: "Building high-performance apps using React.js, TailwindCSS, and Next.js. Focused on speed, SEO, and mobile-first design.",
    category: "tech"
  },
  { 
    icon: <FaChartLine/>, 
    title: "Digital Marketing", 
    desc: "Data-driven strategies for social media growth, Meta Ads (FB/IG), and high-conversion marketing campaigns.",
    category: "marketing"
  },
  { 
    icon: <FaSearchDollar/>, 
    title: "SEO Optimization", 
    desc: "Boosting your search engine rankings to ensure your website is discovered by the right audience at the right time.",
    category: "marketing"
  },
  { 
    icon: <FaServer/>, 
    title: "Hosting & Domains", 
    desc: "Reliable web hosting setup, Domain registration, DNS management, and SSL security for a 100% uptime experience.",
    category: "tech"
  },
  { 
    icon: <FaVideo/>, 
    title: "Videography & Content", 
    desc: "Professional video editing (Premiere Pro/After Effects) and content creation tailored for modern social media.",
    category: "creative"
  },
  { 
    icon: <FaPaintBrush/>, 
    title: "Brand Identity", 
    desc: "UI/UX Design in Figma, logo creation, and visual storytelling to give your brand a unique and professional voice.",
    category: "creative"
  }
];

export default function Services() {
  return (
    <section className="services-page-nv">
      <div className="services-glow"></div>

      <div className="container-nv">
        <header className="services-header-nv">
          <span className="badge-nv">Expert Solutions</span>
          <h1>Comprehensive Digital <span className="highlight">Services</span></h1>
          <p className="description-nv">I offer a 360-degree approach to digital success—from the first line of code to the final marketing campaign.</p>
        </header>

        <div className="services-grid-nv">
          {servicesList.map((s, idx) => (
            <div key={idx} className={`service-card-nv ${s.category}`}>
              <div className="service-icon-nv">{s.icon}</div>
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
              <div className="card-footer-nv">
                <span className="learn-more">Get Started <FaArrowRight/></span>
              </div>
            </div>
          ))}
        </div>

        {/* Value Proposition */}
        <div className="why-choose-nv">
          <h2 className="sub-title">Why Partner With Me?</h2>
          <div className="choose-grid-nv">
            <div className="choose-item-nv">
              <FaRocket className="choose-icon-nv"/>
              <h4>End-to-End Delivery</h4>
              <p>I handle everything: Design, Development, Hosting, and Marketing. You only need one partner.</p>
            </div>
            <div className="choose-item-nv">
              <FaShieldAlt className="choose-icon-nv"/>
              <h4>Reliability & Trust</h4>
              <p>Secure hosting and clean code ensure your business stays online and safe 24/7.</p>
            </div>
            <div className="choose-item-nv">
              <FaGlobe className="choose-icon-nv"/>
              <h4>Global Standards</h4>
              <p>I build solutions that use world-class technologies to help you compete in any market.</p>
            </div>
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="testimonials-nv">
          <div className="testi-card-nv">
            <FaQuoteLeft className="quote-icon-nv"/>
            <p className="testi-text">"Aline didn't just build our website; she set up our hosting and managed our SEO. Our traffic has grown by 200% since we launched!"</p>
            <div className="testi-author">
              <div className="author-info">
                <strong>Happy Client</strong>
                <span> Better Tech, Rubavu</span>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="services-cta-nv">
          <h2>Ready to Launch Your Brand?</h2>
          <p>Let’s talk about your project and see how my services can help you grow.</p>
          <Link to="/contact" className="btn-main">
            Start Your Project <FaArrowRight/>
          </Link>
        </div>
      </div>
    </section>
  );
}
