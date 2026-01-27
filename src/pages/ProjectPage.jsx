import React, { useEffect, useState } from "react";
import { FaGithub, FaLink, FaStar, FaCodeBranch } from "react-icons/fa"; 
import { Link, useLocation } from 'react-router-dom'; // Import Link and useLocation hooks
import "../styles/ProjectPage.css";
import "../styles/AppHeader.css"; 

export default function Projects() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); 
  const location = useLocation(); // Hook to identify the current active path

  const username = "AlineHub-tech"; // ← Andika username yawe hano

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}/repos`)
      .then((res) => res.json())
      .then((data) => {
        const sorted = data.sort(
          (a, b) => new Date(b.updated_at) - new Date(a.updated_at)
        );
        setRepos(sorted);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching repos:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="loading-nv">Loading Projects...</div>;
  }

  if (error) {
    return <div className="error-nv">Error: {error}</div>;
  }

  // Define navigation links and their paths
  const navItems = [
    { name: 'Software', path: '/ProjectPage' },
    { name: 'Graphic Design', path: '/graphic-design' },
    { name: 'Videography', path: '/videography' },
    { name: 'Photography', path: '/photography' },
    { name: 'Content Creator', path: '/content-creation' },
    { name: 'ICT Consultation', path: '/ict-consultation' },
  ];

  return (
    // Wrap the entire component in a main container if needed
    <>
      {/* --- Navigation Header --- */}
      <header className="app-header-nv">
          <nav className="nav-buttons-nv">
          {navItems.map((item) => (
            <Link 
              key={item.name} 
              to={item.path}
              // Add 'active-btn' class if the current location matches the path
              className={`nav-button-nv ${location.pathname === item.path ? 'active-btn' : ''}`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </header>
      {/* ------------------------- */}

      <div className="projects-container-nv">
        <header className="projects-header-nv">
          <h1 className="title-nv">My Software Projects</h1>
          <p className="description-nv">
            Explore a collection of my recent work on GitHub. From full-stack applications to UI/UX designs, these projects showcase my technical skills and passion for clean code and problem-solving.
          </p>
        </header>

        <div className="projects-grid-nv">
          {repos.map((repo) => (
            <div className="project-card-nv" key={repo.id}>
              <div className="card-header-nv">
                  <h3>{repo.name}</h3>
                  <a href={repo.html_url} target="_blank" rel="noreferrer" aria-label={`View ${repo.name} on GitHub`}>
                      <FaGithub className="github-icon-nv"/>
                  </a>
              </div>
              
              <p className="repo-description-nv">
                  {repo.description || "No description available for this repository."}
              </p>

              <div className="card-footer-nv">
                <span className="lang-nv">
                  <span className="language-color-nv" style={{backgroundColor: repo.language ? getLanguageColor(repo.language) : '#cccccc'}}></span>
                  {repo.language || "Unknown"}
                </span>

                <div className="stats-nv">
                  <span><FaStar/> {repo.stargazers_count}</span>
                  <span><FaCodeBranch/> {repo.forks_count}</span>
                </div>
                
              </div>
              <a href={repo.homepage || repo.html_url} target="_blank" rel="noreferrer" className="visit-btn-nv">
                  <FaLink/> {repo.homepage ? "Visit Site" : "View Code"}
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}


const getLanguageColor = (language) => {
    switch (language) {
        case 'JavaScript': return '#f1e05a';
        case 'Python': return '#3572A5';
        case 'CSS': return '#563d7c';
        case 'HTML': return '#e34c26';
        case 'TypeScript': return '#2b7489';
        // case 'React': return '#61DAFB'; // React is typically used within JS/TS projects
        default: return '#cccccc';
    }
};
