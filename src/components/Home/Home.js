import React from 'react';
import './Home.css';

const Homepage = () => (
    <section id="home" className="home-section bg-cover bg-center h-screen flex items-center justify-center relative">
        {/* Background Video */}
        <video autoPlay muted loop className="absolute inset-0 w-full h-full object-cover">
            <source src={require('./home.mp4')} type="video/mp4" />
            Your browser does not support the video tag.
        </video>

        {/* Dark Overlay */}
        <div className="overlay absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Content */}
        <div className="content-container relative text-center text-white p-4">
            <h1 className="main-title text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 animate-fade-in">TechZen </h1>
            <p className="sub-title text-xl md:text-2xl lg:text-3xl font-light mb-8 animate-fade-in-delay">Innovative Solutions for Your Business Needs</p>
            <a href="#services" className="explore-button bg-accent text-darker px-6 py-3 md:px-8 md:py-4 rounded-full hover:bg-accent-light hover:text-white transition duration-300 ease-in-out transform hover:scale-105 glow-on-hover">Explore Services {String.fromCharCode(8594)}</a>
        </div>
    </section>
);

export default Homepage;
