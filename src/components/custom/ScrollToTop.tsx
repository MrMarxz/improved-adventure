"use client";

import { ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Button } from '../ui/button';

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <>
            {isVisible && (
                <Button
                    onClick={scrollToTop}
                    className="fixed bottom-5 right-5 text-white bg-black p-3 rounded-full shadow-lg transition-colors duration-300"
                    aria-label="Scroll to top"
                >
                    <ArrowUp />
                </Button>
            )}
        </>
    );
};

export default ScrollToTopButton;