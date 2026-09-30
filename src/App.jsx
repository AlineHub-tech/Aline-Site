import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Landing from './pages/Landing';
import About from './pages/About';
import Journey from './pages/Journey';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

export default function App() {
  return (
    <div className="ele-app-container">
      <Navbar />
      <div className="ele-main-content">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/journey" element={<Journey />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
