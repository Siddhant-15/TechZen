import React, { useState, useEffect } from 'react';
import './ScrollToTop.css';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <div className={`scroll-to-top ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
            <button
                onClick={scrollToTop}
                className="scroll-btn bg-accent hover:bg-primary text-white p-4 rounded-full shadow-lg transition-transform duration-300 transform hover:scale-110"
            >
                ↑
            </button>
        </div>
    );
};

export default ScrollToTop;
