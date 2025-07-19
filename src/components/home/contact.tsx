"use client";
import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast, { Toaster } from "react-hot-toast";
import { FaAngleRight } from "react-icons/fa6";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

import useSendConsultationEmail from "@/app/queries/hooks/useSendConsultationEmail";
import { EmailTemplateProps } from "@/app/queries/types/email";
import preloaderGif from "@/assets/images/preloader.gif";
import { emailSchema } from "@/app/queries/types/email";

const Contact = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isSubmitting },
	} = useForm<EmailTemplateProps>({
		resolver: zodResolver(emailSchema),
	});
	const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
	const { executeRecaptcha } = useGoogleReCaptcha();

	const { sendEmail, isPending } = useSendConsultationEmail();

	const handleReCaptchaVerify = useCallback(async () => {
		if (!executeRecaptcha) {
			console.warn("Recaptcha not ready");
			return;
		}
		const token = await executeRecaptcha("send_consultation_email");
		if (!token) {
			console.warn("Recaptcha token not generated");
			return;
		}
		setRecaptchaToken(token);
	}, [executeRecaptcha]);

	useEffect(() => {
		handleReCaptchaVerify();
	}, [handleReCaptchaVerify]);

	const onSubmit = useCallback(
		async (data: EmailTemplateProps) => {
			if (!recaptchaToken) {
				console.warn("No reCAPTCHA token available");
				toast.error("Please wait for reCAPTCHA to load");
				return;
			}

			try {
				await sendEmail(
					{ ...data, recaptchaToken },
					{
						onSuccess: () => {
							toast.success("Email sent successfully");
							reset();
						},
						onError: () => {
							toast.error("Email sending failed");
						},
					}
				);
			} catch (error) {
				console.error(error);
			}
		},
		[recaptchaToken, sendEmail, reset]
	);

	return (
		<section id="contact">
			<Toaster position="top-right" reverseOrder={false} />
			<div className="container">
				{isPending ? (
					<div className="text-center">
						<Image
							src={preloaderGif}
							alt="Preloader"
							className="w-20 h-20 mx-auto mb-4 object-contain"
						/>
						<h1 className="text-secondary text-2xl font-primary font-bold">
							Cruz Remodeling
						</h1>
					</div>
				) : (
					<>
						<div className="section_header overflow-hidden">
							<h5
								className="subtitle"
								data-aos="fade-down"
								data-aos-delay="400"
							>
								Get In Touch
							</h5>
							<h2 className="title animateText !normal-case">
								Ready to Start Your Project?
							</h2>
							<p data-aos="fade-up" data-aos-delay="800">
								Let&apos;s discuss your vision and create a plan that brings
								your dream space to life. Contact us today for a free
								consultation.
							</p>
						</div>

						<div className="max-w-full md:max-w-[85%] xl:max-w-3/4 mx-auto p-6 lg:p-10 bg-light-blue rounded">
							<form
								autoComplete="off"
								className="space-y-8"
								onSubmit={handleSubmit(onSubmit)}
								data-aos="fade-up"
								data-aos-delay="400"
							>
								{/* Name Inputs */}
								<div className="grid grid-cols-1 gap-8 sm:grid-cols-6">
									<div className="sm:col-span-3">
										<input
											type="text"
											autoComplete="off"
											className="form-control"
											placeholder="Enter your first name"
											{...register("firstName", { required: true })}
										/>
										{errors.firstName && (
											<p className="text-red-500 text-sm">
												{errors.firstName.message}
											</p>
										)}
									</div>
									<div className="sm:col-span-3">
										<input
											type="text"
											autoComplete="off"
											className="form-control"
											placeholder="Enter your last name"
											{...register("lastName", { required: true })}
										/>
										{errors.lastName && (
											<p className="text-red-500 text-sm">
												{errors.lastName.message}
											</p>
										)}
									</div>
								</div>

								{/* Email and Phone */}
								<div className="grid grid-cols-1 gap-8 sm:grid-cols-6">
									<div className="sm:col-span-3">
										<input
											type="email"
											autoComplete="off"
											className="form-control"
											placeholder="Enter your email"
											{...register("email", { required: true })}
										/>
										{errors.email && (
											<p className="text-red-500 text-sm">
												{errors.email.message}
											</p>
										)}
									</div>
									<div className="sm:col-span-3">
										<input
											type="tel"
											autoComplete="off"
											className="form-control"
											placeholder="(555) 123-4567"
											{...register("phone")}
										/>
										{errors.phone && (
											<p className="text-red-500 text-sm">
												{errors.phone.message}
											</p>
										)}
									</div>
								</div>

								{/* Project Type */}
								<div>
									<select
										className="form-control"
										{...register("projectType", { required: true })}
									>
										<option value="">
											What type of project are you planning?
										</option>
										<option value="Kitchen Remodel">Kitchen Remodel</option>
										<option value="Bathroom Remodel">Bathroom Remodel</option>
										<option value="Living Room">Living Room</option>
										<option value="Bedroom">Bedroom</option>
										<option value="Basement">Basement</option>
										<option value="Attic">Attic</option>
										<option value="Outdoor/Deck">Outdoor/Deck</option>
										<option value="Full Home">Full Home</option>
										<option value="Other">Other</option>
									</select>
									{errors.projectType && (
										<p className="text-red-500 text-sm">
											{errors.projectType.message}
										</p>
									)}
								</div>

								{/* Room Type and Project Size */}
								<div className="grid grid-cols-1 gap-8 sm:grid-cols-6">
									<div className="sm:col-span-3">
										<select
											className="form-control"
											{...register("roomType", { required: true })}
										>
											<option value="">How many rooms are involved?</option>
											<option value="1 Room">1 Room</option>
											<option value="2-3 Rooms">2-3 Rooms</option>
											<option value="4-5 Rooms">4-5 Rooms</option>
											<option value="6+ Rooms">6+ Rooms</option>
											<option value="Full House">Full House</option>
										</select>
										{errors.roomType && (
											<p className="text-red-500 text-sm">
												{errors.roomType.message}
											</p>
										)}
									</div>
									<div className="sm:col-span-3">
										<select
											className="form-control"
											{...register("projectSize", { required: true })}
										>
											<option value="">
												What&apos;s the approximate square footage?
											</option>
											<option value="Under 500 sq ft">Under 500 sq ft</option>
											<option value="500-1000 sq ft">500-1000 sq ft</option>
											<option value="1000-2000 sq ft">1000-2000 sq ft</option>
											<option value="2000-3000 sq ft">2000-3000 sq ft</option>
											<option value="Over 3000 sq ft">Over 3000 sq ft</option>
											<option value="Not sure">Not sure</option>
										</select>
										{errors.projectSize && (
											<p className="text-red-500 text-sm">
												{errors.projectSize.message}
											</p>
										)}
									</div>
								</div>

								{/* Timeline and Budget */}
								<div className="grid grid-cols-1 gap-8 sm:grid-cols-6">
									<div className="sm:col-span-3">
										<select
											className="form-control"
											{...register("timeline", { required: true })}
										>
											<option value="">When would you like to start?</option>
											<option value="ASAP">ASAP</option>
											<option value="Within 1 month">Within 1 month</option>
											<option value="1-3 months">1-3 months</option>
											<option value="3-6 months">3-6 months</option>
											<option value="6+ months">6+ months</option>
											<option value="Just exploring">Just exploring</option>
										</select>
										{errors.timeline && (
											<p className="text-red-500 text-sm">
												{errors.timeline.message}
											</p>
										)}
									</div>
									<div className="sm:col-span-3">
										<select
											className="form-control"
											{...register("budget", { required: true })}
										>
											<option value="">What&apos;s your budget range?</option>
											<option value="Under $10,000">Under $10,000</option>
											<option value="$10,000 - $25,000">
												$10,000 - $25,000
											</option>
											<option value="$25,000 - $50,000">
												$25,000 - $50,000
											</option>
											<option value="$50,000 - $100,000">
												$50,000 - $100,000
											</option>
											<option value="$100,000 - $200,000">
												$100,000 - $200,000
											</option>
											<option value="Over $200,000">Over $200,000</option>
											<option value="Not sure">Not sure</option>
										</select>
										{errors.budget && (
											<p className="text-red-500 text-sm">
												{errors.budget.message}
											</p>
										)}
									</div>
								</div>

								{/* Project Details */}
								<div>
									<textarea
										rows={4}
										className="form-control"
										placeholder="Tell us about your project vision, specific requirements, or any questions you have..."
										{...register("message", { required: true })}
									></textarea>
									{errors.message && (
										<p className="text-red-500 text-sm">
											{errors.message.message}
										</p>
									)}
								</div>

								{/* Submit */}
								<div className="text-center">
									<button
										type="submit"
										disabled={isSubmitting}
										className={`btn group relative ${
											isSubmitting ? "opacity-50 cursor-not-allowed" : ""
										}`}
									>
										<span className="relative z-10">
											{isSubmitting ? "Sending..." : "Send Message"}
										</span>
										<span className="btn_expand">
											<span className="btn_icon">
												<FaAngleRight />
											</span>
										</span>
									</button>
								</div>
							</form>
						</div>
					</>
				)}
			</div>
		</section>
	);
};

export default Contact;
