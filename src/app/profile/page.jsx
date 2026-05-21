'use client';

import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import React from 'react';
import {
    FiEdit2,
    FiMail,
    FiShield,
    FiUser,
    FiLock,
} from 'react-icons/fi';

const ProfilePage = () => {

    const { data: session } = authClient.useSession();

    const user = session?.user;

    return (
        <section className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100 py-10 sm:py-14">

            <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="mb-8 text-center sm:mb-10">

                    <span
                        className="
                            inline-flex
                            items-center
                            rounded-full
                            border
                            border-emerald-100
                            bg-emerald-50
                            px-4
                            py-1.5
                            text-[10px]
                            font-semibold
                            uppercase
                            tracking-[0.25em]
                            text-emerald-700
                            sm:text-xs
                        "
                    >
                        My Profile
                    </span>

                    <h1
                        className="
                            mt-4
                            text-3xl
                            font-bold
                            tracking-tight
                            text-slate-900
                            sm:mt-5
                            sm:text-5xl
                        "
                    >
                        Account Information
                    </h1>

                    <p
                        className="
                            mx-auto
                            mt-3
                            max-w-2xl
                            text-sm
                            leading-7
                            text-slate-500
                            sm:text-base
                        "
                    >
                        Manage your personal account details and profile settings.
                    </p>
                </div>

                {/* Main Card */}
                <div
                    className="
                        overflow-hidden
                        rounded-[28px]
                        border
                        border-slate-200
                        bg-white
                        shadow-[0_10px_60px_rgba(15,23,42,0.06)]
                        sm:rounded-[36px]
                    "
                >

                    {/* Top Banner */}
                    <div
                        className="
                            relative
                            h-40
                            bg-gradient-to-r
                            from-emerald-500
                            via-emerald-600
                            to-teal-500
                            sm:h-52
                        "
                    >

                        <div className="absolute inset-0 bg-black/5"></div>

                        <div
                            className="
                                absolute
                                -left-10
                                top-0
                                h-44
                                w-44
                                rounded-full
                                bg-white/10
                                blur-3xl
                            "
                        />

                        <div
                            className="
                                absolute
                                -right-10
                                bottom-0
                                h-44
                                w-44
                                rounded-full
                                bg-white/10
                                blur-3xl
                            "
                        />
                    </div>

                    {/* Content */}
                    <div className="relative px-4 pb-8 sm:px-8 sm:pb-10 lg:px-10">

                        {/* Profile Section */}
                        <div className="-mt-16 flex flex-col items-center sm:-mt-20">

                            {/* Profile Image */}
                            <div
                                className="
                                    relative
                                    h-28
                                    w-28
                                    overflow-hidden
                                    rounded-full
                                    border-[5px]
                                    border-white
                                    bg-slate-100
                                    shadow-2xl
                                    sm:h-40
                                    sm:w-40
                                    sm:border-[6px]
                                "
                            >

                                {
                                    user?.image ? (
                                        <Image
                                            src={user?.image}
                                            alt={user?.name || 'User'}
                                            fill
                                            sizes="160px"
                                            className="object-cover"
                                        />
                                    ) : (
                                        <div
                                            className="
                                                flex
                                                h-full
                                                w-full
                                                items-center
                                                justify-center
                                                bg-emerald-100
                                                text-4xl
                                                font-bold
                                                text-emerald-700
                                                sm:text-5xl
                                            "
                                        >
                                            {user?.name?.charAt(0).toUpperCase()}
                                        </div>
                                    )
                                }
                            </div>

                            {/* Name */}
                            <h2
                                className="
                                    mt-5
                                    text-center
                                    text-2xl
                                    font-bold
                                    tracking-tight
                                    text-slate-900
                                    sm:mt-6
                                    sm:text-3xl
                                "
                            >
                                {user?.name || 'Unknown User'}
                            </h2>

                            {/* Email */}
                            <p
                                className="
                                    mt-2
                                    flex
                                    flex-wrap
                                    items-center
                                    justify-center
                                    gap-2
                                    text-center
                                    text-sm
                                    text-slate-500
                                    break-all
                                "
                            >
                                <FiMail className="shrink-0 text-base" />
                                {user?.email}
                            </p>

                            {/* Status */}
                            <div
                                className="
                                    mt-4
                                    rounded-full
                                    bg-emerald-50
                                    px-4
                                    py-2
                                    text-xs
                                    font-semibold
                                    text-emerald-700
                                    sm:text-sm
                                "
                            >
                                Active Account
                            </div>
                        </div>

                        {/* Info Grid */}
                        <div className="mt-10 grid gap-4 sm:gap-5 md:grid-cols-2">

                            {/* Full Name */}
                            <div
                                className="
                                    rounded-3xl
                                    border
                                    border-slate-200
                                    bg-slate-50
                                    p-5
                                    transition-all
                                    hover:border-emerald-100
                                    hover:bg-emerald-50/40
                                    sm:p-6
                                "
                            >

                                <div className="flex items-start gap-4">

                                    <div
                                        className="
                                            flex
                                            h-11
                                            w-11
                                            shrink-0
                                            items-center
                                            justify-center
                                            rounded-2xl
                                            bg-white
                                            shadow-sm
                                            sm:h-12
                                            sm:w-12
                                        "
                                    >
                                        <FiUser className="text-lg text-emerald-600" />
                                    </div>

                                    <div className="min-w-0">

                                        <p
                                            className="
                                                text-[10px]
                                                font-semibold
                                                uppercase
                                                tracking-[0.2em]
                                                text-slate-400
                                                sm:text-xs
                                            "
                                        >
                                            Full Name
                                        </p>

                                        <h3
                                            className="
                                                mt-1
                                                break-words
                                                text-base
                                                font-semibold
                                                text-slate-900
                                                sm:text-lg
                                            "
                                        >
                                            {user?.name || 'Not Provided'}
                                        </h3>
                                    </div>
                                </div>
                            </div>

                            {/* Email */}
                            <div
                                className="
                                    rounded-3xl
                                    border
                                    border-slate-200
                                    bg-slate-50
                                    p-5
                                    transition-all
                                    hover:border-emerald-100
                                    hover:bg-emerald-50/40
                                    sm:p-6
                                "
                            >

                                <div className="flex items-start gap-4">

                                    <div
                                        className="
                                            flex
                                            h-11
                                            w-11
                                            shrink-0
                                            items-center
                                            justify-center
                                            rounded-2xl
                                            bg-white
                                            shadow-sm
                                            sm:h-12
                                            sm:w-12
                                        "
                                    >
                                        <FiMail className="text-lg text-emerald-600" />
                                    </div>

                                    <div className="min-w-0 w-full">

                                        <p
                                            className="
                                                text-[10px]
                                                font-semibold
                                                uppercase
                                                tracking-[0.2em]
                                                text-slate-400
                                                sm:text-xs
                                            "
                                        >
                                            Email Address
                                        </p>

                                        <h3
                                            className="
                                                mt-1
                                                break-all
                                                text-base
                                                font-semibold
                                                text-slate-900
                                                sm:text-lg
                                            "
                                        >
                                            {user?.email || 'Not Provided'}
                                        </h3>
                                    </div>
                                </div>
                            </div>

                            {/* User ID */}
                            <div
                                className="
                                    rounded-3xl
                                    border
                                    border-slate-200
                                    bg-slate-50
                                    p-5
                                    md:col-span-2
                                    sm:p-6
                                "
                            >

                                <div className="flex items-start gap-4">

                                    <div
                                        className="
                                            flex
                                            h-11
                                            w-11
                                            shrink-0
                                            items-center
                                            justify-center
                                            rounded-2xl
                                            bg-white
                                            shadow-sm
                                            sm:h-12
                                            sm:w-12
                                        "
                                    >
                                        <FiShield className="text-lg text-emerald-600" />
                                    </div>

                                    <div className="min-w-0 w-full">

                                        <p
                                            className="
                                                text-[10px]
                                                font-semibold
                                                uppercase
                                                tracking-[0.2em]
                                                text-slate-400
                                                sm:text-xs
                                            "
                                        >
                                            User ID
                                        </p>

                                        <p
                                            className="
                                                mt-2
                                                break-all
                                                text-xs
                                                leading-6
                                                text-slate-600
                                                sm:text-sm
                                                sm:leading-7
                                            "
                                        >
                                            {user?.id || 'No ID Found'}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Buttons */}
                        <div
                            className="
                                mt-10
                                flex
                                flex-col
                                gap-4
                                sm:flex-row
                                sm:justify-center
                            "
                        >

                            <button
                                className="
                                    flex
                                    h-12
                                    w-full
                                    items-center
                                    justify-center
                                    gap-2
                                    rounded-2xl
                                    bg-emerald-600
                                    px-6
                                    text-sm
                                    font-semibold
                                    text-white
                                    transition-all
                                    hover:bg-emerald-700
                                    hover:shadow-lg
                                    sm:w-auto
                                    sm:min-w-[180px]
                                "
                            >
                                <FiEdit2 />
                                Edit Profile
                            </button>

                            <button
                                className="
                                    flex
                                    h-12
                                    w-full
                                    items-center
                                    justify-center
                                    gap-2
                                    rounded-2xl
                                    border
                                    border-slate-300
                                    bg-white
                                    px-6
                                    text-sm
                                    font-semibold
                                    text-slate-700
                                    transition-all
                                    hover:border-emerald-500
                                    hover:text-emerald-600
                                    sm:w-auto
                                    sm:min-w-[180px]
                                "
                            >
                                <FiLock />
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