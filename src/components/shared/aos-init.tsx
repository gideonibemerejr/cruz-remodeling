'use client';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AOSInit = () => {
    useEffect(() => {
        const initAOS = () => {
            AOS.init({
                mirror: true,
                once: false,
                delay: 0,
                duration: 1500,
                offset: 0,
            });

            // Manually trigger animation on visible elements
            document.querySelectorAll('[data-aos]').forEach((el) => {
                const rect = el.getBoundingClientRect();
                if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                    el.classList.add('aos-animate');
                }
            });
        };

        // Delay to ensure DOM is painted
        const timer = setTimeout(initAOS, 100);

        return () => clearTimeout(timer);
    }, []);

    return null;
};

export default AOSInit;
