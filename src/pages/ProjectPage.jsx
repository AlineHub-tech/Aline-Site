import React, { useEffect, useState } from "react";
import { FaGithub, FaExternalLinkAlt, FaStar, FaCodeBranch, FaCode, FaLaptopCode } from "react-icons/fa"; 
import { Link, useLocation } from 'react-router-dom';
import "../styles/ProjectPage.css";

const username = "AlineHub-tech";

export default function ProjectPage() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=12`)
      .then((res) => res.json())
      .then((data) => {
        setRepos(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const navItems = [
    { name: 'Software', path: '/ProjectPage' },
    { name: 'Graphic Design', path: '/graphic-design' },
    { name: 'Videography', path: '/videography' },
    { name: 'Digital Marketing', path: '/marketing' }, // Twongeyemo Marketing hano
  ];

  return (
    <div className="project-page-wrapper">
      {/* Sub-Navigation */}
      <nav className="portfolio-subnav">
        {navItems.map((item) => (
          <Link 
            key={item.name} 
            to={item.path}
            className={`subnav-link ${location.pathname === item.path ? 'active' : ''}`}
          >
            {item.name}
          </Link>
        ))}
      </nav>

      <div className="projects-container-nv">
        <header className="projects-header-nv">
          <div className="header-badge"><FaCode /> GitHub Repositories</div>
          <h1>My Software <span className="highlight">Portfolio</span></h1>
          <p>Explore my latest open-source contributions and full-stack developments directly from GitHub.</p>
        </header>

        {loading ? (
          <div className="loading-grid">
            {[1,2,3,4,5,6].map(n => <div key={n} className="skeleton-card"></div>)}
          </div>
        ) : (
          <div className="projects-grid-nv">
            {repos.map((repo) => (
              <div className="repo-card-nv" key={repo.id}>
                <div className="repo-card-inner">
                  <div className="repo-header">
                    <FaLaptopCode className="repo-icon" />
                    <div className="repo-links">
                      <a href={repo.html_url} target="_blank" rel="noreferrer"><FaGithub /></a>
                    </div>
                  </div>
                  
                  <h3>{repo.name.replace(/-/g, ' ')}</h3>
                  <p className="repo-desc">
                    {repo.description || "No description provided for this technical repository."}
                  </p>

                  <div className="repo-meta">
                    <span className="repo-lang">
                      <span className="dot" style={{backgroundColor: getLanguageColor(repo.language)}}></span>
                      {repo.language || "Web"}
                    </span>
                    <div className="repo-stats">
                      <span><FaStar /> {repo.stargazers_count}</span>
                      <span><FaCodeBranch /> {repo.forks_count}</span>
                    </div>
                  </div>

                  <a href={repo.homepage || repo.html_url} target="_blank" rel="noreferrer" className="repo-visit-btn">
                    {repo.homepage ? "Live Demo" : "Source Code"} <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

const getLanguageColor = (lang) => {
    const colors = {
        JavaScript: '#f1e05a', Python: '#3572A5', CSS: '#563d7c',
        HTML: '#e34c26', TypeScript: '#2b7489', PHP: '#4F5D95'
    };
    return colors[lang] || '#94a3b8';
};
