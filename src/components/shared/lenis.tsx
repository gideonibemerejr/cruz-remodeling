'use client';
import { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const SmoothScroll = () => {
    useEffect(() => {
        // Initialize Lenis
        const lenis = new Lenis({
            duration: 1.2,
        });

        const raf = (time: number) => {
            lenis.raf(time);
            requestAnimationFrame(raf);
        };

        requestAnimationFrame(raf);

        lenis.on('scroll', ScrollTrigger.update);

        // Title animation
        const animateTextElements = document.querySelectorAll('.animateText');

        animateTextElements.forEach((el, idx) => {
            const text = el.textContent?.trim() || '';

            const capitalizedText = text
                .split(' ')
                .map(
                    (word) =>
                        word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
                )
                .join(' ');

            el.innerHTML = '';

            capitalizedText.split(' ').forEach((word) => {
                const wordSpan = document.createElement('span');
                wordSpan.className = 'inline-block mr-2';

                for (let i = 0; i < word.length; i++) {
                    const charSpan = document.createElement('span');
                    charSpan.textContent = word[i];
                    charSpan.className =
                        'inline-block opacity-0 blur-sm translate-y-2';
                    wordSpan.appendChild(charSpan);
                }

                el.appendChild(wordSpan);
            });

            const charSpans = el.querySelectorAll('span > span');

            gsap.to(charSpans, {
                scrollTrigger: {
                    trigger: el,
                    start: 'top 80%',
                },
                opacity: 1,
                filter: 'blur(0px)',
                y: 0,
                duration: 0.5,
                ease: 'power2.out',
                stagger: 0.03,
                delay: 0.1 * idx,
            });
        });

        return () => {
            lenis.destroy();
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return null;
};

export default SmoothScroll;
