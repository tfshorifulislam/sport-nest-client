'use client'

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

const AddFacilitiesPage = () => {

    return (
        <div className="min-h-screen bg-slate-50 px-4 py-12">

            <div className="mx-auto w-full max-w-5xl">

                {/* Header */}
                <div className="mb-10">

                    <h1 className="text-3xl font-bold tracking-tight text-slate-900">
                        Add New Facility
                    </h1>

                    <p className="mt-2 text-sm text-slate-500">
                        Fill in the facility details to publish your sports venue.
                    </p>
                </div>

                {/* Card */}
                <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

                    <form className="grid grid-cols-1 gap-6 md:grid-cols-2">

                        {/* Facility Name */}
                        <TextField
                            isRequired
                            name="facilityName"
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
                            name="facilityType"
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
                        <TextField
                            isRequired
                            name="availableSlots"
                            className="w-full"
                        >
                            <div className="w-full">

                                <Label className="mb-2 block text-sm font-medium text-slate-700">
                                    Available Time Slots
                                </Label>

                                <Input
                                    placeholder="6AM - 11PM"
                                    className="w-full"
                                />

                                <FieldError className="mt-1 text-sm text-red-500" />
                            </div>
                        </TextField>

                        {/* Owner Email */}
                        <div className="md:col-span-2">

                            <TextField
                                isRequired
                                name="ownerEmail"
                                type="email"
                                className="w-full"
                            >
                                <div className="w-full">

                                    <Label className="mb-2 block text-sm font-medium text-slate-700">
                                        Owner Email
                                    </Label>

                                    <Input
                                        placeholder="owner@example.com"
                                        className="w-full"
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
                                className="flex-1 rounded-xl bg-emerald-600 py-3 text-sm font-medium text-white transition hover:bg-emerald-700"
                            >
                                Add Facility
                            </button>

                            <button
                                type="reset"
                                className="flex-1 rounded-xl border border-slate-300 bg-white py-3 text-sm font-medium text-slate-700 transition hover:border-emerald-500 hover:text-emerald-600"
                            >
                                Reset Form
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddFacilitiesPage;