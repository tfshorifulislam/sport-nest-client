import Link from 'next/link';
import React from 'react';

const Banner = () => {
    return (

        <section
            className="relative flex min-h-screen pb-10 py-10 items-center justify-center overflow-hidden bg-cover bg-center"
            style={{
                backgroundImage: "url('/banner4.jpg')",
            }}
        >

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/70"></div>

            {/* LIGHT EFFECT */}
            <div className="absolute top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-emerald-500/20 blur-3xl"></div>

            {/* CONTENT */}
            <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">

                {/* MINI TAG */}
                <div className="inline-flex items-center rounded-full border border-white/10 bg-white/10 px-5 py-2 backdrop-blur-xl">

                    <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-emerald-300">

                        SportNest
                    </span>
                </div>

                {/* HEADING */}
                <h1 className="mt-8 text-5xl font-black leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-8xl">

                    Book Your
                    <br />

                    <span className="text-emerald-400">
                        Perfect Game
                    </span>
                </h1>

                {/* TEXT */}
                <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">

                    Premium football turfs, cricket grounds,
                    badminton courts, and indoor arenas —
                    all in one seamless booking platform.
                </p>

                {/* BUTTONS */}
                <div className="mt-8 flex items-center justify-center gap-3 sm:gap-4">

                    <Link
                        href="/all-facilities"
                        className="rounded-full bg-emerald-500 px-5 py-3 text-[12px] font-semibold text-white shadow-[0_10px_35px_rgba(16,185,129,0.35)] transition duration-300 hover:scale-105 hover:bg-emerald-600 sm:px-8 sm:text-sm"
                    >
                        Explore Facilities
                    </Link>

                    <Link
                        href="/my-bookings"
                        className="rounded-full border border-white/15 bg-white/10 px-5 py-3 text-[12px] font-semibold text-white backdrop-blur-md transition duration-300 hover:bg-white/20 sm:px-8 sm:text-sm"
                    >
                        My Bookings
                    </Link>

                </div>

                {/* PREMIUM FLOATING STATS */}
                <div className="mx-auto mt-10 grid max-w-5xl grid-cols-2 gap-4 md:mt-16 lg:grid-cols-4">

                    <div className="rounded-3xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur-xl md:p-7">

                        <h3 className="text-3xl font-black text-white md:text-4xl">
                            500+
                        </h3>

                        <p className="mt-2 text-xs text-slate-300 md:text-sm">
                            Premium Venues
                        </p>
                    </div>

                    <div className="rounded-3xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur-xl md:p-7">

                        <h3 className="text-3xl font-black text-white md:text-4xl">
                            24/7
                        </h3>

                        <p className="mt-2 text-xs text-slate-300 md:text-sm">
                            Instant Booking
                        </p>
                    </div>

                    <div className="rounded-3xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur-xl md:p-7">

                        <h3 className="text-3xl font-black text-white md:text-4xl">
                            10K+
                        </h3>

                        <p className="mt-2 text-xs text-slate-300 md:text-sm">
                            Active Players
                        </p>
                    </div>

                    <div className="rounded-3xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur-xl md:p-7">

                        <h3 className="text-3xl font-black text-white md:text-4xl">
                            99%
                        </h3>

                        <p className="mt-2 text-xs text-slate-300 md:text-sm">
                            Happy Members
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;