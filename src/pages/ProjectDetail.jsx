import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { loadProjects, saveProjects } from "../utils/localStore";
import { SAMPLE_PROJECTS } from "../data/sampleProjects";
import "../styles/ProjectDetail.css";

export default function ProjectDetail(){
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);

  useEffect(()=>{
    let list = loadProjects();
    if(!list) { list = SAMPLE_PROJECTS; }
    const p = list.find(x => x.id === id);
    if (!p) {
      // not found -> redirect to projects after a short message
      setTimeout(()=> navigate("/projects"), 800);
    } else setProject(p);
  },[id, navigate]);

  if(!project) return (
    <section className="section" style={{textAlign:"center"}}>
      <p>Project not found — redirecting...</p>
    </section>
  );

  return (
    <section className="project-detail section">
      <div className="container">
        <Link to="/projects" className="btn ghost">← Back to projects</Link>
        <h2>{project.title}</h2>
        <p className="meta">{project.tech}</p>
        <p className="lead">{project.description}</p>

        <div className="features">
          <h4>Features</h4>
          <ul>
            {(project.features || []).map((f,i)=> <li key={i}>{f}</li>)}
            {!project.features && <li>Feature list not available.</li>}
          </ul>
        </div>

        <div style={{marginTop:16}}>
          {project.link && <a href={project.link} target="_blank" rel="noreferrer" className="btn">Open Live</a>}
          <button className="btn ghost" onClick={()=>{ navigator.clipboard?.writeText(window.location.href); alert("Link copied") }}>Copy Link</button>
        </div>
      </div>
    </section>
  );
}