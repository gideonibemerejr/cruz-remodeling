"use client";
import React from "react";
import { FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

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
		<section id="testimonial">
			<div className="container">
				<div className="section_header overflow-hidden">
					<h5 className="subtitle" data-aos="fade-down" data-aos-delay="400">
						What Our Clients Say
					</h5>
					<h2 className="title animateText !normal-case">
						Trusted by Homeowners
					</h2>
					<p data-aos="fade-up" data-aos-delay="800">
						Don&apos;t just take our word for it. Here&apos;s what our satisfied
						clients have to say about their remodeling experience with us.
					</p>
				</div>

				<Swiper
					modules={[Autoplay]}
					spaceBetween={30}
					slidesPerView={1}
					loop={true}
					autoplay={{
						delay: 5000,
						disableOnInteraction: false,
					}}
					breakpoints={{
						768: {
							slidesPerView: 2,
						},
						1024: {
							slidesPerView: 3,
						},
					}}
					className="testimonial_slider"
				>
					{testimonials.map((testimonial, index) => (
						<SwiperSlide key={index}>
							<div className="testimonial_card">
								<div className="space-y-4">
									<div className="flex items-center space-x-1">
										{[...Array(5)].map((_, i) => (
											<FaStar key={i} className="text-yellow-400" />
										))}
									</div>
									<p className="text-gray-700">{testimonial.content}</p>
									<div className="flex items-center space-x-3">
										<div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
											{testimonial.name.charAt(0)}
										</div>
										<div>
											<h4 className="font-semibold text-secondary">
												{testimonial.name}
											</h4>
											<p className="text-sm text-gray-600">
												{testimonial.title}
											</p>
										</div>
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
