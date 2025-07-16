"use client";
import React, { useState } from "react";
import Image from "next/image";

// Import gallery images - these will be placeholder images for now
import Gallery1 from "@/assets/images/room-image-1.jpg";
import Gallery2 from "@/assets/images/room-image-2.jpg";
import Gallery3 from "@/assets/images/room-image-3.jpg";
import Gallery4 from "@/assets/images/room-image-4.jpg";
import Gallery5 from "@/assets/images/cta-room-image.jpg";
import Gallery6 from "@/assets/images/cta-room-image-1.jpg";
import Gallery7 from "@/assets/images/cta-room-image-2.jpg";
import Gallery8 from "@/assets/images/small-image-1.jpg";
import Gallery9 from "@/assets/images/small-image-2.jpg";

const galleryItems = [
	{
		id: 1,
		image: Gallery1,
		title: "Modern Kitchen Remodel",
		category: "Kitchen",
		alt: "Modern kitchen with white cabinets and marble countertops",
	},
	{
		id: 2,
		image: Gallery2,
		title: "Luxury Bathroom Design",
		category: "Bathroom",
		alt: "Spa-like bathroom with freestanding tub and modern fixtures",
	},
	{
		id: 3,
		image: Gallery3,
		title: "Open Concept Living",
		category: "Living Room",
		alt: "Open concept living room with natural light and modern furniture",
	},
	{
		id: 4,
		image: Gallery4,
		title: "Master Suite Transformation",
		category: "Bedroom",
		alt: "Elegant master bedroom with custom built-ins and luxury finishes",
	},
	{
		id: 5,
		image: Gallery5,
		title: "Contemporary Dining Space",
		category: "Dining",
		alt: "Contemporary dining room with statement lighting and clean lines",
	},
	{
		id: 6,
		image: Gallery6,
		title: "Custom Home Office",
		category: "Office",
		alt: "Custom home office with built-in desk and storage solutions",
	},
	{
		id: 7,
		image: Gallery7,
		title: "Outdoor Living Area",
		category: "Outdoor",
		alt: "Beautiful outdoor living space with custom deck and landscaping",
	},
	{
		id: 8,
		image: Gallery8,
		title: "Basement Renovation",
		category: "Basement",
		alt: "Transformed basement with entertainment area and guest space",
	},
	{
		id: 9,
		image: Gallery9,
		title: "Whole Home Remodel",
		category: "Complete",
		alt: "Complete home transformation showcasing multiple renovated spaces",
	},
];

const Gallery = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	const openModal = (startIndex = 0) => {
		setIsModalOpen(true);
		setCurrentImageIndex(startIndex);
		document.body.style.overflow = "hidden";
	};

	const closeModal = () => {
		setIsModalOpen(false);
		document.body.style.overflow = "unset";
	};

	const nextImage = () => {
		setCurrentImageIndex((prev) =>
			prev === galleryItems.length - 1 ? 0 : prev + 1
		);
	};

	const prevImage = () => {
		setCurrentImageIndex((prev) =>
			prev === 0 ? galleryItems.length - 1 : prev - 1
		);
	};

	const handleKeyDown = (e: React.KeyboardEvent) => {
		if (e.key === "Escape") closeModal();
		if (e.key === "ArrowRight") nextImage();
		if (e.key === "ArrowLeft") prevImage();
	};

	return (
		<>
			<section id="gallery">
				<div className="container">
					<div className="section_header overflow-hidden">
						<h5 className="subtitle" data-aos="fade-down" data-aos-delay="400">
							Our Portfolio
						</h5>
						<h2 className="title animateText !normal-case">
							Transforming Spaces, Creating Dreams
						</h2>
						<p data-aos="fade-up" data-aos-delay="800">
							Explore our collection of completed projects that showcase our
							commitment to quality craftsmanship, innovative design, and
							attention to detail. Each project tells a story of transformation
							and renewal.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
						{galleryItems.map((item, index) => (
							<div
								key={item.id}
								className="group relative overflow-hidden rounded cursor-pointer"
								data-aos="fade-up"
								data-aos-delay={400 + index * 100}
								onClick={() => openModal(index)}
							>
								<Image
									src={item.image}
									alt={item.alt}
									className="w-full h-[300px] md:h-[350px] lg:h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
								/>
								<div
									className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
									style={{
										background:
											"linear-gradient(0deg, rgba(8, 32, 16, 1) 0%, rgba(8, 32, 16, 0) 78%)",
									}}
								>
									<div className="absolute bottom-0 left-0 right-0 p-6">
										<h4 className="text-lg font-medium mb-2 text-primary drop-shadow-lg">
											{item.title}
										</h4>
										<p className="text-sm text-neutral-light drop-shadow-lg">
											{item.category}
										</p>
									</div>
								</div>
							</div>
						))}
					</div>

					{/* View More Button */}
					<div
						className="text-center mt-12"
						data-aos="fade-up"
						data-aos-delay="600"
					>
						<button onClick={() => openModal(0)} className="btn">
							<span className="relative z-10">View Full Portfolio</span>
							<span className="btn_expand">
								<span className="btn_icon">
									<svg
										width="16"
										height="16"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M7 17L17 7M17 7H7M17 7V17"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								</span>
							</span>
						</button>
					</div>
				</div>
			</section>

			{/* Modal */}
			{isModalOpen && (
				<div
					className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-2 sm:p-4"
					onClick={closeModal}
					onKeyDown={handleKeyDown}
					tabIndex={0}
				>
					<div className="relative w-full max-w-6xl max-h-full flex flex-col">
						{/* Close Button */}
						<button
							onClick={closeModal}
							className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 text-white hover:text-primary transition-colors duration-300 p-2"
						>
							<svg
								width="24"
								height="24"
								className="sm:w-8 sm:h-8"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M18 6L6 18M6 6L18 18"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</button>

						{/* Navigation Buttons */}
						<button
							onClick={(e) => {
								e.stopPropagation();
								prevImage();
							}}
							className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-10 text-white hover:text-primary transition-colors duration-300 p-2"
						>
							<svg
								width="20"
								height="20"
								className="sm:w-8 sm:h-8"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M15 18L9 12L15 6"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</button>

						<button
							onClick={(e) => {
								e.stopPropagation();
								nextImage();
							}}
							className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 z-10 text-white hover:text-primary transition-colors duration-300 p-2"
						>
							<svg
								width="20"
								height="20"
								className="sm:w-8 sm:h-8"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M9 18L15 12L9 6"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</button>

						{/* Main Image */}
						<div className="relative flex-1 flex items-center justify-center">
							<Image
								src={galleryItems[currentImageIndex].image}
								alt={galleryItems[currentImageIndex].alt}
								className="w-full h-auto max-h-[60vh] sm:max-h-[70vh] lg:max-h-[80vh] object-contain rounded"
							/>

							{/* Image Info */}
							<div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 sm:p-6 rounded-b">
								<h3 className="text-white text-base sm:text-xl font-medium mb-1 sm:mb-2">
									{galleryItems[currentImageIndex].title}
								</h3>
								<p className="text-neutral-light text-xs sm:text-sm">
									{galleryItems[currentImageIndex].category}
								</p>
								<p className="text-white text-xs sm:text-sm mt-1 sm:mt-2">
									{currentImageIndex + 1} of {galleryItems.length}
								</p>
							</div>
						</div>

						{/* Thumbnail Navigation */}
						<div className="flex justify-center mt-2 sm:mt-4 space-x-1 sm:space-x-2 overflow-x-auto px-2 sm:px-4 pb-2 sm:pb-4">
							{galleryItems.map((item, index) => (
								<button
									key={item.id}
									onClick={(e) => {
										e.stopPropagation();
										setCurrentImageIndex(index);
									}}
									className={`flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded overflow-hidden border-2 transition-all duration-300 ${
										index === currentImageIndex
											? "border-primary"
											: "border-transparent hover:border-neutral-light"
									}`}
								>
									<Image
										src={item.image}
										alt={item.alt}
										className="w-full h-full object-cover"
									/>
								</button>
							))}
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default Gallery;
