'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import postImg1 from '@/assets/images/post-image-1.jpg';
import postImg2 from '@/assets/images/post-image-2.jpg';
import postImg3 from '@/assets/images/post-image-3.jpg';

const SingleBlog = () => {
    return (
        <section>
            <div className="container">
                {/* Post content */}
                <div className="flex flex-col flex-wrap space-y-5">
                    <h1 className="d2c_title" data-aos="fade-up" data-aos-delay="400">
                        5 Renovation Mistakes to Avoid
                    </h1>
                    <p className="text-base" data-aos="fade-up" data-aos-delay="600">
                        12 November 2023
                    </p>

                    <div data-aos="fade-up" data-aos-delay="800">
                        <Image
                            src={postImg1}
                            alt="Post Image"
                            className="rounded w-full h-auto"
                            placeholder="blur"
                        />
                    </div>

                    <div data-aos="fade-up" data-aos-delay="400">
                        <h4>Skipping the Budget Planning</h4>
                        <p>
                            Many start without a clear budget, only to run into financial surprises midway.
                            Always set a realistic budget and add a 10–15% buffer for unexpected expenses.
                            Skipping building permits may seem like a shortcut, but it can delay your project or lead to fines.
                            Always check local regulations and secure the necessary approvals.
                        </p>
                    </div>

                    <div data-aos="fade-up" data-aos-delay="400">
                        <h4>Choosing Style Over Function</h4>
                        <p>
                            Aesthetic upgrades are great—but don’t overlook functionality. Think about traffic flow,
                            storage needs, and practical layouts to ensure your remodel serves your lifestyle.
                            A lower bid might be tempting, but it can mean poor quality or hidden fees.
                            Instead, hire based on reputation, references, and clear communication.
                        </p>
                    </div>

                    <div data-aos="fade-up" data-aos-delay="400">
                        <h4>Natural Wood Tones</h4>
                        <p>
                            Earthy palettes and warm wood finishes are replacing all-white kitchens.
                            Oak and walnut cabinetry are especially popular for a cozy, organic look.
                            While purely decorative shelving is
                        </p>
                    </div>
                </div>

                {/* Latest News Section */}
                <div className="mt-10 lg:mt-14 xl:mt-20">
                    <div className="d2c_section_header">
                        <h2 className="d2c_title animateText !normal-case">Latest News</h2>
                    </div>

                    <div className="grid grid-cols-12 gap-6">
                        <div className="col-span-12 md:col-span-6 lg:col-span-4">
                            <div data-aos="fade-up" data-aos-delay="400">
                                <Link href="/blog-details">
                                    <Image
                                        src={postImg1}
                                        alt="Post Image"
                                        className="d2c_post_image w-full h-auto"
                                        placeholder="blur"
                                    />
                                </Link>
                                <div className="py-5 space-y-4">
                                    <h4>
                                        <Link href="/blog-details" className="d2c_blog_title">
                                            5 Renovation Mistakes to Avoid
                                        </Link>
                                    </h4>
                                    <p>Learn the common pitfalls homeowners face and how to sidestep them effortlessly.</p>
                                    <p className="text-base">12 April 2024</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-span-12 md:col-span-6 lg:col-span-4">
                            <div data-aos="fade-up" data-aos-delay="600">
                                <Link href="/blog-details">
                                    <Image
                                        src={postImg2}
                                        alt="Post Image"
                                        className="d2c_post_image w-full h-auto"
                                        placeholder="blur"
                                    />
                                </Link>
                                <div className="py-5 space-y-4">
                                    <h4>
                                        <Link href="/blog-details" className="d2c_blog_title">
                                            Top 2025 Kitchen Design Trends
                                        </Link>
                                    </h4>
                                    <p>Discover the colors, materials, and layouts defining modern kitchens this year.</p>
                                    <p className="text-base">12 March 2025</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-span-12 md:col-span-6 md:col-start-4 lg:col-span-4">
                            <div data-aos="fade-up" data-aos-delay="800">
                                <Link href="/blog-details">
                                    <Image
                                        src={postImg3}
                                        alt="Post Image"
                                        className="d2c_post_image w-full h-auto"
                                        placeholder="blur"
                                    />
                                </Link>
                                <div className="py-5 space-y-4">
                                    <h4>
                                        <Link href="/blog-details" className="d2c_blog_title">
                                            How to Maximize Small Spaces
                                        </Link>
                                    </h4>
                                    <p>Smart remodeling ideas to make your compact home feel bigger and brighter.</p>
                                    <p className="text-base">12 November 2023</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SingleBlog;
