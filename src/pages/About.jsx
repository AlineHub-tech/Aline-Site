import React from 'react';
import '../styles/About.css';
import profileImg from '../assets/profile.png';

export default function About() {
  return (
    <div className="ele-about-viewport">
      <div className="ele-about-container">
        
        {/* Editorial Page Title */}
        <div className="ele-about-header">
          <span className="ele-about-num">02 // PROFILE MATRIX</span>
          <h2 className="ele-about-title">About Me</h2>
        </div>

        {/* Responsive Layout Grid */}
        <div className="ele-about-split-layout">
          
          {/* Left Visual Column */}
          <div className="ele-about-left-side">
            <div className="ele-about-image-wrapper">
              <img src={profileImg} alt="Umugwaneza Aline" className="ele-about-profile-img" />
            </div>
            <div className="ele-about-faith-card">
              <span className="ele-about-faith-label">FOUNDATIONAL CONVICTION</span>
              <p className="ele-about-faith-quote">“Jesus is my forever.”</p>
            </div>
          </div>

          {/* Right Text Column */}
          <div className="ele-about-right-side">
            <p className="ele-about-essay-lead">
              I’m Umugwaneza Aline — a Full-Stack Developer, Graphic Designer, Photographer, and Founder from Kigali, Rwanda [Kigali, Batsinda KG 24 AVE].
            </p>
            
            <p className="ele-about-essay-body">
              I’m a young creator and builder who found a way to bring technology and creativity into the same story. I enjoy building digital products, designing visual experiences, capturing stories through photography, and turning ideas into things people can actually see and use.
            </p>
            
            <p className="ele-about-essay-body">
              But this journey did not start with a company, a title, or a clear roadmap. It started with learning.
            </p>

            <div className="ele-about-sub-chapter">
              <h3>From Developer to Builder</h3>
              <p className="ele-about-essay-body">
                As I continued learning, I started creating projects of my own. I explored web development, UI/UX, backend systems, databases, APIs, and deployment. I built projects, redesigned ideas, tested concepts, made mistakes, started again, and kept improving.
              </p>
              <p className="ele-about-essay-body">
                Some projects became experiments. Some became portfolio pieces. And some became the beginning of bigger ideas. This is where my journey started changing from <em>learning technology</em> to <em>using technology to create.</em>
              </p>
            </div>

            <div className="ele-about-sub-chapter">
              <h3>Becoming a Founder</h3>
              <p className="ele-about-essay-body">
                Today, I’m not only interested in building for myself. I’m building things that can become something bigger. 
              </p>
              <p className="ele-about-essay-body">
                I’m the Founder & Builder of <strong>ByteFlow Ltd</strong>, a technology company focused on building digital solutions and helping ideas move from concept to reality. I’m also the Founder of <strong>A Better Tomorrow Foundation</strong>, an initiative built around the belief that we can contribute to a better future by restoring hope and creating opportunities. And through <strong>Chapters Studio</strong>, I continue exploring my creative side as a Founder & Creative — using photography and visual storytelling to capture moments, people, and stories.
              </p>
            </div>

            <div className="ele-about-sub-chapter">
              <h3>Where I Am Now</h3>
              <p className="ele-about-essay-body">
                I’m still learning. Still building. Still experimenting. Still discovering what I’m capable of. I don’t see my journey as a finished success story. I see it as a documentary that is still being written. From finishing school in 2024 to stepping into entrepreneurship — every chapter has shaped the person I am becoming. And this is only the beginning.
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
