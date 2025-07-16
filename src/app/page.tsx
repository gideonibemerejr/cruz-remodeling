import About from "@/components/home/about";
import Blog from "@/components/home/blog";
import Contact from "@/components/home/contact";
import CTATwo from "@/components/home/cta-two";
import FAQ from "@/components/home/faq";
import Hero from "@/components/home/hero";
import Process from "@/components/home/process";
import Services from "@/components/home/services";

export default function Home() {
	return (
		<>
			<Hero />
			<About />
			<Services />
			<Process />
			<CTATwo />
			<FAQ />
			<Contact />
			<Blog />
		</>
	);
}
