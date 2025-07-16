"use client";
import React, { useState } from "react";

interface FAQItem {
	question: string;
	answer: string;
}

const faqData: FAQItem[] = [
	{
		question: "How long does a typical home remodeling project take?",
		answer:
			"The duration depends on the size and complexity of remodel. Minor renovations may take 1-2 weeks, while full home makeovers can take 4-6 weeks.",
	},
	{
		question: "Do I need to move out during the remodeling process?",
		answer:
			"Depending on the project size, some clients stay in their home during minor work, but for larger renovations, temporary relocation is often recommended.",
	},
	{
		question: "Are materials included in the pricing?",
		answer:
			"Yes, most packages include materials. We provide a detailed breakdown of costs before the project begins.",
	},
	{
		question: "Will I be involved in the design decisions?",
		answer:
			"Absolutely. We collaborate closely with you to ensure the design reflects your vision and preferences.",
	},
	{
		question: "Can I request changes during the remodeling process?",
		answer:
			"Yes, we're flexible. Any requested changes will be discussed, priced, and implemented upon approval.",
	},
	{
		question: "How do I get started with Cruz Remodeling?",
		answer:
			"Simply contact us through our form or phone. We'll schedule a consultation to discuss your goals and create a plan.",
	},
];

const FAQ = () => {
	const [activeIndex, setActiveIndex] = useState<number | null>(0);

	const toggleAccordion = (index: number): void => {
		setActiveIndex(index === activeIndex ? null : index);
	};

	return (
		<section>
			<div className="container">
				<div className="section_header overflow-hidden">
					<h5 className="subtitle" data-aos="fade-down" data-aos-delay="400">
						Frequently Asked Questions
					</h5>
					<h2 className="title animateText !normal-case">
						Everything You Need to Know
					</h2>
					<p data-aos="fade-up" data-aos-delay="800">
						Get answers to common questions about our remodeling process,
						timeline, and what to expect during your project.
					</p>
				</div>

				<div className="max-w-4xl mx-auto">
					{faqData.map((item, index) => (
						<div
							key={index}
							className="border-b border-gray-200 last:border-b-0"
							data-aos="fade-up"
							data-aos-delay={400 + index * 100}
						>
							<button
								className="accordion-header w-full text-left py-6 flex justify-between items-center"
								onClick={() => toggleAccordion(index)}
							>
								<h4 className="question text-lg font-medium">
									{item.question}
								</h4>
								<span
									className={`transform transition-transform duration-300 ${
										activeIndex === index ? "rotate-180" : ""
									}`}
								>
									<svg
										width="20"
										height="20"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M6 9L12 15L18 9"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								</span>
							</button>
							<div
								className={`accordion-content ${
									activeIndex === index ? "max-h-96 pb-6" : ""
								}`}
							>
								<p className="answer text-gray-700">{item.answer}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default FAQ;
