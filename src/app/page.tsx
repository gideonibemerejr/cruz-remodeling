import About from "@/components/home/about";
import Contact from "@/components/home/contact";
import Gallery from "@/components/home/gallery";
import CTATwo from "@/components/home/cta-two";
import FAQ from "@/components/home/faq";
import Hero from "@/components/home/hero";
import Pricing from "@/components/home/pricing";
import Process from "@/components/home/process";
import Services from "@/components/home/services";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

export default function Home() {
	return (
		<>
			<Hero />
			<About />
			<Services />
			<Process />
			<Gallery />
			<Pricing />
			<CTATwo />
			<FAQ />
			<GoogleReCaptchaProvider
				reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
			>
				<Contact />
			</GoogleReCaptchaProvider>
		</>
	);
}
