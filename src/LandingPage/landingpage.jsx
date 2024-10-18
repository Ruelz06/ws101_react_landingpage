// src/LandingPage.js
import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
    return (
        <div className="landing-container">
            <nav className="navbar">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#contact">Contact Us</a>
                
            </nav>
            <header className="landing-header" id="home">
                <h1>Explore the World</h1>
                <p>Your enjoy!</p>
                <button>Get Started</button>
            </header>
            <section className="home" id="home">
                <h2>PROJECTS</h2>
                <ul>
                    <li>Project 1</li>
                    <li>Project 2</li>
                    <li>Project 3</li>
                </ul>
            </section>
            <section className="about" id="about">
                <h2>What Our Users Say</h2>
                <blockquote>
                    <p>"This product changed my life!"</p>
                    <cite>- Happy Customer</cite>
                </blockquote>
            </section>
            <section className="contact" id="contact">
                <h2>Contact Us</h2>
                <form>
                    <input type="text" placeholder="Your Name" required />
                    <input type="email" placeholder="Your Email" required />
                    <textarea placeholder="Your Message" required></textarea>
                    <button type="submit">Send Message</button>
                </form>
            </section>
            <footer>
                <p>© 2024 Your Company Ruelz</p>
            </footer>
        </div>
    );
};

export default LandingPage;



