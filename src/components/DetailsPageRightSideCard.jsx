'use client'

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { authClient } from '@/lib/auth-client';



const DetailsPageRightSideCard = ({ data }) => {
    const router = useRouter();

    const handleBooking = async () => {

        const { data: session } = await authClient.getSession();

        if (!session) {
            router.push('/login');
            return;
        }
        router.push('/BookingFacilities');
    };


    const [hours, setHours] = useState(1);
    const totalPrice = Number(data?.pricePerHour) * hours;

    return (
        <div className="lg:sticky lg:top-8 lg:h-fit">

            <div className="rounded-[32px] border border-slate-200 bg-white p-7 shadow-sm">

                <h2 className="text-3xl font-bold text-slate-900">
                    Book This Facility
                </h2>

                <p className="mt-2 text-sm text-slate-500">
                    Fill in your details to reserve this spot
                </p>

                {/* FORM */}
                <form className="mt-8 space-y-5">

                    {/* NAME */}
                    <div>

                        <label className="mb-2 block text-xs font-semibold uppercase tracking-widest text-slate-500">
                            Name
                        </label>

                        <input
                            type="text"
                            placeholder="Enter your name"
                            className="h-14 w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 text-sm outline-none transition focus:border-emerald-500 focus:bg-white"
                        />
                    </div>

                    {/* DATE */}
                    <div>

                        <label className="mb-2 block text-xs font-semibold uppercase tracking-widest text-slate-500">
                            Booking Date
                        </label>

                        <input
                            type="date"
                            className="h-14 w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 text-sm outline-none transition focus:border-emerald-500 focus:bg-white"
                        />
                    </div>

                    {/* SLOT */}
                    <div>

                        <label className="mb-2 block text-xs font-semibold uppercase tracking-widest text-slate-500">
                            Time Slot
                        </label>

                        <select
                            className="h-14 w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 text-sm outline-none transition focus:border-emerald-500 focus:bg-white"
                        >

                            {
                                data?.availableTimeSlots?.map((slot, index) => (

                                    <option key={index}>
                                        {slot}
                                    </option>
                                ))
                            }
                        </select>
                    </div>

                    {/* HOURS */}
                    <div>

                        <label className="mb-2 block text-xs font-semibold uppercase tracking-widest text-slate-500">
                            Hours
                        </label>

                        <input
                            type="number"
                            min="1"
                            max="8"
                            defaultValue={hours}
                            onChange={(e) => setHours(Number(e.target.value))}
                            className="h-14 w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 text-sm outline-none transition focus:border-emerald-500 focus:bg-white"
                        />
                    </div>

                    {/* TOTAL */}
                    <div className="rounded-3xl bg-emerald-50 p-5">

                        <div className="flex items-center justify-between">

                            <p className="text-sm text-slate-600">
                                Price Per Hour
                            </p>

                            <h4 className="font-semibold text-slate-900">
                                ৳{data?.pricePerHour}
                            </h4>
                        </div>

                        <div className="mt-4 flex items-center justify-between border-t border-emerald-100 pt-4">

                            <p className="text-lg font-semibold text-slate-900">
                                Total Price
                            </p>

                            <h3 className="text-3xl font-bold text-emerald-600">
                                ৳{totalPrice}
                            </h3>
                        </div>
                    </div>

                    {/* BUTTON */}
                    <button
                        onClick={handleBooking}
                        className="flex h-14 w-full items-center justify-center rounded-2xl bg-emerald-600 text-sm font-semibold text-white transition hover:bg-emerald-700"
                    >
                        Confirm Booking
                    </button>
                </form>
            </div>
        </div>
    );
};

export default DetailsPageRightSideCard;