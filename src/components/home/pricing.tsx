"use client";
import React from "react";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa6";
import { FaRegCircleCheck } from "react-icons/fa6";

const plans = [
	{
		title: "Custom Quote",
		desc: "Tailored solutions for your unique remodeling needs",
		price: "Custom Quote",
		delay: 400,
		features: [
			"Personalized Design Consultation",
			"Custom Material Selection",
			"Flexible Project Timeline",
			"Dedicated Project Manager",
			"Comprehensive Project Planning",
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
						Flexible Plans for Every Budget
					</h2>
					<p data-aos="fade-up" data-aos-delay="800">
						Choose the plan that fits your project needs and budget. All plans
						include our commitment to quality and satisfaction.
					</p>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
					{plans.map((plan, index) => (
						<div
							key={index}
							className="pricing_card"
							data-aos="fade-up"
							data-aos-delay={400 + index * 200}
						>
							<div className="text-center">
								<h3 className="text-xl font-semibold mb-2">{plan.title}</h3>
								<h3 className="price">{plan.price}</h3>
								<p className="text-gray-600 mb-6">{plan.desc}</p>
							</div>

							<ul className="space-y-3 mb-8">
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

							<Link href="#contact" className="group btn mt-6 inline-block">
								<span className="relative z-10">Get Started</span>
								<span className="btn_expand">
									<span className="btn_icon">
										<FaAngleRight />
									</span>
								</span>
							</Link>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Pricing;
