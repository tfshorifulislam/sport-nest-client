'use client';

import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import { RxCross2 } from 'react-icons/rx';
import { AvaterDropDown } from './AvaterDropDown';

const MobileNavbar = () => {

    const { data: session } = authClient.useSession()
    // console.log('session', session)
    const user = session?.user
    // console.log(user)

    const [open, setOpen] = useState(false);
    const pathname = usePathname();

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'All Facilities', path: '/all-facilities' },
        { name: 'My Bookings', path: '/my-bookings' },
        { name: 'Add Facilities', path: '/add-facilities' },
        { name: 'Manage Facilities', path: '/manages-facilities' },
    ];

    return (
        <div className="md:hidden">
            <div className="flex items-center justify-between px-5 py-4">
                <div
                    onClick={() => setOpen(!open)}
                    className="text-3xl text-slate-700"
                >
                    {
                        user ? <AvaterDropDown user={user} /> :
                            open
                                ? <RxCross2 />
                                : <HiOutlineMenuAlt4 />
                    }
                </div>
            </div>


            {
                open && (
                    <div
                        onClick={() => setOpen(false)}
                        className="fixed inset-0 z-40 bg-black/20"
                    />
                )
            }


            <div
                className={`fixed right-0 top-0 z-50 h-screen w-[78%] bg-white px-6 py-8 transition-transform duration-300 ${open
                    ? 'translate-x-0'
                    : 'translate-x-full'
                    }`}
            >


                <div className="mb-10 flex justify-end">
                    <button
                        onClick={() => setOpen(false)}
                        className="text-3xl text-slate-700"
                    >
                        <RxCross2 />
                    </button>
                </div>


                <ul className="space-y-6">

                    {
                        navLinks.map((link) => (
                            <li key={link.path}>
                                <Link
                                    href={link.path}
                                    onClick={() => setOpen(false)}
                                    className={`text-base font-medium transition ${pathname === link.path
                                        ? 'text-emerald-600'
                                        : 'text-slate-700 hover:text-emerald-600'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))
                    }
                </ul>


                <div className="mt-12 space-y-4">


                    <div className="mt-10 flex flex-col gap-4">

                        <Link
                            onClick={() => setOpen(false)}
                            href="/login"
                            className="w-full"
                        >
                            <button
                                className="w-full rounded-full bg-emerald-600 py-3 text-sm font-medium text-white transition-all duration-200 hover:bg-emerald-700"
                            >
                                Login
                            </button>
                        </Link>

                        <Link
                            onClick={() => setOpen(false)}
                            href="/signup"
                            className="w-full"
                        >
                            <button
                                className="w-full rounded-full border border-slate-300 bg-white py-3 text-sm font-medium text-slate-700 transition-all duration-200 hover:border-emerald-500 hover:bg-emerald-50 hover:text-emerald-600"
                            >
                                Sign Up
                            </button>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileNavbar;