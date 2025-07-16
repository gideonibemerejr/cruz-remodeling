"use client";
import React from "react";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa6";
import Room1 from "@/assets/images/decks/deck-about-1.jpg";
import Room2 from "@/assets/images/rooms/room-about-2.jpg";
import Room3 from "@/assets/images/bathrooms/bathroom-about-3.jpg";
import Room4 from "@/assets/images/fencing/fencing-about-4.jpg";
import OptimizedImage from "@/components/shared/optimized-image";

const About = () => {
	return (
		<section id="about">
			<div className="container">
				<div className="grid lg:grid-cols-2 gap-4 md:gap-6 items-center">
					{/* Left Content */}
					<div className="space-y-5">
						<div>
							<h5
								className="subtitle"
								data-aos="fade-down"
								data-aos-delay="400"
							>
								Who we are
							</h5>
							<h2 className="title animateText !normal-case">
								Home Remodeling That Feels Personal
							</h2>
						</div>

						<p data-aos="fade-up" data-aos-delay="600">
							Cruz Remodeling isn&apos;t just another contractor—we&apos;re your
							home improvement partner. With over a decade of experience, we
							deliver stunning spaces with care and precision.
						</p>

						<div className="grid md:grid-cols-2 gap-6">
							<div
								className="space-y-1"
								data-aos="fade-up"
								data-aos-delay="400"
							>
								<h4 className="text-base xl:text-lg">
									15+ Years of Experience
								</h4>
								<p className="card_text">
									Proven track record in home transformation.
								</p>
							</div>

							<div
								className="space-y-1"
								data-aos="fade-up"
								data-aos-delay="600"
							>
								<h4 className="text-base xl:text-lg">100% Project On-Time</h4>
								<p className="card_text">
									Committed to delivering projects on time.
								</p>
							</div>

							<div
								className="space-y-1"
								data-aos="fade-up"
								data-aos-delay="400"
							>
								<h4 className="text-base xl:text-lg">
									Design-First Philosophy
								</h4>
								<p className="card_text">
									Creating spaces aesthetics with functionality.
								</p>
							</div>

							<div
								className="space-y-1"
								data-aos="fade-up"
								data-aos-delay="600"
							>
								<h4 className="text-base xl:text-lg">On-Time Delivery</h4>
								<p className="card_text">
									Reliable execution with delays or setbacks.
								</p>
							</div>
						</div>

						{/* CTA Button */}
						<div data-aos="fade-up" data-aos-delay="400">
							<Link href="#contact" className="btn">
								<span className="relative z-10">Learn More</span>
								<span className="btn_expand">
									<span className="btn_icon">
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
								<OptimizedImage
									src={Room1}
									alt="Room Image"
									priority={true}
									blur={true}
									data-aos="fade-up"
									data-aos-delay="400"
									className="w-full h-full object-cover rounded"
								/>
								<OptimizedImage
									src={Room3}
									alt="Room Image"
									priority={true}
									blur={true}
									data-aos="fade-up"
									data-aos-delay="800"
									className="w-full h-full object-cover rounded"
								/>
							</div>
							<div className="grid gap-6 md:gap-8">
								<OptimizedImage
									src={Room2}
									alt="Room Image"
									priority={true}
									blur={true}
									data-aos="fade-up"
									data-aos-delay="600"
									className="w-full h-full object-cover rounded"
								/>
								<OptimizedImage
									src={Room4}
									alt="Room Image"
									priority={true}
									blur={true}
									data-aos="fade-up"
									data-aos-delay="1000"
									className="w-full h-full object-cover rounded"
								/>
							</div>
						</div>

						{/* Floating Icon */}
						<div className="about_icon animate-scale-slow">
							<div className="animate-bounce-slow text-white text-4xl font-primary font-bold flex items-center justify-center h-full">
								CR
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
