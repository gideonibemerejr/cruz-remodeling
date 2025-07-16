"use client";

const Footer = () => {
	return (
		<footer className="bg-footer pt-20 flex flex-col min-h-[300px]">
			<div className="container flex-1">
				<div className="grid grid-cols-12 gap-8">
					{/* Company Info */}
					<div className="col-span-12 lg:col-span-5">
						<h2
							className="title text-2xl md:text-4xl lg:text-5xl xl:text-6xl text-white text-center md:text-left animateText !normal-case"
							data-aos="fade-up"
							data-aos-delay="400"
						>
							Cruz Remodeling
						</h2>
						<p className="text-[#C2D6C9] mb-6">
							Transforming homes with precision, passion, and purpose. We
							deliver exceptional remodeling services that exceed expectations.
						</p>
					</div>

					{/* Services */}
					<div className="col-span-12 md:col-span-6 lg:col-span-2">
						<div className="footer_content">
							<h4>Services</h4>
							<ul>
								<li>
									<a href="#services">Kitchen Remodeling</a>
								</li>
								<li>
									<a href="#services">Bathroom Remodeling</a>
								</li>
								<li>
									<a href="#services">Living Room Design</a>
								</li>
								<li>
									<a href="#services">Complete Home Overhaul</a>
								</li>
								<li>
									<a href="#services">Cabinet Installation</a>
								</li>
							</ul>
						</div>
					</div>

					{/* Company */}
					<div className="col-span-12 md:col-span-6 lg:col-span-2">
						<div className="footer_content">
							<h4>Company</h4>
							<ul>
								<li>
									<a href="#about">About Us</a>
								</li>
								<li>
									<a href="#process">Our Process</a>
								</li>
								<li>
									<a href="#gallery">Portfolio</a>
								</li>
								<li>
									<a href="#contact">Contact</a>
								</li>
							</ul>
						</div>
					</div>

					{/* Contact Info */}
					<div className="col-span-12 md:col-span-6 lg:col-span-3">
						<div className="footer_content">
							<h4>Contact</h4>
							<ul>
								<li>
									<a href="tel:+1234567890">+1 (234) 567-890</a>
								</li>
								<li>
									<a href="mailto:info@cruzremodeling.com">
										info@cruzremodeling.com
									</a>
								</li>
								<li>
									<a href="#contact">Get Free Quote</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>

			{/* Copyright - Pinned to bottom */}
			<div
				className="container mt-auto pt-4 border-t border-[#C2D6C9]/20"
				style={{ marginTop: "3rem" }}
			>
				<div className="grid grid-cols-12 gap-4 p-4 xl:py-4 copyright">
					<div className="col-span-12 md:col-span-6 text-center md:text-left">
						<p>&copy; 2024 Cruz Remodeling. All rights reserved.</p>
					</div>
					<div className="col-span-12 md:col-span-6">
						<ul className="flex flex-wrap gap-4 justify-center md:justify-end">
							<li>
								<a href="#">Privacy Policy</a>
							</li>
							<li>
								<a href="#">Terms of Service</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
