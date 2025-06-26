import React from 'react';
import './App.scss';
import { Routes, Route, useLocation } from 'react-router-dom';

import ParticlesComponent from './utils.js/particles'; 
import Home from './containers/home';
import About from './containers/about';
import Contact from './containers/contact';
import Resume from './containers/resume';     
import Skills from './containers/skills';
import Portfolio from './containers/portfolio';
import Navbar from './components/navbar';

function App() {
  const location = useLocation();
  const renderParticleJsInHomePage = location.pathname === "/";

  return (
    <div className="App" style={{ position: 'relative', zIndex: 1 }}>
      {/* Background particles */}
      {renderParticleJsInHomePage && <ParticlesComponent />}

      {/* Navigation bar */}
      <Navbar />
       

      {/* Page routing */}
      <div className="App__main-page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
