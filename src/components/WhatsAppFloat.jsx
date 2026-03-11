// components/WhatsAppFloat.jsx
import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import "../styles/WhatsAppFloat.css";

export default function WhatsAppFloat() {
  return (
    <a 
      href="https://wa.me" 
      className="whatsapp-fixed-btn" 
      target="_blank" 
      rel="noreferrer"
    >
      <FaWhatsapp />
      <span className="tooltip">Chat with Aline</span>
    </a>
  );
}
