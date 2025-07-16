"use client";
import React from "react";
import { FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const testimonials = [
    {
        title: "Make it easy",
        content:
            "We were nervous about re-design, but the team guided us at every step. The kitchen looks stunning now, and the project completed.",
        name: "Robert Fox",
    },
    {
        title: "Professional & details",
        content:
            "From planning to final touches, their attention to the detail unmatched. I finally have the cozy, modern living room I always dreamed of ours.",
        name: "Esther Howard",
    },
    {
        title: "Reliable, timely, and clean!",
        content:
            "They stayed on schedule, kept the work area tidy, and gave us exactly what we wanted. Their designing ideas were incredible.",
        name: "Leslie Alexander",
    },
    {
        title: "Exceptional Quality Work!",
        content:
            "The bathroom renovation exceeded our expectations. Their team's expertise and attention to detail transformed our outdated space into a modern oasis.",
        name: "Sarah Mitchell",
    },
];

const Testimonial = () => {
    return (
        <section id="d2c_testimonial">
            <div className="container">
                <div className="d2c_section_header overflow-hidden">
                    <h5 className="d2c_subtitle" data-aos="fade-down" data-aos-delay="400">
                        Real Stories Real Homes
                    </h5>
                    <h2 className="d2c_title animateText !normal-case">
                        Transforming Spaces Earning Trust
                    </h2>
                    <p data-aos="fade-up" data-aos-delay="600">
                        At EffiXpert, every project is a partnership built on reliability,
                        craftsmanship. From cozy makeovers to full-scale renovations, our
                        client&apos;s words about the quality we deliver.
                    </p>
                </div>

                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={24}
                    speed={5000}
                    autoplay={{ delay: 0, disableOnInteraction: false }}
                    slidesPerView={4}
                    loop={true}
                    breakpoints={{
                        320: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    className="d2c_testimonial_slider"
                >
                    {testimonials.map((item, index) => (
                        <SwiperSlide key={index} className="swiper-slide">
                            <div className="d2c_testimonial_card">
                                <div className="space-y-5">
                                    <h4>{item.title}</h4>
                                    <hr />
                                    <p>{item.content}</p>
                                </div>
                                <div className="border-t border-t-[#C2D6C9]/20 pt-5 grid grid-cols-2">
                                    <p className="font-primary text-secondary">{item.name}</p>
                                    <div className="text-right text-primary flex justify-end">
                                        {[...Array(5)].map((_, i) => (
                                            <FaStar key={i} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Testimonial;
