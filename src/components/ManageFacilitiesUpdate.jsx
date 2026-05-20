"use client";

import {
    Button,
    Input,
    Label,
    Modal,
    Surface,
    TextField,
} from "@heroui/react";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";

export function ManageFacilitieisUpdate({ facility }) {

    const { _id } = facility

    const handleUpdate = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const UpdateData = Object.fromEntries(formData.entries());


        const { data: userToken } = await authClient.token()
        console.log(userToken)

        const res = await fetch(
            `${process.env.NEXT_PUBLIC_SERVER_URL}/bookings/${facility._id}`,
            {
                method: "PATCH",
                headers: {
                    "content-type": "application/json",
                    authorization: `Bearer ${userToken.token}`
                },
                body: JSON.stringify(UpdateData),
            }
        );

        const data = await res.json();

        // console.log(data, 'data');
        toast.success(`${facility.facilityName} is updateed`)
        redirect('/manages-facilities')
    };



    return (
        <Modal>
            <Button
                className="flex h-12 flex-1 cursor-pointer items-center justify-center rounded-2xl border border-emerald-500 bg-emerald-500 px-5 text-sm font-semibold text-white transition-all duration-300 hover:border-emerald-600 hover:bg-emerald-600"
            >
                Update
            </Button>

            <Modal.Backdrop>

                <Modal.Container placement="center">

                    <Modal.Dialog className="w-full max-w-2xl rounded-[28px] border border-slate-200 bg-white shadow-2xl">

                        <Modal.CloseTrigger />

                        <Modal.Header className="border-b border-slate-100 px-7 py-6">

                            <Modal.Heading className="text-2xl font-bold text-slate-800">
                                Update Booking
                            </Modal.Heading>

                            <p className="mt-2 text-sm text-slate-500">
                                Edit your booking information.
                            </p>
                        </Modal.Header>

                        <Modal.Body className="p-7">

                            <Surface
                                variant="default"
                                className="rounded-3xl bg-slate-50 p-6"
                            >

                                <form
                                    onSubmit={handleUpdate}
                                    className="grid grid-cols-1 gap-5 md:grid-cols-2">

                                    <TextField
                                        defaultValue={facility.facilityName}>
                                        <Label>Facility Name</Label>

                                        <Input
                                            name="facilityName"


                                        />
                                    </TextField>

                                    <TextField
                                        defaultValue={facility.facilityType}
                                    >
                                        <Label>Facility Type</Label>

                                        <Input
                                            name="facilityType"


                                        />
                                    </TextField>

                                    <TextField
                                        defaultValue={String(facility.pricePerHour)}>
                                        <Label>Price Per Hour</Label>

                                        <Input
                                            type="number"
                                            name="pricePerHour"


                                        />
                                    </TextField>

                                    <TextField>
                                        <Label>Hours</Label>

                                        <Input
                                            type="number"
                                            name="hours"
                                        // value={String(formData.hours)}

                                        />
                                    </TextField>

                                    <TextField
                                        defaultValue={facility.bookingDate}
                                    >
                                        <Label>Booking Date</Label>

                                        <Input
                                            type="date"
                                            name="bookingDate"


                                        />
                                    </TextField>

                                    <TextField
                                        defaultValue={facility.timeSlot}>
                                        <Label>Time Slot</Label>

                                        <Input
                                            name="timeSlot"


                                        />
                                    </TextField>

                                    <TextField
                                        defaultValue={facility.facilityLocation}
                                        className="md:col-span-2">
                                        <Label>Facility Location</Label>

                                        <Input
                                            name="facilityLocation"


                                        />
                                    </TextField>

                                    <TextField
                                        defaultValue={facility.facilityImage}
                                        className="md:col-span-2">
                                        <Label>Facility Image</Label>

                                        <Input
                                            name="facilityImage"


                                        />
                                    </TextField>

                                    <div className="md:col-span-2 flex items-center justify-end gap-3 pt-4">

                                        <Button
                                            slot="close"
                                            variant="secondary"
                                            className="rounded-2xl"
                                        >
                                            Cancel
                                        </Button>

                                        <Button
                                            type="submit"
                                            slot="close"
                                            className="rounded-2xl bg-emerald-500 px-6 text-white hover:bg-emerald-600"
                                        >
                                            Save Changes
                                        </Button>
                                    </div>

                                </form>
                            </Surface>
                        </Modal.Body>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}