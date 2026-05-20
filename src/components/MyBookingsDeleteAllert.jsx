"use client";

import React from "react";
import { AlertDialog, Button } from "@heroui/react";
import { MdDeleteForever } from "react-icons/md";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";


export function MyBookingsDeleteAllert({ bookingCard }) {

    const router = useRouter();

    const { _id } = bookingCard;

    const onSubmit = async () => {

        const { data } = await authClient.token();

        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/bookings/${_id}`,
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
            w-full
            rounded-2xl
            border
            border-red-200
            bg-white
            px-5
            text-sm
            font-semibold
            text-red-500
            transition-all
            duration-300
            hover:border-red-500
            hover:bg-red-500
            hover:text-white
            sm:w-auto
        "
            >
                Cancel Booking
            </Button>

            {/* BACKDROP */}
            <AlertDialog.Backdrop
                className="
            bg-black/50
            backdrop-blur-sm
            p-4
        "
            >

                <AlertDialog.Container className="flex items-center justify-center">

                    {/* DIALOG */}
                    <AlertDialog.Dialog
                        className="
                    relative
                    w-full
                    max-w-lg
                    overflow-hidden
                    rounded-[32px]
                    border
                    border-slate-200
                    bg-white
                    shadow-[0_20px_80px_rgba(0,0,0,0.12)]
                "
                    >

                        {/* CLOSE */}
                        <AlertDialog.CloseTrigger
                            className="
                        absolute
                        right-5
                        top-5
                        z-20
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-full
                        bg-slate-100
                        text-slate-500
                        transition-all
                        duration-300
                        hover:bg-red-100
                        hover:text-red-500
                    "
                        />

                        {/* HEADER */}
                        <AlertDialog.Header
                            className="
                        flex
                        flex-col
                        items-center
                        border-b
                        border-slate-100
                        px-6
                        pb-7
                        pt-10
                        text-center
                        sm:px-8
                    "
                        >

                            <div
                                className="
                            flex
                            h-20
                            w-20
                            items-center
                            justify-center
                            rounded-[28px]
                            bg-red-50
                        "
                            >

                                <MdDeleteForever className="text-5xl text-red-500" />

                            </div>

                            <AlertDialog.Heading
                                className="
                            mt-6
                            text-2xl
                            font-black
                            tracking-tight
                            text-slate-900
                            sm:text-3xl
                        "
                            >
                                Cancel Booking?
                            </AlertDialog.Heading>

                            <p
                                className="
                            mt-4
                            max-w-md
                            text-sm
                            leading-7
                            text-slate-500
                        "
                            >
                                This booking will be permanently removed from your account.
                            </p>

                        </AlertDialog.Header>

                        {/* BODY */}
                        <AlertDialog.Body
                            className="
                        px-6
                        py-6
                        sm:px-8
                    "
                        >

                            <div
                                className="
                            overflow-hidden
                            rounded-3xl
                            border
                            border-slate-200
                            bg-slate-50
                        "
                            >

                                {/* TOP */}
                                <div className="p-5 sm:p-6">

                                    <div className="flex items-start justify-between gap-4">

                                        <div className="min-w-0 flex-1">

                                            <div
                                                className="
                                            inline-flex
                                            rounded-full
                                            bg-emerald-100
                                            px-3
                                            py-1
                                            text-[11px]
                                            font-semibold
                                            uppercase
                                            tracking-[0.18em]
                                            text-emerald-700
                                        "
                                            >
                                                {bookingCard?.facilityType}
                                            </div>

                                            <h3
                                                className="
                                            mt-4
                                            break-words
                                            text-xl
                                            font-bold
                                            leading-tight
                                            text-slate-900
                                            sm:text-2xl
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

                                    </div>

                                </div>

                                {/* STATS */}
                                <div
                                    className="
                                grid
                                grid-cols-1
                                gap-4
                                border-t
                                border-slate-200
                                bg-white
                                p-5
                                sm:grid-cols-2
                                sm:p-6
                            "
                                >

                                    <div
                                        className="
                                    rounded-2xl
                                    border
                                    border-slate-100
                                    bg-slate-50
                                    p-4
                                "
                                    >

                                        <p
                                            className="
                                        text-[11px]
                                        font-semibold
                                        uppercase
                                        tracking-[0.18em]
                                        text-slate-400
                                    "
                                        >
                                            Booking Date
                                        </p>

                                        <h4
                                            className="
                                        mt-3
                                        text-sm
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
                                    bg-slate-50
                                    p-4
                                "
                                    >

                                        <p
                                            className="
                                        text-[11px]
                                        font-semibold
                                        uppercase
                                        tracking-[0.18em]
                                        text-slate-400
                                    "
                                        >
                                            Total Price
                                        </p>

                                        <h4
                                            className="
                                        mt-3
                                        text-lg
                                        font-black
                                        text-emerald-600
                                    "
                                        >
                                            ৳{bookingCard?.totalPrice}
                                        </h4>

                                    </div>

                                </div>

                            </div>

                        </AlertDialog.Body>

                        {/* FOOTER */}
                        <AlertDialog.Footer
                            className="
                        flex
                        flex-col-reverse
                        gap-3
                        border-t
                        border-slate-100
                        px-6
                        py-5
                        sm:flex-row
                        sm:justify-end
                        sm:px-8
                    "
                        >

                            <Button
                                slot="close"
                                className="
                            h-12
                            w-full
                            rounded-2xl
                            border
                            border-slate-200
                            bg-white
                            px-6
                            text-sm
                            font-semibold
                            text-slate-700
                            transition-all
                            duration-300
                            hover:bg-slate-100
                            sm:w-auto
                        "
                            >
                                Keep Booking
                            </Button>

                            <Button
                                slot="close"
                                onClick={onSubmit}
                                className="
                            h-12
                            w-full
                            rounded-2xl
                            bg-red-500
                            px-6
                            text-sm
                            font-semibold
                            text-white
                            transition-all
                            duration-300
                            hover:bg-red-600
                            sm:w-auto
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