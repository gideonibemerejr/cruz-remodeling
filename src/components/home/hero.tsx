"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { FaAngleRight } from "react-icons/fa6";

// Image imports
import Hero1 from "@/assets/images/hero-slide-image-1.jpg";
import Hero2 from "@/assets/images/hero-slide-image-2.jpg";
import Hero3 from "@/assets/images/hero-slide-image-3.jpg";

const Hero = () => {
    return (
        <section className="bg-hero" id="d2c_hero">
            <div className="container">
                <div className="grid grid-cols-12 gap-4 md:gap-8 min-h-[700px] items-center">
                    {/* Left content */}
                    <div className="col-span-12 lg:col-span-6">
                        <div className="space-y-6 text-center lg:text-left">
                            <h5
                                className="d2c_subtitle !text-primary !border-[#C2D6C9]/10"
                                data-aos="fade-down"
                                data-aos-delay="400"
                            >
                                We believe in simple & minimalistic
                            </h5>

                            <h1 className="d2c_title text-white text-center lg:text-left animateText !normal-case text-4xl md:text-6xl lg:text-5xl 2xl:text-[76px]">
                                Turning Ideas into Remarkable Design
                            </h1>

                            <p
                                className="text-[#C2D6C9] text-center lg:text-left xl:pr-5 2xl:pr-10"
                                data-aos="fade-up"
                                data-aos-delay="800"
                            >
                                At EffiXpert, we reimagine spaces with precision, passion, and
                                purpose. From kitchens to living rooms, we elevate your home&apos;s
                                potential—without the stress, delay, or confusion.
                            </p>

                            <div className="md:flex justify-center lg:justify-start gap-4">
                                <div data-aos="fade-up" data-aos-delay="1000">
                                    <Link
                                        href="#d2c_pricing"
                                        className="group d2c_btn hover:!text-primary !px-6 !bg-[#C2D6C9]/10 border border-[#C2D6C9]/10 mb-2 md:mb-0"
                                    >
                                        <span className="relative z-10">Get your free plan</span>
                                    </Link>
                                </div>

                                <div data-aos="fade-up" data-aos-delay="1200">
                                    <Link href="#d2c_contact" className="group d2c_btn">
                                        <span className="relative z-10">Get started now</span>
                                        <span className="d2c_btn_expand">
                                            <span className="d2c_btn_icon">
                                                <FaAngleRight />
                                            </span>
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Swiper Slider */}
                    <div className="col-span-12 lg:col-span-6 mt-4 lg:mt-0">
                        <Swiper
                            modules={[Pagination, Autoplay]}
                            pagination={{ el: ".swiper-pagination", clickable: true }}
                            spaceBetween={20}
                            centeredSlides={true}
                            speed={1000}
                            autoplay={{
                                delay: 2000,
                                disableOnInteraction: false,
                            }}
                            grabCursor={true}
                            loop={true}
                            allowTouchMove={true}
                            slidesPerView={3}
                            breakpoints={{
                                320: {
                                    slidesPerView: 1,
                                    centeredSlides: false,
                                },
                                768: {
                                    slidesPerView: 3,
                                },
                                1024: {
                                    slidesPerView: 2,
                                    centeredSlides: false,
                                },
                                1400: {
                                    slidesPerView: 3,
                                },
                            }}
                            className="d2c_hero_img_slider"
                        >
                            {[Hero1, Hero2, Hero3, Hero1].map((image, index) => (
                                <SwiperSlide key={index}>
                                    <div
                                        className="d2c_slide_item group"
                                        data-aos="fade-up"
                                        data-aos-delay={400 + index * 200}
                                    >
                                        <Image
                                            src={image}
                                            alt="Interior Design"
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="bg-hero-slider d2c_hover_content group-hover:opacity-100">
                                            <p className="text-white text-lg font-medium text-center">
                                                {index === 0 || index === 3
                                                    ? "Bathroom"
                                                    : index === 1
                                                        ? "Drawing"
                                                        : "Dining"}
                                                <br />
                                                Remodeling
                                            </p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        {/* Swiper pagination */}
                        <div className="pt-12">
                            <div className="swiper-pagination"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
