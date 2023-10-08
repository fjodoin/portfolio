import './App.css';
import React from 'react';
import logo from './logo.svg';
import overlayLogo from './overlayLogo.svg'

class Home extends React.Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <div className="image-container">
                        <img src={logo} className="App-logo" alt="logo" />
                        <img src={overlayLogo} className="overlay-image" alt="overlay" />
                    </div>
                
                <p>
                    wannabe-Bug Bounty Hunter.
                </p>
                </header>
            </div>
            
        );
    }

}

export default Home;