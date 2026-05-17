'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import { RxCross2 } from 'react-icons/rx';

const MobileNavbar = () => {

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


            <div className="flex items-center justify-between border-b border-slate-200 bg-white px-5 py-4">

                <Link
                    href="/"
                    className="text-xl font-bold text-slate-800"
                >
                    <span className="text-emerald-600">Sport</span>Nest
                </Link>

                <button
                    onClick={() => setOpen(!open)}
                    className="text-3xl text-slate-700"
                >
                    {
                        open
                            ? <RxCross2 />
                            : <HiOutlineMenuAlt4 />
                    }
                </button>
            </div>


            <div
                className={`absolute left-0 top-[73px] w-full bg-white px-5 py-6 shadow-lg transition-all duration-300 ${open
                    ? 'visible opacity-100'
                    : 'invisible opacity-0'
                    }`}
            >
                <ul className="space-y-5 text-base font-medium">
                    {
                        navLinks.map((link) => (
                            <li key={link.path}>
                                <Link
                                    href={link.path}
                                    onClick={() => setOpen(false)}
                                    className={`block transition ${pathname === link.path
                                        ? 'text-emerald-600 font-semibold'
                                        : 'text-slate-700 hover:text-emerald-600'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
};

export default MobileNavbar;