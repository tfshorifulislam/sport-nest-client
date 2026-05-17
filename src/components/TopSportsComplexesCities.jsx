'use client';

import React, { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';

const TopSportsComplexesCities = () => {

    const [openIndex, setOpenIndex] = useState(null);

    const cities = [
        'Dhaka',
        'Chattogram',
        'Sylhet',
        'Rajshahi',
        'Khulna',
        'Barishal',
        'Rangpur',
        'Cumilla',
    ];

    const toggleOpen = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="bg-slate-50 py-20">

            <div className="mx-auto max-w-7xl rounded-[32px] bg-white p-6 shadow-sm md:p-10">

                {/* Heading */}
                <div className="mb-12">

                    <span className="rounded-full bg-emerald-50 px-4 py-1 text-xs font-semibold uppercase tracking-[3px] text-emerald-600">
                        Popular Cities
                    </span>

                    <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-800 md:text-4xl">
                        Top Sports Complexes
                        <span className="text-emerald-600">
                            {' '}In Cities
                        </span>
                    </h2>

                    <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500 md:text-base">
                        Explore premium football turfs, cricket grounds,
                        badminton courts, gyms, and sports arenas across popular cities.
                    </p>
                </div>

                {/* Cities Grid */}
                <div className="grid gap-5 md:grid-cols-2">

                    {
                        cities.map((city, index) => (

                            <div
                                key={index}
                                className="overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:border-emerald-300"
                            >

                                {/* Header */}
                                <button
                                    onClick={() => toggleOpen(index)}
                                    className="flex w-full items-center justify-between px-5 py-5 text-left"
                                >
                                    <span className="text-base font-medium text-slate-700">
                                        {city}
                                    </span>

                                    <FiChevronDown
                                        className={`text-xl text-slate-500 transition duration-300 ${openIndex === index
                                            ? 'rotate-180'
                                            : ''
                                            }`}
                                    />
                                </button>

                                {/* Content */}
                                <div
                                    className={`transition-all duration-300 ${openIndex === index
                                        ? 'max-h-40 pb-5'
                                        : 'max-h-0'
                                        } overflow-hidden`}
                                >
                                    <div className="space-y-2 px-5 text-sm text-slate-500">

                                        <p>• Football Turf Arena</p>
                                        <p>• Indoor Badminton Court</p>
                                        <p>• Cricket Practice Ground</p>
                                        <p>• Modern Gym & Fitness Zone</p>
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

export default TopSportsComplexesCities;