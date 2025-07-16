'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import { FaAngleDown, FaAngleRight } from 'react-icons/fa6';

interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    package: string;
    message: string;
}

const Contact = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
        watch,
    } = useForm<FormData>();

    const selectedPackage = watch('package');

    const onSubmit = async (data: FormData) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        toast.success('Form submitted successfully!');
        console.log('Submitted Data:', data);
        reset();
    };

    return (
        <section id="d2c_contact">
            <Toaster position="top-right" reverseOrder={false} />
            <div className="container">
                <div className="d2c_section_header overflow-hidden">
                    <h5 className="d2c_subtitle" data-aos="fade-down" data-aos-delay="400">
                        Answers to Your Common Questions
                    </h5>
                    <h2 className="d2c_title animateText !normal-case">Let&apos;s Bring Your Vision to Life</h2>
                    <p data-aos="fade-up" data-aos-delay="600">
                        Have questions or ready to start your remodeling journey? Our team is here to guide you through every detail. Reach out today and let&apos;s build something.
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
                                    {...register('firstName', { required: true })}
                                />
                                {errors.firstName && (
                                    <p className="text-red-500 text-sm">First name is required</p>
                                )}
                            </div>
                            <div className="sm:col-span-3">
                                <input
                                    type="text"
                                    autoComplete="off"
                                    className="form-control"
                                    placeholder="Enter your last name"
                                    {...register('lastName', { required: true })}
                                />
                                {errors.lastName && (
                                    <p className="text-red-500 text-sm">Last name is required</p>
                                )}
                            </div>
                        </div>

                        {/* Email and Package */}
                        <div className="grid grid-cols-1 gap-8 sm:grid-cols-6">
                            <div className="sm:col-span-3">
                                <input
                                    type="email"
                                    autoComplete="off"
                                    className="form-control"
                                    placeholder="Enter your email"
                                    {...register('email', { required: true })}
                                />
                                {errors.email && (
                                    <p className="text-red-500 text-sm">Email is required</p>
                                )}
                            </div>

                            <div className="sm:col-span-3">
                                <div className="relative border-b border-b-[#C2D6C9]/60">
                                    <select
                                        className={`block appearance-none form-control border-none px-1 ${selectedPackage && selectedPackage !== ''
                                                ? 'text-neutral'
                                                : 'text-neutral/70'
                                            }`}
                                        {...register('package', {
                                            required: 'Please select a package',
                                        })}
                                        defaultValue=""
                                    >
                                        <option value="" disabled>
                                            Choose your package
                                        </option>
                                        <option value="starter">Starter Plan - $1,499</option>
                                        <option value="advanced">Advanced Plan - $3,799</option>
                                        <option value="premium">Premium Plan - Custom Quote</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center px-2 text-neutral/70">
                                        <FaAngleDown />
                                    </div>
                                </div>
                                {errors.package && (
                                    <p className="text-red-500 text-sm">{errors.package.message}</p>
                                )}
                            </div>
                        </div>

                        {/* Message */}
                        <div>
                            <textarea
                                rows={4}
                                className="form-control"
                                placeholder="Write your query"
                                {...register('message', { required: true })}
                            ></textarea>
                            {errors.message && (
                                <p className="text-red-500 text-sm">Message is required</p>
                            )}
                        </div>

                        {/* Submit */}
                        <div className="text-center">
                            <button
                                type="submit"
                                className={`d2c_btn group relative ${isSubmitting
                                        ? '!text-transparent after:content-[""] after:absolute after:w-4 after:h-4 after:rounded-full after:border-2 after:border-t-primary after:border-white after:animate-spin after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2'
                                        : ''
                                    }`}
                                disabled={isSubmitting}
                            >
                                <span className="relative z-10">Get started</span>
                                {!isSubmitting && (
                                    <span className="d2c_btn_expand">
                                        <span className="d2c_btn_icon">
                                            <FaAngleRight />
                                        </span>
                                    </span>
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
