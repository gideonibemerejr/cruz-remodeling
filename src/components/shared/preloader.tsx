"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import preloaderGif from "@/assets/images/preloader.gif";

const Preloader = () => {
	useEffect(() => {
		const preloader = document.querySelector(".preloader") as HTMLElement;
		if (preloader) {
			preloader.style.opacity = "1";

			setTimeout(() => {
				preloader.style.opacity = "0";

				setTimeout(() => {
					preloader.style.display = "none";
				}, 800);
			}, 600);
		}
	}, []);

	return (
		<div className="preloader h-full fixed w-full z-100 bg-secondary transition duration-300 flex items-center justify-center">
			<div className="text-center">
				<Image
					src={preloaderGif}
					alt="Preloader"
					className="w-20 h-20 mx-auto mb-4 object-contain"
				/>
				<h1 className="text-white text-2xl font-primary font-bold">
					Cruz Remodeling
				</h1>
			</div>
		</div>
	);
};

export default Preloader;
