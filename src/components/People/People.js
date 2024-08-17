import React from 'react';
import './People.css';

const People = () => (
    <section id="people" className="people-section bg-dark text-secondary py-20">
        <div className="container mx-auto text-center">
            <h2 className="section-title text-3xl md:text-4xl font-bold mb-12 animate-fade-in">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="team-card transform transition duration-500 hover:scale-105 hover:shadow-lg">
                    <div className="team-card-inner bg-darker rounded-lg p-6 overflow-hidden">
                        <img src={require('./1.jpg')} alt="John Doe" className="team-image rounded-full w-32 h-32 mx-auto mb-4 transition duration-500 ease-in-out" />
                        <h3 className="team-name text-xl font-semibold mb-2">John Doe</h3>
                        <p className="team-role text-base">CEO</p>
                    </div>
                </div>
                <div className="team-card transform transition duration-500 hover:scale-105 hover:shadow-lg">
                    <div className="team-card-inner bg-darker rounded-lg p-6 overflow-hidden">
                        <img src={require('./2.jpg')} alt="Jane Smith" className="team-image rounded-full w-32 h-32 mx-auto mb-4 transition duration-500 ease-in-out" />
                        <h3 className="team-name text-xl font-semibold mb-2">Jane Smith</h3>
                        <p className="team-role text-base">CTO</p>
                    </div>
                </div>
                <div className="team-card transform transition duration-500 hover:scale-105 hover:shadow-lg">
                    <div className="team-card-inner bg-darker rounded-lg p-6 overflow-hidden">
                        <img src={require('./3.jpg')} alt="Alice Johnson" className="team-image rounded-full w-32 h-32 mx-auto mb-4 transition duration-500 ease-in-out" />
                        <h3 className="team-name text-xl font-semibold mb-2">Alice Johnson</h3>
                        <p className="team-role text-base">Lead Developer</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default People;
