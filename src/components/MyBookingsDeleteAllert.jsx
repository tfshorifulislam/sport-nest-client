"use client";

import React from "react";
import {
    AlertDialog,
    Button
} from "@heroui/react";

import { MdDeleteForever } from "react-icons/md";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";


export function MyBookingsDeleteAllert({ bookingCard }) {

    const router = useRouter();

    const { _id } = bookingCard;

    const onSubmit = async () => {

        const { data } = await authClient.token();

        try {

            const res = await fetch(`http://localhost:5000/bookings/${_id}`,
                {
                    method: "DELETE",
                    headers: {
                        "content-type": "application/json",
                        authorization: `Bearer ${data?.token}`
                    }
                }
            );

            const result = await res.json();

            if (result?.deletedCount > 0) {

                toast.success("Booking cancelled successfully");

                router.refresh();
            }

        } catch (error) {

            console.log(error);

            toast.error("Something went wrong");
        }
    };

    return (

        <AlertDialog>
            <Button
                className="
                    h-11
                    sm:h-12
                    w-full
                    sm:w-auto
                    rounded-2xl
                    border
                    border-red-200
                    bg-red-50
                    px-5
                    sm:px-6
                    text-sm
                    font-semibold
                    text-red-600
                    transition-all
                    duration-300
                    hover:border-red-300
                    hover:bg-red-100
                    hover:text-red-700
                "
            >
                Cancel Booking
            </Button>

            {/* BACKDROP */}
            <AlertDialog.Backdrop
                className="
                    bg-slate-950/70
                    backdrop-blur-md
                    p-3
                    sm:p-5
                "
            >

                <AlertDialog.Container className="flex items-center justify-center">

                    {/* DIALOG */}
                    <AlertDialog.Dialog
                        className="
                            relative
                            w-full
                            max-w-[95vw]
                            sm:max-w-lg
                            overflow-hidden
                            rounded-[28px]
                            sm:rounded-[32px]
                            border
                            border-slate-200
                            bg-white
                            shadow-2xl
                        "
                    >

                        <div
                            className="
                                absolute
                                inset-x-0
                                top-0
                                h-1.5
                                bg-gradient-to-r
                                from-red-500
                                via-rose-500
                                to-orange-400
                            "
                        />

                        <AlertDialog.CloseTrigger
                            className="
                                absolute
                                right-3
                                top-3
                                sm:right-5
                                sm:top-5
                                flex
                                h-9
                                w-9
                                sm:h-10
                                sm:w-10
                                items-center
                                justify-center
                                rounded-full
                                bg-slate-100
                                text-slate-500
                                transition
                                hover:bg-red-100
                                hover:text-red-500
                            "
                        />

                        <AlertDialog.Header
                            className="
                                flex
                                flex-col
                                items-start
                                gap-4
                                border-b
                                border-slate-100
                                px-5
                                py-6
                                sm:px-8
                                sm:py-8
                            "
                        >

                            <div
                                className="
                                    flex
                                    h-14
                                    w-14
                                    sm:h-16
                                    sm:w-16
                                    items-center
                                    justify-center
                                    rounded-3xl
                                    bg-gradient-to-br
                                    from-red-100
                                    to-rose-100
                                    shadow-inner
                                "
                            >

                                <MdDeleteForever className="text-3xl sm:text-4xl text-red-500" />

                            </div>

                            <div>

                                <AlertDialog.Heading
                                    className="
                                        text-2xl
                                        sm:text-3xl
                                        font-black
                                        tracking-tight
                                        text-slate-900
                                    "
                                >
                                    Cancel Booking?
                                </AlertDialog.Heading>

                                <p
                                    className="
                                        mt-3
                                        text-sm
                                        leading-6
                                        sm:leading-7
                                        text-slate-500
                                    "
                                >
                                    This booking will be permanently removed
                                    from your booking history and cannot be restored.
                                </p>

                            </div>

                        </AlertDialog.Header>

                        {/* BODY */}
                        <AlertDialog.Body
                            className="
                                px-5
                                py-5
                                sm:px-8
                                sm:py-7
                            "
                        >

                            <div
                                className="
                                    rounded-3xl
                                    border
                                    border-slate-200
                                    bg-gradient-to-br
                                    from-slate-50
                                    to-white
                                    p-5
                                    sm:p-6
                                "
                            >

                                <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">

                                    <div className="min-w-0 flex-1">

                                        <p
                                            className="
                                                text-[11px]
                                                font-semibold
                                                uppercase
                                                tracking-[0.2em]
                                                text-emerald-600
                                            "
                                        >
                                            Facility
                                        </p>

                                        <h3
                                            className="
                                                mt-3
                                                break-words
                                                text-xl
                                                sm:text-2xl
                                                font-bold
                                                leading-tight
                                                text-slate-900
                                            "
                                        >
                                            {bookingCard?.facilityName}
                                        </h3>

                                        <p
                                            className="
                                                mt-3
                                                text-sm
                                                leading-6
                                                text-slate-500
                                            "
                                        >
                                            {bookingCard?.facilityLocation}
                                        </p>

                                    </div>

                                    <div
                                        className="
                                            w-fit
                                            rounded-2xl
                                            bg-emerald-100
                                            px-4
                                            py-2
                                            text-xs
                                            sm:text-sm
                                            font-semibold
                                            text-emerald-700
                                        "
                                    >
                                        {bookingCard?.facilityType}
                                    </div>

                                </div>

                                <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">

                                    <div
                                        className="
                                            rounded-2xl
                                            border
                                            border-slate-100
                                            bg-white
                                            p-4
                                        "
                                    >

                                        <p
                                            className="
                                                text-[11px]
                                                font-semibold
                                                uppercase
                                                tracking-wide
                                                text-slate-400
                                            "
                                        >
                                            Booking Date
                                        </p>

                                        <h4
                                            className="
                                                mt-2
                                                text-sm
                                                sm:text-base
                                                font-bold
                                                text-slate-900
                                            "
                                        >
                                            {bookingCard?.bookingDate}
                                        </h4>
                                    </div>

                                    <div
                                        className="
                                            rounded-2xl
                                            border
                                            border-slate-100
                                            bg-white
                                            p-4
                                        "
                                    >

                                        <p
                                            className="
                                                text-[11px]
                                                font-semibold
                                                uppercase
                                                tracking-wide
                                                text-slate-400
                                            "
                                        >
                                            Total Price
                                        </p>

                                        <h4
                                            className="
                                                mt-2
                                                text-sm
                                                sm:text-base
                                                font-bold
                                                text-emerald-600
                                            "
                                        >
                                            ৳{bookingCard?.totalPrice}
                                        </h4>
                                    </div>

                                </div>

                            </div>

                        </AlertDialog.Body>

                        <AlertDialog.Footer
                            className="
                                flex
                                flex-col-reverse
                                gap-3
                                border-t
                                border-slate-100
                                px-5
                                py-5
                                sm:flex-row
                                sm:justify-end
                                sm:px-8
                                sm:py-6
                            "
                        >

                            <Button
                                slot="close"
                                className="
                                    h-11
                                    sm:h-12
                                    w-full
                                    sm:w-auto
                                    rounded-2xl
                                    border
                                    border-slate-200
                                    bg-white
                                    px-6
                                    text-sm
                                    font-semibold
                                    text-slate-700
                                    transition
                                    hover:bg-slate-50
                                "
                            >
                                Keep Booking
                            </Button>

                            <Button
                                slot="close"
                                onClick={onSubmit}
                                className="
                                    h-11
                                    sm:h-12
                                    w-full
                                    sm:w-auto
                                    rounded-2xl
                                    bg-gradient-to-r
                                    from-red-500
                                    to-rose-500
                                    px-6
                                    text-sm
                                    font-semibold
                                    text-white
                                    shadow-lg
                                    shadow-red-500/20
                                    transition-all
                                    duration-300
                                    hover:scale-[1.01]
                                    hover:from-red-600
                                    hover:to-rose-600
                                "
                            >
                                Confirm Cancel
                            </Button>

                        </AlertDialog.Footer>

                    </AlertDialog.Dialog>

                </AlertDialog.Container>

            </AlertDialog.Backdrop>

        </AlertDialog>
    );
}