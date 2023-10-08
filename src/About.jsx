import './App.css';
import React from 'react';
import profileLogo from './profileLogo.png';

class About extends React.Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h2>About</h2>
                    <main>
                    <div className="profileLogo">
                        <img src={profileLogo} alt="profileLogo" />
                    </div>
                        <p>
                            📃 
                            <a
                                className="CV-link"
                                href="https://1drv.ms/f/s!As82VHa7a-u8_B_z4W9SF9EvWjpv?e=2ypth9"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                            Curriculum vitae - Filip Jodoin
                            </a>                    
                        </p>
                    </main>
                </header>
            </div>
        );
    }
}

export default About;