import About from "@/components/home/about";
import Contact from "@/components/home/contact";
import CTATwo from "@/components/home/cta-two";
import FAQ from "@/components/home/faq";
import Gallery from "@/components/home/gallery";
import Hero from "@/components/home/hero";
import Process from "@/components/home/process";
import Services from "@/components/home/services";

export default function Home() {
	return (
		<>
			<Hero />
			<About />
			<Services />
			<Gallery />
			<Process />
			<CTATwo />
			<FAQ />
			<Contact />
		</>
	);
}
