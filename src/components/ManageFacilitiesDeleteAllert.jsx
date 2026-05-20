"use client";

import React from "react";
import { AlertDialog, Button } from "@heroui/react";
import { MdDeleteForever } from "react-icons/md";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

const ManageFacilitiesDeleteAllert = ({ facility }) => {
    const router = useRouter();
    const { _id } = facility;

    const onSubmit = async () => {
        try {
            const { data } = await authClient.token();

            const res = await fetch(
                `${process.env.NEXT_PUBLIC_SERVER_URL}/bookings/${_id}`,
                {
                    method: "DELETE",
                    headers: {
                        "content-type": "application/json",
                        authorization: `Bearer ${data?.token}`,
                    },
                }
            );

            const result = await res.json();

            if (result?.deletedCount > 0) {
                toast.success("Deleted successfully");
                router.refresh();
            }
        } catch (error) {
            console.log(error);
            toast.error("Delete failed");
        }
    };

    return (
        <AlertDialog>
            {/* Trigger */}
            <Button className="w-full sm:w-auto h-11 rounded-xl border border-red-200 bg-white text-red-500 text-sm font-medium hover:bg-red-50 transition">
                Delete
            </Button>

            {/* Backdrop */}
            <AlertDialog.Backdrop className="bg-black/40 backdrop-blur-sm p-4">
                <AlertDialog.Container className="flex items-center justify-center">
                    {/* Dialog */}
                    <AlertDialog.Dialog className="w-full max-w-md rounded-2xl bg-white shadow-xl border border-slate-100 overflow-hidden">

                        {/* Header */}
                        <AlertDialog.Header className="p-6 text-center border-b border-slate-100">
                            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-50">
                                <MdDeleteForever className="text-2xl text-red-500" />
                            </div>

                            <h2 className="mt-4 text-lg font-semibold text-slate-900">
                                Delete booking?
                            </h2>

                            <p className="mt-2 text-sm text-slate-500 leading-6">
                                This action cannot be undone.
                            </p>
                        </AlertDialog.Header>

                        {/* Body */}
                        <AlertDialog.Body className="p-5 space-y-4">

                            <div className="rounded-xl border border-slate-100 p-4 bg-slate-50">
                                <p className="text-xs text-slate-400">Facility</p>
                                <p className="text-sm font-medium text-slate-900">
                                    {facility?.facilityName}
                                </p>
                                <p className="text-xs text-slate-500 mt-1">
                                    {facility?.facilityType}
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-3 text-sm">

                                <div className="rounded-xl border border-slate-100 p-3">
                                    <p className="text-xs text-slate-400">Date</p>
                                    <p className="font-medium text-slate-800">
                                        {facility?.bookingDate}
                                    </p>
                                </div>

                                <div className="rounded-xl border border-slate-100 p-3">
                                    <p className="text-xs text-slate-400">Hours</p>
                                    <p className="font-medium text-slate-800">
                                        {facility?.hours}h
                                    </p>
                                </div>

                            </div>

                            <div className="rounded-xl border border-slate-100 p-3 flex justify-between items-center">
                                <p className="text-sm text-slate-500">Total</p>
                                <p className="text-sm font-semibold text-emerald-600">
                                    ৳{facility?.totalPrice}
                                </p>
                            </div>

                        </AlertDialog.Body>

                        {/* Footer */}
                        <AlertDialog.Footer className="p-5 border-t border-slate-100 flex flex-col sm:flex-row gap-2">

                            <Button
                                slot="close"
                                className="w-full sm:w-auto h-10 rounded-xl border border-slate-200 bg-white text-slate-700 text-sm hover:bg-slate-50 transition"
                            >
                                Cancel
                            </Button>

                            <Button
                                slot="close"
                                onClick={onSubmit}
                                className="w-full sm:w-auto h-10 rounded-xl bg-red-500 text-white text-sm hover:bg-red-600 transition"
                            >
                                Delete
                            </Button>

                        </AlertDialog.Footer>

                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
};

export default ManageFacilitiesDeleteAllert;