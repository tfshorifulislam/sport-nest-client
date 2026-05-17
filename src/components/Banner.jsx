import Link from 'next/link';
import React from 'react';

const Banner = () => {
    return (
        <section
            className="relative flex h-[92vh] items-center justify-center overflow-hidden bg-cover bg-center"
            style={{
                backgroundImage: "url('/banner4.jpg')",
            }}
        >

            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>


            <div className="absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/20 blur-3xl"></div>


            <div className="relative z-10 max-w-4xl px-6 text-center text-white">


                <div className="mb-5 inline-block rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur-md">
                    ⚽ Book Premium Sports Facilities
                </div>


                <h1 className="text-5xl font-extrabold leading-tight tracking-tight md:text-7xl">
                    Play Smarter,
                    <br />
                    <span className="text-emerald-400">
                        Book Faster
                    </span>
                </h1>


                <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-200 md:text-lg">
                    Find football turfs, cricket grounds, badminton courts,
                    gyms, and more — all in one modern platform built for sports lovers.
                </p>


                <div className="mt-10 flex  items-center justify-center gap-4 sm:flex-row">

                    <Link
                        href="/all-facilities"
                        className="rounded-full bg-emerald-600 px-10 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/30 transition duration-300 hover:scale-105 hover:bg-emerald-700 text-[12px] sm:text-sm"
                    >
                        Explore Facilities
                    </Link>

                    <Link
                        href="/my-bookings"
                        className="rounded-full border border-white/20 bg-white/10 px-8 py-3 text-sm font-semibold text-white backdrop-blur-md transition duration-300 hover:bg-white/20 text-[12px] sm:text-sm"
                    >
                        My Bookings
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Banner;