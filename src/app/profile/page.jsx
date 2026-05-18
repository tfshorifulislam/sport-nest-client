'use client';

import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import React from 'react';

const ProfilePage = () => {

    const { data: session } = authClient.useSession();

    const user = session?.user;

    return (
        <section className="min-h-screen bg-slate-50 py-14">

            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">

               
                <div className="mb-10">

                    <span className="rounded-full bg-emerald-50 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-700">
                        My Profile
                    </span>

                    <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900">
                        Account Information
                    </h1>

                    <p className="mt-2 text-sm text-slate-500">
                        Manage your personal information and account details.
                    </p>
                </div>

               
                <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-sm">

                  
                    <div className="h-36 bg-gradient-to-r from-emerald-500 to-emerald-600" />

                  
                    <div className="relative px-6 pb-8 sm:px-10">

                     
                        <div className="-mt-16 flex flex-col items-start gap-5 sm:flex-row sm:items-end sm:justify-between">

                            <div className="flex items-end gap-5">

                                <div className="relative h-28 w-28 overflow-hidden rounded-3xl border-4 border-white bg-slate-100 shadow-md">

                                    {
                                        user?.image ? (
                                            <Image
                                                src={user.image}
                                                alt={user?.name}
                                                fill
                                                className="object-cover"
                                            />
                                        ) : (
                                            <div className="flex h-full w-full items-center justify-center bg-emerald-100 text-3xl font-bold text-emerald-700">
                                                {user?.name?.charAt(0).toUpperCase()}
                                            </div>
                                        )
                                    }
                                </div>

                                <div className="pb-2">

                                    <h2 className="text-2xl font-bold text-slate-900">
                                        {user?.name || 'Unknown User'}
                                    </h2>

                                    <p className="mt-1 text-sm text-slate-500">
                                        {user?.email}
                                    </p>
                                </div>
                            </div>

                           
                            <div className="rounded-full bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">
                                Active Account
                            </div>
                        </div>

                      
                        <div className="mt-10 grid gap-5 sm:grid-cols-2">

                           
                            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">

                                <p className="text-xs font-medium uppercase tracking-widest text-slate-400">
                                    Full Name
                                </p>

                                <h3 className="mt-3 text-lg font-semibold text-slate-900">
                                    {user?.name || 'Not Provided'}
                                </h3>
                            </div>

                           
                            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">

                                <p className="text-xs font-medium uppercase tracking-widest text-slate-400">
                                    Email Address
                                </p>

                                <h3 className="mt-3 break-all text-lg font-semibold text-slate-900">
                                    {user?.email || 'Not Provided'}
                                </h3>
                            </div>

                           
                            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:col-span-2">

                                <p className="text-xs font-medium uppercase tracking-widest text-slate-400">
                                    User ID
                                </p>

                                <p className="mt-3 break-all text-sm leading-7 text-slate-600">
                                    {user?.id}
                                </p>
                            </div>
                        </div>

                      
                        <div className="mt-10 flex flex-col gap-4 sm:flex-row">

                            <button className="flex h-12 items-center justify-center rounded-2xl bg-emerald-600 px-8 text-sm font-medium text-white transition hover:bg-emerald-700">
                                Edit Profile
                            </button>

                            <button className="flex h-12 items-center justify-center rounded-2xl border border-slate-300 bg-white px-8 text-sm font-medium text-slate-700 transition hover:border-emerald-500 hover:text-emerald-600">
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