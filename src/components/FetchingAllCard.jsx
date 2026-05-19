'use client'

import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const FetchingAllCard = ({ facility }) => {

    const { data: session, isPending } = authClient.useSession();

    if (isPending) {
        return null;
    }

    const user = session?.user;

    return (

        <div className="flex h-full flex-col overflow-hidden rounded-[28px] border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

            {/* IMAGE */}
            <div className="relative h-60 overflow-hidden">

                <Image
                    src={facility.image}
                    alt={facility.name}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

                <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-emerald-700 shadow-sm backdrop-blur">
                    {facility.type}
                </div>

                <div className="absolute bottom-4 right-4 rounded-2xl bg-white/90 px-4 py-2 backdrop-blur">

                    <p className="text-[11px] font-medium uppercase tracking-wide text-slate-500">
                        Per Hour
                    </p>

                    <h4 className="text-lg font-bold text-emerald-600">
                        ৳{facility.pricePerHour}
                    </h4>
                </div>
            </div>

            {/* CONTENT */}
            <div className="flex flex-1 flex-col p-5">

                <h2 className="line-clamp-1 text-xl font-semibold text-slate-800 transition group-hover:text-emerald-600">
                    {facility.name}
                </h2>

                <div className="mt-3 flex items-start gap-2">

                    <div className="mt-1 h-2 w-2 rounded-full bg-emerald-500"></div>

                    <p className="line-clamp-2 text-sm leading-6 text-slate-500">
                        {facility.location}
                    </p>
                </div>

                <div className="mt-6 flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3">

                    <div>
                        <p className="text-xs text-slate-400">
                            Capacity
                        </p>

                        <h4 className="text-sm font-semibold text-slate-700">
                            {facility.capacity} Players
                        </h4>
                    </div>

                    <div className="h-10 w-px bg-slate-200"></div>

                    <div className="text-right">
                        <p className="text-xs text-slate-400">
                            Slots
                        </p>

                        <h4 className="text-sm font-semibold text-slate-700">
                            {facility.availableTimeSlots?.length} Available
                        </h4>
                    </div>
                </div>

                <div className="mt-auto pt-6">

                    <Link
                        href={user ? `/all-facilities/${facility._id}` : '/login'}
                        className="flex h-12 w-full items-center justify-center rounded-2xl bg-emerald-600 text-sm font-medium text-white transition-all duration-200 hover:bg-emerald-700"
                    >
                        Book Now
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default FetchingAllCard;