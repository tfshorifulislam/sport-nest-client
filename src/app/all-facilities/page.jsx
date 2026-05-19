import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiSearch } from 'react-icons/fi';

const AllFacilities = async () => {

    const res = await fetch('http://localhost:5000/sports', {
        cache: 'no-store',
    });

    const cardsData = await res.json();

    return (
        <section className="min-h-screen bg-slate-50 py-14">

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">

                    <div className="max-w-2xl">

                        <span className="inline-flex rounded-full bg-emerald-50 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-700">
                            Sports Facilities
                        </span>

                        <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                            Explore{" "}

                            <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
                                Premium
                            </span>{" "}

                            Sports Venues
                        </h1>

                        <p className="mt-3 text-sm leading-6 text-slate-500 sm:text-base">
                            Book high-quality football turfs, badminton courts,
                            cricket grounds, gyms, swimming pools, and more
                            across Bangladesh.
                        </p>

                        {/* Search */}
                        <div className="relative mt-6 max-w-xl">

                            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-lg text-slate-400" />

                            <input
                                type="text"
                                placeholder="Search by facility name, type or location..."
                                className="h-12 w-full rounded-2xl border border-slate-200 bg-white pl-12 pr-4 text-sm text-slate-700 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
                            />
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="flex items-center gap-3">

                        <div className="rounded-2xl border border-slate-200 bg-white px-5 py-3 shadow-sm">

                            <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                                Total Facilities
                            </p>

                            <h4 className="mt-1 text-xl font-bold text-emerald-600">
                                {cardsData?.length}+
                            </h4>
                        </div>
                    </div>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

                    {
                        cardsData?.map((facility) => (

                            <div
                                key={facility._id}
                                className="group flex h-full flex-col overflow-hidden rounded-[28px] border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                            >


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


                                    <div className="mt-5 flex flex-wrap gap-2">

                                        {
                                            facility.availableTimeSlots
                                                ?.slice(0, 3)
                                                ?.map((slot, index) => (

                                                    <span
                                                        key={index}
                                                        className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600"
                                                    >
                                                        {slot}
                                                    </span>
                                                ))
                                        }
                                    </div>


                                    <div className="mt-auto pt-6">

                                        <Link
                                            href={`/all-facilities/${facility._id}`}
                                            className="flex h-12 w-full items-center justify-center rounded-2xl bg-emerald-600 text-sm font-medium text-white transition-all duration-200 hover:bg-emerald-700"
                                        >
                                            View Details
                                        </Link>
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

export default AllFacilities;