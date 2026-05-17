'use client';

import { TextField } from '@heroui/react';
import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { RxCross2 } from 'react-icons/rx';
import { Description, FieldError, Form, Input, Label, } from "@heroui/react";
import Link from 'next/link';


const LoginButtonModal = () => {

    const [open, setOpen] = useState(false);

    return (
        <div>

            <button
                onClick={() => setOpen(true)}
                className="rounded-full cursor-pointer bg-emerald-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-emerald-700"
            >
                Login
            </button>

            {
                open && (
                    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 px-4 backdrop-blur-sm">

                        <div className="relative w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl">


                            <button
                                onClick={() => setOpen(false)}
                                className="absolute cursor-pointer right-5 top-5 text-2xl text-slate-400 transition hover:text-slate-700"
                            >
                                <RxCross2 />
                            </button>


                            <div className="mb-8">

                                <h2 className="text-3xl font-bold tracking-tight text-slate-800">
                                    Welcome Back
                                </h2>

                                <p className="mt-2 text-sm text-slate-500">
                                    Login to continue booking your favorite sports facilities.
                                </p>
                            </div>

                            <Form className="w-full space-y-5">

                                {/* Email Field */}
                                <TextField
                                    isRequired
                                    name="email"
                                    type="email"
                                    validate={(value) => {
                                        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                            return "Please enter a valid email address";
                                        }
                                        return null;
                                    }}
                                >
                                    <Label className="mb-2 block text-sm font-medium text-slate-700">
                                        Email
                                    </Label>

                                    <Input
                                        placeholder="john@example.com"
                                        className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-emerald-500"
                                    />

                                    <FieldError className="mt-2 text-sm text-red-500" />
                                </TextField>

                                {/* Password Field */}
                                <TextField
                                    isRequired
                                    minLength={8}
                                    name="password"
                                    type="password"
                                    validate={(value) => {
                                        if (value.length < 8) {
                                            return "Password must be at least 8 characters";
                                        }
                                        if (!/[A-Z]/.test(value)) {
                                            return "Password must contain at least one uppercase letter";
                                        }
                                        if (!/[0-9]/.test(value)) {
                                            return "Password must contain at least one number";
                                        }
                                        return null;
                                    }}
                                >
                                    <Label className="mb-2 block text-sm font-medium text-slate-700">
                                        Password
                                    </Label>

                                    <Input
                                        placeholder="Enter your password"
                                        className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-emerald-500"
                                    />

                                    <Description className="mt-2 text-xs text-slate-500">
                                        Must be at least 8 characters with 1 uppercase and 1 number
                                    </Description>

                                    <FieldError className="mt-2 text-sm text-red-500" />
                                </TextField>

                                {/* Login Button */}
                                <button
                                    type="submit"
                                    className="w-full cursor-pointer rounded-2xl bg-emerald-600 py-3 text-sm font-medium text-white transition hover:bg-emerald-700"
                                >
                                    Login
                                </button>
                            </Form>

                            <div className="my-6 flex items-center gap-3">

                                <div className="h-px flex-1 bg-slate-200"></div>

                                <span className="text-xs uppercase tracking-widest text-slate-400">
                                    or
                                </span>

                                <div className="h-px flex-1 bg-slate-200"></div>
                            </div>


                            <button
                                className="flex cursor-pointer w-full items-center justify-center gap-3 rounded-2xl border border-slate-300 py-3 text-sm font-medium text-slate-700 transition hover:border-emerald-500 hover:text-emerald-600"
                            >
                                <FcGoogle className="text-xl" />

                                Continue with Google
                            </button>


                            <p className="mt-8 text-center text-sm text-slate-500">

                                Don’t have an account?

                                <Link href={'/signup'}
                                    className="ml-2 cursor-pointer font-semibold text-emerald-600 transition hover:text-emerald-700"
                                >
                                    Create Account
                                </Link>
                            </p>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default LoginButtonModal;