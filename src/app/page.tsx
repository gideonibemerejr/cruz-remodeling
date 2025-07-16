import About from "@/components/home/about";
import Blog from "@/components/home/blog";
import Contact from "@/components/home/contact";
import CTA from "@/components/home/cta";
import CTATwo from "@/components/home/cta-two";
import FAQ from "@/components/home/faq";
import Hero from "@/components/home/hero";
import Pricing from "@/components/home/pricing";
import Process from "@/components/home/process";
import Services from "@/components/home/services";
import Testimonial from "@/components/home/testimonial";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Process />
      <CTA />
      <Testimonial />
      <Pricing />
      <CTATwo />
      <FAQ />
      <Contact />
      <Blog />
    </>
  );
}
