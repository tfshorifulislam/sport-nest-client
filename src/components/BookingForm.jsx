import React from 'react';


import {
    FieldError,
    Input,
    Select,
    Label,
    TextField,
    ListBox,
    TextArea,
    Description
} from "@heroui/react";

import { authClient } from '@/lib/auth-client';

const BookingFacilitiesPage = () => {

    const { data: session } = authClient.useSession()
    // console.log('session', session)
    const user = session?.user
    console.log(user)

    const [slots, setSlots] = useState([]);

    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);


        const availableTimeSlots = formData.getAll("availableTimeSlots");

        const facilityData = {
            name: formData.get("name"),
            type: formData.get("type"),
            image: formData.get("image"),
            location: formData.get("location"),
            pricePerHour: formData.get("pricePerHour"),
            capacity: formData.get("capacity"),
            ownerEmail: formData.get("ownerEmail"),
            description: formData.get("description"),
            availableTimeSlots,
        };


        const res = await fetch(`http://localhost:5000/sports`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(facilityData)
        })
        const data = await res.json()
        console.log(data)
    }


    const BookingForm = () => {
        return (
            <div className="min-h-screen bg-slate-50 px-4 py-12">

                <div className="mx-auto w-full max-w-5xl">

                    {/* Header */}
                    <div className="mb-12">

                        <span className="inline-flex rounded-full bg-emerald-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
                            Sports Facility
                        </span>

                        <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                            Add Your
                            <span className="bg-gradient-to-r from-emerald-600 to-emerald-400 bg-clip-text text-transparent">
                                {" "}New Facility
                            </span>
                        </h1>

                        <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
                            Publish your sports venue with complete details, pricing,
                            available slots, and facility information to start receiving bookings.
                        </p>
                    </div>

                    {/* Card */}
                    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

                        <form
                            onSubmit={onSubmit}
                            className="grid grid-cols-1 gap-6 md:grid-cols-2">

                            {/* Facility Name */}
                            <TextField
                                isRequired
                                name="name"
                                className="w-full"
                            >
                                <div className="w-full">

                                    <Label className="mb-2 block text-sm font-medium text-slate-700">
                                        Facility Name
                                    </Label>

                                    <Input
                                        placeholder="Elite Football Arena"
                                        className="w-full"
                                    />

                                    <FieldError className="mt-1 text-sm text-red-500" />
                                </div>
                            </TextField>

                            {/* Facility Type */}
                            <Select
                                name="type"
                                className="w-full"
                                placeholder="Select type"
                            >
                                <Label className="mb-2 block text-sm font-medium text-slate-700">
                                    Facility Type
                                </Label>

                                <Select.Trigger className="rounded-xl border border-slate-300 bg-white">
                                    <Select.Value />
                                    <Select.Indicator />
                                </Select.Trigger>

                                <Select.Popover>
                                    <ListBox>
                                        <ListBox.Item id="football">
                                            Football
                                        </ListBox.Item>

                                        <ListBox.Item id="cricket">
                                            Cricket
                                        </ListBox.Item>

                                        <ListBox.Item id="badminton">
                                            Badminton
                                        </ListBox.Item>

                                        <ListBox.Item id="basketball">
                                            Basketball
                                        </ListBox.Item>

                                        <ListBox.Item id="tennis">
                                            Tennis
                                        </ListBox.Item>
                                    </ListBox>
                                </Select.Popover>
                            </Select>

                            {/* Image */}
                            <div className="md:col-span-2">

                                <TextField
                                    isRequired
                                    name="image"
                                    className="w-full"
                                >
                                    <div className="w-full">

                                        <Label className="mb-2 block text-sm font-medium text-slate-700">
                                            Image Upload URL
                                        </Label>

                                        <Input
                                            placeholder="https://imgbb.com/example-image"
                                            className="w-full"
                                        />

                                        <Description className="mt-1 text-xs text-slate-500">
                                            Upload using imgbb or postimage
                                        </Description>

                                        <FieldError className="mt-1 text-sm text-red-500" />
                                    </div>
                                </TextField>
                            </div>

                            {/* Location */}
                            <TextField
                                isRequired
                                name="location"
                                className="w-full"
                            >
                                <div className="w-full">

                                    <Label className="mb-2 block text-sm font-medium text-slate-700">
                                        Location
                                    </Label>

                                    <Input
                                        placeholder="Dhaka, Bangladesh"
                                        className="w-full"
                                    />

                                    <FieldError className="mt-1 text-sm text-red-500" />
                                </div>
                            </TextField>

                            {/* Price */}
                            <TextField
                                isRequired
                                name="pricePerHour"
                                className="w-full"
                            >
                                <div className="w-full">

                                    <Label className="mb-2 block text-sm font-medium text-slate-700">
                                        Price Per Hour
                                    </Label>

                                    <Input
                                        type="number"
                                        placeholder="1000"
                                        className="w-full"
                                    />

                                    <FieldError className="mt-1 text-sm text-red-500" />
                                </div>
                            </TextField>

                            {/* Capacity */}
                            <TextField
                                isRequired
                                name="capacity"
                                className="w-full"
                            >
                                <div className="w-full">

                                    <Label className="mb-2 block text-sm font-medium text-slate-700">
                                        Capacity
                                    </Label>

                                    <Input
                                        type="number"
                                        placeholder="20 Players"
                                        className="w-full"
                                    />

                                    <FieldError className="mt-1 text-sm text-red-500" />
                                </div>
                            </TextField>

                            {/* Time Slots */}
                            <Select
                                name='availableTimeSlots'
                                className="w-full"
                                placeholder="Select time slots"
                                selectionMode="multiple"
                                selectedKeys={slots}
                                onSelectionChange={(keys) => {
                                    setSlots(Array.from(keys));
                                }}
                            >

                                <Label>Available Time Slots</Label>

                                <Select.Trigger>
                                    <Select.Value />
                                    <Select.Indicator />
                                </Select.Trigger>

                                <Select.Popover>

                                    <ListBox selectionMode="multiple">

                                        <ListBox.Item
                                            id="6:00 AM - 8:00 AM"
                                            textValue="6:00 AM - 8:00 AM"
                                        >
                                            6:00 AM - 8:00 AM
                                            <ListBox.ItemIndicator />
                                        </ListBox.Item>

                                        <ListBox.Item
                                            id="4:00 PM - 6:00 PM"
                                            textValue="4:00 PM - 6:00 PM"
                                        >
                                            4:00 PM - 6:00 PM
                                            <ListBox.ItemIndicator />
                                        </ListBox.Item>

                                        <ListBox.Item
                                            id="8:00 PM - 10:00 PM"
                                            textValue="8:00 PM - 10:00 PM"
                                        >
                                            8:00 PM - 10:00 PM
                                            <ListBox.ItemIndicator />
                                        </ListBox.Item>

                                    </ListBox>

                                </Select.Popover>
                            </Select>

                            {/* Owner Email */}
                            <div className="md:col-span-2">
                                <TextField
                                    isRequired
                                    name="email"
                                    type="email"
                                    className="w-full"
                                    defaultValue={user?.email}
                                >
                                    <div className="w-full">

                                        <Label className="mb-2 block text-sm font-medium text-slate-700">
                                            Owner Email
                                        </Label>

                                        <Input
                                            value={user?.email}
                                            readOnly
                                            className="w-full cursor-not-allowed bg-slate-100"
                                        />

                                        <FieldError className="mt-1 text-sm text-red-500" />
                                    </div>
                                </TextField>
                            </div>

                            {/* Description */}
                            <div className="md:col-span-2">

                                <TextField
                                    isRequired
                                    name="description"
                                    className="w-full"
                                >
                                    <div className="w-full">

                                        <Label className="mb-2 block text-sm font-medium text-slate-700">
                                            Description
                                        </Label>

                                        <TextArea
                                            placeholder="Write facility details..."
                                            className="min-h-[140px] w-full"
                                        />

                                        <FieldError className="mt-1 text-sm text-red-500" />
                                    </div>
                                </TextField>
                            </div>

                            {/* Buttons */}
                            <div className="mt-4 flex flex-col gap-4 md:col-span-2 md:flex-row">

                                <button
                                    type="submit"
                                    className="flex-1 cursor-pointer rounded-xl bg-emerald-600 py-3 text-sm font-medium text-white transition hover:bg-emerald-700"
                                >
                                    Add Facility
                                </button>

                                <button
                                    type="reset"
                                    className="flex-1 cursor-pointer rounded-xl border border-slate-300 bg-white py-3 text-sm font-medium text-slate-700 transition hover:border-emerald-500 hover:text-emerald-600"
                                >
                                    Reset Form
                                </button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default BookingForm;