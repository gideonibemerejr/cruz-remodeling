"use client";

import React, { useEffect, useCallback } from "react";
// import Image from "next/image";
import Link from "next/link";
// import logo from "@/assets/images/logo/logo.png";

const Header = () => {
	const handleResize = useCallback(() => {
		const mobileMenu = document.getElementById("mobile-menu");
		if (window.innerWidth >= 1024) {
			mobileMenu?.classList.remove("show");
			mobileMenu?.classList.add("hidden");
			document.body.style.overflow = "";
		}
	}, []);

	const closeMenu = useCallback(() => {
		const mobileMenu = document.getElementById("mobile-menu");
		mobileMenu?.classList.remove("show");
		document.body.style.overflow = "";
		setTimeout(() => {
			mobileMenu?.classList.add("hidden");
		}, 500);
	}, []);

	const openMenu = useCallback(() => {
		const mobileMenu = document.getElementById("mobile-menu");
		mobileMenu?.classList.remove("hidden");
		document.body.style.overflow = "hidden";
		requestAnimationFrame(() => {
			mobileMenu?.classList.add("show");
		});
	}, []);

	const toggleMenu = useCallback(() => {
		const mobileMenu = document.getElementById("mobile-menu");
		if (mobileMenu?.classList.contains("show")) {
			closeMenu();
		} else {
			openMenu();
		}
	}, [closeMenu, openMenu]);

	useEffect(() => {
		const mobileMenuBtn = document.getElementById("mobile-menu-btn");
		const desktopLinks = document.querySelectorAll<HTMLAnchorElement>(
			"#nav_link_wrapper .nav_link_Small"
		);
		const mobileNavLinksWrapper = document.getElementById("mobile-nav-links");

		if (mobileNavLinksWrapper) {
			mobileNavLinksWrapper.append(
				...Array.from(desktopLinks).map((link) => link.cloneNode(true))
			);
		}

		const allNavLinks = [
			...Array.from(desktopLinks),
			...Array.from(
				document.querySelectorAll<HTMLAnchorElement>(
					"#mobile-nav-links .nav_link"
				)
			),
		];

		mobileMenuBtn?.addEventListener("click", toggleMenu);

		document
			.querySelectorAll("#mobile-nav-links .nav_link")
			?.forEach((link) => {
				link.addEventListener("click", closeMenu);
			});

		document
			.getElementById("close-drawer-btn")
			?.addEventListener("click", closeMenu);

		const handleClickOutside = (e: MouseEvent) => {
			const target = e.target as HTMLElement;
			const mobileMenu = document.getElementById("mobile-menu");
			if (
				mobileMenu?.classList.contains("show") &&
				!mobileMenu.contains(target) &&
				!mobileMenuBtn?.contains(target)
			) {
				closeMenu();
			}
		};

		document.addEventListener("click", handleClickOutside);

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						allNavLinks.forEach((link) => {
							const href = link.getAttribute("href");
							if (href) {
								link.classList.toggle(
									"active",
									href.substring(1) === entry.target.id
								);
							}
						});
					}
				});
			},
			{ threshold: 0.3, rootMargin: "-10% 0px -10% 0px" }
		);

		allNavLinks.forEach((link) => {
			const href = link.getAttribute("href");
			if (href) {
				const section = document.getElementById(href.substring(1));
				if (section) observer.observe(section);
			}
		});

		const checkActiveSection = () => {
			const scrollPosition = window.scrollY + window.innerHeight / 2;
			document.querySelectorAll("section").forEach((section) => {
				const sectionTop = section.offsetTop;
				if (
					scrollPosition >= sectionTop &&
					scrollPosition <= sectionTop + section.offsetHeight
				) {
					allNavLinks.forEach((link) => {
						const href = link.getAttribute("href");
						if (href) {
							link.classList.toggle("active", href.substring(1) === section.id);
						}
					});
				}
			});
		};

		checkActiveSection();
		window.addEventListener("resize", handleResize);
		window.addEventListener("scroll", checkActiveSection);

		return () => {
			window.removeEventListener("resize", handleResize);
			window.removeEventListener("scroll", checkActiveSection);
			document.removeEventListener("click", handleClickOutside);
			mobileMenuBtn?.removeEventListener("click", toggleMenu);
			document
				.getElementById("close-drawer-btn")
				?.removeEventListener("click", closeMenu);
			document
				.querySelectorAll("#mobile-nav-links .nav_link")
				?.forEach((link) => {
					link.removeEventListener("click", closeMenu);
				});
		};
	}, [closeMenu, handleResize, toggleMenu]);

	return (
		<header className="sticky top-0 w-full z-50" id="navbar">
			<nav className="navbar">
				<div className="mr-auto flex justify-between items-center gap-3 lg:gap-6">
					<div className="flex items-center justify-between gap-4 lg:gap-8 flex-wrap w-full container">
						<div className="md:mr-5 text-white">
							<Link href="/">Cruz Remodeling</Link>
						</div>
						<div
							className="hidden lg:flex space-x-2 mr-auto"
							id="nav_link_wrapper"
						>
							<Link href="#hero" className="nav_link nav_link_Small">
								Home
							</Link>
							<Link href="#about" className="nav_link nav_link_Small">
								About
							</Link>
							<Link href="#services" className="nav_link nav_link_Small">
								Services
							</Link>
							<Link href="#gallery" className="nav_link nav_link_Small">
								Portfolio
							</Link>
							<Link
								href="#contact"
								className="nav_link nav_link_Small block md:hidden"
							>
								Contact us
							</Link>
						</div>
						<div className="hidden md:block ml-auto">
							<Link
								href="#contact"
								className="group no-animation btn font-medium !font-secondary !px-6 py-2 !bg-white hover:!bg-primary !text-secondary border border-[#C2D6C9]/10"
							>
								<span className="relative z-10">Contact us</span>
							</Link>
						</div>
						<button
							id="mobile-menu-btn"
							className="lg:hidden text-white focus:outline-none"
						>
							<svg
								className="h-6 w-6"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h16M4 18h16"
								/>
							</svg>
						</button>
					</div>
				</div>
			</nav>
			<div id="mobile-menu" className="hidden bg-secondary z-50">
				<div className="block lg:hidden p-6 pt-4 w-full">
					<div className="flex justify-end items-center">
						<button
							id="close-drawer-btn"
							className="text-white focus:outline-none border border-secondary rounded"
						>
							<svg
								className="h-6 w-6"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						</button>
					</div>
					<div
						id="mobile-nav-links"
						className="mt-2 grid grid-cols-1 gap-1 gap-x-4"
					></div>
				</div>
			</div>
		</header>
	);
};

export default Header;
