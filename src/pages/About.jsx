import React from 'react';
import '../styles/About.css';
import profileImg from '../assets/profile.png';

export default function About() {
  return (
    <div className="ele-about-page ele-view-fade">
      <div className="ele-section-header">
        <span className="ele-section-num">VOLUME II // DEEP DOCUMENTARY</span>
        <h2 className="ele-section-main-title">The Person Behind the Systems</h2>
      </div>

      <div className="ele-about-editorial-grid">
        <div className="ele-about-essay-column">
          <p className="ele-essay-lead">
            I’m Umugwaneza Aline — a Full-Stack Developer, Graphic Designer, Photographer, and Founder from Kigali, Rwanda. My story is not about titles; it is about bringing technology and creativity into the exact same space.
          </p>

          <div className="ele-essay-chapter-block">
            <h3>I. The Architecture of Learning</h3>
            <p className="ele-essay-body">
              In 2024, I completed my high school education specializing heavily in Software Development. Many see graduation as a finish line, but for me, it was an invitation to start testing the limits of what I could actually build. I did not want to stay comfortable with theory; I wanted to break code, make mistakes, and learn through raw deployment.
            </p>
            <p className="ele-essay-body">
              This hunger for growth led me to Kepler College, where I pushed myself to master advanced ICT infrastructures, complex Microsoft Office metrics, and collaborative Google Apps architectures. It wasn't just about learning tools—it was about developing professional speed and structural discipline.
            </p>
          </div>

          <div className="ele-essay-chapter-block">
            <h3>II. Translating the Visual Language</h3>
            <p className="ele-essay-body">
              Technology taught me how things work under the hood, but I felt a missing dimension. I wanted to learn how to communicate emotion and capture history. I joined Greenland Film School to explore Photography and Graphic Design. 
            </p>
            <p className="ele-essay-body">
              Suddenly, my two worlds converged. Writing clean code and framing a cinematic image through a camera lens felt identical—both require geometric balance, absolute focus, and structural design. Photography became my second language, a way to tell dense stories without saying a word.
            </p>
          </div>

          <div className="ele-essay-chapter-block">
            <h3>III. The Product Mindset Shift</h3>
            <p className="ele-essay-body">
              My path accelerated through Dreamize Africa, where I joined an intensive 4-month FinTech incubation matrix. This experience forced me out of my isolated development workspace and pushed me straight into collaborative, real-world ecosystems. 
            </p>
            <p className="ele-essay-body">
              Managing complex deployment repositories via GitHub, syncing workflows on VS Code, Notion, and Slack pipelines taught me a massive lesson: I didn't want to just write functions anymore. I wanted to engineer absolute solutions that serve active user demographics.
            </p>
          </div>

          <div className="ele-essay-chapter-block">
            <h3>IV. Turning Code into Active Ventures</h3>
            <p className="ele-essay-body">
              Today, those separate chapters have merged into a permanent blueprint of who I am becoming. Technology allows me to build robust applications; design gives me the power to structure layouts; photography enables me to document real human states; and entrepreneurship gives me the courage to move raw ideas into live companies.
            </p>
            <p className="ele-essay-body">
              I established <strong>ByteFlow Ltd</strong> to deploy premier software engineering services, <strong>Chapters Studio</strong> to curate classic visual storytelling matrices, and <strong>A Better Tomorrow Foundation</strong> to give back by re-anchoring hope and providing critical mentorship lines for street youth and vulnerable communities across Rwanda.
            </p>
            <p className="ele-essay-body">
              This is not a finished career summary. I am still learning every single day, building from my base in Kigali, and engineering my trajectory one live node at a time.
            </p>
          </div>
        </div>

        <div className="ele-about-portrait-column">
          <div className="ele-about-image-wrapper">
            <img src={profileImg} alt="Umugwaneza Aline Deep Editorial Profile" className="ele-about-img" />
          </div>
          <p className="ele-about-caption-label">FIG 02. NARRATIVE DOCUMENTARY PORTRAIT · BATSINDA ARCHIVE</p>
        </div>
      </div>
    </div>
  );
}
