import React, { useEffect, useState } from "react";
import "../styles/Contact.css";

export default function Contact(){
   const [i, setI] = useState(0);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  function submit(e){
    e.preventDefault();
    // no backend here — just simulate and show instructions
    setSent(true);
    setTimeout(()=> { setSent(false); setName(""); setEmail(""); setMessage(""); }, 2200);
  }
  useEffect(() => {
        const stars = document.querySelector(".stars");
        for (let i = 0; i < 80; i++) {
          let star = document.createElement("div");
          star.classList.add("star");
    
          star.style.top = Math.random() * window.innerHeight + "px";
          star.style.left = Math.random() * window.innerWidth + "px";
          star.style.animationDuration = 3 + Math.random() * 6 + "s";
    
          stars.appendChild(star);
        }
      }, []);

  return (
    <section className="contact section" id="contact">
              {/* ⭐ Background Stars Layer */}
      <div className="stars"></div>

      {/* ⭐ Top Glow Light */}
      <div className="top-glow"></div>
      <div className="container">
        <h2>Contact Me</h2>
        <p className="muted">Send me a message .</p>

        <form className="contact-form" onSubmit={submit}>
          <input placeholder="Your name" value={name} onChange={e=>setName(e.target.value)} required />
          <input placeholder="Your email" value={email} onChange={e=>setEmail(e.target.value)} required />
          <textarea placeholder="Message" value={message} onChange={e=>setMessage(e.target.value)} rows={6} required/>
          <button className="btn primary" type="submit">{sent ? "Sent ✓" : "Send message"}</button>
        </form>

        <div className="contact-info">
          <p><strong>Email:</strong> umugwanezaaline77@gmail.com</p>
          <p><strong>WhatsApp:</strong>
           📞 0796023452
           </p>
        </div>
      </div>
    </section>
  );
}
