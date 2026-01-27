import React, { useState } from "react";
import "../styles/Contact.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock, FaCheckCircle, FaUsers, FaLightbulb, FaPaperPlane, FaFacebook, FaInstagram, FaLinkedin, FaGithub, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Contact(){
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  function submit(e){
    e.preventDefault();
    // No backend here — just simulate and show instructions
    setSent(true);
    setTimeout(()=> { setSent(false); setName(""); setEmail(""); setMessage(""); }, 2200);
  }
  // Twakuyemo animation y'inyenyeri kuko NexVentures ikoresha background isukuye

  return (
    <section className="contact-page-nv" id="contact">
      <div className="container-nv">
        
        {/* === SECTION 1: Get In Touch (Header) === */}
        <header className="contact-header-nv">
            <p className="subtitle-nv">Get In Touch</p>
            <h1>Ready to transform your ideas into reality?</h1>
            <p className="description-nv">Let's start a conversation that could change everything. Reach out using the details below or the contact form.</p>
        </header>

        {/* === SECTION 2: Contact Details & Form === */}
        <div className="contact-grid-nv">
            
            {/* Left side: Details */}
            <div className="contact-details-nv">
                <h3>Contact Information</h3>
                <div className="detail-item-nv">
                    <FaPhoneAlt className="detail-icon-nv"/>
                    <div>
                        <strong>Phone Number</strong>
                        <span>+250 796 023 452</span>
                    </div>
                </div>
                <div className="detail-item-nv">
                    <FaEnvelope className="detail-icon-nv"/>
                    <div>
                        <strong>Email Address</strong>
                        <span>umugwanezaaline77@gmail.com</span>
                    </div>
                </div>
                 <div className="detail-item-nv">
                    <FaClock className="detail-icon-nv"/>
                    <div>
                        <strong>Business Hours</strong>
                        <span>Mon-Fri: 9am - 5pm CAT</span>
                    </div>
                </div>
                 <div className="detail-item-nv">
                    <FaMapMarkerAlt className="detail-icon-nv"/>
                    <div>
                        <strong>Office Location</strong>
                        <span>Kigali, Rwanda</span>
                    </div>
                </div>
                
                {/* Connect With Us - Socials (Mobile: moved here) */}
                <div className="connect-mobile-nv">
                    <h3>Connect With Us</h3>
                    <div className="socials-nv">
                        <a href="https://www.facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook"><FaFacebook/></a>
                        <a href="https://www.instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram"><FaInstagram/></a>
                        <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin/></a>
                        <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub/></a>
                    </div>
                </div>
            </div>

            {/* Right side: Form */}
            <div className="contact-form-card-nv">
                <h3>Send Us a Message</h3>
                <p>We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.</p>
                <form className="contact-form-nv" onSubmit={submit}>
                    <input placeholder="Your name" value={name} onChange={e=>setName(e.target.value)} required aria-label="Your Name"/>
                    <input placeholder="Your email" value={email} onChange={e=>setEmail(e.target.value)} required aria-label="Your Email"/>
                    <textarea placeholder="Message" value={message} onChange={e=>setMessage(e.target.value)} rows={5} required aria-label="Your Message"/>
                    <button className="btn-nv primary-nv" type="submit">
                        {sent ? "Sent ✓" : "Send Message"}
                    </button>
                </form>
            </div>
        </div>

        {/* === SECTION 3: Why Choose Us (Duplicated from Services for consistency) === */}
        <div className="why-choose-nv">
            <h2>Why Choose Us?</h2>
            <div className="choose-grid-nv">
                <div className="choose-item-nv">
                    <FaCheckCircle className="choose-icon-nv"/>
                    <h4>Expertise & Innovation</h4>
                    <p>Leveraging the latest technologies to build cutting-edge solutions tailored to your needs.</p>
                </div>
                <div className="choose-item-nv">
                    <FaCheckCircle className="choose-icon-nv"/>
                    <h4>Reliability & Support</h4>
                    <p>Committed to delivering robust solutions with ongoing support and clear communication.</p>
                </div>
                <div className="choose-item-nv">
                    <FaCheckCircle className="choose-icon-nv"/>
                    <h4>Versatility</h4>
                    <p>Blending technical development skills with graphic design and multimedia expertise for holistic results.</p>
                </div>
            </div>
        </div>

        {/* === SECTION 4: Visit Our Office (Map Placeholder) === */}
        <div className="office-location-nv">
            <h2>Visit Our Office</h2>
            <p>We are conveniently located in Kigali. Stop by for a coffee and a chat about your project.</p>
            {/* Placeholder for an embedded Google Map (Can use an iframe here) */}
            <div className="map-placeholder-nv">
                {/* Replace with an actual Google Maps Embed Iframe */}
                <p>Google Maps placeholder for Kigali location.</p>
            </div>
        </div>


        {/* === SECTION 5: Ready to Start Your Journey? (Final CTA) === */}
        <div className="final-cta-nv">
            <h2>Ready to Start Your Journey?</h2>
            <p>Let's create together.</p>
            <Link to="/contact" className="cta-button-nv">
                Get Started Today <FaArrowRight/>
            </Link>
        </div>

      </div>
    </section>
  );
}
