import React from 'react';
import '../styles/Skills.css';

export default function Skills() {
  const categories = [
    {
      title: 'Frontend Architecture',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Tailwind CSS', 'Responsive Design', 'UI/UX Architecture', 'Figma Blueprinting']
    },
    {
      title: 'Backend Engineering',
      skills: ['Node.js', 'Express.js', 'PHP', 'Python', 'Java', 'REST APIs Architecture']
    },
    {
      title: 'Databases & Infrastructure',
      skills: ['MongoDB', 'PostgreSQL', 'MySQL']
    },
    {
      title: 'Development Toolchains',
      skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Vercel', 'Render', 'WordPress']
    },
    {
      title: 'Creative Media Operations',
      skills: ['Graphic Design', 'Visual Brand Identity Design', 'Documentary Photography', 'Videography', 'Media Production', 'Creative Direction']
    },
    {
      title: 'ICT & Productivity Systems',
      skills: ['ICT Infrastructure', 'Microsoft Word', 'Excel Data Models', 'PowerPoint Animations', 'Google Apps', 'Notion Workspaces', 'Slack Frameworks']
    }
  ];

  return (
    <div className="ele-skills-viewport">
      <div className="ele-skills-container">
        
        <div className="ele-skills-header">
          <span className="ele-skills-num">03 // CORE CAPABILITIES</span>
          <h2 className="ele-skills-title">Technical & Creative Stacks</h2>
        </div>

        <div className="ele-skills-matrix-grid">
          {categories.map((cat, index) => (
            <div key={index} className="ele-skills-row-line">
              <div className="ele-skills-row-title">{cat.title}</div>
              <div className="ele-skills-row-tokens">
                {cat.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="ele-skill-tag-token">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
