"use client";
import React from "react";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa6";

const plans = [
	{
		title: "Custom Remodeling Quote",
		desc: "Every home is unique, and so is every remodeling project. Get a personalized quote tailored to your specific needs, budget, and vision.",
		price: "Free Consultation",
		delay: 400,
		features: [
			"Comprehensive Home Assessment & Consultation",
			"Custom Design & Material Recommendations",
			"Detailed Project Timeline & Planning",
			"Quality Guarantee & Post-Project Support",
			"Flexible Payment Options Available",
		],
	},
];

const Pricing = () => {
	return (
		<section id="pricing">
			<div className="container">
				<div className="section_header overflow-hidden">
					<h5 className="subtitle" data-aos="fade-down" data-aos-delay="400">
						Transparent Pricing
					</h5>
					<h2 className="title animateText !normal-case">
						Quality Remodeling at Fair Prices
					</h2>
					<p data-aos="fade-up" data-aos-delay="800">
						We believe in honest, upfront pricing with no hidden costs. Every
						project receives a detailed, custom quote based on your specific
						requirements and vision.
					</p>
				</div>

				<div className="grid grid-cols-1 gap-6">
					{plans.map((plan, index) => (
						<div
							key={index}
							className="pricing_card col-span-full max-w-[550px] mx-auto"
							data-aos="fade-up"
							data-aos-delay={400 + index * 200}
						>
							<div className="text-center">
								<h3 className="text-xl font-semibold mb-2">{plan.title}</h3>
								<h3 className="price">{plan.price}</h3>
								<p className="text-gray-600 mb-6">{plan.desc}</p>
							</div>

							<div className="text-center">
								<ul className="space-y-3 mb-8 max-w-2xl mx-auto inline-block text-left">
									{plan.features.map((feature, featureIndex) => (
										<li key={featureIndex} className="flex items-center">
											<svg
												className="w-5 h-5 text-primary mr-3 flex-shrink-0"
												fill="currentColor"
												viewBox="0 0 20 20"
											>
												<path
													fillRule="evenodd"
													d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
													clipRule="evenodd"
												/>
											</svg>
											{feature}
										</li>
									))}
								</ul>
							</div>

							<div className="text-center">
								<Link href="#contact" className="group btn mt-6 inline-block">
									<span className="relative z-10">Get Started</span>
									<span className="btn_expand">
										<span className="btn_icon">
											<FaAngleRight />
										</span>
									</span>
								</Link>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Pricing;
