import React from 'react';
// import './Contact.css';
import { FaPhone, FaEnvelope, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Contact = () => (
    <section id="contact" className="contact-section bg-black text-white py-20">
        <div className="container mx-auto flex flex-col md:flex-row justify-center items-center text-center md:text-left">
            {/* Left half - Contact Us Text */}
            <div className="md:w-1/2 px-4">
                <h2 className="text-4xl md:text-5xl font-bold glow-text animate-fade-in">
                    Contact Us
                </h2>
            </div>

            {/* Right half - Contact Details */}
            <div className="md:w-1/2 px-4 mt-8 md:mt-0">
                <div className="contact-details space-y-6 ">
                    <p className="text-lg flex items-center hover:text-blue-500 transition duration-300 transform hover:scale-105">
                        <FaPhone className="mr-3 text-white-500" /> +91 8882756562
                    </p>
                    <p className="text-lg flex items-center hover:text-blue-500 transition duration-300 transform hover:scale-105">
                        <FaEnvelope className="mr-3 text-white-500" /> techzen788@gmail.com
                    </p>
                    <div className="flex justify-center md:justify-start space-x-6 mt-4">
                        <a href="https://www.instagram.com/techh_zen?igsh=MWZsZWNpeTZvZHcxZw==" className="social-link hover:text-pink-500 transition duration-300 transform hover:scale-105">
                            <FaInstagram />
                        </a>
                        <a href="https://www.linkedin.com/in/techzen-software-7721b4322?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="social-link hover:text-blue-500 transition duration-300 transform hover:scale-105">
                            <FaLinkedin />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default Contact;
