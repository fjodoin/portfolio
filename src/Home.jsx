import './App.css';
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import logo from './logo.svg';
import overlayLogo from './overlayLogo.svg';

class Home extends React.Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <div className="image-container">
                        <img src={logo} className="App-logo" alt="logo" />
                        <img src={overlayLogo} className="overlay-image" alt="overlay" />
                    </div>
                    <h1>⛅️ Cloud Ethical Hacker 🌩️</h1>
                    <div>
                        <div className="skills">
                            <table className="skills-table">
                                <thead>
                                    <tr>
                                        <th>Skills</th>
                                        <th>Details</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <Link to="/offensive-cloud-security">🏴‍☠️ Offensive Cloud Security</Link>
                                        </td>
                                        <td>Assumed Breach Penetration Testing</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <Link to="/defensive-cloud-security">🏰 Defensive Cloud Security</Link>
                                        </td>
                                        <td>SIEM Alert & Monitoring Strategies</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <Link to="/integrated-cloud-security">🎯 Integrated Cloud Security</Link>
                                        </td>
                                        <td>Purple Teaming & SOC Enhancements</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </header>
            </div>
        );
    }
}

export default Home;
