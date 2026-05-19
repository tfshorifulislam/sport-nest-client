import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import FetchingAllCard from '@/components/FetchingAllCard';

const AllFacilities = async () => {
    const session = await auth.api.getSession({
        headers: await headers()
    })
    const user = session
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

                    {/* Sorting System */}
                   
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

                    {
                        cardsData?.map((facility) => (

                           <FetchingAllCard key={facility._id} facility ={facility} />
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default AllFacilities;