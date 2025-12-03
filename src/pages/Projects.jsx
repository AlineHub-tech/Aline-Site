import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { loadProjects, saveProjects } from "../utils/localStore";
import { SAMPLE_PROJECTS } from "../data/sampleProjects";
import AddProjectModal from "../components/AddProjectModal";
import "../styles/Project.css";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [filterTech, setFilterTech] = useState("");

  useEffect(() => {
    const local = loadProjects();
    if (!local) {
      saveProjects(SAMPLE_PROJECTS);
      setProjects(SAMPLE_PROJECTS);
    } else setProjects(local);
  }, []);

  function handleSave(p) {
    const next = [p, ...projects.filter(x => x.id !== p.id)];
    setProjects(next);
    saveProjects(next);
  }

  function handleDelete(id){
    if(!confirm("Delete project?")) return;
    const next = projects.filter(p=>p.id!==id);
    setProjects(next);
    saveProjects(next);
  }

  const filtered = projects.filter(p => {
    const q = query.trim().toLowerCase();
    if (q && !(p.title.toLowerCase().includes(q) || (p.description||"").toLowerCase().includes(q))) return false;
    if (filterTech && !(p.tech||"").toLowerCase().includes(filterTech.toLowerCase())) return false;
    return true;
  });

  const allTechs = Array.from(new Set(projects.flatMap(p => (p.tech || "").split(",").map(t=>t.trim()).filter(Boolean))));

  return (
    <section className="projects section" id="projects">
      <div className="container">
        <div className="projects-header">
          <h2>Projects</h2>
          <div className="projects-actions">
            <input placeholder="Search projects..." value={query} onChange={(e)=>setQuery(e.target.value)} />
            <select value={filterTech} onChange={e=>setFilterTech(e.target.value)}>
              <option value="">All tech</option>
              {allTechs.map((t, i)=> <option key={i} value={t}>{t}</option>)}
            </select>
            <button className="btn" onClick={()=>setOpen(true)}>+ Add</button>
            <button className="btn ghost" onClick={()=>{ if(confirm('Clear all?')){ saveProjects([]); setProjects([]); } }}>Clear All</button>
          </div>
        </div>

        <div className="projects-grid">
          {filtered.length===0 && <div className="empty">No projects yet.</div>}
          {filtered.map((p) => (
            <article className="project-card" key={p.id}>
              <h3>{p.title}</h3>
              <p className="meta">{p.tech}</p>
              <p className="desc">{p.description}</p>
              <div className="card-row">
                <Link to={`/projects/${p.id}`} className="btn outline">Details</Link>
                {p.link && <a href={p.link} target="_blank" rel="noreferrer" className="btn">Open</a>}
                <button className="btn ghost" onClick={()=>{ navigator.clipboard?.writeText(window.location.origin + "/projects/" + p.id); alert("Link copied") }}>Copy Link</button>
                <div className="card-actions">
                  <button className="btn small" onClick={()=>{ setOpen(true); /* we will open modal in edit mode by passing existing project — implement by setting state if needed */ }}>Edit</button>
                  <button className="btn danger small" onClick={()=>handleDelete(p.id)}>Delete</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {open && <AddProjectModal onClose={()=>setOpen(false)} onSave={handleSave} />}
    </section>
  );
}
