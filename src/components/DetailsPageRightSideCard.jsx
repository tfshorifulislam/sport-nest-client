'use client'

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { authClient } from '@/lib/auth-client';
import toast from 'react-hot-toast';



const DetailsPageRightSideCard = ({ data }) => {

    const router = useRouter();

    const [hours, setHours] = useState(1);
    const totalPrice = Number(data?.pricePerHour) * hours;

    const { data: session } = authClient.useSession();
    const user = session?.user;
    // console.log(user, 'token')


    const handleBooking = async (e) => {
        e.preventDefault();

        // login check
        if (!user) {
            router.push('/login');
            return;
        }

        // form data
        const bookingFormData = new FormData(e.currentTarget);

        const bookingInfo = Object.fromEntries(
            bookingFormData.entries()
        );

        // final booking object
        const bookings = {
            userId: user?.id,
            userName: user?.name,
            userEmail: user?.email,
            userImage: user?.image,

            facilityId: data?._id,
            facilityName: data?.name,
            facilityType: data?.type,
            facilityImage: data?.image,
            facilityLocation: data?.location,

            bookingDate: bookingInfo?.bookingDate,
            timeSlot: bookingInfo?.timeSlot,
            hours: Number(bookingInfo?.hours),

            pricePerHour: Number(data?.pricePerHour),
            totalPrice: totalPrice,

            // createdAt: new Date(),
        };


        const { data: userToken } = await authClient.token()
        console.log(userToken)

        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/bookings`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${userToken.token}`

            },
            body: JSON.stringify(bookings)
        })
        const insertBokingData = await res.json()

        // console.log('data', insertBokingData);
        toast.success(`${bookings.facilityName} is successfully book`)
        router.push('/all-facilities')
    };



    return (
        <div className="lg:sticky lg:top-8 lg:h-fit">

            <div className="rounded-[32px] border border-slate-200 bg-white p-7 shadow-sm">

                <h2 className="text-3xl font-bold text-slate-900">
                    Book This Facility
                </h2>

                <p className="mt-2 text-sm text-slate-500">
                    Fill in your details to reserve this spot
                </p>

                {/* FORM */}
                <form onSubmit={handleBooking} className="mt-8 space-y-5">

                    {/* NAME */}
                    <div>

                        <label className="mb-2 block text-xs font-semibold uppercase tracking-widest text-slate-500">
                            Name
                        </label>

                        <input
                            type="text"
                            name="name"
                            required
                            placeholder="Enter your name"
                            className="h-14 w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 text-sm outline-none transition focus:border-emerald-500 focus:bg-white"
                        />
                    </div>

                    {/* DATE */}
                    <div>

                        <label className="mb-2 block text-xs font-semibold uppercase tracking-widest text-slate-500">
                            Booking Date
                        </label>

                        <input
                            type="date"
                            name="bookingDate"
                            required
                            className="h-14 w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 text-sm outline-none transition focus:border-emerald-500 focus:bg-white"
                        />
                    </div>

                    {/* SLOT */}
                    <div>

                        <label className="mb-2 block text-xs font-semibold uppercase tracking-widest text-slate-500">
                            Time Slot
                        </label>

                        <select
                            name="timeSlot"
                            required
                            defaultValue=""
                            className="h-14 w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 text-sm outline-none transition focus:border-emerald-500 focus:bg-white"
                        >

                            <option value="" disabled>
                                Select Time Slot
                            </option>

                            {
                                data?.availableTimeSlots?.map((slot, index) => (

                                    <option
                                        key={index}
                                        value={slot}
                                    >
                                        {slot}
                                    </option>
                                ))
                            }
                        </select>
                    </div>

                    {/* HOURS */}
                    <div>

                        <label className="mb-2 block text-xs font-semibold uppercase tracking-widest text-slate-500">
                            Hours
                        </label>

                        <input
                            type="number"
                            name="hours"
                            required
                            min="1"
                            max="8"
                            defaultValue={hours}
                            onChange={(e) => setHours(Number(e.target.value))}
                            className="h-14 w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 text-sm outline-none transition focus:border-emerald-500 focus:bg-white"
                        />
                    </div>

                    {/* TOTAL */}
                    <div className="rounded-3xl bg-emerald-50 p-5">

                        <div className="flex items-center justify-between">

                            <p className="text-sm text-slate-600">
                                Price Per Hour
                            </p>

                            <h4 className="font-semibold text-slate-900">
                                ৳{data?.pricePerHour}
                            </h4>
                        </div>

                        <div className="mt-4 flex items-center justify-between border-t border-emerald-100 pt-4">

                            <p className="text-lg font-semibold text-slate-900">
                                Total Price
                            </p>

                            <h3 className="text-3xl font-bold text-emerald-600">
                                ৳{totalPrice}
                            </h3>
                        </div>
                    </div>

                    {/* BUTTON */}
                    <button
                        type="submit"
                        className="flex h-14 w-full cursor-pointer items-center justify-center rounded-2xl bg-emerald-600 text-sm font-semibold text-white transition hover:bg-emerald-700"
                    >
                        Confirm Booking
                    </button>
                </form>
            </div>
        </div>
    );
};

export default DetailsPageRightSideCard;