import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import Image from 'next/image';
import React from 'react';

const MyBookingsPage = async () => {

    const session = await auth.api.getSession({
        headers: await headers()
    });

    const user = session?.user;

    const res = await fetch(`http://localhost:5000/bookings/${user?.id}`, {
        cache: 'no-store'
    });

    const myBookingsList = await res.json();

    return (
        <section className="min-h-screen bg-slate-50 py-14">

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* HEADER */}
                <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">

                    <div>

                        <span className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
                            Booking Dashboard
                        </span>

                        <h1 className="mt-5 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
                            My Bookings
                        </h1>

                        <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
                            Track your reserved facilities, manage schedules,
                            and cancel bookings anytime.
                        </p>
                    </div>

                    {/* STATS */}
                    <div className="flex items-center gap-4">

                        <div className="rounded-[28px] border border-slate-200 bg-white px-7 py-5 shadow-sm">

                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                                Total Bookings
                            </p>

                            <h3 className="mt-2 text-4xl font-black text-emerald-600">
                                {myBookingsList?.length}
                            </h3>
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

                                <div className="grid lg:grid-cols-[420px_1fr]">

                                    {/* IMAGE */}
                                    <div className="relative h-[300px] overflow-hidden lg:h-full">

                                        {
                                            bookingCard?.facilityImage ? (

                                                <Image
                                                    src={bookingCard?.facilityImage}
                                                    alt={bookingCard?.facilityName || 'Facility'}
                                                    fill
                                                    sizes="(max-width: 768px) 100vw, 420px"
                                                    className="object-cover transition duration-500 group-hover:scale-105"
                                                />
                                            ) : (

                                                <div className="flex h-full items-center justify-center bg-slate-200 text-slate-500">
                                                    No Image Available
                                                </div>
                                            )
                                        }

                                        {/* Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                                        {/* Type Badge */}
                                        <div className="absolute left-6 top-6">

                                            <span className="rounded-full bg-white/90 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-emerald-700 backdrop-blur">
                                                {bookingCard?.facilityType}
                                            </span>
                                        </div>

                                        {/* Price */}
                                        <div className="absolute bottom-6 left-6">

                                            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
                                                Total Price
                                            </p>

                                            <h2 className="mt-2 text-4xl font-black text-white">
                                                ৳{bookingCard?.totalPrice}
                                            </h2>
                                        </div>
                                    </div>

                                    {/* CONTENT */}
                                    <div className="p-7 sm:p-10">

                                        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">

                                            <div>

                                                <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
                                                    {bookingCard?.facilityName}
                                                </h2>

                                                <p className="mt-4 flex items-center gap-2 text-sm text-slate-500">

                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="h-5 w-5 text-emerald-500"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                        strokeWidth={2}
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0L6.343 16.657A8 8 0 1117.657 16.657z"
                                                        />
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                                        />
                                                    </svg>

                                                    {bookingCard?.facilityLocation}
                                                </p>
                                            </div>

                                            {/* STATUS */}
                                            <div className="inline-flex h-fit items-center rounded-full border border-emerald-200 bg-emerald-50 px-5 py-2 text-sm font-semibold text-emerald-700">
                                                Confirmed
                                            </div>
                                        </div>

                                        {/* INFO GRID */}
                                        <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">

                                            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 transition hover:border-emerald-200 hover:bg-emerald-50/50">

                                                <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
                                                    Booking Date
                                                </p>

                                                <h4 className="mt-4 text-lg font-black text-slate-900">
                                                    {bookingCard?.bookingDate}
                                                </h4>
                                            </div>

                                            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 transition hover:border-emerald-200 hover:bg-emerald-50/50">

                                                <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
                                                    Time Slot
                                                </p>

                                                <h4 className="mt-4 text-lg font-black text-slate-900">
                                                    {bookingCard?.timeSlot}
                                                </h4>
                                            </div>

                                            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 transition hover:border-emerald-200 hover:bg-emerald-50/50">

                                                <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
                                                    Duration
                                                </p>

                                                <h4 className="mt-4 text-lg font-black text-slate-900">
                                                    {bookingCard?.hours} Hours
                                                </h4>
                                            </div>

                                            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 transition hover:border-emerald-200 hover:bg-emerald-50/50">

                                                <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
                                                    Price / Hour
                                                </p>

                                                <h4 className="mt-4 text-lg font-black text-slate-900">
                                                    ৳{bookingCard?.pricePerHour}
                                                </h4>
                                            </div>
                                        </div>

                                        {/* USER */}
                                        <div className="mt-10 flex flex-col gap-5 rounded-[30px] border border-slate-200 bg-slate-50 p-6 sm:flex-row sm:items-center sm:justify-between">

                                            <div className="flex items-center gap-4">

                                                <div className="relative h-16 w-16 overflow-hidden rounded-full border-2 border-white bg-slate-200 shadow-sm">

                                                    {
                                                        bookingCard?.userImage && (

                                                            <Image
                                                                src={bookingCard?.userImage}
                                                                alt={bookingCard?.userName}
                                                                fill
                                                                className="object-cover"
                                                            />
                                                        )
                                                    }
                                                </div>

                                                <div>

                                                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
                                                        Booked By
                                                    </p>

                                                    <h4 className="mt-1 text-lg font-black text-slate-900">
                                                        {bookingCard?.userName}
                                                    </h4>

                                                    <p className="mt-1 text-sm text-slate-500">
                                                        {bookingCard?.userEmail}
                                                    </p>
                                                </div>
                                            </div>

                                            {/* BUTTONS */}
                                            <div className="flex flex-col gap-3 sm:flex-row">

                                                <button
                                                    className="flex h-12 items-center justify-center rounded-2xl border border-slate-300 bg-white px-6 text-sm font-semibold text-slate-700 transition hover:border-emerald-500 hover:text-emerald-600"
                                                >
                                                    View Details
                                                </button>

                                                <button
                                                    className="flex h-12 items-center justify-center rounded-2xl bg-red-500 px-6 text-sm font-semibold text-white transition hover:bg-red-600"
                                                >
                                                    Cancel Booking
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default MyBookingsPage;