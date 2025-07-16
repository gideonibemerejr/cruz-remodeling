"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa6";
import Room1 from "@/assets/images/room-image-1.jpg";
import Room2 from "@/assets/images/room-image-2.jpg";
import Room3 from "@/assets/images/room-image-3.jpg";
import Room4 from "@/assets/images/room-image-4.jpg";
import Icon from "@/assets/images/circle-triangle-icon.png";

const About = () => {
    return (
        <section id="d2c_about">
            <div className="container">
                <div className="grid lg:grid-cols-2 gap-4 md:gap-6 items-center">
                    {/* Left Content */}
                    <div className="space-y-5 xl:pr-10">
                        <div>
                            <h5 className="d2c_subtitle" data-aos="fade-down" data-aos-delay="400">
                                Who we are
                            </h5>
                            <h2 className="d2c_title animateText !normal-case">
                                Home Remodeling That Feels Personal
                            </h2>
                        </div>

                        <p data-aos="fade-up" data-aos-delay="600">
                            EffiXpert isn&apos;t just another contractor—we&apos;re your home improvement
                            partner. With over a decade of combined experience, our designers,
                            builders, and technicians deliver stunning spaces with care and
                            precision.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-1" data-aos="fade-up" data-aos-delay="400">
                                <h4 className="text-base xl:text-lg">15+ Years of Experience</h4>
                                <p className="d2c_card_text">Proven track record in home transformation.</p>
                            </div>

                            <div className="space-y-1" data-aos="fade-up" data-aos-delay="600">
                                <h4 className="text-base xl:text-lg">100% Project On-Time</h4>
                                <p className="d2c_card_text">Committed to delivering projects on time.</p>
                            </div>

                            <div className="space-y-1" data-aos="fade-up" data-aos-delay="400">
                                <h4 className="text-base xl:text-lg">Design-First Philosophy</h4>
                                <p className="d2c_card_text">Creating spaces aesthetics with functionality.</p>
                            </div>

                            <div className="space-y-1" data-aos="fade-up" data-aos-delay="600">
                                <h4 className="text-base xl:text-lg">On-Time Delivery</h4>
                                <p className="d2c_card_text">Reliable execution with delays or setbacks.</p>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <div data-aos="fade-up" data-aos-delay="400">
                            <Link href="#d2c_contact" className="d2c_btn">
                                <span className="relative z-10">Learn More</span>
                                <span className="d2c_btn_expand">
                                    <span className="d2c_btn_icon">
                                        <FaAngleRight />
                                    </span>
                                </span>
                            </Link>
                        </div>
                    </div>

                    {/* Right Image Section */}
                    <div className="relative mt-4 lg:mt-0">
                        <div className="grid grid-cols-2 gap-6 md:gap-8">
                            <div className="grid gap-6 md:gap-8">
                                <Image
                                    src={Room1}
                                    alt="Room Image"
                                    data-aos="fade-up"
                                    data-aos-delay="400"
                                    className="w-full h-full object-cover rounded"
                                />
                                <Image
                                    src={Room3}
                                    alt="Room Image"
                                    data-aos="fade-up"
                                    data-aos-delay="800"
                                    className="w-full h-full object-cover rounded"
                                />
                            </div>
                            <div className="grid gap-6 md:gap-8">
                                <Image
                                    src={Room2}
                                    alt="Room Image"
                                    data-aos="fade-up"
                                    data-aos-delay="600"
                                    className="w-full h-full object-cover rounded"
                                />
                                <Image
                                    src={Room4}
                                    alt="Room Image"
                                    data-aos="fade-up"
                                    data-aos-delay="1000"
                                    className="w-full h-full object-cover rounded"
                                />
                            </div>
                        </div>

                        {/* Floating Icon */}
                        <div className="d2c_about_icon animate-scale-slow">
                            <Image
                                src={Icon}
                                alt="circle-triangle-icon"
                                className="animate-bounce-slow"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
