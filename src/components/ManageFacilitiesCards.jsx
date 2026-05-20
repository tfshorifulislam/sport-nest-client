
import Image from 'next/image';
import React from 'react';
import { ManageFacilitieisUpdate } from './ManageFacilitiesUpdate';
import ManageFacilitiesDeleteAllert from './ManageFacilitiesDeleteAllert';

const ManageFacilitiesCards = ({ facility }) => {

    return (

        <div className="flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

            {/* IMAGE */}
            <div className="relative h-56 w-full overflow-hidden">

                <Image
                    src={facility?.facilityImage}
                    alt={facility?.facilityName}
                    fill
                    className="object-cover transition duration-500 hover:scale-105"
                    sizes="(max-width:768px) 100vw, 50vw"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                {/* STATUS */}
                <div className="absolute left-4 top-4">

                    <span className="rounded-full bg-amber-400/95 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-900">

                        Pending
                    </span>
                </div>

                {/* PRICE */}
                <div className="absolute right-4 top-4 rounded-full bg-white px-4 py-2 shadow-sm">

                    <span className="text-sm font-bold text-emerald-600">

                        ৳ {facility?.pricePerHour}/hr
                    </span>
                </div>

                {/* TITLE */}
                <div className="absolute bottom-5 left-5">

                    <h2 className="text-2xl font-bold tracking-tight text-white">

                        {facility?.facilityName}
                    </h2>

                    <p className="mt-1 text-sm text-white/80">

                        {facility?.facilityType}
                    </p>
                </div>
            </div>

            {/* CONTENT */}
            <div className="flex flex-1 flex-col p-6">

                {/* INFO */}
                <div className="space-y-4">

                    <div className="flex items-center justify-between border-b border-slate-100 pb-3">

                        <p className="text-sm text-slate-500">
                            Booking Date
                        </p>

                        <h4 className="text-sm font-semibold text-slate-800">

                            {facility?.bookingDate}
                        </h4>
                    </div>

                    <div className="flex items-center justify-between border-b border-slate-100 pb-3">

                        <p className="text-sm text-slate-500">
                            Duration
                        </p>

                        <h4 className="text-sm font-semibold text-slate-800">

                            {facility?.hours} Hours
                        </h4>
                    </div>

                    <div className="flex items-start justify-between gap-4">

                        <p className="text-sm text-slate-500">
                            Location
                        </p>

                        <h4 className="max-w-[220px] text-right text-sm font-semibold leading-6 text-slate-800">

                            {facility?.facilityLocation}
                        </h4>
                    </div>
                </div>

                {/* BUTTONS */}
                <div className="mt-auto flex items-center gap-3 pt-8">

                    <ManageFacilitieisUpdate facility={facility} />

                    <ManageFacilitiesDeleteAllert facility= {facility} />
                </div>
            </div>
        </div>
    );
};

export default ManageFacilitiesCards;