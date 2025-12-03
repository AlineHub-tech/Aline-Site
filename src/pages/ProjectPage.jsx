import React, { useEffect, useState } from "react";
import "../styles/ProjectPage.css";
export default function Projects() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

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
    return <div className="loading">Loading Projects...</div>;
  }

  return (
    <div className="projects-container">
      <h1 className="title">My GitHub Projects</h1>

      <div className="projects-grid">
        {repos.map((repo) => (
          <div className="project-card" key={repo.id}>
            <h3>{repo.name}</h3>
            <p>{repo.description || "No description available"}</p>

            <p className="lang">
              <strong>Language:</strong> {repo.language || "Unknown"}
            </p>

            <div className="card-footer">
              <a href={repo.html_url} target="_blank" rel="noreferrer">
                View on GitHub
              </a>
              <span className="updated">
                Updated: {new Date(repo.updated_at).toLocaleDateString()}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

