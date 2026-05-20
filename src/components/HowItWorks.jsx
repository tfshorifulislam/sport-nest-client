import React from "react";
import { FiSearch, FiCalendar, FiCheckCircle } from "react-icons/fi";

const steps = [
    {
        icon: <FiSearch className="text-2xl" />,
        title: "Find a Facility",
        desc: "Search and explore sports facilities near you based on type, location, and price.",
    },
    {
        icon: <FiCalendar className="text-2xl" />,
        title: "Book a Time Slot",
        desc: "Select your preferred date and available time slot in just a few clicks.",
    },
    {
        icon: <FiCheckCircle className="text-2xl" />,
        title: "Enjoy Your Game",
        desc: "Arrive at the venue and enjoy your game without any hassle.",
    },
];

const HowItWorks = () => {
    return (
        <section className="bg-slate-50 py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
                        How It Works
                    </h2>
                    <p className="mt-3 text-slate-500">
                        Simple 3 steps to book your favorite sports facility
                    </p>
                </div>

                {/* Steps */}
                <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">

                    {steps.map((step, idx) => (
                        <div
                            key={idx}
                            className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                        >
                            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
                                {step.icon}
                            </div>

                            <h3 className="mt-6 text-xl font-semibold text-slate-900">
                                {step.title}
                            </h3>

                            <p className="mt-3 text-sm leading-6 text-slate-500">
                                {step.desc}
                            </p>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default HowItWorks;