import Link from "next/link";
import React from "react";
import { FiArrowRight } from "react-icons/fi";

const CallToAction = () => {
    return (
        <section className="bg-slate-50 py-16 sm:py-20">

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                <div
                    className="
                        relative
                        overflow-hidden
                        rounded-[36px]
                        bg-gradient-to-br
                        from-emerald-600
                        via-emerald-500
                        to-teal-500
                        px-6
                        py-14
                        sm:px-10
                        lg:px-16
                        lg:py-20
                    "
                >

                    {/* BLUR SHAPES */}
                    <div className="absolute -left-16 top-0 h-64 w-64 rounded-full bg-white/10 blur-3xl"></div>

                    <div className="absolute -bottom-20 right-0 h-72 w-72 rounded-full bg-black/10 blur-3xl"></div>

                    <div className="relative z-10 flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">

                        {/* LEFT CONTENT */}
                        <div className="max-w-3xl">

                            <span
                                className="
                                    inline-flex
                                    rounded-full
                                    border
                                    border-white/20
                                    bg-white/10
                                    px-4
                                    py-1
                                    text-xs
                                    font-semibold
                                    uppercase
                                    tracking-[0.2em]
                                    text-white
                                    backdrop-blur
                                "
                            >
                                Start Playing Today
                            </span>

                            <h2
                                className="
                                    mt-6
                                    text-3xl
                                    font-black
                                    leading-tight
                                    tracking-tight
                                    text-white
                                    sm:text-4xl
                                    lg:text-5xl
                                "
                            >
                                Ready To Book Your
                                Favorite Sports Venue?
                            </h2>

                            <p
                                className="
                                    mt-5
                                    max-w-2xl
                                    text-sm
                                    leading-7
                                    text-white/80
                                    sm:text-base
                                    sm:leading-8
                                "
                            >
                                Discover premium football turfs, cricket grounds,
                                badminton courts, tennis clubs, gyms, and more —
                                all in one seamless booking platform.
                            </p>

                        </div>

                        {/* BUTTONS */}
                        <div className="flex flex-col gap-4 sm:flex-row">

                            <Link
                                href="/all-facilities"
                                className="
                                    inline-flex
                                    h-14
                                    items-center
                                    justify-center
                                    rounded-2xl
                                    bg-white
                                    px-7
                                    text-sm
                                    font-bold
                                    text-emerald-700
                                    transition-all
                                    duration-300
                                    hover:scale-[1.02]
                                    hover:bg-slate-100
                                "
                            >
                                Explore Facilities

                                <FiArrowRight className="ml-2 text-lg" />
                            </Link>

                            <Link
                                href="/add-facilities"
                                className="
                                    inline-flex
                                    h-14
                                    items-center
                                    justify-center
                                    rounded-2xl
                                    border
                                    border-white/20
                                    bg-white/10
                                    px-7
                                    text-sm
                                    font-bold
                                    text-white
                                    backdrop-blur
                                    transition-all
                                    duration-300
                                    hover:bg-white/20
                                "
                            >
                                Add Your Facility
                            </Link>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default CallToAction;