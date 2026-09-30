import React from 'react';
import { FaChevronRight } from 'react-icons/fa6';
import '../styles/Journey.css';

export default function Journey() {
  const roadmapNodes = [
    {
      marker: '2024',
      title: 'Software Development Core',
      desc: 'Completed secondary high school education with a dedicated technical background specialized in Software Development frameworks, responsive user interfaces, and core programming logic.'
    },
    {
      marker: 'KEPLER',
      title: 'Kepler College Systems',
      desc: 'Trained extensively in foundational ICT ecosystems, professional Microsoft Office data workflows, and collaborative Google Apps production tools.'
    },
    {
      marker: 'CREATIVE',
      title: 'Greenland Film School Integration',
      desc: 'Explored aesthetic fields in Photography and specialized Graphic Design, shifting boundaries into organic visual storytelling, lighting mechanics, and composition lines.'
    },
    {
      marker: 'FINTECH',
      title: 'Dreamize Africa FinTech Program',
      desc: 'Immersed in an intensive 4-month FinTech accelerator. Mastered collaborative problem-solving, real-world engineering project workflows, and version control metrics inside active developer environments.'
    },
    {
      marker: 'BUILDING',
      title: 'Building Projects Ecosystem',
      desc: 'Began executing functional independent applications, optimizing multi-tier full-stack architectures (MERN Stack builds), backend REST APIs, secure databases, and production server deployments.'
    },
    {
      marker: 'FOUNDING',
      title: 'Founding Active Ventures',
      desc: 'Stepped into true purpose-driven entrepreneurship by self-building active independent platforms including ByteFlow Ltd, Chapters Studio, and A Better Tomorrow Foundation.'
    }
  ];

  return (
    <div className="ele-journey-page ele-view-fade">
      <div className="ele-section-header">
        <span className="ele-section-num">03 // CHRONOLOGY LOG</span>
        <h2 className="ele-section-main-title">My Documentary Timeline</h2>
        
        <div className="ele-journey-trajectory-pills-matrix">
          <span className="ele-trajectory-node-token">Learning</span>
          <FaChevronRight className="ele-token-divider-icon" />
          <span className="ele-trajectory-node-token">Creating</span>
          <FaChevronRight className="ele-token-divider-icon" />
          <span className="ele-trajectory-node-token">Building</span>
          <FaChevronRight className="ele-token-divider-icon" />
          <span className="ele-trajectory-node-token">Founding</span>
          <FaChevronRight className="ele-token-divider-icon" />
          <span className="ele-trajectory-node-token">Growing</span>
        </div>
      </div>

      <div className="ele-journey-spine">
        {roadmapNodes.map((node, index) => (
          <div key={index} className="ele-timeline-row-node">
            <div className="ele-timeline-marker-col">
              <span className="ele-timeline-badge">{node.marker}</span>
            </div>
            <div className="ele-timeline-body-col">
              <h3>{node.title}</h3>
              <p>{node.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="ele-timeline-conclusion-footer">
        <h2 className="ele-conclusion-statement">“This is not the finished story.”</h2>
      </div>
    </div>
  );
}
