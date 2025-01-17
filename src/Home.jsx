import './App.css';
import React from 'react';
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
                                            <th>Skill</th>
                                            <th>Details</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Offensive Cloud Security (RED)</td>
                                            <td>Assumed Breach</td>
                                        </tr>
                                        <tr>
                                            <td>Defensive Cloud Security (Blue)</td>
                                            <td>Alert & Monitoring</td>
                                        </tr>
                                        <tr>
                                            <td>Heuristic Cloud Security (Purple)</td>
                                            <td>Attack Surface Hardening</td>
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
