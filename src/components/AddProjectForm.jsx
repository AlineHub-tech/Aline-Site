import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import '../index.css';
export default function AddProjectForm({ onAdd }) {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [tech, setTech] = useState('');
  const [link, setLink] = useState('');

  function submit(e) {
    e.preventDefault();
    if (!title) return alert('Add a title');
    const project = {
      id: uuidv4(),
      title,
      description: desc,
      tech: tech.split(',').map((s) => s.trim()).filter(Boolean),
      link,
      date: new Date().toISOString().slice(0, 10)
    };
    onAdd(project);
    setTitle(''); setDesc(''); setTech(''); setLink('');
  }

  return (
    <form className="add-project-form" onSubmit={submit}>
      <input value={title} placeholder="Project title" onChange={e => setTitle(e.target.value)} />
      <input value={tech} placeholder="Tech (comma separated)" onChange={e => setTech(e.target.value)} />
      <input value={link} placeholder="Link (optional)" onChange={e => setLink(e.target.value)} />
      <textarea value={desc} placeholder="Short description" onChange={e => setDesc(e.target.value)} />
      <button className="btn" type="submit">Add project</button>
    </form>
  );
}
