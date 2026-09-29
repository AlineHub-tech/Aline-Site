import React from 'react';
import { FaGithub } from 'react-icons/fa6';
import '../styles/Projects.css';

export default function Projects() {
  const projectList = [
    {
      id: '01',
      name: 'BYTEFLOW LTD',
      role: 'FOUNDER & BUILDER',
      tech: 'Full-Stack Software Architecture',
      desc: 'My technology and digital solutions company. Engineering custom full-stack web platforms, visual brand architectures, advanced business logic systems, cloud web hosting configurations, and enterprise domain solutions.',
      link: 'https://vercel.app',
      meta: 'WhatsApp: +250 796 023 452 | Email: byteflowltd9@gmail.com'
    },
    {
      id: '02',
      name: 'A BETTER TOMORROW FOUNDATION',
      role: 'FOUNDER',
      tech: 'Social Impact Infrastructure',
      desc: 'A dedicated social impact initiative structured to support street children and highly vulnerable families across Rwanda. Rebuilding hope and securing concrete opportunities through practical skill incubation and structured mentorship.',
      link: 'https://vercel.app',
      meta: 'Contact: +250 796 023 452 | Email: abettertomorrowf@gmail.com'
    },
    {
      id: '03',
      name: 'CHAPTERS STUDIO',
      role: 'FOUNDER & CREATIVE',
      tech: 'Visual Storytelling Medium',
      desc: 'My photography and creative direction studio engineered to capture moments and document history. Specializing in high-end wedding journals, birthdays, graduation frames, pristine outdoor portraits, and editorial layout compositions.',
      link: null,
      meta: 'Instagram: Chapters__Studios | Email: chaptersstudio1@gmail.com | Phone: +250 726 113 930'
    },
    {
      id: '04',
      name: 'LIFEOS',
      role: 'CONCEPT SYSTEM',
      tech: 'MERN Stack (MongoDB, Express, React, Node.js)',
      desc: 'An advanced, conceptual personal coach assistant dashboard built to manage daily routines, track financial accountability, monitor discipline curves, and generate automated performance data insights.',
      link: null,
      meta: 'Source Code Secured via Private Repository'
    },
    {
      id: '05',
      name: 'NEXUS NEWS NETWORK',
      role: 'DEPLOYED PLATFORM',
      tech: 'React, Node.js, MongoDB, Vercel, Render',
      desc: 'A full-scale media network built with secure administrative control mechanisms, publishing approval pipelines, secure content categories, and native Kinyarwanda language content matrices.',
      link: null,
      meta: 'Database Clusters Managed via MongoDB Atlas'
    },
    {
      id: '06',
      name: 'KIGALI BITES',
      role: 'CURRENTLY BUILDING',
      tech: 'Figma UI/UX & React Engineering',
      desc: 'A modern food discovery storefront platform mapping culinary operations, business listings, and product distribution flows to streamline ordering and food delivery around Kigali.',
      link: null,
      meta: 'Active Prototyping & Layout Blueprint Complete'
    },
    {
      id: '07',
      name: 'BUY & GET E-COMMERCE',
      role: 'PRODUCTION BASE',
      tech: 'JavaScript Core, CSS3 Interface Layout',
      desc: 'An e-commerce shopping framework optimized for slick product item matrices, dynamic cart status mutations, and elegant client checkout parameters.',
      link: null,
      meta: 'Secured via Vanilla State Implementation'
    },
    {
      id: '08',
      name: 'IMENA MOVES KIDZ',
      role: 'LIVE BUILD',
      tech: 'Web Engineering & Creative Strategy',
      desc: 'A dedicated web presence architecture developed to organize, deploy, and scale interactive arts programs and active performance educational tools for kids.',
      link: 'https://vercel.app',
      meta: 'Production Build Deployed via Vercel Pipelines'
    }
  ];

  return (
    <div className="ele-projects-viewport">
      <div className="ele-projects-container">
        
        <div className="ele-projects-header">
          <div className="ele-header-left">
            <span className="ele-projects-num">04 // PRODUCTION CHRONOLOGY</span>
            <h2 className="ele-projects-title">Ventures & Projects</h2>
          </div>
          
          <div className="ele-projects-gh-hero-card">
            <div className="ele-gh-card-header">
              <FaGithub className="ele-gh-icon" />
              <span>@AlineHub-tech</span>
            </div>
            <p>“See what I build. See how I learn. See how I experiment.”</p>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="ele-gh-link-btn">Access Master GitHub ↗</a>
          </div>
        </div>

        <div className="ele-projects-strip-stack">
          {projectList.map((project) => (
            <div key={project.id} className="ele-project-strip-node">
              <span className="ele-strip-index-id">{project.id}</span>
              <div className="ele-strip-main-content">
                <div className="ele-strip-title-row">
                  <h3>{project.name}</h3>
                  <span className={`ele-strip-badge-status ${project.role === 'CURRENTLY BUILDING' ? 'building' : ''}`}>
                    {project.role}
                  </span>
                </div>
                <span className="ele-strip-tech-sub">{project.tech}</span>
                <p className="ele-strip-desc">{project.desc}</p>
                <div className="ele-strip-bottom-meta">
                  <span className="ele-strip-meta-txt">{project.meta}</span>
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noreferrer" className="ele-strip-action-anchor">
                      Launch Production ↗
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
