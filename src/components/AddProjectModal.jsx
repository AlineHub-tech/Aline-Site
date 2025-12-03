import React, { useState } from "react";
import "../styles/AddProjectModal.css";

export default function AddProjectModal({ onClose, onSave, existing }) {
  const [title, setTitle] = useState(existing?.title || "");
  const [description, setDescription] = useState(existing?.description || "");
  const [tech, setTech] = useState(existing?.tech || "");
  const [link, setLink] = useState(existing?.link || "");

  function submit(e) {
    e.preventDefault();
    if (!title.trim()) return alert("Title required");
    const payload ={id: existing?.id || `p${Date.now()}`,
      title: title.trim(),
      description: description.trim(),
      tech: tech.trim(),
      link: link.trim(),
      addedAt: existing?.addedAt || Date.now()
    };
    onSave(payload);
    onClose();
  }

  return (
    <div className="modal-backdrop">
      <form className="modal-card" onSubmit={submit}>
        <h3>{existing ? "Edit Project" : "Add Project"}</h3>

        <label>Title
          <input value={title} onChange={(e)=>setTitle(e.target.value)} required/>
        </label>

        <label>Description
          <textarea value={description} onChange={(e)=>setDescription(e.target.value)} rows={4}/>
        </label>

        <label>Tech (comma separated)
          <input value={tech} onChange={(e)=>setTech(e.target.value)}/>
        </label>

        <label>Link (optional)
          <input value={link} onChange={(e)=>setLink(e.target.value)}/>
        </label>

        <div className="modal-actions">
          <button type="button" className="btn ghost" onClick={onClose}>Cancel</button>
          <button className="btn primary" type="submit">{existing ? "Save" : "Add"}</button>
        </div>
      </form>
    </div>
  );
}
