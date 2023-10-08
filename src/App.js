import './App.css';
import React, { Component } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import favicon from './profileLogo.png';

class App extends Component {
  componentDidMount() {
    this.changeFavicon();
  }

  changeFavicon() {
    const link = document.querySelector("link[rel*='icon']");
    if (link) {
      link.href = favicon;
    } else {
      const newLink = document.createElement('link');
      newLink.rel = 'icon';
      newLink.href = favicon;
      document.head.appendChild(newLink);
    }
  }

  render() {
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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    );
  }
}

export default App;
