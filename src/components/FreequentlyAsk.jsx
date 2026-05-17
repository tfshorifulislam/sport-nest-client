'use client';

import React, { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';

const FreequentlyAsk = () => {

    const [openIndex, setOpenIndex] = useState(0);

    const faqs = [
        {
            question: 'How can I book a sports facility?',
            answer:
                'You can easily book your preferred sports facility by selecting a venue, choosing your preferred time slot, and confirming your booking online.',
        },
        {
            question: 'Can I cancel my booking?',
            answer:
                'Yes, you can cancel your booking from your dashboard before the cancellation deadline mentioned by the facility owner.',
        },
        {
            question: 'Do I need an account to make a booking?',
            answer:
                'Yes, creating an account helps you manage bookings, track history, and receive important updates.',
        },
        {
            question: 'Are all facilities verified?',
            answer:
                'Yes, we review and verify facilities to ensure users get a quality sports experience.',
        },
        {
            question: 'Can I add my own sports facility?',
            answer:
                'Absolutely! You can add and manage your own sports facilities directly from your dashboard.',
        },
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="bg-white py-20">

            <div className="mx-auto max-w-4xl px-6">

                {/* Heading */}
                <div className="mb-14 text-center">

                    {/* Small Tag */}
                    <span className="inline-block rounded-full bg-emerald-50 px-4 py-1 text-xs font-semibold uppercase tracking-[3px] text-emerald-600">
                        FAQ
                    </span>

                    {/* Heading */}
                    <h2 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-slate-800 md:text-5xl">
                        Got Questions?
                        <br />
                        <span className="text-emerald-600">
                            We’ve Got Answers
                        </span>
                    </h2>

                    {/* Description */}
                    <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-500 md:text-base">
                        Find answers to the most common questions about booking sports facilities,
                        managing reservations, and using SportNest smoothly.
                    </p>
                </div>

                {/* FAQ Items */}
                <div className="space-y-4">

                    {
                        faqs.map((faq, index) => (

                            <div
                                key={index}
                                className="rounded-2xl border border-slate-200 bg-white transition"
                            >

                                {/* Question */}
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="flex w-full items-center justify-between px-6 py-5 text-left"
                                >
                                    <h3 className="text-base font-semibold text-slate-800">
                                        {faq.question}
                                    </h3>

                                    <FiChevronDown
                                        className={`text-xl  text-slate-500 transition duration-300 ${openIndex === index
                                            ? 'rotate-180'
                                            : ''
                                            }`}
                                    />
                                </button>

                                {/* Answer */}
                                <div
                                    className={`overflow-hidden transition-all duration-300 ${openIndex === index
                                        ? 'max-h-40 pb-5'
                                        : 'max-h-0'
                                        }`}
                                >
                                    <p className="px-6 text-sm leading-7 text-slate-600">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default FreequentlyAsk;