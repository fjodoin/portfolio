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
                                            <th>Skills</th>
                                            <th>Details</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>🔴 Offensive Cloud Security</td>
                                            <td>Assumed Breach Penetration Testing (Red Teaming: TBD)</td>
                                        </tr>
                                        <tr>
                                            <td>🔵 Defensive Cloud Security</td>
                                            <td>SIEM, Alert & Monitoring Strategies</td>
                                        </tr>
                                        <tr>
                                            <td>🟣 Integrated Cloud Security</td>
                                            <td>Purple Teaming, SOC Enhancements</td>
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
