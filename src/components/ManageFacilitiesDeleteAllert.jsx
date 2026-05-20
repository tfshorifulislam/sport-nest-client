"use client";

import React from "react";
import { AlertDialog, Button } from "@heroui/react";

import { MdDeleteForever } from "react-icons/md";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";


const ManageFacilitiesDeleteAllert = ({ facility }) => {

    const router = useRouter();

    const { _id } = facility;

    const onSubmit = async () => {

        // const { data } = await authClient.token();

        try {

            const res = await fetch(`http://localhost:5000/bookings/${_id}`,
                {
                    method: "DELETE",
                    headers: {
                        "content-type": "application/json",
                        // authorization: `Bearer ${data?.token}`
                    }
                }
            );

            const result = await res.json();

            if (result?.deletedCount > 0) {

                toast.success("Facility successfully deleted");

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
            flex h-12 flex-1 cursor-pointer items-center justify-center
            rounded-2xl border border-red-200 bg-red-50
            px-5 text-sm font-semibold text-red-500
            transition-all duration-300
            hover:border-red-500 hover:bg-red-500 hover:text-white
        "
            >
                Delete
            </Button>

            <AlertDialog.Backdrop className="bg-black/70 backdrop-blur-md p-4">

                <AlertDialog.Container className="flex items-center justify-center">

                    <AlertDialog.Dialog
                        className="
                    relative w-full max-w-lg overflow-hidden
                    rounded-[32px] border border-white/10
                    bg-white shadow-[0_30px_80px_rgba(0,0,0,0.18)]
                "
                    >

                        {/* TOP GRADIENT */}
                        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-red-500 via-rose-500 to-orange-400" />

                        {/* CLOSE */}
                        <AlertDialog.CloseTrigger
                            className="
                        absolute right-5 top-5 z-10
                        flex h-10 w-10 items-center justify-center
                        rounded-full bg-slate-100 text-slate-500
                        transition-all duration-300
                        hover:bg-red-100 hover:text-red-500
                    "
                        />

                        {/* HEADER */}
                        <AlertDialog.Header className="px-8 pt-10 pb-6">

                            <div
                                className="
                            flex h-20 w-20 items-center justify-center
                            rounded-[28px]
                            bg-gradient-to-br from-red-100 to-rose-100
                            shadow-inner
                        "
                            >
                                <MdDeleteForever className="text-5xl text-red-500" />
                            </div>

                            <div className="mt-6">

                                <AlertDialog.Heading
                                    className="
                                text-3xl font-black tracking-tight text-slate-900
                            "
                                >
                                    Delete Booking?
                                </AlertDialog.Heading>

                                <p className="mt-4 text-sm leading-7 text-slate-500">
                                    This action is permanent and your booking information
                                    cannot be restored once deleted.
                                </p>

                            </div>

                        </AlertDialog.Header>

                        {/* BODY */}
                        <AlertDialog.Body className="px-8 pb-7">

                            <div
                                className="
                            overflow-hidden rounded-[28px]
                            border border-slate-200 bg-slate-50
                        "
                            >

                                {/* FACILITY IMAGE */}
                                <div className="relative h-52 w-full overflow-hidden">

                                    <img
                                        src={facility?.facilityImage}
                                        alt={facility?.facilityName}
                                        className="h-full w-full object-cover"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                                    <div className="absolute bottom-5 left-5">

                                        <span
                                            className="
                                        rounded-full bg-white/90 px-3 py-1
                                        text-[11px] font-semibold uppercase
                                        tracking-[0.18em] text-emerald-700
                                        backdrop-blur
                                    "
                                        >
                                            {facility?.facilityType}
                                        </span>

                                        <h3 className="mt-3 text-2xl font-bold text-white">
                                            {facility?.facilityName}
                                        </h3>

                                    </div>

                                </div>

                                {/* DETAILS */}
                                <div className="space-y-4 p-6">

                                    <div className="flex items-center justify-between">

                                        <p className="text-sm text-slate-500">
                                            Booking Date
                                        </p>

                                        <h4 className="text-sm font-bold text-slate-800">
                                            {facility?.bookingDate}
                                        </h4>

                                    </div>

                                    <div className="flex items-center justify-between">

                                        <p className="text-sm text-slate-500">
                                            Hours
                                        </p>

                                        <h4 className="text-sm font-bold text-slate-800">
                                            {facility?.hours} Hours
                                        </h4>

                                    </div>

                                    <div className="flex items-center justify-between">

                                        <p className="text-sm text-slate-500">
                                            Total Price
                                        </p>

                                        <h4 className="text-lg font-black text-emerald-600">
                                            ৳ {facility?.totalPrice}
                                        </h4>

                                    </div>

                                </div>

                            </div>

                        </AlertDialog.Body>

                        {/* FOOTER */}
                        <AlertDialog.Footer
                            className="
                        flex flex-col-reverse gap-3
                        border-t border-slate-100
                        px-8 py-6 sm:flex-row sm:justify-end
                    "
                        >

                            <Button
                                slot="close"
                                className="
                            h-12 rounded-2xl border border-slate-200
                            bg-white px-6 text-sm font-semibold
                            text-slate-700 transition-all duration-300
                            hover:bg-slate-100
                        "
                            >
                                Keep Booking
                            </Button>

                            <Button
                                slot="close"
                                onClick={onSubmit}
                                className="
                            h-12 rounded-2xl
                            bg-gradient-to-r from-red-500 to-rose-500
                            px-6 text-sm font-semibold text-white
                            shadow-lg shadow-red-500/20
                            transition-all duration-300
                            hover:scale-[1.02]
                            hover:from-red-600 hover:to-rose-600
                        "
                            >
                                Confirm Delete
                            </Button>

                        </AlertDialog.Footer>

                    </AlertDialog.Dialog>

                </AlertDialog.Container>

            </AlertDialog.Backdrop>
        </AlertDialog>
    );
};

export default ManageFacilitiesDeleteAllert;