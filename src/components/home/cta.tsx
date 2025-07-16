"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";

import Img1 from "@/assets/images/small-image-1.jpg";
import Img2 from "@/assets/images/small-image-2.jpg";
import Img3 from "@/assets/images/small-image-3.jpg";
import Img4 from "@/assets/images/small-image-4.jpg";
import Img5 from "@/assets/images/small-image-5.jpg";
import Img6 from "@/assets/images/small-image-6.jpg";
import Img7 from "@/assets/images/small-image-7.jpg";
import Img8 from "@/assets/images/small-image-8.jpg";

const CTA = () => {
    useEffect(() => {
        const updateLeftImageMargins = () => {
            const navLinks = document.querySelectorAll<HTMLElement>(".d2c_small_image");
            const windowWidth = window.innerWidth;

            navLinks.forEach((link, index) => {
                let margin = 0;
                if (windowWidth <= 640) {
                    margin = index * 0;
                } else if (windowWidth <= 768) {
                    margin = index * 30;
                } else if (windowWidth <= 1024) {
                    margin = index * 40;
                } else if (windowWidth <= 1280) {
                    margin = index * 50;
                } else {
                    margin = index * 100;
                }
                link.style.marginLeft = `${margin}px`;
            });
        };

        const updateRightImageMargins = () => {
            const navLinks = document.querySelectorAll<HTMLElement>(".d2c_small_image_right");
            const windowWidth = window.innerWidth;

            navLinks.forEach((link, index) => {
                let margin = 0;
                if (windowWidth <= 640) {
                    margin = index * 0;
                } else if (windowWidth <= 768) {
                    margin = index * -30;
                } else if (windowWidth <= 1024) {
                    margin = index * -40;
                } else if (windowWidth <= 1280) {
                    margin = index * -50;
                } else {
                    margin = index * -100;
                }
                link.style.marginLeft = `${margin}px`;
            });
        };

        const updateAllMargins = () => {
            updateLeftImageMargins();
            updateRightImageMargins();
        };

        // Initial call
        updateAllMargins();

        // Debounced resize
        let resizeTimer: ReturnType<typeof setTimeout>;
        const handleResize = () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(updateAllMargins, 200);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <section>
            <div className="container">
                <div className="bg-cta-1 py-20 lg:py-32 rounded relative overflow-hidden min-h-[250px] lg:min-h-[450px] xl:min-h-[550px] flex items-center justify-center p-4">
                    {/* Content */}
                    <div className="md:max-w-[50%] xl:max-w-[40%] 2xl:max-w-[50%] mx-auto text-center z-20">
                        <h2 className="d2c_title 2xl:text-7xl text-white mb-6 xl:mb-8 animateText !normal-case">
                            Bring Your Dream Home to Life Today
                        </h2>
                        <Link href="#d2c_contact" className="group d2c_btn">
                            <span className="relative z-10">Get free consultation</span>
                            <span className="d2c_btn_expand">
                                <span className="d2c_btn_icon">
                                    <FaAngleRight />
                                </span>
                            </span>
                        </Link>
                    </div>

                    {/* Left Images */}
                    <div className="absolute left-0 md:-left-4 xl:-left-10 space-y-3 opacity-20 md:opacity-100">
                        {[Img1, Img2, Img3, Img4].map((src, index) => (
                            <div
                                className="d2c_small_image"
                                data-aos="fade-right"
                                data-aos-delay={`${(index + 1) * 100}`}
                                key={`left-${index}`}
                            >
                                <Image src={src} className="rounded" alt={`Flat Image ${index + 1}`} />
                                <div className="bg-secondary-dark/20 absolute inset-0 rounded" />
                            </div>
                        ))}
                    </div>

                    {/* Right Images */}
                    <div className="absolute right-0 md:-right-4 xl:-right-10 space-y-3 opacity-20 md:opacity-100">
                        {[Img5, Img6, Img7, Img8].map((src, index) => (
                            <div
                                className="d2c_small_image_right"
                                data-aos="fade-left"
                                data-aos-delay={`${(index + 1) * 100}`}
                                key={`right-${index}`}
                            >
                                <Image src={src} className="rounded" alt={`Flat Image ${index + 5}`} />
                                <div className="bg-secondary-dark/20 absolute inset-0 rounded" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;
