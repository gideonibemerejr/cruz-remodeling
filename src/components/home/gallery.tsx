"use client";
import React, { useState, useEffect } from "react";
import { StaticImageData } from "next/image";
import OptimizedImage from "@/components/shared/optimized-image";

// Bathrooms
import Bathroom1 from "@/assets/images/bathrooms/bathroom-1.jpg";
import Bathroom2 from "@/assets/images/bathrooms/bathroom-2.jpg";
import Bathroom3 from "@/assets/images/bathrooms/bathroom-3.jpg";
import Bathroom4 from "@/assets/images/bathrooms/bathroom-4.jpg";
import Bathroom5 from "@/assets/images/bathrooms/bathroom-5.jpg";
import Bathroom6 from "@/assets/images/bathrooms/bathroom-6.jpg";
import Bathroom7 from "@/assets/images/bathrooms/bathroom-7.jpg";
import Bathroom8 from "@/assets/images/bathrooms/bathroom-8.jpg";
import Bathroom9 from "@/assets/images/bathrooms/bathroom-9.jpg";
import Bathroom10 from "@/assets/images/bathrooms/bathroom-10.jpg";
import Bathroom11 from "@/assets/images/bathrooms/bathroom-11.jpg";
import Bathroom12 from "@/assets/images/bathrooms/bathroom-12.jpg";
import Bathroom13 from "@/assets/images/bathrooms/bathroom-13.jpg";
import Bathroom14 from "@/assets/images/bathrooms/bathroom-14.jpg";
import Bathroom15 from "@/assets/images/bathrooms/bathroom-15.jpg";
import Bathroom16 from "@/assets/images/bathrooms/bathroom-16.jpg";
import Bathroom17 from "@/assets/images/bathrooms/bathroom-17.jpg";
import Bathroom18 from "@/assets/images/bathrooms/bathroom-18.jpg";

// Cabinets
import Cabinet1 from "@/assets/images/cabinets/cabinet-1.jpg";

import Cabinet3 from "@/assets/images/cabinets/cabinet-3.jpg";
import Cabinet4 from "@/assets/images/cabinets/cabinet-4.jpg";
import Cabinet5 from "@/assets/images/cabinets/cabinet-5.jpg";
import Cabinet6 from "@/assets/images/cabinets/cabinet-6.jpg";
import Cabinet7 from "@/assets/images/cabinets/cabinet-7.jpg";
import Cabinet8 from "@/assets/images/cabinets/cabinet-8.jpg";
import Cabinet9 from "@/assets/images/cabinets/cabinet-9.jpg";

// Exterior
import Exterior1 from "@/assets/images/exterior/exterior-1.jpg";
import Exterior2 from "@/assets/images/exterior/exterior-2.jpg";
import Exterior3 from "@/assets/images/exterior/exterior-3.jpg";
import Exterior4 from "@/assets/images/exterior/exterior-4.jpg";
import Exterior5 from "@/assets/images/exterior/exterior-5.jpg";
import Exterior6 from "@/assets/images/exterior/exterior-6.jpg";
import Exterior7 from "@/assets/images/exterior/exterior-7.jpg";
import Exterior8 from "@/assets/images/exterior/exterior-8.jpg";
import Exterior9 from "@/assets/images/exterior/exterior-9.jpg";
import Exterior10 from "@/assets/images/exterior/exterior-10.jpg";
import Exterior11 from "@/assets/images/exterior/exterior-11.jpg";
import Exterior12 from "@/assets/images/exterior/exterior-12.jpg";
import Exterior13 from "@/assets/images/exterior/exterior-13.jpg";
import Exterior14 from "@/assets/images/exterior/exterior-14.jpg";
import Exterior15 from "@/assets/images/exterior/exterior-15.jpg";
import Exterior16 from "@/assets/images/exterior/exterior-16.jpg";
import Exterior17 from "@/assets/images/exterior/exterior-17.jpg";
import Exterior18 from "@/assets/images/exterior/exterior-18.jpg";
import Exterior19 from "@/assets/images/exterior/exterior-19.jpg";
import Exterior20 from "@/assets/images/exterior/exterior-20.jpg";

// Decks
import Deck1 from "@/assets/images/decks/deck-1.jpg";
import Deck2 from "@/assets/images/decks/deck-2.jpg";
import DeckAbout1 from "@/assets/images/decks/deck-about-1.jpg";
import DeckOutdoorHero from "@/assets/images/decks/deck-outdoor-hero.jpg";
import OutdoorHero from "@/assets/images/decks/outdoor-hero.jpg";

// Fencing
import Fencing1 from "@/assets/images/fencing/fencing-1.jpg";
import Fencing2 from "@/assets/images/fencing/fencing-2.jpg";
import Fencing3 from "@/assets/images/fencing/fencing-3.jpg";
import Fencing4 from "@/assets/images/fencing/fencing-4.jpg";
import Fencing5 from "@/assets/images/fencing/fencing-5.jpg";
import Fencing6 from "@/assets/images/fencing/fencing-6.jpg";
import Fencing7 from "@/assets/images/fencing/fencing-7.jpg";
import Fencing9 from "@/assets/images/fencing/fencing-9.jpg";
import Fencing10 from "@/assets/images/fencing/fencing-10.jpg";
import Fencing11 from "@/assets/images/fencing/fencing-11.jpg";
import Fencing12 from "@/assets/images/fencing/fencing-12.jpg";
import Fencing13 from "@/assets/images/fencing/fencing-13.jpg";
import Fencing14 from "@/assets/images/fencing/fencing-14.jpg";
import Fencing15 from "@/assets/images/fencing/fencing-15.jpg";
import Fencing16 from "@/assets/images/fencing/fencing-16.jpg";
import Fencing17 from "@/assets/images/fencing/fencing-17.jpg";
import Fencing18 from "@/assets/images/fencing/fencing-18.jpg";
import Fencing19 from "@/assets/images/fencing/fencing-19.jpg";
import Fencing20 from "@/assets/images/fencing/fencing-20.jpg";
import Fencing21 from "@/assets/images/fencing/fencing-21.jpg";
import Fencing22 from "@/assets/images/fencing/fencing-22.jpg";
import Fencing23 from "@/assets/images/fencing/fencing-23.jpg";
import Fencing24 from "@/assets/images/fencing/fencing-24.jpg";

// Doors
import Door1 from "@/assets/images/doors/doors-1.jpg";
import Door2 from "@/assets/images/doors/doors-2.jpg";
import Door3 from "@/assets/images/doors/doors-3.jpg";
import Door4 from "@/assets/images/doors/doors-4.jpg";

// Kitchens
import Kitchen1 from "@/assets/images/kitchens/kitchen-1.jpg";
import Kitchen2 from "@/assets/images/kitchens/kitchen-2.jpg";

const bathroomImages = [
	{ src: Bathroom1, alt: "Bathroom 1" },
	{ src: Bathroom2, alt: "Bathroom 2" },
	{ src: Bathroom3, alt: "Bathroom 3" },
	{ src: Bathroom4, alt: "Bathroom 4" },
	{ src: Bathroom5, alt: "Bathroom 5" },
	{ src: Bathroom6, alt: "Bathroom 6" },
	{ src: Bathroom7, alt: "Bathroom 7" },
	{ src: Bathroom8, alt: "Bathroom 8" },
	{ src: Bathroom9, alt: "Bathroom 9" },
	{ src: Bathroom10, alt: "Bathroom 10" },
	{ src: Bathroom11, alt: "Bathroom 11" },
	{ src: Bathroom12, alt: "Bathroom 12" },
	{ src: Bathroom13, alt: "Bathroom 13" },
	{ src: Bathroom14, alt: "Bathroom 14" },
	{ src: Bathroom15, alt: "Bathroom 15" },
	{ src: Bathroom16, alt: "Bathroom 16" },
	{ src: Bathroom17, alt: "Bathroom 17" },
	{ src: Bathroom18, alt: "Bathroom 18" },
];

const cabinetImages = [
	{ src: Cabinet1, alt: "Cabinet 1" },
	{ src: Cabinet3, alt: "Cabinet 3" },
	{ src: Cabinet4, alt: "Cabinet 4" },
	{ src: Cabinet5, alt: "Cabinet 5" },
	{ src: Cabinet6, alt: "Cabinet 6" },
	{ src: Cabinet7, alt: "Cabinet 7" },
	{ src: Cabinet8, alt: "Cabinet 8" },
	{ src: Cabinet9, alt: "Cabinet 9" },
];

const exteriorImages = [
	{ src: Exterior1, alt: "Exterior 1" },
	{ src: Exterior2, alt: "Exterior 2" },
	{ src: Exterior3, alt: "Exterior 3" },
	{ src: Exterior4, alt: "Exterior 4" },
	{ src: Exterior5, alt: "Exterior 5" },
	{ src: Exterior6, alt: "Exterior 6" },
	{ src: Exterior7, alt: "Exterior 7" },
	{ src: Exterior8, alt: "Exterior 8" },
	{ src: Exterior9, alt: "Exterior 9" },
	{ src: Exterior10, alt: "Exterior 10" },
	{ src: Exterior11, alt: "Exterior 11" },
	{ src: Exterior12, alt: "Exterior 12" },
	{ src: Exterior13, alt: "Exterior 13" },
	{ src: Exterior14, alt: "Exterior 14" },
	{ src: Exterior15, alt: "Exterior 15" },
	{ src: Exterior16, alt: "Exterior 16" },
	{ src: Exterior17, alt: "Exterior 17" },
	{ src: Exterior18, alt: "Exterior 18" },
	{ src: Exterior19, alt: "Exterior 19" },
	{ src: Exterior20, alt: "Exterior 20" },
	{ src: Deck1, alt: "Deck 1" },
	{ src: Deck2, alt: "Deck 2" },
	{ src: DeckAbout1, alt: "Deck About 1" },
	{ src: DeckOutdoorHero, alt: "Deck Outdoor Hero" },
	{ src: OutdoorHero, alt: "Outdoor Hero" },
];

const fencingImages = [
	{ src: Fencing1, alt: "Fencing 1" },
	{ src: Fencing2, alt: "Fencing 2" },
	{ src: Fencing3, alt: "Fencing 3" },
	{ src: Fencing4, alt: "Fencing 4" },
	{ src: Fencing5, alt: "Fencing 5" },
	{ src: Fencing6, alt: "Fencing 6" },
	{ src: Fencing7, alt: "Fencing 7" },
	{ src: Fencing9, alt: "Fencing 9" },
	{ src: Fencing10, alt: "Fencing 10" },
	{ src: Fencing11, alt: "Fencing 11" },
	{ src: Fencing12, alt: "Fencing 12" },
	{ src: Fencing13, alt: "Fencing 13" },
	{ src: Fencing14, alt: "Fencing 14" },
	{ src: Fencing15, alt: "Fencing 15" },
	{ src: Fencing16, alt: "Fencing 16" },
	{ src: Fencing17, alt: "Fencing 17" },
	{ src: Fencing18, alt: "Fencing 18" },
	{ src: Fencing19, alt: "Fencing 19" },
	{ src: Fencing20, alt: "Fencing 20" },
	{ src: Fencing21, alt: "Fencing 21" },
	{ src: Fencing22, alt: "Fencing 22" },
	{ src: Fencing23, alt: "Fencing 23" },
	{ src: Fencing24, alt: "Fencing 24" },
];

const doorImages = [
	{ src: Door1, alt: "Door 1" },
	{ src: Door2, alt: "Door 2" },
	{ src: Door3, alt: "Door 3" },
	{ src: Door4, alt: "Door 4" },
];

const kitchenImages = [
	{ src: Kitchen1, alt: "Kitchen 1" },
	{ src: Kitchen2, alt: "Kitchen 2" },
];

const categoryImages = {
	bathrooms: bathroomImages,
	cabinets: cabinetImages,
	exterior: exteriorImages,
	fencing: fencingImages,
	doors: doorImages,
	kitchens: kitchenImages,
};

// Define the remodeling categories
const categories = [
	{
		id: "bathrooms",
		title: "Bathroom Remodeling",
		description: "Spa-like bathrooms with modern fixtures and finishes",
		image: Bathroom1,
		alt: "Modern bathroom renovation",
	},
	{
		id: "cabinets",
		title: "Cabinet Installation",
		description: "Custom cabinetry crafted to maximize style and storage",
		image: Cabinet1,
		alt: "Custom kitchen cabinets",
	},
	{
		id: "exterior",
		title: "Exterior Renovations",
		description: "Siding, painting, and outdoor improvements",
		image: Exterior1,
		alt: "Exterior home renovation",
	},
	{
		id: "fencing",
		title: "Fencing & Outdoor",
		description: "Custom fencing and outdoor structures",
		image: Fencing1,
		alt: "Custom fence installation",
	},
	{
		id: "doors",
		title: "Door Installation",
		description: "Interior and exterior door replacements",
		image: Door1,
		alt: "Custom door installation",
	},
	{
		id: "kitchens",
		title: "Kitchen Remodeling",
		description:
			"Complete kitchen renovations with custom cabinets and countertops",
		image: Kitchen1,
		alt: "Modern kitchen renovation",
	},
];

const Gallery = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	const [currentCategory, setCurrentCategory] = useState<string | null>(null);
	const [allImages, setAllImages] = useState<
		Array<{ src: StaticImageData; alt: string; category: string }>
	>([]);

	// Combine all images for the full portfolio
	useEffect(() => {
		const combined = Object.entries(categoryImages).flatMap(
			([category, images]) => images.map((img) => ({ ...img, category }))
		);
		setAllImages(combined);
	}, []);

	const openModal = (startIndex = 0, category: string | null = null) => {
		setIsModalOpen(true);
		setCurrentImageIndex(startIndex);
		setCurrentCategory(category);
		document.body.style.overflow = "hidden";
	};

	const closeModal = () => {
		setIsModalOpen(false);
		setCurrentCategory(null);
		document.body.style.overflow = "unset";
	};

	const getCurrentImages = () => {
		if (currentCategory) {
			return categoryImages[currentCategory as keyof typeof categoryImages];
		}
		return allImages;
	};

	const nextImage = () => {
		const images = getCurrentImages();
		setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
	};

	const prevImage = () => {
		const images = getCurrentImages();
		setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
	};

	const handleKeyDown = (e: React.KeyboardEvent) => {
		if (e.key === "Escape") closeModal();
		if (e.key === "ArrowRight") nextImage();
		if (e.key === "ArrowLeft") prevImage();
	};

	const getCurrentImage = () => {
		const images = getCurrentImages();
		return images[currentImageIndex];
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
							Explore our collection of completed projects organized by
							remodeling category. Each section showcases our expertise in
							specific areas of home improvement and renovation.
						</p>
					</div>

					{/* Category Grid */}
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
						{categories.map((category, index) => (
							<div
								key={category.id}
								className="group relative overflow-hidden rounded-lg cursor-pointer bg-light-blue"
								data-aos="fade-up"
								data-aos-delay={400 + index * 100}
								onClick={() => openModal(0, category.id)}
							>
								<OptimizedImage
									src={category.image}
									alt={category.alt}
									priority={false}
									blur={true}
									className="w-full h-[250px] md:h-[300px] object-cover transition-transform duration-500 group-hover:scale-110"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
									<div className="absolute bottom-0 left-0 right-0 p-6">
										<h3 className="text-xl font-bold mb-2 text-white">
											{category.title}
										</h3>
										<p className="text-neutral-light text-sm mb-4">
											{category.description}
										</p>
										<div className="flex items-center text-primary font-medium">
											<span>View Gallery</span>
											<svg
												className="ml-2 w-4 h-4"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M9 5l7 7-7 7"
												/>
											</svg>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>

					{/* View Full Portfolio Button */}
					<div
						className="text-center mt-12"
						data-aos="fade-up"
						data-aos-delay="600"
					>
						<button onClick={() => openModal(0, null)} className="btn">
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
					className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-2 sm:p-4"
					onClick={closeModal}
					onKeyDown={handleKeyDown}
					tabIndex={0}
				>
					<div className="relative w-full max-w-7xl max-h-full flex flex-col">
						{/* Header */}
						<div className="flex items-center justify-between mb-4">
							<h3 className="text-white text-lg sm:text-xl font-bold">
								{currentCategory
									? categories.find((c) => c.id === currentCategory)?.title
									: "Full Portfolio"}
							</h3>
							<button
								onClick={closeModal}
								className="text-white hover:text-primary transition-colors duration-300 p-2"
							>
								<svg
									width="24"
									height="24"
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
						</div>

						{/* Navigation Buttons */}
						<button
							onClick={(e) => {
								e.stopPropagation();
								prevImage();
							}}
							className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-10 text-white hover:text-primary transition-colors duration-300 p-2 bg-black/50 rounded-full"
						>
							<svg
								width="20"
								height="20"
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
							className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 z-10 text-white hover:text-primary transition-colors duration-300 p-2 bg-black/50 rounded-full"
						>
							<svg
								width="20"
								height="20"
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
							<OptimizedImage
								src={getCurrentImage().src}
								alt={getCurrentImage().alt}
								priority={false}
								blur={false}
								className="w-full h-auto max-h-[60vh] sm:max-h-[70vh] lg:max-h-[80vh] object-contain rounded"
							/>

							{/* Image Info */}
							<div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 sm:p-6 rounded-b">
								{currentCategory && (
									<p className="text-primary text-sm font-medium mb-1">
										{categories.find((c) => c.id === currentCategory)?.title}
									</p>
								)}
								<p className="text-white text-sm sm:text-base">
									{getCurrentImage().alt}
								</p>
								<p className="text-neutral-light text-xs sm:text-sm mt-2">
									{currentImageIndex + 1} of {getCurrentImages().length}
								</p>
							</div>
						</div>

						{/* Thumbnail Navigation */}
						<div className="flex justify-center mt-4 space-x-2 overflow-x-auto px-4 pb-4">
							{getCurrentImages().map((image, index) => (
								<button
									key={index}
									onClick={(e) => {
										e.stopPropagation();
										setCurrentImageIndex(index);
									}}
									className={`flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded overflow-hidden border-2 transition-all duration-300 ${
										index === currentImageIndex
											? "border-primary"
											: "border-transparent hover:border-neutral-light"
									}`}
								>
									<OptimizedImage
										src={image.src}
										alt={image.alt}
										priority={false}
										blur={false}
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
