import React from 'react';
import './Services.css';

const Services = () => (
    <section id="services" className="services-section bg-darker text-primary py-20">
        <div className="container mx-auto text-center">
            <h2 className="section-title text-3xl md:text-4xl font-bold mb-12 animate-fade-in">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="service-card transform transition duration-500 hover:scale-105 hover:shadow-lg">
                    <div className="service-card-inner bg-dark rounded-lg overflow-hidden">
                        <img src={require('./services.jpg')} alt="Web Development" className="service-image w-full h-48 object-cover transition duration-500 ease-in-out" />
                        <div className="p-6">
                            <h3 className="service-title text-xl font-semibold mb-2">Web Development</h3>
                            <p className="service-description text-base">We excel in crafting responsive and dynamic websites, managing every stage from design and layout to coding, content creation, and maintenance.</p>
                        </div>
                    </div>
                </div>
                <div className="service-card transform transition duration-500 hover:scale-105 hover:shadow-lg">
                    <div className="service-card-inner bg-dark rounded-lg overflow-hidden">
                        <img src={require('./services.jpg')} alt="Mobile Apps" className="service-image w-full h-48 object-cover transition duration-500 ease-in-out" />
                        <div className="p-6">
                            <h3 className="service-title text-xl font-semibold mb-2">Digital Marketing Services</h3>
                            <p className="service-description text-base">Leverage different digital channels–such as social media, pay-per-click, search engine optimization, and email marketing</p>
                        </div>
                    </div>
                </div>
                <div className="service-card transform transition duration-500 hover:scale-105 hover:shadow-lg">
                    <div className="service-card-inner bg-dark rounded-lg overflow-hidden">
                        <img src={require('./services.jpg')} alt="Cloud Solutions" className="service-image w-full h-48 object-cover transition duration-500 ease-in-out" />
                        <div className="p-6">
                            <h3 className="service-title text-xl font-semibold mb-2">JEE/NEET Consulting</h3>
                            <p className="service-description text-base">Our JEE/NEET consulting services offer expert guidance with personalized study plans and resource recommendations.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default Services;
