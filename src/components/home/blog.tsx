"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";

import PostImg1 from "@/assets/images/post-image-1.jpg";
import PostImg2 from "@/assets/images/post-image-2.jpg";
import PostImg3 from "@/assets/images/post-image-3.jpg";

const posts = [
    {
        id: 1,
        title: "5 Renovation Mistakes to Avoid",
        excerpt: "Learn the common pitfalls homeowners face and how to sidestep them effortlessly.",
        date: "12 April 2024",
        image: PostImg1,
    },
    {
        id: 2,
        title: "Top 2025 Kitchen Design Trends",
        excerpt: "Discover the colors, materials, and layouts defining modern kitchens this year.",
        date: "12 March 2025",
        image: PostImg2,
    },
    {
        id: 3,
        title: "How to Maximize Small Spaces",
        excerpt: "Smart remodeling ideas to make your compact home feel bigger and brighter.",
        date: "12 November 2023",
        image: PostImg3,
    },
];

const Blog = () => {
    return (
        <section id="d2c_blog">
            <div className="container">
                {/* Header */}
                <div className="d2c_section_header overflow-hidden">
                    <h5 className="d2c_subtitle" data-aos="fade-down" data-aos-delay="400">
                        Ideas Trends and Stories
                    </h5>
                    <h2 className="d2c_title animateText !normal-case">
                        Inspired with Expert Remodeling Tips
                    </h2>
                    <p data-aos="fade-up" data-aos-delay="600">
                        Dive into our regularly updated blog, packed with practical advice, creative inspiration,
                        renovation trends, and real home transformation stories—everything you need to remodel
                        confidently and beautifully.
                    </p>
                </div>

                {/* Blog Cards */}
                <div className="grid grid-cols-12 gap-6">
                    {posts.map((post, idx) => (
                        <div
                            key={post.id}
                            className={`col-span-12 md:col-span-6 lg:col-span-4 ${idx === 2 ? "md:col-start-4 lg:col-span-4" : ""
                                }`}
                        >
                            <div data-aos="fade-up" data-aos-delay={`${400 + idx * 200}`}>
                                <Link href="../blog-details">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        className="d2c_post_image w-full h-auto object-cover"
                                        placeholder="blur"
                                    />
                                </Link>
                                <div className="py-5 space-y-4">
                                    <h4>
                                        <Link href="../blog-details" className="d2c_blog_title">
                                            {post.title}
                                        </Link>
                                    </h4>
                                    <p>{post.excerpt}</p>
                                    <p className="text-base">{post.date}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Button */}
                <div className="text-center mt-10" data-aos="fade-up" data-aos-delay="400">
                    <Link href="../blog" className="group d2c_btn">
                        <span className="relative z-10">Explore More</span>
                        <span className="d2c_btn_expand">
                            <span className="d2c_btn_icon">
                                <FaAngleRight />
                            </span>
                        </span>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Blog;
