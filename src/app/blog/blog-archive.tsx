"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

import postImage1 from "@/assets/images/post-image-1.jpg";
import postImage2 from "@/assets/images/post-image-2.jpg";
import postImage3 from "@/assets/images/post-image-3.jpg";

const blogPosts = [
	{
		image: postImage1,
		title: "5 Renovation Mistakes to Avoid",
		description:
			"Learn the common pitfalls homeowners face and how to sidestep them effortlessly.",
		date: "12 April 2024",
		delay: 400,
	},
	{
		image: postImage2,
		title: "Top 2025 Kitchen Design Trends",
		description:
			"Discover the colors, materials, and layouts defining modern kitchens this year.",
		date: "12 March 2025",
		delay: 600,
	},
	{
		image: postImage3,
		title: "How to Maximize Small Spaces",
		description:
			"Smart remodeling ideas to make your compact home feel bigger and brighter.",
		date: "12 November 2023",
		delay: 800,
	},
	{
		image: postImage1,
		title: "5 Renovation Mistakes to Avoid",
		description:
			"Learn the common pitfalls homeowners face and how to sidestep them effortlessly.",
		date: "12 April 2024",
		delay: 1400,
	},
	{
		image: postImage2,
		title: "Top 2025 Kitchen Design Trends",
		description:
			"Discover the colors, materials, and layouts defining modern kitchens this year.",
		date: "12 March 2025",
		delay: 1200,
	},
	{
		image: postImage3,
		title: "How to Maximize Small Spaces",
		description:
			"Smart remodeling ideas to make your compact home feel bigger and brighter.",
		date: "12 November 2023",
		delay: 1000,
	},
];

const BlogArchive = () => {
	return (
		<section>
			<div className="container">
				<div className="grid grid-cols-12 gap-6">
					{blogPosts.map((post, index) => (
						<div
							className="col-span-12 md:col-span-6 lg:col-span-4"
							key={index}
						>
							<div data-aos="fade-up" data-aos-delay={post.delay}>
								<Link href="/blog-details">
									<Image
										src={post.image}
										alt={post.title}
										className="post_image w-full h-auto"
										placeholder="blur"
									/>
								</Link>
								<div className="py-5 space-y-4">
									<h4>
										<Link href="/blog-details" className="blog_title">
											{post.title}
										</Link>
									</h4>
									<p>{post.description}</p>
									<p className="text-base">{post.date}</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default BlogArchive;
