'use client'
import { authClient } from "@/lib/auth-client";
import { Avatar, Button, Dropdown } from "@heroui/react";
import Link from "next/link";

export function AvaterDropDown({ user }) {

    const handleSignOut = async () => {
        await authClient.signOut();
    }

    return (
        <Dropdown placement="bottom-end">
            <Dropdown.Trigger>

                <div className="outline-none">
                    <Avatar
                        size="md"
                        className="cursor-pointer border border-slate-200 transition hover:opacity-90"
                    >
                        <Avatar.Image
                            alt={user?.name}
                            src={user?.image}
                        />
                        <Avatar.Fallback className="bg-slate-900 text-sm font-semibold text-white">
                            {user?.name?.charAt(0).toUpperCase()}
                        </Avatar.Fallback>
                    </Avatar>
                </div>
            </Dropdown.Trigger>
            <Dropdown.Popover className="w-72 overflow-hidden rounded-2xl border border-slate-200 bg-white p-0 shadow-xl">

                <div className="border-b border-slate-100 px-4 py-4">

                    <div>
                        <Link href={'/profile'} className="flex items-center gap-3">
                            <Avatar
                                size="lg"
                                className="border border-slate-200"
                            >
                                <Avatar.Image
                                    alt={user?.name}
                                    src={user?.image}
                                />

                                <Avatar.Fallback className="bg-slate-900 text-white">
                                    {user?.name?.charAt(0).toUpperCase()}
                                </Avatar.Fallback>
                            </Avatar>

                            <div className="min-w-0">

                                <h3 className="truncate text-sm font-semibold text-slate-900">
                                    {user?.name}
                                </h3>

                                <p className="truncate text-xs text-slate-500">
                                    {user?.email}
                                </p>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="p-2">

                    <Link
                        href="/my-bookings"
                        className="flex items-center rounded-xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
                    >
                        My Bookings
                    </Link>

                    <Link
                        href="/add-facilities"
                        className="flex items-center rounded-xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
                    >
                        Add Facility
                    </Link>

                    <Link
                        href="/manages-facilities"
                        className="flex items-center rounded-xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
                    >
                        Manage Facilities
                    </Link>

                    <div className="my-2 h-px bg-slate-100"></div>

                    <p
                        onClick={handleSignOut}
                        className="flex w-full cursor-pointer items-center rounded-xl px-4 py-3 text-sm font-medium text-red-500 transition hover:bg-red-50"
                    >
                        Log Out
                    </p>

                </div>
            </Dropdown.Popover>
        </Dropdown>
    );
}