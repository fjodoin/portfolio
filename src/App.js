import './App.css';
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom'; // Import Routes and Route
import About from './About';
import Contact from './Contact';
import Home from './Home';

function App() {
  return (
    <div>
      <header className="header">
      <nav className="navbar">
          <ul id="navigation">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <div className="navLogo">
            ᓚᘏᗢ
          </div>
        </nav>
      </header>
      <Routes> {/* Wrap your Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
