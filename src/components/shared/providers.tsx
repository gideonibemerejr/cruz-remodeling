"use client";
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

const queryClient = new QueryClient();

const Providers = ({ children }: { children: React.ReactNode }) => {
	return (
		<QueryClientProvider client={queryClient}>
			<GoogleReCaptchaProvider
				reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
				container={{
					parameters: {
						badge: "bottomleft",
						theme: "dark",
					},
				}}
			>
				{children}
			</GoogleReCaptchaProvider>
		</QueryClientProvider>
	);
};

export default Providers;
