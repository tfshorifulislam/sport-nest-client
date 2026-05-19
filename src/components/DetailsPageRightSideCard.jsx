
import { redirect } from 'next/navigation';
import React from 'react';

const DetailsPageRightSideCard =  ({ data }) => {

    const handleBokking = async () => {
        const session = await auth.api.getSession({
            headers: await headers()
        })

        if(!session){
            redirect('/login')
        }


    }
    return (
        <div>

            <div className="sticky top-24 rounded-3xl border border-slate-200 bg-slate-50 p-6">

                <h3 className="text-xl font-bold text-slate-900">
                    Quick Booking
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                    Reserve your preferred slot and enjoy a premium sports experience.
                </p>

                {/* PRICE */}
                <div className="mt-6 rounded-2xl bg-white p-5">

                    <p className="text-xs uppercase tracking-widest text-slate-400">
                        Starting From
                    </p>

                    <h2 className="mt-2 text-4xl font-bold text-emerald-600">
                        ৳{data?.pricePerHour}
                    </h2>

                    <p className="mt-1 text-sm text-slate-500">
                        Per hour booking
                    </p>
                </div>

                {/* BUTTONS */}
                <div className="mt-6 flex flex-col gap-3">

                    <button className="flex cursor-pointer h-12 w-full items-center justify-center rounded-2xl bg-emerald-600 text-sm font-medium text-white transition hover:bg-emerald-700">
                        Book Now
                    </button>

                    <button className="flex cursor-pointer h-12 w-full items-center justify-center rounded-2xl border border-slate-300 bg-white text-sm font-medium text-slate-700 transition hover:border-emerald-500 hover:text-emerald-600">
                        Contact Owner
                    </button>
                </div>

                {/* LOCATION */}
                <div className="mt-8 border-t border-slate-200 pt-6">

                    <p className="text-xs uppercase tracking-widest text-slate-400">
                        Location
                    </p>

                    <p className="mt-3 text-sm leading-7 text-slate-600">
                        {data?.location}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default DetailsPageRightSideCard;