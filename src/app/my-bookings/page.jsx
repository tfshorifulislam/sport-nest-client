import MyBookingsPageCard from '@/components/MyBookingsPageCard';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react';

const MyBookingsPage = async () => {

    const session = await auth.api.getSession({
        headers: await headers()
    });

    const user = session?.user;

    const userToken = await auth.api.getToken({
        headers: await headers()
    });
    console.log(userToken)

    const res = await fetch(`http://localhost:5000/bookings/${user?.id}`,
        {
            method: "GET",
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${userToken?.token}`
            },
            cache: 'no-store'
        });

    const myBookingsList = await res.json();

    return (
        <section className="min-h-screen bg-slate-50 py-14">

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* HEADER */}
                <div className="relative mb-10 overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-emerald-600 via-emerald-500 to-teal-500 px-5 py-8 shadow-lg sm:px-8 sm:py-10 lg:px-12 lg:py-14">

                    {/* BLUR EFFECT */}
                    <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-white/10 blur-3xl"></div>

                    <div className="absolute -bottom-24 left-0 h-60 w-60 rounded-full bg-black/10 blur-3xl"></div>

                    <div className="relative flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">

                        {/* LEFT CONTENT */}
                        <div className="max-w-3xl">

                            <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-white backdrop-blur-md sm:text-xs">
                                Booking Dashboard
                            </span>

                            <h1 className="mt-5 text-3xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                                My Bookings
                            </h1>

                            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/80 sm:text-base sm:leading-8">
                                Track your facility reservations, manage schedules,
                                and monitor your activity with a clean booking experience.
                            </p>

                            {/* STATS */}
                            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">

                                {/* ACTIVE */}
                                <div className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-lg">

                                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                                        Active Bookings
                                    </p>

                                    <h3 className="mt-3 text-3xl font-black text-white">
                                        {myBookingsList?.length}
                                    </h3>
                                </div>

                                {/* STATUS */}
                                <div className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-lg">

                                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                                        Booking Status
                                    </p>

                                    <h3 className="mt-3 text-2xl font-black text-white">
                                        Pending
                                    </h3>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT SUMMARY CARD */}
                        <div className="w-full max-w-md rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur-xl sm:p-8">

                            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/60">
                                Total Reservations
                            </p>

                            <h2 className="mt-4 text-5xl font-black leading-none text-white sm:text-6xl">
                                {myBookingsList?.length}
                            </h2>

                            {/* PROGRESS */}
                            <div className="mt-6 h-2 overflow-hidden rounded-full bg-white/10">

                                <div className="h-full w-[75%] rounded-full bg-white"></div>
                            </div>

                            <p className="mt-4 text-sm leading-7 text-white/75">
                                Overview of your current sports facility bookings and activity.
                            </p>
                        </div>
                    </div>
                </div>

                {/* EMPTY */}
                {
                    myBookingsList?.length === 0 && (

                        <div className="flex min-h-[450px] flex-col items-center justify-center rounded-[40px] border border-dashed border-slate-300 bg-white px-6 text-center shadow-sm">

                            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-emerald-50">

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-10 w-10 text-emerald-600"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={1.8}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M8 7V3m8 4V3m-9 8h10m-11 9h12a2 2 0 002-2V7a2 2 0 00-2-2H6a2 2 0 00-2 2v11a2 2 0 002 2z"
                                    />
                                </svg>
                            </div>

                            <h2 className="mt-8 text-3xl font-black text-slate-900">
                                No Bookings Yet
                            </h2>

                            <p className="mt-4 max-w-md text-sm leading-7 text-slate-500">
                                You haven’t reserved any sports facility yet.
                                Start booking your favorite courts and turfs.
                            </p>
                        </div>
                    )
                }

                {/* BOOKINGS */}
                <div className="space-y-10">

                    {
                        myBookingsList?.map((bookingCard) => (

                            <div
                                key={bookingCard?._id}
                                className="group overflow-hidden rounded-[36px] border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                            >

                                <MyBookingsPageCard bookingCard={bookingCard} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default MyBookingsPage;