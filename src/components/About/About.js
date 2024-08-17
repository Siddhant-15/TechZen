import React from 'react';
import './About.css';

const About = () => (
    <section id="about" className="about-section bg-dark text-secondary py-20">
        <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Image on the left side */}
                <div className="image-container rounded-lg overflow-hidden shadow-lg transition-all duration-500 ease-in-out transform hover:scale-105">
                    <img src={require('./about.jpg')} alt="About Us" className="about-image w-full h-auto object-cover" />
                </div>

                {/* Text on the right side */}
                <div className="text-container text-center md:text-left">
                    <h2 className="section-title text-3xl md:text-4xl font-bold mb-8 animate-fade-in">About Us</h2>
                    <p className="section-description text-lg md:text-xl leading-relaxed animate-fade-in-delay">
                        We are a dedicated team of experts from premier institutions such as IITs, NITs, and IIITs, committed to delivering top-tier IT services that empower businesses to excel in the digital landscape. With extensive experience, we specialize in creating innovative and scalable solutions tailored to your specific needs. Our services include web development, data analysis, and digital marketing, while our ed-tech division offers specialized consulting services for JEE and NEET preparation.
                    </p>
                </div>
            </div>
        </div>
    </section>
);

export default About;
