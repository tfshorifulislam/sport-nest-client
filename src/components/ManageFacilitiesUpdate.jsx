"use client";

import {
    Button,
    Input,
    Label,
    Modal,
    Surface,
    TextField,
} from "@heroui/react";

export function ManageFacilitieisUpdate({ facility }) {

    return (

        <Modal>

            {/* OPEN BUTTON */}
            <Button
                className="flex-1 cursor-pointer rounded-2xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-600"
            >
                Update
            </Button>

            <Modal.Backdrop>

                <Modal.Container placement="center">

                    <Modal.Dialog className="w-full max-w-2xl rounded-[28px] border border-slate-200 bg-white shadow-2xl">

                        <Modal.CloseTrigger />

                        {/* HEADER */}
                        <Modal.Header className="border-b border-slate-100 px-7 py-6">

                            <Modal.Heading className="text-2xl font-bold text-slate-800">

                                Update Booking
                            </Modal.Heading>

                            <p className="mt-2 text-sm text-slate-500">

                                Edit your booking information.
                            </p>
                        </Modal.Header>

                        {/* BODY */}
                        <Modal.Body className="p-7">

                            <Surface
                                variant="default"
                                className="rounded-3xl bg-slate-50 p-6"
                            >

                                <form className="grid grid-cols-1 gap-5 md:grid-cols-2">

                                    {/* Facility Name */}
                                    <TextField>

                                        <Label>Facility Name</Label>

                                        <Input
                                            name="facilityName"
                                            value={facility.facilityName}
                                        />
                                    </TextField>

                                    {/* Facility Type */}
                                    <TextField>

                                        <Label>Facility Type</Label>

                                        <Input
                                            name="facilityType"
                                            value={facility.facilityType}
                                        />
                                    </TextField>

                                    {/* Price */}
                                    <TextField>

                                        <Label>Price Per Hour</Label>

                                        <Input
                                            type="number"
                                            name="pricePerHour"
                                            value={String(formData.pricePerHour)}
                                        />
                                    </TextField>

                                    {/* Hours */}
                                    <TextField>

                                        <Label>Hours</Label>

                                        <Input
                                            type="number"
                                            name="hours"
                                            value={String(facility.hours)}
                                        />
                                    </TextField>

                                    {/* Booking Date */}
                                    <TextField>

                                        <Label>Booking Date</Label>

                                        <Input
                                            type="date"
                                            name="bookingDate"
                                            value={facility.bookingDate}
                                        />
                                    </TextField>

                                    {/* Time Slot */}
                                    <TextField>

                                        <Label>Time Slot</Label>

                                        <Input
                                            name="timeSlot"
                                            value={formData.timeSlot}
                                        />
                                    </TextField>

                                    {/* Location */}
                                    <TextField className="md:col-span-2">

                                        <Label>Facility Location</Label>

                                        <Input
                                            name="facilityLocation"
                                            value={facility.facilityLocation}
                                        />
                                    </TextField>

                                    {/* Image */}
                                    <TextField className="md:col-span-2">

                                        <Label>Facility Image</Label>

                                        <Input
                                            name="facilityImage"
                                            value={facility.facilityImage}
                                        />
                                    </TextField>

                                </form>
                            </Surface>
                        </Modal.Body>

                        {/* FOOTER */}
                        <Modal.Footer className="border-t border-slate-100 px-7 py-5">

                            <Button
                                slot="close"
                                variant="secondary"
                                className="rounded-2xl"
                            >
                                Cancel
                            </Button>

                            <Button
                                className="rounded-2xl bg-emerald-500 px-6 text-white hover:bg-emerald-600"
                            >
                                Save Changes
                            </Button>
                        </Modal.Footer>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}