import React from "react";
import { FaStar } from "react-icons/fa";

const reviews = [
    {
        id: 1,
        name: "Arafat Hossain",
        role: "Football Player",
        review:
            "Amazing booking experience. The football turf quality was excellent and everything was very organized.",
    },
    {
        id: 2,
        name: "Nusrat Jahan",
        role: "Tennis Enthusiast",
        review:
            "Very smooth system. I booked a tennis court within minutes and the facility was premium.",
    },
    {
        id: 3,
        name: "Rakib Hasan",
        role: "Cricket Captain",
        review:
            "The best sports booking platform I’ve used so far. Great pricing and easy scheduling.",
    },
    {
        id: 4,
        name: "Fahim Ahmed",
        role: "Badminton Player",
        review:
            "Clean courts, friendly management, and instant booking confirmation. Loved the experience.",
    },
    {
        id: 5,
        name: "Tamim Chowdhury",
        role: "Gym Member",
        review:
            "Simple interface and professional facilities. Everything felt modern and user friendly.",
    },
    {
        id: 6,
        name: "Sadia Rahman",
        role: "Basketball Player",
        review:
            "Booking basketball courts has never been this easy. Highly recommended platform.",
    },
    {
        id: 7,
        name: "Jubayer Islam",
        role: "Sports Lover",
        review:
            "Very responsive and smooth platform. I found nearby facilities quickly without hassle.",
    },
    {
        id: 8,
        name: "Mehedi Hasan",
        role: "Football Coach",
        review:
            "Professional facilities with affordable pricing. My team regularly books from here.",
    },
    {
        id: 9,
        name: "Priya Sultana",
        role: "Fitness Trainer",
        review:
            "I really liked the clean UI and seamless booking process. Great overall experience.",
    },
    {
        id: 10,
        name: "Shakib Mahmud",
        role: "Cricket Player",
        review:
            "Reliable platform with excellent sports venues. Customer support was also very helpful.",
    },
    {
        id: 11,
        name: "Anika Noor",
        role: "Swimming Enthusiast",
        review:
            "The facility details were accurate and the booking process was incredibly fast.",
    },
    {
        id: 12,
        name: "Mahin Islam",
        role: "Turf Manager",
        review:
            "This platform helped us manage bookings efficiently and attract more players.",
    },
];

const HappyCustomer = () => {
    return (
        <section className="bg-slate-50 py-16">

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* HEADER */}
                <div className="mx-auto max-w-3xl text-center">

                    <span className="inline-flex rounded-full bg-emerald-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
                        Testimonials
                    </span>

                    <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
                        Happy Customers
                    </h2>

                    <p className="mt-4 text-sm leading-7 text-slate-500 sm:text-base">
                        Trusted by sports lovers, athletes, and facility owners
                        across Bangladesh.
                    </p>

                </div>

                {/* REVIEWS GRID */}
                <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

                    {reviews.map((review) => (

                        <div
                            key={review.id}
                            className="
                                group
                                rounded-3xl
                                border
                                border-slate-200
                                bg-white
                                p-6
                                shadow-sm
                                transition-all
                                duration-300
                                hover:-translate-y-1
                                hover:shadow-lg
                            "
                        >

                            {/* STARS */}
                            <div className="flex items-center gap-1 text-amber-400">

                                {[...Array(5)].map((_, i) => (
                                    <FaStar key={i} className="text-sm" />
                                ))}

                            </div>

                            {/* REVIEW */}
                            <p
                                className="
                                    mt-5
                                    text-sm
                                    leading-7
                                    text-slate-600
                                "
                            >
                                “{review.review}”
                            </p>

                            {/* USER */}
                            <div className="mt-6 flex items-center gap-4">

                                <div
                                    className="
                                        flex
                                        h-12
                                        w-12
                                        items-center
                                        justify-center
                                        rounded-full
                                        bg-emerald-100
                                        text-sm
                                        font-bold
                                        text-emerald-700
                                    "
                                >
                                    {review.name.charAt(0)}
                                </div>

                                <div>

                                    <h4 className="text-sm font-bold text-slate-900">
                                        {review.name}
                                    </h4>

                                    <p className="mt-1 text-xs text-slate-500">
                                        {review.role}
                                    </p>

                                </div>

                            </div>

                        </div>
                    ))}

                </div>

            </div>

        </section>
    );
};

export default HappyCustomer;