import React from 'react';
import '../styles/Projects.css';

export default function Projects() {
  const projects = [
    {
      name: 'LifeOS',
      tech: 'MERN Stack / Product Development',
      desc: 'An advanced multi-layered personal assistant and mentor manager framework. Formulated to streamline lifestyle routines, track financial accountability, analyze discipline parameters, and process custom progress summaries.'
    },
    {
      name: 'Nexus News Network',
      tech: 'React / Node.js / MongoDB / Vercel / Render',
      desc: 'A full-scale content publishing media network supporting secure administrator content verification controls, category filtering, publishing workflows, and localized Kinyarwanda language content arrays.'
    },
    {
      name: 'Kigali Bites',
      tech: 'UI/UX / Figma / Product Concept Build',
      desc: 'A complete food discovery interface designed to connect culinary businesses with local consumers. Built to map out rapid checkout interfaces, dynamic menu browsing, and optimization dispatch modules in Kigali.'
    },
    {
      name: 'Buy & Get',
      tech: 'Full-Stack E-commerce Engine',
      desc: 'An online storefront layout optimized for responsive interactive product matrices, dynamic cart state management, streamlined purchase workflows, and seamless customer experiences.'
    }
  ];

  const ventures = [
    {
      title: 'ByteFlow Ltd — Founder & Builder',
      slogan: 'Engineering Digital Success.',
      desc: 'My flagship technology company focused on delivering full-stack web architectures, specialized branding blueprints, enterprise web systems, hosting configurations, and digital product consulting.'
    },
    {
      title: 'A Better Tomorrow Foundation — Founder',
      slogan: 'Restoring Hope, Building Future.',
      desc: 'A direct social impact platform structured to offer genuine aid, critical mindset mentorship, and practical skill workshops for street youth and vulnerable communities in Rwanda.'
    },
    {
      title: 'Chapters Studio — Founder & Creative',
      slogan: 'Capturing Moments. Telling Stories.',
      desc: 'My multimedia creative lens focused on curated photography journals, cinematic event recordings, organic lookbooks, and high-concept editorial brand asset generation.'
    }
  ];

  return (
    <div className="ele-projects-page ele-view-fade">
      {/* PROJECTS SECTION */}
      <section className="ele-portfolio-showcase-section">
        <div className="ele-section-header">
          <span className="ele-section-num">04 // PRODUCTION WORKS</span>
          <h2 className="ele-section-main-title">Selected Work</h2>
        </div>
        <div className="ele-projects-editorial-stack">
          {projects.map((proj, idx) => (
            <div key={idx} className="ele-project-strip-item">
              <div className="ele-project-strip-header">
                <h3>{proj.name}</h3>
                <span className="ele-project-tech-tag">{proj.tech}</span>
              </div>
              <p className="ele-project-desc-para">{proj.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* VENTURES SECTION */}
      <section className="ele-ventures-section">
        <div className="ele-section-header">
          <span className="ele-section-num">05 // ENTERPRISE NODES</span>
          <h2 className="ele-section-main-title">Things I’m building beyond myself.</h2>
        </div>
        <div className="ele-ventures-editorial-grid">
          {ventures.map((ven, idx) => (
            <div key={idx} className="ele-venture-strip-card">
              <h3>{ven.title}</h3>
              <p className="ele-venture-slogan-label">“{ven.slogan}”</p>
              <p className="ele-venture-body-desc">{ven.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
