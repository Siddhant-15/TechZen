import React, { useState } from 'react';
import './Navbar.css';
// Make sure to import your logo image

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-dark fixed w-full top-0 z-50 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Image Logo */}
                    <div className="logo-container">
                        <img src={require('./logo.png')} alt="IT Services Logo" className="h-10" />
                    </div>

                    {/* Burger Menu Button for Mobile */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-primary focus:outline-none"
                        >
                            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                                )}
                            </svg>
                        </button>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-6 items-center">
                        <a href="#home" className="text-primary hover:text-accent transition duration-300 glow-hover">Home</a>
                        <a href="#about" className="text-primary hover:text-accent transition duration-300 glow-hover">About Us</a>
                        <a href="#services" className="text-primary hover:text-accent transition duration-300 glow-hover">Services</a>
                        <a href="#contact" className="text-primary hover:text-accent transition duration-300 glow-hover">Contact Us</a>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-dark text-primary w-full">
                    <div className="px-8 pt-4 pb-3 space-y-4">
                        <a href="#home" className="block text-primary hover:text-accent transition duration-300">Home</a>
                        <a href="#about" className="block text-primary hover:text-accent transition duration-300">About Us</a>
                        <a href="#services" className="block text-primary hover:text-accent transition duration-300">Services</a>
                        <a href="#people" className="block text-primary hover:text-accent transition duration-300">People</a>
                        <a href="#contact" className="block text-primary hover:text-accent transition duration-300">Contact Us</a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
