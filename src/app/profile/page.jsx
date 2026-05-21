'use client';

import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import React from 'react';
import { FiEdit2, FiMail, FiShield, FiUser } from 'react-icons/fi';

const ProfilePage = () => {

    const { data: session } = authClient.useSession();

    const user = session?.user;

    return (
        <section className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-14">

            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="mb-10 text-center">

                    <span className="inline-flex items-center rounded-full border border-emerald-100 bg-emerald-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
                        My Profile
                    </span>

                    <h1 className="mt-5 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                        Account Information
                    </h1>

                    <p className="mt-3 text-sm leading-7 text-slate-500 sm:text-base">
                        Manage your personal account details.
                    </p>
                </div>

                {/* Card */}
                <div className="overflow-hidden rounded-[36px] border border-slate-200 bg-white shadow-[0_10px_60px_rgba(15,23,42,0.06)]">

                    {/* Top Gradient */}
                    <div className="relative h-52 bg-gradient-to-r from-emerald-500 via-emerald-600 to-teal-500">

                        <div className="absolute inset-0 bg-black/5"></div>

                        <div className="absolute left-0 top-0 h-52 w-52 rounded-full bg-white/10 blur-3xl"></div>

                        <div className="absolute right-0 bottom-0 h-52 w-52 rounded-full bg-white/10 blur-3xl"></div>
                    </div>

                    {/* Content */}
                    <div className="relative px-6 pb-10 sm:px-10">

                        {/* Profile */}
                        <div className="-mt-20 flex flex-col items-center">

                            {/* Image */}
                            <div className="relative h-40 w-40 overflow-hidden rounded-full border-[6px] border-white bg-slate-100 shadow-2xl">

                                {
                                    user?.image ? (
                                        <Image
                                            src={user?.image}
                                            alt={user?.name}
                                            fill
                                            className="object-cover"
                                        />
                                    ) : (
                                        <div className="flex h-full w-full items-center justify-center bg-emerald-100 text-5xl font-bold text-emerald-700">
                                            {user?.name?.charAt(0).toUpperCase()}
                                        </div>
                                    )
                                }
                            </div>

                            {/* Name */}
                            <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-900">
                                {user?.name || 'Unknown User'}
                            </h2>

                            {/* Email */}
                            <p className="mt-2 flex items-center gap-2 text-sm text-slate-500">
                                <FiMail className="text-base" />
                                {user?.email}
                            </p>

                            {/* Status */}
                            <div className="mt-4 rounded-full bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">
                                Active Account
                            </div>
                        </div>

                        {/* Info Grid */}
                        <div className="mt-12 grid gap-5 md:grid-cols-2">

                            {/* Full Name */}
                            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 transition hover:border-emerald-100 hover:bg-emerald-50/40">

                                <div className="flex items-center gap-4">

                                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm">
                                        <FiUser className="text-lg text-emerald-600" />
                                    </div>

                                    <div>
                                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                                            Full Name
                                        </p>

                                        <h3 className="mt-1 text-lg font-semibold text-slate-900">
                                            {user?.name || 'Not Provided'}
                                        </h3>
                                    </div>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 transition hover:border-emerald-100 hover:bg-emerald-50/40">

                                <div className="flex items-center gap-4">

                                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm">
                                        <FiMail className="text-lg text-emerald-600" />
                                    </div>

                                    <div className="min-w-0">
                                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                                            Email Address
                                        </p>

                                        <h3 className="mt-1 truncate text-lg font-semibold text-slate-900">
                                            {user?.email || 'Not Provided'}
                                        </h3>
                                    </div>
                                </div>
                            </div>

                            {/* User ID */}
                            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 md:col-span-2">

                                <div className="flex items-start gap-4">

                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white shadow-sm">
                                        <FiShield className="text-lg text-emerald-600" />
                                    </div>

                                    <div className="min-w-0">
                                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                                            User ID
                                        </p>

                                        <p className="mt-2 break-all text-sm leading-7 text-slate-600">
                                            {user?.id}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">

                            <button
                                className="
                                    flex
                                    h-12
                                    items-center
                                    justify-center
                                    gap-2
                                    rounded-2xl
                                    bg-emerald-600
                                    px-8
                                    text-sm
                                    font-semibold
                                    text-white
                                    transition-all
                                    hover:bg-emerald-700
                                    hover:shadow-lg
                                "
                            >
                                <FiEdit2 />
                                Edit Profile
                            </button>

                            <button
                                className="
                                    flex
                                    h-12
                                    items-center
                                    justify-center
                                    rounded-2xl
                                    border
                                    border-slate-300
                                    bg-white
                                    px-8
                                    text-sm
                                    font-semibold
                                    text-slate-700
                                    transition-all
                                    hover:border-emerald-500
                                    hover:text-emerald-600
                                "
                            >
                                Change Password
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProfilePage;