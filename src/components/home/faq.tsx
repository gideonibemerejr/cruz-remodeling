"use client";
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";

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
				<div className="d2c_section_header overflow-hidden">
					<h5
						className="d2c_subtitle"
						data-aos="fade-down"
						data-aos-delay="400"
					>
						Answers to Your Common Questions
					</h5>
					<h2 className="d2c_title animateText !normal-case">
						Everything You Need to Know
					</h2>
					<p data-aos="fade-up" data-aos-delay="600">
						Whether you&apos;re planning a quick upgrade or a full renovation,
						our flexible pricing options ensure you get expert service with no
						hidden costs.
					</p>
				</div>

				<div className="max-w-full md:max-w-[85%] xl:max-w-3/4 mx-auto p-6 lg:p-10 bg-light-blue rounded overflow-hidden">
					{faqData.map((item, index) => (
						<div key={index} data-aos="fade-up" data-aos-delay="400">
							{/* Header */}
							<div
								className="accordion-header flex justify-between items-center cursor-pointer py-4"
								onClick={() => toggleAccordion(index)}
							>
								<h4 className="d2c_question text-lg font-medium">
									{item.question}
								</h4>
								<span className="icon-wrapper transition-transform duration-300">
									<FaPlus
										className={`transform transition-transform duration-300 text-gray-600 ${
											activeIndex === index ? "rotate-45" : ""
										}`}
									/>
								</span>
							</div>

							{/* Content */}
							<div
								className={`accordion-content overflow-hidden transition-all duration-500 ease-in-out ${
									activeIndex === index ? "max-h-[200px] pt-0 pb-4" : "max-h-0"
								}`}
							>
								<p className="d2c_answer text-gray-700">{item.answer}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default FAQ;
