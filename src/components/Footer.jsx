import React from "react";
import "../styles/Footer.css";
import { FaFacebook, FaInstagram } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div>
          <strong>Umugwaneza Aline</strong>
          <p>Full-stack Developer • Designer • Photography</p>
        </div>
         <div className="socials">
          <a href="https://www.facebook.com/share/15erRQdApJ/"><FaFacebook/></a>
          <a href="https://www.instagram.com/a_li_ne97?igsh=dGs5MXVnbnpsbzIz"><FaInstagram/></a>
        </div>
      </div>

      <div className="copyright">© {new Date().getFullYear()} Umugwaneza Aline  All rights reserved</div>
    </footer>
  );
}