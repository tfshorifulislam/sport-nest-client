"use client";
import React from "react";
import {
    AlertDialog,
    Button
} from "@heroui/react";
import { MdDeleteForever } from "react-icons/md";
import toast from "react-hot-toast";
import { redirect } from "next/navigation";
import { authClient } from "@/lib/auth-client";

export function MyBookingsDeleteAllert({ bookingCard }) {

    const { _id } = bookingCard;

    const onSubmit = async () => {

        const { data } = await authClient.token()
        // console.log('Data', data)

        try {

            const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/mentora/${_id}`,
                {
                    method: "DELETE",
                    headers: {
                        "content-type": "application/json",
                        authorization: `Bearer ${data.token}`
                    }
                }
            );

            const MyBookingsDeleteAllert = await res.json();

            // console.log(MyBookingsDeleteAllert, "bookingCard delete data");


        } catch (error) {

            console.log('delete bookingCard alert component data fetch system not working');
        }
        toast.success(`${bookingCard.title} Permanently deleted`)
        redirect('/bookingCards')
    };

    return (

        <AlertDialog>

            {/* OPEN BUTTON */}
            <Button
                className="flex h-12 items-center justify-center rounded-2xl bg-red-500 px-6 text-sm font-semibold text-white transition hover:bg-red-600"
            >
                Cancel Booking
            </Button>

            {/* BACKDROP */}
            <AlertDialog.Backdrop
                className="
                    bg-black/70
                    backdrop-blur-sm
                "
            >

                <AlertDialog.Container
                    className="p-4"
                >

                    {/* DIALOG */}
                    <AlertDialog.Dialog
                        className="
                            w-full
                            max-w-md
                            rounded-3xl
                            border
                            border-white/10
                            bg-slate-950
                            text-white
                            shadow-2xl
                            backdrop-blur-2xl
                        "
                    >

                        <AlertDialog.CloseTrigger
                            className="
                                absolute
                                right-4
                                top-4
                                text-white
                                bg-red-700
                                hover:text-white
                            "
                        />

                        {/* HEADER */}
                        <AlertDialog.Header
                            className="
                                flex
                                flex-col
                                items-start
                                gap-4
                                border-b
                                border-white/10
                                px-6
                                py-6
                            "
                        >

                            <div
                                className="
                                    flex
                                    h-14
                                    w-14
                                    items-center
                                    justify-center
                                    rounded-2xl
                                    border
                                    border-red-500/20
                                    bg-red-500/10
                                "
                            >

                                <MdDeleteForever className="text-3xl text-red-700" />


                            </div>

                            <div>

                                <AlertDialog.Heading
                                    className="
                                        text-2xl
                                        font-bold
                                        leading-tight
                                        text-white/50
                                    "
                                >
                                    Delete{" "}

                                    <span className="bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
                                        bookingCard
                                    </span>

                                    ?
                                </AlertDialog.Heading>

                                <p className="mt-2 text-sm text-white/60 leading-relaxed">
                                    This action is permanent and cannot be undone.
                                </p>

                            </div>

                        </AlertDialog.Header>

                        {/* BODY */}
                        <AlertDialog.Body
                            className="
                                px-6
                                py-6
                            "
                        >

                            <div
                                className="
                                    rounded-2xl
                                    border
                                    border-white/10
                                    bg-white/5
                                    p-5
                                "
                            >

                                <p className="text-sm leading-relaxed text-white/70">

                                    You are about to permanently delete{" "}

                                    <span className="font-semibold text-white">
                                        {bookingCard.title}
                                    </span>

                                    . All related bookingCard data will be removed permanently.

                                </p>

                            </div>

                        </AlertDialog.Body>

                        {/* FOOTER */}
                        <AlertDialog.Footer
                            className="
                                flex
                                flex-col-reverse
                                gap-3
                                border-t
                                border-white/10
                                px-6
                                py-5
                                sm:flex-row
                                sm:justify-end
                            "
                        >

                            <Button
                                slot="close"
                                className="
                                    w-full
                                    sm:w-auto
                                    rounded-xl
                                    border
                                    border-white/10
                                    bg-white/5
                                    px-6
                                    text-white/70
                                    hover:bg-white/10
                                "
                            >
                                Cancel
                            </Button>

                            <Button
                                slot="close"
                                onClick={onSubmit}
                                className="
                                    w-full
                                    sm:w-auto
                                    rounded-xl
                                    bg-gradient-to-r
                                    from-red-500
                                    to-pink-500
                                    px-6
                                    font-semibold
                                    text-white
                                    shadow-lg
                                    shadow-red-500/20
                                    transition-all
                                    duration-300
                                    hover:scale-[1.02]
                                "
                            >
                                Delete Permanently
                            </Button>

                        </AlertDialog.Footer>

                    </AlertDialog.Dialog>

                </AlertDialog.Container>

            </AlertDialog.Backdrop>

        </AlertDialog>
    );
}