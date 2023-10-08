import './App.css';
import React from 'react';

class Contact extends React.Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h2>Contact Me</h2>
                    <main>
                        <p>
                            📧 
                            <a
                                className='Email-link'
                                href='mailto: fjodoin@protonmail.com'
                            >
                            Email
                            </a>
                        </p>
                    </main>
                </header>
            </div>
        );
    }
}

export default Contact;