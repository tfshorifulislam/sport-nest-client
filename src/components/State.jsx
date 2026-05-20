import React from "react";
import { FaUsers, FaMapMarkerAlt, FaCalendarCheck, FaSmile } from "react-icons/fa";

const stats = [
    {
        id: 1,
        title: "Active Players",
        value: "12K+",
        icon: <FaUsers />,
    },
    {
        id: 2,
        title: "Facilities",
        value: "500+",
        icon: <FaMapMarkerAlt />,
    },
    {
        id: 3,
        title: "Bookings",
        value: "25K+",
        icon: <FaCalendarCheck />,
    },
    {
        id: 4,
        title: "Happy Users",
        value: "99%",
        icon: <FaSmile />,
    },
];

const StatsSection = () => {
    return (
        <section className="bg-slate-50 py-14 sm:py-20">

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* GRID */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

                    {stats.map((item) => (
                        <div
                            key={item.id}
                            className="
                                group
                                rounded-3xl
                                border
                                border-slate-200
                                bg-white
                                p-6
                                text-center
                                shadow-sm
                                transition-all
                                duration-300
                                hover:-translate-y-1
                                hover:shadow-lg
                            "
                        >

                            {/* ICON */}
                            <div
                                className="
                                    mx-auto
                                    flex
                                    h-14
                                    w-14
                                    items-center
                                    justify-center
                                    rounded-2xl
                                    bg-emerald-50
                                    text-2xl
                                    text-emerald-600
                                    transition
                                    group-hover:bg-emerald-100
                                "
                            >
                                {item.icon}
                            </div>

                            {/* VALUE */}
                            <h3 className="mt-5 text-3xl font-black text-slate-900">
                                {item.value}
                            </h3>

                            {/* TITLE */}
                            <p className="mt-2 text-sm font-medium text-slate-500">
                                {item.title}
                            </p>

                        </div>
                    ))}

                </div>

            </div>

        </section>
    );
};

export default StatsSection;