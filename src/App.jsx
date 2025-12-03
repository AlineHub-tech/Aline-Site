import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Landing from "./pages/Landing";
import About from "./pages/About";
import Services from "./pages/Services";
import ProjectPage from "./pages/ProjectPage";
// import ProjectDetail from "./pages/ProjectDetail";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projectpage" element={<ProjectPage />} />
        {/* <Route path="/projects/:id" element={<ProjectDetail />} /> */}
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        {/* fallback */}
        {/* <Route path="*" element={<Landing />} /> */}
      </Routes>
      <Footer />
    </>
  );
}

