"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";
import OptimizedImage from "@/components/shared/optimized-image";

// Import some existing images to replace the deleted ones
import Room1 from "@/assets/images/bathrooms/bathroom-1.jpg";
import Room2 from "@/assets/images/cabinets/cabinet-1.jpg";
import Room3 from "@/assets/images/exterior/exterior-1.jpg";
import Room4 from "@/assets/images/kitchens/kitchen-1.jpg";
import Room5 from "@/assets/images/fencing/fencing-1.jpg";
import Room6 from "@/assets/images/doors/doors-1.jpg";
import Room7 from "@/assets/images/bathrooms/bathroom-2.jpg";
import Room8 from "@/assets/images/cabinets/cabinet-2.jpg";

const CTA = () => {
	useEffect(() => {
		const updateLeftImageMargins = () => {
			const navLinks = document.querySelectorAll<HTMLElement>(".small_image");
			const windowWidth = window.innerWidth;

			navLinks.forEach((link, index) => {
				let margin = 0;
				if (windowWidth <= 640) {
					margin = index * 0;
				} else if (windowWidth <= 768) {
					margin = index * 30;
				} else if (windowWidth <= 1024) {
					margin = index * 40;
				} else if (windowWidth <= 1280) {
					margin = index * 50;
				} else {
					margin = index * 100;
				}
				link.style.marginLeft = `${margin}px`;
			});
		};

		const updateRightImageMargins = () => {
			const navLinks =
				document.querySelectorAll<HTMLElement>(".small_image_right");
			const windowWidth = window.innerWidth;

			navLinks.forEach((link, index) => {
				let margin = 0;
				if (windowWidth <= 640) {
					margin = index * 0;
				} else if (windowWidth <= 768) {
					margin = index * -30;
				} else if (windowWidth <= 1024) {
					margin = index * -40;
				} else if (windowWidth <= 1280) {
					margin = index * -50;
				} else {
					margin = index * -100;
				}
				link.style.marginLeft = `${margin}px`;
			});
		};

		const updateAllMargins = () => {
			updateLeftImageMargins();
			updateRightImageMargins();
		};

		// Initial call
		updateAllMargins();

		// Debounced resize
		let resizeTimer: ReturnType<typeof setTimeout>;
		const handleResize = () => {
			clearTimeout(resizeTimer);
			resizeTimer = setTimeout(updateAllMargins, 200);
		};

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<section>
			<div className="container">
				<div className="bg-cta-1 py-20 lg:py-32 rounded relative overflow-hidden min-h-[250px] lg:min-h-[450px] xl:min-h-[550px] flex items-center justify-center p-4">
					{/* Content */}
					<div className="md:max-w-[50%] xl:max-w-[40%] 2xl:max-w-[50%] mx-auto text-center z-20">
						<h2 className="title 2xl:text-7xl text-white mb-6 xl:mb-8 animateText !normal-case">
							Bring Your Dream Home to Life Today
						</h2>
						<Link href="#contact" className="group btn">
							<span className="relative z-10">Get free consultation</span>
							<span className="btn_expand">
								<span className="btn_icon">
									<FaAngleRight />
								</span>
							</span>
						</Link>
					</div>

					{/* Left Images */}
					<div className="absolute left-0 md:-left-4 xl:-left-10 space-y-3 opacity-20 md:opacity-100">
						{[Room1, Room2, Room3, Room4].map((src, index) => (
							<div
								className="small_image"
								data-aos="fade-right"
								data-aos-delay={`${(index + 1) * 100}`}
								key={`left-${index}`}
							>
								<OptimizedImage
									src={src}
									className="rounded"
									alt={`Room Image ${index + 1}`}
									priority={false}
									blur={true}
								/>
								<div className="bg-secondary-dark/20 absolute inset-0 rounded" />
							</div>
						))}
					</div>

					{/* Right Images */}
					<div className="absolute right-0 md:-right-4 xl:-right-10 space-y-3 opacity-20 md:opacity-100">
						{[Room5, Room6, Room7, Room8].map((src, index) => (
							<div
								className="small_image_right"
								data-aos="fade-left"
								data-aos-delay={`${(index + 1) * 100}`}
								key={`right-${index}`}
							>
								<OptimizedImage
									src={src}
									className="rounded"
									alt={`Room Image ${index + 5}`}
									priority={false}
									blur={true}
								/>
								<div className="bg-secondary-dark/20 absolute inset-0 rounded" />
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default CTA;
