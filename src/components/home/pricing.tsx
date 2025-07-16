"use client";
import React from "react";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa6";
import { FaRegCircleCheck } from "react-icons/fa6";

const plans = [
    {
        title: "Starter Plan",
        desc: "Perfect for minor upgrades and small-scale improvements",
        price: "$1,499",
        delay: 400,
        features: [
            "Up to 1 Room Renovation",
            "Material & Layout Planning",
            "1 Design Revision",
            "On-Site Supervision",
            "Estimated Timeline: 1 Week",
        ],
    },
    {
        title: "Advanced Plan",
        desc: "Ideal for kitchen, bath, balcony or living room makeovers",
        price: "$3,799",
        delay: 600,
        features: [
            "Multi-Room Remodeling",
            "Custom Interior Design",
            "2 Design Revisions",
            "Dedicated Project Manager",
            "Estimated Timeline: 2-3 Weeks",
        ],
    },
    {
        title: "Premium Plan",
        desc: "Perfect for minor upgrades and small-scale improvement",
        price: "Custom Quote",
        delay: 800,
        features: [
            "Up to 1 Room Renovation",
            "Material & Layout Planning",
            "1 Design Revision",
            "On-Site Supervision",
            "Estimated Timeline: 1 Week",
        ],
    },
];

const Pricing = () => {
    return (
        <section id="d2c_pricing">
            <div className="container">
                <div className="d2c_section_header overflow-hidden">
                    <h5
                        className="d2c_subtitle"
                        data-aos="fade-down"
                        data-aos-delay="400"
                    >
                        Ideas Trends and Stories
                    </h5>
                    <h2 className="d2c_title animateText !normal-case">
                        Simple Transparent Packages
                    </h2>
                    <p data-aos="fade-up" data-aos-delay="600">
                        Whether you&apos;re planning a quick upgrade or a full renovation, our
                        flexible pricing options ensure you get expert service with no
                        hidden costs.
                    </p>
                </div>

                <div className="grid grid-cols-12 gap-6">
                    {plans.map((plan) => (
                        <div
                            className={`col-span-12 md:col-span-6 lg:col-span-4 ${plan.title === "Premium Plan" ? "md:col-start-4" : ""
                                }`}
                            key={plan.title}
                        >
                            <div
                                className="d2c_pricing_card"
                                data-aos="fade-up"
                                data-aos-delay={plan.delay}
                            >
                                <h4>{plan.title}</h4>
                                <p>{plan.desc}</p>
                                <h3 className="d2c_price">{plan.price}</h3>

                                <ul className="space-y-4">
                                    {plan.features.map((feature, index) => (
                                        <li key={index} className="flex items-start gap-2">
                                            <FaRegCircleCheck className="mt-1" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                {/* Button */}
                                <Link href="#" className="group d2c_btn mt-6 inline-block">
                                    <span className="relative z-10">Get started</span>
                                    <span className="d2c_btn_expand">
                                        <span className="d2c_btn_icon">
                                            <FaAngleRight />
                                        </span>
                                    </span>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
