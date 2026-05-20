import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const FacilitiesCardForHome = async () => {

    const userToken = await auth.api.getToken({
        headers: await headers()
    });

    const res = await fetch('http://localhost:5000/sports', {
        cache: 'no-store',
        headers: {
                authorization: `Bearer ${userToken.token}`
            },
    });

    const data = await res.json();

    const cards = data?.slice(0, 8);

    const session = await auth.api.getSession({
        headers: await headers()
    })
    const user = session

    return (
        <section className="bg-slate-50 py-14">

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">


                <div className="mb-10 flex items-end justify-between">

                    <div>

                        <span className="rounded-full bg-emerald-50 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-700">
                            Popular Sports
                        </span>

                        <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900">
                            Featured Facilities
                        </h2>

                        <p className="mt-2 text-sm text-slate-500">
                            Discover the most booked sports venues near you.
                        </p>
                    </div>

                    <Link
                        href="/all-facilities"
                        className="hidden rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 transition hover:border-emerald-500 hover:text-emerald-600 sm:flex"
                    >
                        View All
                    </Link>
                </div>


                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

                    {
                        cards?.map((facility) => (

                            <div
                                key={facility._id}
                                className="overflow-hidden rounded-3xl border border-slate-200 bg-white p-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                            >


                                <div className="relative h-52 overflow-hidden rounded-2xl">

                                    <Image
                                        src={facility.image}
                                        alt={facility.name}
                                        fill
                                        className="object-cover transition duration-500 hover:scale-105"
                                    />


                                    <div className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-emerald-700 backdrop-blur">
                                        {facility.type}
                                    </div>
                                </div>


                                <div className="pt-4">


                                    <div className="flex items-start justify-between gap-3">

                                        <div>

                                            <h3 className="line-clamp-1 text-lg font-bold text-slate-900">
                                                {facility.name}
                                            </h3>

                                            <p className="mt-1 line-clamp-1 text-sm text-slate-500">
                                                {facility.location}
                                            </p>
                                        </div>


                                        <div className="rounded-xl bg-emerald-50 px-3 py-1 text-sm font-semibold text-emerald-600">
                                            4.8
                                        </div>
                                    </div>


                                    <div className="mt-5 flex items-center justify-between">


                                        <div>

                                            <p className="text-xs text-slate-400">
                                                Price / Hour
                                            </p>

                                            <h4 className="text-xl font-bold text-slate-900">
                                                ৳{facility.pricePerHour}
                                            </h4>
                                        </div>


                                        <Link
                                            href={user ? `/all-facilities/${facility._id}` : `/login`}
                                            className="rounded-full bg-emerald-600 px-5 py-2 text-sm font-medium text-white transition hover:bg-emerald-700"
                                        >
                                            Book Now
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

export default FacilitiesCardForHome;