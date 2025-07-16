"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

// Static image import (make sure the path exists)
import FooterLogo from "@/assets/images/logo/footer-logo.png";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-footer">
            <div className="container">
                <h2 className="d2c_title xl:text-[76px] text-white py-6 text-center md:text-left animateText !normal-case">
                    Where Your Vision Becomes Home
                </h2>

                {/* Footer content */}
                <div className="grid grid-cols-12 gap-4 md:gap-6 py-10 border-y border-y-[#C2D6C9]/20 items-center">
                    {/* Logo and description */}
                    <div className="col-span-12 md:col-span-6 lg:col-span-3 xl:col-span-6">
                        <div className="space-y-4">
                            <Link href="/" className="inline-block">
                                <Image src={FooterLogo} alt="Logo" width={180} height={40} />
                            </Link>
                            <p className="w-full md:w-5/6 xl:w-1/2 text-[#C2D6C9]/60 no-animation">
                                EffiXpert turns ideas into beautifully crafted living spaces. Let&apos;s make your home the masterpiece.
                            </p>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className="col-span-12 md:col-span-6 lg:col-span-3 xl:col-span-2">
                        <div className="d2c_footer_content">
                            <h4>Follow Us</h4>
                            <ul>
                                <li><Link href="#">Facebook</Link></li>
                                <li><Link href="#">Instagram</Link></li>
                                <li><Link href="#">YouTube</Link></li>
                            </ul>
                        </div>
                    </div>

                    {/* Support Links */}
                    <div className="col-span-12 md:col-span-6 lg:col-span-3 xl:col-span-2">
                        <div className="d2c_footer_content">
                            <h4>Support</h4>
                            <ul>
                                <li><Link href="#">Awards</Link></li>
                                <li><Link href="#">Complain Services</Link></li>
                                <li><Link href="#">Your Suggestion</Link></li>
                            </ul>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="col-span-12 md:col-span-6 lg:col-span-3 xl:col-span-2">
                        <div className="d2c_footer_content">
                            <h4>Contact Us</h4>
                            <ul>
                                <li>
                                    <Link href="#">2972 Westheimer Rd. Santa Ana, Illinois 85486</Link>
                                </li>
                                <li>
                                    <Link href="tel:5055550125">(505) 555-0125</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="grid grid-cols-12 p-2 xl:py-4 d2c_copyright">
                    <div className="col-span-12 md:col-span-7 lg:col-span-8">
                        <p className="py-1 text-center md:text-left no-animation">
                            Copyright © {currentYear} <strong>DesignToCodes</strong>. All Rights Reserved
                        </p>
                    </div>
                    <div className="col-span-12 md:col-span-5 lg:col-span-4">
                        <ul className="flex items-center gap-6 justify-center md:justify-end">
                            <li className="mb-0">
                                <Link href="#">Privacy Policy</Link>
                            </li>
                            <li className="mb-0">
                                <Link href="#">Terms of Service</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
