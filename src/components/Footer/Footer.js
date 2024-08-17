import React from 'react';
import './Footer.css';

const Footer = () => (
    <footer className="bg-dark text-white py-10">
        <div className="container mx-auto text-center">
            <p className="text-lg mb-4">© 2024 IT Services. All rights reserved.</p>
            <div className="footer-links">
                <a href="#home" className="footer-link hover:text-pink-500 transition duration-300">Home</a>
                <a href="#about" className="footer-link hover:text-pink-500 transition duration-300">About Us</a>
                <a href="#services" className="footer-link hover:text-pink-500 transition duration-300">Services</a>
                <a href="#contact" className="footer-link hover:text-pink-500 transition duration-300">Contact Us</a>
            </div>
        </div>
    </footer>
);

export default Footer;
