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

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/bookings/${user?.id}`,
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
        <section className="min-h-screen bg-slate-50 py-8 sm:py-10">

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* HERO */}
                <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white">

                    <div className="grid gap-8 lg:grid-cols-[1.4fr_.8fr]">

                        {/* LEFT */}
                        <div className="p-6 sm:p-8 lg:p-10">

                            <span className="inline-flex rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-700">
                                Booking Dashboard
                            </span>

                            <h1 className="mt-5 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
                                My Bookings
                            </h1>

                            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
                                Manage your reservations, monitor schedules,
                                and track your sports facility activity.
                            </p>

                            {/* STATS */}
                            <div className="mt-8 grid grid-cols-2 gap-4">

                                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">

                                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                                        Total Bookings
                                    </p>

                                    <h3 className="mt-3 text-3xl font-black text-slate-900">
                                        {myBookingsList?.length}
                                    </h3>
                                </div>

                                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">

                                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                                        Status
                                    </p>

                                    <div className="mt-4 inline-flex rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-700">
                                        Active
                                    </div>
                                </div>

                            </div>

                        </div>

                        {/* RIGHT */}
                        <div className="border-t border-slate-200 bg-slate-50 p-6 sm:p-8 lg:border-l lg:border-t-0">

                            <div className="rounded-3xl bg-white p-6 shadow-sm border border-slate-100">

                                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                                    Reservation Summary
                                </p>

                                <h2 className="mt-5 text-5xl font-black text-slate-900">
                                    {myBookingsList?.length}
                                </h2>

                                <p className="mt-4 text-sm leading-7 text-slate-500">
                                    Total reservations you currently have in the platform.
                                </p>

                                {/* Progress */}
                                <div className="mt-6 h-2 overflow-hidden rounded-full bg-slate-100">

                                    <div
                                        className="h-full rounded-full bg-emerald-500"
                                        style={{
                                            width: `${Math.min(
                                                myBookingsList?.length * 20,
                                                100
                                            )}%`,
                                        }}
                                    />

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

                {/* EMPTY */}
                {
                    myBookingsList?.length === 0 && (

                        <div className="mt-8 flex min-h-[350px] flex-col items-center justify-center rounded-3xl border border-dashed border-slate-300 bg-white px-6 text-center">

                            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50">

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-8 w-8 text-emerald-600"
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

                            <h2 className="mt-6 text-2xl font-black text-slate-900">
                                No Bookings Yet
                            </h2>

                            <p className="mt-3 max-w-md text-sm leading-7 text-slate-500">
                                You haven’t booked any sports facility yet.
                            </p>

                        </div>
                    )
                }

                {/* BOOKINGS */}
                <div className="mt-8 space-y-6">

                    {
                        myBookingsList?.map((bookingCard) => (

                            <div
                                key={bookingCard?._id}
                                className="
                            overflow-hidden
                            rounded-3xl
                            border
                            border-slate-200
                            bg-white
                            shadow-sm
                            transition-all
                            duration-300
                            hover:shadow-lg
                        "
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