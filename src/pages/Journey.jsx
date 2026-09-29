import React from 'react';
import '../styles/Journey.css';

export default function Journey() {
  const fullStorySteps = [
    {
      marker: '01',
      period: '2024 — THE BEGINNING',
      headline: 'Software Development Foundations',
      text: 'After completing my studies in Software Development in 2024, I knew that finishing school was not the end of my learning journey. It was the beginning of figuring out what I could actually build with what I had learned. I started looking for opportunities to grow beyond the classroom — learning, practicing, experimenting, making mistakes, and building small things that gradually became bigger ideas.'
    },
    {
      marker: '02',
      period: 'KEPLER SYSTEM INCUBATION',
      headline: 'Evolving Capabilities & Efficiency',
      text: 'One of the places that contributed to my growth was Kepler College, where I gained additional skills in ICT, Microsoft Office, and Google Apps. Beyond the technical skills, the experience helped me understand the importance of practical learning, adaptability, and preparing myself for a world where technology is constantly changing.'
    },
    {
      marker: '03',
      period: 'GREENLAND FILM SCHOOL',
      headline: 'Discovering Visual Aesthetics & Creative Language',
      text: 'Technology was only one side of my story. At Greenland Film School, I explored Photography and Graphic Design — two areas that opened another part of my creativity. I began to understand that creating is not only about writing code. It can also be about composition, visual communication, storytelling, and emotion.'
    },
    {
      marker: '04',
      period: 'DREAMIZE AFRICA ACCELERATION',
      headline: 'FinTech Frameworks & Collaborative Engineering',
      text: 'My next chapter took me into a different space through Dreamize Africa, where I joined an intensive 4-month FinTech program and continued developing my technical and problem-solving mindset. That experience pushed me closer to the idea of building solutions, not just learning technologies. I worked with real-world development toolchains including GitHub, VS Code, Notion, and Slack.'
    },
    {
      marker: '05',
      period: 'PRODUCTION LOG PARADIGM',
      headline: 'From Developer to Active Product Builder',
      text: 'As I continued learning, I started creating projects of my own. I explored web development, UI/UX, backend systems, databases, APIs, and deployment. I built frameworks like LifeOS (MERN tracking environment), Nexus News Network, Kigali Bites culinary discovery blueprints, and the Buy & Get E-commerce application.'
    },
    {
      marker: '06',
      period: 'THE FOUNDER MATRIX (CURRENT STATUS)',
      headline: 'Launching Multi-Ecosystem Ventures & Foundations',
      text: 'Today, I’m using technology and creativity to scale larger ideas. I am the Founder & Builder of ByteFlow Ltd (engineering premier digital solutions), the Founder of A Better Tomorrow Foundation (rebuilding hope and support ecosystems for vulnerable demographics in Rwanda), and the Founder & Creative of Chapters Studio (curating fine-art photography and memories).'
    }
  ];

  return (
    <div className="ele-journey-viewport">
      <div className="ele-journey-container">
        
        <div className="ele-journey-header">
          <span className="ele-journey-num">04 // FULL CHRONOLOGY TEXT</span>
          <h2 className="ele-journey-title">My Complete Journey</h2>
          <div className="ele-journey-trajectory-pills-row">
            <span className="ele-trajectory-pill">Learning</span>
            <span className="ele-trajectory-arrow">→</span>
            <span className="ele-trajectory-pill">Creating</span>
            <span className="ele-trajectory-arrow">→</span>
            <span className="ele-trajectory-pill">Building</span>
            <span className="ele-trajectory-arrow">→</span>
            <span className="ele-trajectory-pill">Founding</span>
            <span className="ele-trajectory-arrow">→</span>
            <span className="ele-trajectory-pill">Growing</span>
          </div>
        </div>

        {/* Continuous Spine Timeline including all chapters */}
        <div className="ele-journey-spine-track">
          {fullStorySteps.map((step) => (
            <div key={step.marker} className="ele-journey-node-item">
              
              <div className="ele-journey-meta-column">
                <span className="ele-journey-step-count">{step.marker}</span>
                <span className="ele-journey-node-period">{step.period}</span>
              </div>
              
              <div className="ele-journey-content-column">
                <h3>{step.headline}</h3>
                <p>{step.text}</p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
