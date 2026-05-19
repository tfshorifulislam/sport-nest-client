import ManageFacilitiesCards from '@/components/ManageFacilitiesCards';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react';

const ManagesFacilities = async () => {

    const session = await auth.api.getSession({
        headers: await headers()
    });
    const user = session?.user;

    // const userToken = await auth.api.getToken({
    //     headers: await headers()
    // });

    const res = await fetch(`http://localhost:5000/bookings/${user?.id}`,
        {
            method: "GET",
            headers: {
                "content-type": "application/json",
                // authorization: `Bearer ${userToken?.token}`
            },
            cache: 'no-store'
        });

    const myBookingsListFacilities = await res.json();
    // console.log(myBookingsListFacilities)


    return (
        <div className="min-h-screen bg-[#f8fafc]">

            {/* CONTAINER */}
            <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">

                {/* HEADER */}
                <div className="mb-10 flex flex-col gap-6 border-b border-slate-200 pb-8 md:flex-row md:items-end md:justify-between">

                    {/* LEFT */}
                    <div>

                        <span className="text-sm font-medium tracking-wide text-emerald-600">
                            Dashboard
                        </span>

                        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                            Manage Facilities
                        </h1>

                        <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
                            Organize, update and manage your sports facilities with a clean modern interface.
                        </p>
                    </div>

                    {/* RIGHT */}
                    <div className="flex items-center gap-4">

                        <div className="rounded-2xl border border-slate-200 bg-white px-6 py-4 shadow-sm">

                            <p className="text-xs font-medium uppercase tracking-[0.15em] text-slate-400">
                                Total Facilities
                            </p>

                            <h3 className="mt-2 text-3xl font-bold text-slate-900">
                                {myBookingsListFacilities?.length}
                            </h3>
                        </div>

                        <div className="hidden rounded-2xl border border-slate-200 bg-white px-6 py-4 shadow-sm sm:block">

                            <p className="text-xs font-medium uppercase tracking-[0.15em] text-slate-400">
                                Status
                            </p>

                            <h3 className="mt-2 text-lg font-semibold text-emerald-600">
                                Active
                            </h3>
                        </div>
                    </div>
                </div>

                {/* GRID */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">

                    {
                        myBookingsListFacilities.map((facility) => (

                            <ManageFacilitiesCards
                                key={facility._id}
                                facility={facility}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default ManagesFacilities;