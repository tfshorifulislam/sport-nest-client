import Link from "next/link";
import React from "react";

const Banner = () => {
    return (
        <section
            className="relative flex min-h-screen items-center justify-center overflow-hidden bg-cover bg-center"
            style={{
                backgroundImage: "url('/banner5.jpg')",
            }}
        >

            {/* Single Overlay */}
            <div className="absolute inset-0 bg-black/65" />

            {/* Emerald Glow */}
            <div className="absolute left-1/2 top-20 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-emerald-600/20 blur-[120px]" />

            {/* Content */}
            <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center px-6 py-28 text-center">

                {/* Badge */}
                <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/10 px-5 py-2 backdrop-blur-2xl">

                    <div className="relative flex h-2.5 w-2.5">

                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />

                        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />

                    </div>

                    <span className="text-[11px] font-semibold uppercase tracking-[0.35em] text-emerald-400">
                        SportNest • Premium Sports Booking
                    </span>

                </div>

                {/* Heading */}
                <h1 className="mt-8 max-w-5xl text-5xl font-black leading-[0.95] tracking-[-0.05em] text-white sm:text-6xl lg:text-[7rem]">

                    Play Hard.
                    <br />

                    <span className="bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600 bg-clip-text text-transparent">
                        Book Smarter.
                    </span>

                </h1>

                {/* Description */}
                <p className="mt-8 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">

                    Discover elite football turfs, cricket arenas,
                    badminton courts, futsal grounds, and premium sports venues
                    across Bangladesh — all in one seamless booking platform.

                </p>

                {/* CTA Buttons */}
                <div className="mt-12 flex flex-wrap items-center justify-center gap-4">

                    <Link
                        href="/all-facilities"
                        className="group relative overflow-hidden rounded-2xl bg-emerald-600 px-8 py-4 text-sm font-semibold text-white shadow-[0_20px_60px_-15px_rgba(5,150,105,0.55)] transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-500"
                    >

                        <span className="relative z-10 flex items-center gap-2">

                            Explore Facilities

                            <span className="transition-transform duration-300 group-hover:translate-x-1">
                                →
                            </span>

                        </span>

                    </Link>

                    <Link
                        href="/my-bookings"
                        className="rounded-2xl border border-white/15 bg-white/5 px-8 py-4 text-sm font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:border-white/25 hover:bg-white/10"
                    >
                        My Bookings
                    </Link>

                </div>

                {/* Stats */}
                <div className="mt-20 grid w-full max-w-5xl grid-cols-2 gap-5 lg:grid-cols-4">

                    <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.06]">

                        <h3 className="text-4xl font-black text-white">
                            500+
                        </h3>

                        <p className="mt-2 text-sm text-slate-400">
                            Premium Venues
                        </p>

                    </div>

                    <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.06]">

                        <h3 className="text-4xl font-black text-white">
                            24/7
                        </h3>

                        <p className="mt-2 text-sm text-slate-400">
                            Instant Booking
                        </p>

                    </div>

                    <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.06]">

                        <h3 className="text-4xl font-black text-white">
                            10K+
                        </h3>

                        <p className="mt-2 text-sm text-slate-400">
                            Happy Players
                        </p>

                    </div>

                    <div className="rounded-3xl border border-emerald-600/20 bg-emerald-600/10 p-7 backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1">

                        <h3 className="text-4xl font-black text-emerald-400">
                            4.98
                        </h3>

                        <p className="mt-2 text-sm text-emerald-100/70">
                            Average Rating
                        </p>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default Banner;