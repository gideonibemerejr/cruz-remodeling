import type { Metadata } from "next";
import "@/assets/css/global.css";
import "swiper/css";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import Footer from "@/components/shared/footer";
import Header from "@/components/shared/header";
import SmoothScroll from "@/components/shared/lenis";
import Preloader from "@/components/shared/preloader";
import AOSInit from "@/components/shared/aos-init";
import ScrollButton from "@/components/shared/scroll-button";
import Favicon from "@/assets/images/logo/favicon.png";
import ButtonExpand from "@/components/shared/button-expand";

const calSans = localFont({
	src: "../fonts/cal-sans/fonts/webfonts/CalSans-Regular.woff2",
	variable: "--font-primary",
	display: "swap",
});

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
	display: "swap",
});

export const metadata: Metadata = {
	robots: "noindex, nofollow",
	icons: {
		icon: Favicon.src,
	},
	openGraph: {
		title: "Cruz Remodeling - Home Remodeling ",
		description:
			"Home Remodeling Framer Template that creates a high-converting remodeling website with Cruz Remodeling - Home Remodelling Website Template. Purchase now!",
		images: [
			{
				url: "https://designtocodes.com/wp-content/uploads/2025/06/EffiXpert-Clean-NextJs-Template-for-Home-Remodelling-thumbnail.jpg",
			},
		],
	},
	title: "Cruz Remodeling - Home Remodeling",
	description:
		"Home Remodeling Framer Template that creates a high-converting remodeling website with Cruz Remodeling - Home Remodelling Website Template. Purchase now!",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning={true}>
			<body
				className={`${inter.variable} ${calSans.variable} antialiased`}
				suppressHydrationWarning={true}
			>
				<Preloader />
				<Header />
				<SmoothScroll />
				<AOSInit />
				<ButtonExpand />
				{children}
				<ScrollButton />
				<Footer />
			</body>
		</html>
	);
}

/* 
    Template Name: Cruz Remodeling - Clean NextJs Template for Home Remodelling
    Template URL: https://designtocodes.com/product/effixpert-clean-nextjs-template-for-home-remodelling
    Description: Home Remodeling Framer Template that creates a high-converting remodeling website with Cruz Remodeling - Home Remodelling Website Template. Purchase now!
    Author: DesignToCodes
    Author URL: https://designtocodes.com
    Text Domain: Cruz Remodeling | Next.js | Portfolio Template
*/
