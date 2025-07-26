import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from './components/ui/toaster';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Certifications from './pages/Certifications';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App min-h-screen bg-gray-900 text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Toaster />
      </div>
    </Router>
  );
}

export default App;