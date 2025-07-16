"use client";
import React from "react";
import Image from "next/image";

import ConsultVisualize from "@/assets/images/Consult-Visualize.jpg";
import DesignPlan from "@/assets/images/Design-Plan.jpg";
import BuildTransform from "@/assets/images/Build-Transform.jpg";
import ReviewEnjoy from "@/assets/images/Review-Enjoy.jpg";

const Process = () => {
	return (
		<section className="bg-secondary py-20">
			<div className="container">
				<div className="section_header overflow-hidden mb-16">
					<h5
						className="subtitle text-primary"
						data-aos="fade-down"
						data-aos-delay="400"
					>
						Our Simple Process
					</h5>
					<h2 className="title animateText !normal-case text-white">
						Remodeling Made Easy in 4 Steps
					</h2>
					<p
						className="md:max-w-[90%] xl:max-w-[80%] 2xl:max-w-3/4 mx-auto text-[#C2D6C9]"
						data-aos="fade-up"
						data-aos-delay="600"
					>
						We believe home remodeling should be an enjoyable journey—not a
						frustrating process. No complexity. No back-and-forth.
					</p>
				</div>

				<div className="grid md:grid-cols-2 gap-8">
					{/* Step 001 */}
					<div className="order-1 relative" data-aos="fade-in">
						<Image
							src={ConsultVisualize}
							alt="Consult & Visualize"
							className="process_image"
						/>
						<div className="process_image_overlay"></div>
					</div>
					<div className="lg:p-6 xl:p-20 !pr-0 flex items-center order-2">
						<div
							className="space-y-3"
							data-aos="fade-left"
							data-aos-delay="400"
						>
							<h4 className="text-primary text-5xl-1 font-bold">Step 1</h4>
							<p className="text-base font-medium text-[#C2D6C9]">
								Understanding your lifestyle and design goals.
							</p>
							<h4 className="xl:text-[28px] text-white">Consult & Visualize</h4>
							<p className="text-[#C2D6C9]">
								We begin with a one-on-one consultation to explore your needs,
								preferences, and ideas. This step sets the foundation for a
								remodeling plan that fits your vision.
							</p>
						</div>
					</div>

					{/* Step 002 */}
					<div className="lg:p-6 xl:p-20 !pr-0 !pl-0 flex items-center order-4 md:order-3">
						<div
							className="space-y-3"
							data-aos="fade-right"
							data-aos-delay="400"
						>
							<h4 className="text-primary text-5xl-1 font-bold">Step 2</h4>
							<p className="text-base font-medium text-[#C2D6C9]">
								Understanding your lifestyle and design goals.
							</p>
							<h4 className="xl:text-[28px] text-white">Design & Plan</h4>
							<p className="text-[#C2D6C9]">
								After we understand your vision, we translate it into a detailed
								design and plan. You&apos;ll know exactly what to expect before
								we begin building.
							</p>
						</div>
					</div>
					<div className="order-3 md:order-4 relative" data-aos="fade-in">
						<Image
							src={DesignPlan}
							alt="Design & Plan"
							className="process_image"
						/>
						<div className="process_image_overlay"></div>
					</div>

					{/* Step 003 */}
					<div className="order-5 relative" data-aos="fade-in">
						<Image
							src={BuildTransform}
							alt="Build & Transform"
							className="process_image"
						/>
						<div className="process_image_overlay"></div>
					</div>
					<div className="lg:p-6 xl:p-20 !pr-0 flex items-center order-6">
						<div
							className="space-y-3"
							data-aos="fade-left"
							data-aos-delay="400"
						>
							<h4 className="text-primary text-5xl-1 font-bold">Step 3</h4>
							<p className="text-base font-medium text-[#C2D6C9]">
								Precision construction and expert management.
							</p>
							<h4 className="xl:text-[28px] text-white">Build & Transform</h4>
							<p className="text-[#C2D6C9]">
								Once approved, we bring your plan to life with expert
								craftsmanship and minimal disruption to your daily life.
							</p>
						</div>
					</div>

					{/* Step 004 */}
					<div className="lg:p-6 xl:p-20 !pr-0 !pl-0 flex items-center order-8 md:order-7">
						<div
							className="space-y-3"
							data-aos="fade-right"
							data-aos-delay="400"
						>
							<h4 className="text-primary text-5xl-1 font-bold">Step 4</h4>
							<p className="text-base font-medium text-[#C2D6C9]">
								Final inspection and satisfaction check
							</p>
							<h4 className="xl:text-[28px] text-white">Review & Enjoy</h4>
							<p className="text-[#C2D6C9]">
								After construction, we walk you through every detail to ensure
								your satisfaction. Once approved, your new space is ready for
								you to enjoy with full confidence.
							</p>
						</div>
					</div>
					<div className="order-7 md:order-8 relative" data-aos="fade-in">
						<Image
							src={ReviewEnjoy}
							alt="Review & Enjoy"
							className="process_image"
						/>
						<div className="process_image_overlay"></div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Process;
