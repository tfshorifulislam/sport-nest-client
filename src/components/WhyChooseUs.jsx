import React from "react";
import { FiShield, FiClock, FiMapPin, FiDollarSign, FiStar, FiUsers } from "react-icons/fi";

const features = [
    {
        icon: <FiShield />,
        title: "Trusted Facilities",
        desc: "Verified sports venues with quality assurance and safety standards.",
    },
    {
        icon: <FiClock />,
        title: "Easy Booking",
        desc: "Book your preferred time slot instantly without any hassle.",
    },
    {
        icon: <FiMapPin />,
        title: "Wide Coverage",
        desc: "Find facilities across multiple cities and locations.",
    },
    {
        icon: <FiDollarSign />,
        title: "Affordable Pricing",
        desc: "Transparent pricing with no hidden charges.",
    },
    {
        icon: <FiStar />,
        title: "Top Rated Venues",
        desc: "Highly rated courts and grounds from real users.",
    },
    {
        icon: <FiUsers />,
        title: "Community Driven",
        desc: "Join thousands of players booking and playing daily.",
    },
];

const WhyChooseUs = () => {
    return (
        <section className="bg-white py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
                        Why Choose Us
                    </h2>
                    <p className="mt-3 text-slate-500">
                        Everything you need for a smooth sports booking experience
                    </p>
                </div>

                {/* Grid */}
                <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

                    {features.map((item, idx) => (
                        <div
                            key={idx}
                            className="group rounded-3xl border border-slate-200 bg-slate-50 p-7 transition hover:-translate-y-1 hover:bg-white hover:shadow-lg"
                        >
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 text-xl transition group-hover:scale-110">
                                {item.icon}
                            </div>

                            <h3 className="mt-5 text-lg font-semibold text-slate-900">
                                {item.title}
                            </h3>

                            <p className="mt-2 text-sm leading-6 text-slate-500">
                                {item.desc}
                            </p>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;