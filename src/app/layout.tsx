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

import ButtonExpand from "@/components/shared/button-expand";
import Providers from "@/components/shared/providers";

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
	openGraph: {
		title: "Cruz Remodeling - Home Remodeling ",
		description: "Making your vision a reality",
		images: [
			{
				url: "/logo/logo.png",
			},
		],
	},
	title: "Cruz Remodeling - Home Remodeling",
	description: "Making your vision a reality",
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
				<Providers>
					<Preloader />
					<Header />
					<SmoothScroll />
					<AOSInit />
					<ButtonExpand />
					{children}
					<ScrollButton />
					<Footer />
				</Providers>
			</body>
		</html>
	);
}
