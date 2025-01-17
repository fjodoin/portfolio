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
                        <p className="skills">
                            <span className="skill-level">Microsoft Cloud</span> (Entra, Azure, M365)<br />
                            <span className="skill-level">AWS</span><br />
                            <span className="skill-level">Kubernetes</span>
                        </p>
                </header>
            </div>
        );
    }
}

export default Home;
