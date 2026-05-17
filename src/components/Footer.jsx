import Link from 'next/link';
import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="border-t border-slate-200 bg-white">

            <div className="mx-auto max-w-7xl px-6 py-14">

                <div className="grid gap-12 md:grid-cols-3">

                    {/* Brand */}
                    <div>

                        <Link
                            href="/"
                            className="text-3xl font-bold tracking-tight text-slate-800"
                        >
                            <span className="text-emerald-600">
                                Sport
                            </span>
                            Nest
                        </Link>

                        <p className="mt-5 max-w-sm text-sm leading-7 text-slate-500">
                            Discover and book premium sports facilities easily.
                            Find football turfs, cricket grounds, badminton courts,
                            gyms, and more in one platform.
                        </p>
                    </div>

                    {/* Contact */}
                    <div>

                        <h3 className="text-lg font-semibold text-slate-800">
                            Contact Information
                        </h3>

                        <div className="mt-5 space-y-3 text-sm text-slate-500">

                            <p>
                                📍 Dhaka, Bangladesh
                            </p>

                            <p>
                                📞 +880 1234-567890
                            </p>

                            <p>
                                ✉️ support@sportnest.com
                            </p>
                        </div>
                    </div>

                    {/* Social */}
                    <div>

                        <h3 className="text-lg font-semibold text-slate-800">
                            Follow Us
                        </h3>

                        <div className="mt-5 flex items-center gap-4">

                            <Link
                                href="/"
                                className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:border-emerald-500 hover:text-emerald-600"
                            >
                                <FaFacebookF />
                            </Link>

                            <Link
                                href="/"
                                className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:border-emerald-500 hover:text-emerald-600"
                            >
                                <FaInstagram />
                            </Link>

                            <Link
                                href="/"
                                className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:border-emerald-500 hover:text-emerald-600"
                            >
                                <FaTwitter />
                            </Link>

                            <Link
                                href="/"
                                className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:border-emerald-500 hover:text-emerald-600"
                            >
                                <FaLinkedinIn />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="mt-12 border-t border-slate-200 pt-6 text-center">

                    <p className="text-sm text-slate-500">
                        © {new Date().getFullYear()} SportNest. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;