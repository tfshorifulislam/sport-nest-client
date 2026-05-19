import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { MyBookingsDeleteAllert } from './MyBookingsDeleteAllert';

const MyBookingsPageCard = ({ bookingCard }) => {
    return (
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
                        <MyBookingsDeleteAllert />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyBookingsPageCard;