'use client';

import { Button } from '@heroui/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navbar = () => {

    const pathname = usePathname();

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'All Facilities', path: '/all-facilities' },
        { name: 'My Bookings', path: '/my-bookings' },
        { name: 'Add Facilities', path: '/add-facilities' },
        { name: 'Manage Facilities', path: '/manages-facilities' },
    ];

    return (
        <nav className="w-full hidden md:block">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

                <Link
                    href="/"
                    className="text-2xl font-bold tracking-tight text-slate-800"
                >
                    <span className="text-emerald-600">Sport</span>Nest
                </Link>

                <ul className="hidden items-center gap-8 text-sm font-medium md:flex">
                    {navLinks?.map((link) => (
                        <li key={link.path}>
                            <Link
                                href={link.path}
                                className={`transition duration-200 ${
                                    pathname === link.path
                                        ? 'text-emerald-600 font-semibold'
                                        : 'text-slate-600 hover:text-emerald-600'
                                }`}
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div>
                    <Button
                        radius="full"
                        className="bg-emerald-600 px-6 text-white transition hover:bg-emerald-700"
                    >
                        Login
                    </Button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;