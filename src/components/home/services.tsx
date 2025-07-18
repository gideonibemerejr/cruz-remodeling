"use client";
import React from "react";
import Image from "next/image";

import CabinetIcon from "@/assets/images/Cabinet.png";
import LivingRoomIcon from "@/assets/images/living-room.png";
import BathIcon from "@/assets/images/bath.png";
import HomeIcon from "@/assets/images/home.png";
import LightIcon from "@/assets/images/light.png";
import FlooringIcon from "@/assets/images/flooring.png";

const Services = () => {
	return (
		<section id="services">
			<div className="container">
				<div className="section_header overflow-hidden">
					<h5 className="subtitle" data-aos="fade-down" data-aos-delay="400">
						Full-Service Home Remodeling
					</h5>
					<h2 className="title animateText !normal-case">
						Built to Fit Every Space and Lifestyle
					</h2>
					<p data-aos="fade-up" data-aos-delay="800">
						From quick upgrades to complete renovations, we deliver seamless
						remodeling solutions tailored for modern homeowners. Our team
						handles everything from design to delivery—with craftsmanship and
						care.
					</p>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
					<div
						className="card p-7 2xl:p-9 bg-light-blue rounded space-y-4"
						data-aos="fade-up"
						data-aos-delay="400"
					>
						<Image
							src={CabinetIcon}
							alt="Cabinet icon"
							className="max-w-[76px] max-h-[66px]"
						/>
						<h4>Cabinet Installation</h4>
						<p>Custom cabinetry crafted to maximize style and wide storage.</p>
					</div>

					<div
						className="card p-7 2xl:p-9 bg-light-blue rounded space-y-4"
						data-aos="fade-up"
						data-aos-delay="600"
					>
						<Image
							src={LivingRoomIcon}
							alt="Living Room icon"
							className="max-w-[76px] max-h-[66px]"
						/>
						<h4>Living Room Remodeling</h4>
						<p>
							Create open, inviting areas perfect for everyday and entertaining.
						</p>
					</div>

					<div
						className="card p-7 2xl:p-9 bg-light-blue rounded space-y-4"
						data-aos="fade-up"
						data-aos-delay="800"
					>
						<Image
							src={BathIcon}
							alt="Bathroom icon"
							className="max-w-[76px] max-h-[66px]"
						/>
						<h4>Bathroom Makeovers</h4>
						<p>Spa-like aesthetics and smarter layouts for ultimate comfort.</p>
					</div>

					<div
						className="card p-7 2xl:p-9 bg-light-blue rounded space-y-4"
						data-aos="fade-up"
						data-aos-delay="1400"
					>
						<Image
							src={HomeIcon}
							alt="Home icon"
							className="max-w-[76px] max-h-[66px]"
						/>
						<h4>Complete Home Overhaul</h4>
						<p>
							One team. One vision. Your dream home—rebuilt from the inside out.
						</p>
					</div>

					<div
						className="card p-7 2xl:p-9 bg-light-blue rounded space-y-4"
						data-aos="fade-up"
						data-aos-delay="1200"
					>
						<Image
							src={LightIcon}
							alt="Light icon"
							className="max-w-[76px] max-h-[66px]"
						/>
						<h4>Lighting Upgrade</h4>
						<p>Bright ideas for ambiance, energy efficiency, and elegance.</p>
					</div>

					<div
						className="card p-7 2xl:p-9 bg-light-blue rounded space-y-4"
						data-aos="fade-up"
						data-aos-delay="1000"
					>
						<Image
							src={FlooringIcon}
							alt="Flooring icon"
							className="max-w-[76px] max-h-[66px]"
						/>
						<h4>Flooring Replacement</h4>
						<p>
							With the durable materials and aesthetic professional finishes for
							every room.
						</p>
					</div>
				</div>

				{/* Additional Services Lists */}
				<div className="mt-16 grid md:grid-cols-2 gap-8">
					{/* Indoor Remodeling Services */}
					<div
						className="bg-light-blue rounded-lg p-8"
						data-aos="fade-up"
						data-aos-delay="400"
					>
						<h3 className="text-2xl md:text-3xl font-bold text-secondary mb-6">
							Indoor Remodeling
						</h3>
						<ul className="space-y-3 text-lg text-neutral">
							<li>• Painting (Interior & Exterior)</li>
							<li>• Sheetrock & Drywall</li>
							<li>• Flooring Installation</li>
							<li>• Kitchen Remodeling</li>
							<li>• Bedroom Remodeling</li>
							<li>• Carpentry & Woodwork</li>
							<li>• Electrical Upgrades</li>
							<li>• Plumbing Services</li>
							<li>• Basement Finishing</li>
						</ul>
					</div>

					{/* Outdoor Remodeling Services */}
					<div
						className="bg-light-blue rounded-lg p-8"
						data-aos="fade-up"
						data-aos-delay="600"
					>
						<h3 className="text-2xl md:text-3xl font-bold text-secondary mb-6">
							Outdoor Remodeling
						</h3>
						<ul className="space-y-3 text-lg text-neutral">
							<li>• Siding Installation</li>
							<li>• Exterior Painting</li>
							<li>• Power Washing</li>
							<li>• Patio Construction</li>
							<li>• Porch & Deck Building</li>
							<li>• Fence Installation</li>
							<li>• Gazebo Construction</li>
							<li>• Roofing & Gutters</li>
							<li>• Landscaping</li>
							<li>• Outdoor Lighting</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Services;
