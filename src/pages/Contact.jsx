import React, { useState } from "react";
import { 
  FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock, FaPaperPlane, 
  FaFacebook, FaInstagram, FaLinkedin, FaGithub, FaTwitter, FaDev 
} from "react-icons/fa";
import "../styles/Contact.css";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setName(""); setEmail(""); setMessage("");
    }, 3000);
  };

  return (
    <section className="contact-page-nv">
      <div className="contact-glow"></div>
      
      <div className="container-nv">
        <header className="contact-header-nv">
          <span className="badge-nv">Get In Touch</span>
          <h1>Let’s Build Something <span className="highlight">Exceptional</span></h1>
          <p className="header-desc">Reach out for collaborations, inquiries, or just to say hi!</p>
        </header>

        <div className="contact-grid-nv">
          {/* Left Side: Contact Info & Socials */}
          <div className="contact-info-nv">
            <div className="info-card-nv">
              <h3>Office Information</h3>
              
              <div className="info-item-nv">
                <div className="icon-box-nv"><FaMapMarkerAlt /></div>
                <div>
                  <p className="label">Location</p>
                  <p className="value">Batsinda, KG 24 AVE, Kigali</p>
                </div>
              </div>

              <div className="info-item-nv">
                <div className="icon-box-nv"><FaPhoneAlt /></div>
                <div>
                  <p className="label">Call/WhatsApp</p>
                  <p className="value">+250 796 023 452</p>
                </div>
              </div>

              <div className="info-item-nv">
                <div className="icon-box-nv"><FaEnvelope /></div>
                <div>
                  <p className="label">Email Address</p>
                  <p className="value">umugwanezaaline77@gmail.com</p>
                </div>
              </div>

              {/* Social Media Icons */}
              <div className="social-connect-nv">
                <p className="social-title">Connect With Me</p>
                <div className="social-links-grid">
              <a href="https://github.com/AlineHub-tech" target="_blank" rel="noreferrer"><FaGithub/></a>
              <a href="https://www.facebook.com/share/1CGmESiTA3/" target="_blank" rel="noreferrer"><FaFacebook/></a>
              <a href="https://www.linkedin.com/in/umugwaneza-aline-655146325?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer"><FaLinkedin/></a>
              <a href="https://x.com/Umugwaneza3183?t=4A3A4C8KYpGQ-PlZEfOg1g&s=09" target="_blank" rel="noreferrer"><FaTwitter/></a>
              <a href="https://www.instagram.com/a_li_ne97?igsh=dGs5MXVnbnpsbzIz" target="_blank" rel="noreferrer"><FaInstagram/></a>
              <a href="https://dev.to/alinehubtech" target="_blank" rel="noreferrer"><FaDev/></a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="contact-form-wrapper-nv">
            <div className="form-card-nv">
                <h3>Send a Message</h3>
                <form className="modern-form-nv" onSubmit={handleSubmit}>
                    <div className="form-group-nv">
                        <input type="text" placeholder="Full Name" value={name} onChange={(e)=>setName(e.target.value)} required />
                    </div>
                    <div className="form-group-nv">
                        <input type="email" placeholder="Email Address" value={email} onChange={(e)=>setEmail(e.target.value)} required />
                    </div>
                    <div className="form-group-nv">
                        <textarea placeholder="How can I help you?" rows="5" value={message} onChange={(e)=>setMessage(e.target.value)} required></textarea>
                    </div>
                    <button className={`submit-btn-nv ${sent ? 'sent' : ''}`} type="submit">
                        {sent ? "Message Sent ✓" : "Send Message"} <FaPaperPlane />
                    </button>
                </form>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="map-section-nv">
          <div className="map-header">
            <h2>Visit My <span className="highlight">Workspace</span></h2>
            <p>KG 24 AVE, Batsinda, Kigali, Rwanda</p>
          </div>
          <div className="map-container-nv">
            <iframe 
              title="Aline's Office Location"
              src="https://google.com" 
              width="100%" height="450" style={{ border: 0, borderRadius: "24px" }} allowFullScreen="" loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

