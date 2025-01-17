import './App.css';
import React, { Component } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import OffensiveCloudSecurity from './OffensiveCloudSecurity';
import DefensiveCloudSecurity from './DefensiveCloudSecurity';
import IntegratedCloudSecurity from './IntegratedCloudSecurity';
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
              <li className="dropdown">
                <Link to="#">Cloud Security</Link>
                <ul className="dropdown-content">
                  <li><Link to="/offensive-cloud-security">Offensive Cloud Security</Link></li>
                  <li><Link to="/defensive-cloud-security">Defensive Cloud Security</Link></li>
                  <li><Link to="/integrated-cloud-security">Integrated Cloud Security</Link></li>
                </ul>
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
          <Route path="/offensive-cloud-security" element={<OffensiveCloudSecurity />} />
          <Route path="/defensive-cloud-security" element={<DefensiveCloudSecurity />} />
          <Route path="/integrated-cloud-security" element={<IntegratedCloudSecurity />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    );
  }
}

export default App;
