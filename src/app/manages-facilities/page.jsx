import ManageFacilitiesCards from '@/components/ManageFacilitiesCards';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react';

const ManagesFacilities = async () => {

    const session = await auth.api.getSession({
        headers: await headers()
    });
    const user = session?.user;

    const userToken = await auth.api.getToken({
        headers: await headers()
    });

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/bookings/${user?.id}`,
        {
            method: "GET",
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${userToken?.token}`
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
                    </div>
                </div>

                {/* GRID */}
                {
                    myBookingsListFacilities?.length > 0 ? (

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

                    ) : (

                        <div className="flex min-h-[400px] flex-col items-center justify-center rounded-[32px] border border-dashed border-slate-200 bg-white p-10 text-center shadow-sm">

                            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50">

                                <span className="text-4xl">🏟️</span>

                            </div>

                            <h2 className="mt-6 text-2xl font-bold text-slate-800">
                                No Facilities Found
                            </h2>

                            <p className="mt-3 max-w-md text-sm leading-7 text-slate-500">
                                You haven’t booked any sports facilities yet.
                                Explore premium venues and make your first booking.
                            </p>

                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default ManagesFacilities;