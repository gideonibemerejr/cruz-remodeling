"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";

import RoomMain from "@/assets/images/cta-room-image.jpg";
import RoomOverlay1 from "@/assets/images/cta-room-image-1.jpg";
import RoomOverlay2 from "@/assets/images/cta-room-image-2.jpg";

const CTATwo = () => {
	return (
		<section>
			<div className="container">
				<div className="bg-cta p-6 md:p-10 lg:p-14 rounded">
					<div className="grid grid-cols-12 gap-4 md:gap-6 items-center">
						<div className="col-span-12 md:col-span-7 xl:col-span-8">
							<div className="space-y-5 text-center md:text-left">
								<h2 className="d2c_title text-white animateText !normal-case">
									Build the Space You&apos;ve Always Wanted
								</h2>
								<p
									className="text-[#C2D6C9] md:pr-5 xl:pr-8"
									data-aos="fade-up"
									data-aos-delay="600"
								>
									From kitchens to full-home upgrades, Cruz Remodeling helps
									bring your vision to life with seamless project execution and
									expert craftsmanship. Ready to begin your transformation?
								</p>

								{/* Button */}
								<div data-aos="fade-up" data-aos-delay="800">
									<Link href="#contact" className="group d2c_btn inline-block">
										<span className="relative z-10">Get free consultation</span>
										<span className="d2c_btn_expand">
											<span className="d2c_btn_icon">
												<FaAngleRight />
											</span>
										</span>
									</Link>
								</div>
							</div>
						</div>

						<div className="col-span-12 md:col-span-5 xl:col-span-4 md:p-4 lg:p-10 xl:p-16 relative mt-4 md:mt-0">
							<div
								className="relative"
								data-aos="zoom-out"
								data-aos-delay="400"
							>
								<Image
									src={RoomMain}
									alt="Room Image"
									className="w-full h-[200px] object-cover rounded block"
								/>
								<div className="absolute inset-0 bg-secondary-dark/12 rounded"></div>
							</div>

							<Image
								src={RoomOverlay1}
								alt="Room Image"
								className="md:w-[100px] md:h-[100px] lg:w-[150px] lg:h-[112px] object-cover rounded absolute top-0 right-0 hidden md:block"
								data-aos="zoom-in"
								data-aos-delay="400"
							/>

							<Image
								src={RoomOverlay2}
								alt="Room Image"
								className="md:w-[100px] md:h-[100px] lg:w-[150px] lg:h-[112px] object-cover rounded absolute md:bottom-0 lg:bottom-[10%] left-0 hidden md:block"
								data-aos="zoom-in"
								data-aos-delay="600"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CTATwo;
