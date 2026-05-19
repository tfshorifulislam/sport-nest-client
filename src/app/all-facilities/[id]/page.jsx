import DetailsPageRightSideCard from '@/components/DetailsPageRightSideCard';
import Image from 'next/image';
import React from 'react';

const DetailsPage = async ({ params }) => {

    const { id } = await params;

    const res = await fetch(`http://localhost:5000/sports/${id}`, {
        cache: 'no-store',
    });

    const data = await res.json();

    return (
        <section className="min-h-screen bg-slate-50 pb-20">

            <div className="relative h-[350px] w-full overflow-hidden sm:h-[500px] lg:h-[620px]">

                <Image
                    src={data?.image}
                    alt={data?.name}
                    fill
                    priority
                    className="object-cover"
                />


                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />


                <div className="absolute bottom-0 left-0 w-full">

                    <div className="mx-auto max-w-7xl px-4 mb-8 pb-10 sm:px-6 lg:px-8">

                        <div className="flex flex-wrap items-center gap-3">

                            <span className="rounded-full bg-white/90 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-700 backdrop-blur">
                                {data?.type}
                            </span>

                            <span className="rounded-full bg-black/30 px-4 py-1 text-xs font-medium text-white backdrop-blur">
                                {data?.capacity} Players Capacity
                            </span>
                        </div>

                        <h1 className="mt-5 max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                            {data?.name}
                        </h1>

                        <p className="mt-5 max-w-2xl text-sm leading-7 text-white/80 sm:text-base">
                            {data?.location}
                        </p>
                    </div>

                </div>
            </div>


            <div className="mx-auto -mt-14 max-w-7xl px-4 sm:px-6 lg:px-8">

                <div className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-sm">


                    <div className="grid grid-cols-2 border-b border-slate-100 lg:grid-cols-4">


                        <div className="border-b border-r border-slate-100 p-6 lg:border-b-0">

                            <p className="text-xs font-medium uppercase tracking-widest text-slate-400">
                                Price / Hour
                            </p>

                            <h2 className="mt-3 text-3xl font-bold text-emerald-600">
                                ৳{data?.pricePerHour}
                            </h2>
                        </div>


                        <div className="border-b border-slate-100 p-6 lg:border-b-0 lg:border-r">

                            <p className="text-xs font-medium uppercase tracking-widest text-slate-400">
                                Capacity
                            </p>

                            <h2 className="mt-3 text-3xl font-bold text-slate-900">
                                {data?.capacity}
                            </h2>

                            <p className="mt-1 text-sm text-slate-500">
                                Maximum Players
                            </p>
                        </div>

                        <div className="border-r border-slate-100 p-6">

                            <p className="text-xs font-medium uppercase tracking-widest text-slate-400">
                                Time Slots
                            </p>

                            <h2 className="mt-3 text-3xl font-bold text-slate-900">
                                {data?.availableTimeSlots?.length}
                            </h2>

                            <p className="mt-1 text-sm text-slate-500">
                                Available Sessions
                            </p>
                        </div>


                        <div className="p-6">

                            <p className="text-xs font-medium uppercase tracking-widest text-slate-400">
                                Facility Type
                            </p>

                            <h2 className="mt-3 text-2xl font-bold text-slate-900">
                                {data?.type}
                            </h2>
                        </div>
                    </div>


                    <div className="grid gap-10 p-6 lg:grid-cols-[1.3fr_.7fr] lg:p-10">


                        <div>


                            <div>

                                <h2 className="text-2xl font-bold text-slate-900">
                                    About This Facility
                                </h2>

                                <p className="mt-5 whitespace-pre-line text-sm leading-8 text-slate-600 sm:text-base">
                                    {data?.description}
                                </p>
                            </div>


                            <div className="mt-12">

                                <h2 className="text-2xl font-bold text-slate-900">
                                    Available Time Slots
                                </h2>

                                <div className="mt-6 flex flex-wrap gap-3">

                                    {
                                        data?.availableTimeSlots?.map((slot, index) => (

                                            <span
                                                key={index}
                                                className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-emerald-500 hover:bg-emerald-50 hover:text-emerald-600"
                                            >
                                                {slot}
                                            </span>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                        <DetailsPageRightSideCard data={data} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DetailsPage;