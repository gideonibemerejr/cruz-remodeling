"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

import postImg1 from "@/assets/images/post-image-1.jpg";
import postImg2 from "@/assets/images/post-image-2.jpg";
import postImg3 from "@/assets/images/post-image-3.jpg";

const relatedPosts = [
	{
		title: "5 Renovation Mistakes to Avoid",
		image: postImg1,
		date: "March 10, 2024",
	},
	{
		title: "Top 2024 Kitchen Design Trends",
		image: postImg2,
		date: "March 5, 2024",
	},
	{
		title: "How to Maximize Small Spaces",
		image: postImg3,
		date: "February 28, 2024",
	},
];

const SingleBlog = () => {
	return (
		<section>
			<div className="container">
				<h1 className="title" data-aos="fade-up" data-aos-delay="400">
					Transform Your Kitchen: A Complete Remodeling Guide
				</h1>
				<div className="flex items-center space-x-4 text-gray-600 mb-8">
					<span>By Cruz Remodeling</span>
					<span>•</span>
					<span>March 15, 2024</span>
					<span>•</span>
					<span>5 min read</span>
				</div>

				<div className="prose prose-lg max-w-none">
					<p className="text-lg leading-relaxed mb-6">
						Kitchen remodeling is one of the most rewarding home improvement
						projects you can undertake. Not only does it enhance the aesthetic
						appeal of your home, but it also increases its value and improves
						functionality. In this comprehensive guide, we&apos;ll walk you
						through everything you need to know about kitchen remodeling.
					</p>

					<h2>Planning Your Kitchen Remodel</h2>
					<p>
						The key to a successful kitchen remodel is thorough planning. Start
						by assessing your current kitchen&apos;s strengths and weaknesses.
						What works well? What needs improvement? Consider your lifestyle,
						cooking habits, and the needs of your family.
					</p>

					<h2>Design Considerations</h2>
					<p>
						Modern kitchen design focuses on creating a space that&apos;s both
						beautiful and functional. Consider the work triangle concept, which
						places the refrigerator, sink, and stove in a triangular formation
						for optimal workflow.
					</p>

					<h2>Material Selection</h2>
					<p>
						From countertops to cabinets, the materials you choose will have a
						significant impact on both the look and durability of your kitchen.
						Quartz countertops offer excellent durability and low maintenance,
						while hardwood cabinets provide timeless beauty.
					</p>

					<h2>Working with Professionals</h2>
					<p>
						While DIY projects can be rewarding, kitchen remodeling is best left
						to professionals. Experienced contractors understand building codes,
						permits, and the complexities of plumbing and electrical work.
					</p>
				</div>

				{/* Related Posts */}
				<div className="mt-16">
					<div className="section_header">
						<h2 className="title animateText !normal-case">Latest News</h2>
						<p>
							Discover more insights and tips for your home improvement
							projects.
						</p>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
						{relatedPosts.map((post, index) => (
							<div key={index} className="space-y-4">
								<Link href="/blog-details">
									<Image
										src={post.image}
										alt={post.title}
										className="post_image w-full h-auto"
										placeholder="blur"
									/>
								</Link>
								<div className="space-y-2">
									<h4>
										<Link href="/blog-details" className="blog_title">
											{post.title}
										</Link>
									</h4>
									<p className="text-sm text-gray-600">{post.date}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default SingleBlog;
