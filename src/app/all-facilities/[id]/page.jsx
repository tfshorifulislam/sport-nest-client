
import DetailsPageRightSideCard from '@/components/DetailsPageRightSideCard';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import Image from 'next/image';
import React from 'react';

const DetailsPage = async ({ params }) => {

    const { id } = await params;

    const userToken = await auth.api.getToken({
        headers: await headers()
    });

    const res = await fetch(`http://localhost:5000/sports/${id}`, {
        headers: {
            authorization: `Bearer ${userToken?.token}`
        },
        cache: 'no-store'
    });

    const data = await res.json();

    // const totalPrice = data?.pricePerHour 

    return (
        <section className="min-h-screen bg-slate-100 py-10">

            <div className="mx-auto grid max-w-7xl gap-8 px-4 lg:grid-cols-[1.2fr_.8fr]">

                {/* LEFT SIDE */}
                <div>

                    {/* IMAGE */}
                    <div className="relative h-[320px] overflow-hidden rounded-[32px] sm:h-[450px]">

                        {
                            data?.image ? (
                                <Image
                                    src={data?.image}
                                    alt={data?.name || 'Facility Image'}
                                    fill
                                    priority
                                    className="object-cover"
                                />
                            ) : (
                                <div className="flex h-full w-full items-center justify-center bg-slate-200">
                                    No Image
                                </div>
                            )
                        }

                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

                        <div className="absolute left-5 top-5 rounded-full bg-emerald-500 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-white shadow-lg">
                            {data?.type}
                        </div>
                    </div>

                    {/* CONTENT */}
                    <div className="mt-8">

                        <h1 className="text-4xl font-bold tracking-tight text-slate-900">
                            {data?.name}
                        </h1>

                        <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600">
                            {data?.description}
                        </p>

                        {/* INFO CARDS */}
                        <div className="mt-8 grid gap-4 sm:grid-cols-2">

                            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">

                                <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                                    Location
                                </p>

                                <h3 className="mt-3 text-lg font-semibold text-slate-900">
                                    {data?.location}
                                </h3>
                            </div>

                            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">

                                <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                                    Capacity
                                </p>

                                <h3 className="mt-3 text-lg font-semibold text-slate-900">
                                    Up to {data?.capacity} players
                                </h3>
                            </div>

                            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">

                                <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                                    Price
                                </p>

                                <h3 className="mt-3 text-lg font-semibold text-emerald-600">
                                    ৳{data?.pricePerHour}/hour
                                </h3>
                            </div>

                            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">

                                <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                                    Slots
                                </p>

                                <h3 className="mt-3 text-lg font-semibold text-slate-900">
                                    {data?.availableTimeSlots?.length} available
                                </h3>
                            </div>
                        </div>

                        {/* TIME SLOTS */}
                        <div className="mt-10">

                            <h2 className="text-2xl font-bold text-slate-900">
                                Available Time Slots
                            </h2>

                            <div className="mt-5 flex flex-wrap gap-3">

                                {
                                    data?.availableTimeSlots?.map((slot, index) => (

                                        <span
                                            key={index}
                                            className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm"
                                        >
                                            {slot}
                                        </span>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>

                {/* RIGHT SIDE BOOKING CARD */}
                <DetailsPageRightSideCard data = {data} />
            </div>
        </section>
    );
};

export default DetailsPage;