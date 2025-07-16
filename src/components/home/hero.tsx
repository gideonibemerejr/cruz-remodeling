"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import { FaAngleRight } from "react-icons/fa6";

// Image imports
import Hero1 from "@/assets/images/bathrooms/bathroom-hero.jpg";
import Hero2 from "@/assets/images/decks/outdoor-hero.jpg";
import Hero3 from "@/assets/images/kitchens/kitchen-hero.jpg";

const Hero = () => {
	return (
		<section className="bg-hero" id="hero">
			<div className="container">
				<div className="grid grid-cols-12 gap-4 md:gap-8 min-h-[700px] items-center">
					{/* Left content */}
					<div className="col-span-12 lg:col-span-6">
						<div className="space-y-6 text-center lg:text-left">
							<h5
								className="subtitle !text-primary !border-[#C2D6C9]/10"
								data-aos="fade-down"
								data-aos-delay="400"
							>
								We believe in good, honest work
							</h5>

							<h1 className="title text-white text-center lg:text-left animateText !normal-case text-4xl md:text-6xl lg:text-5xl 2xl:text-[76px]">
								Turning Ideas into Remarkable Design
							</h1>

							<p
								className="text-[#C2D6C9] text-center lg:text-left xl:pr-5 2xl:pr-10"
								data-aos="fade-up"
								data-aos-delay="800"
							>
								At Cruz Remodeling, we reimagine spaces with precision, passion,
								and purpose. From kitchens to living rooms, we elevate your
								home&apos;s potential—without the stress, delay, or confusion.
							</p>

							<div className="md:flex justify-center lg:justify-start gap-4">
								<div data-aos="fade-up" data-aos-delay="1200">
									<Link href="#contact" className="group btn">
										<span className="relative z-10">Get started now</span>
										<span className="btn_expand">
											<span className="btn_icon">
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
							className="hero_img_slider"
						>
							{[Hero1, Hero2, Hero3].map((image, index) => (
								<SwiperSlide key={index}>
									<div
										className="slide_item group"
										data-aos="fade-up"
										data-aos-delay={400 + index * 200}
									>
										<Image
											src={image}
											alt="Interior Design"
											className="w-full h-full object-cover"
										/>
										<div className="bg-hero-slider hover_content group-hover:opacity-100">
											<p className="text-white text-lg font-medium text-center">
												{index === 0 || index === 3
													? "Bathroom"
													: index === 1
														? "Outdoor"
														: "Kitchen"}
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
