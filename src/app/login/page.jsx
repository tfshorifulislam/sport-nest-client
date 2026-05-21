'use client';

import {
    Description,
    FieldError,
    Form,
    Input,
    Label,
    TextField
} from "@heroui/react";

import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react';
import toast from 'react-hot-toast';
import { FcGoogle } from 'react-icons/fc';

const LoginPage = () => {

    const onSubmit = async (e) => {

        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const user = Object.fromEntries(formData.entries());

        const { data, error } = await authClient.signIn.email({
            email: user?.email,
            password: user?.password,
        });

        if (data) {
            toast.success(`Welcome Back!`);
            redirect('/');
        }

        if (error) {
            toast.error('Invalid email or password');
        }
    };

    const handleLoginWithGoogle = async () => {
        await authClient.signIn.social({
            provider: 'google'
        })
    }

    return (
        <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-12">

            <div className="w-full max-w-md">

                {/* Logo */}
                <div className="mb-8 text-center">

                    <Link
                        href="/"
                        className="text-3xl font-bold tracking-tight text-slate-900"
                    >
                        <span className="text-emerald-600">
                            Sport
                        </span>
                        Nest
                    </Link>

                    <h1 className="mt-6 text-3xl font-semibold text-slate-900">
                        Welcome Back
                    </h1>

                    <p className="mt-2 text-sm text-slate-500">
                        Login to continue booking your favorite sports facilities.
                    </p>
                </div>

                {/* Card */}
                <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">

                    <Form
                        onSubmit={onSubmit}
                        className="flex w-full flex-col gap-5"
                    >

                        {/* Email */}
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
                            className="w-full"
                        >
                            <div className="w-full">

                                <Label className="mb-2 block text-sm font-medium text-slate-700">
                                    Email Address
                                </Label>

                                <Input
                                    placeholder="john@example.com"
                                    className="w-full"
                                />

                                <FieldError className="mt-1 text-sm text-red-500" />
                            </div>
                        </TextField>

                        {/* Password */}
                        <TextField
                            isRequired
                            name="password"
                            type="password"
                            className="w-full"
                            minLength={6}
                            validate={(value) => {
                                if (value.length < 6) {
                                    return "Password must be at least 6 characters";
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
                            <div className="w-full">

                                <Label className="mb-2 block text-sm font-medium text-slate-700">
                                    Password
                                </Label>

                                <Input
                                    placeholder="Enter your password"
                                    className="w-full"
                                />

                                <Description className="mt-1 text-xs text-slate-500">
                                    Minimum 6 characters
                                </Description>

                                <FieldError className="mt-1 text-sm text-red-500" />
                            </div>
                        </TextField>

                        {/* Login Button */}
                        <button
                            type="submit"
                            className="mt-2 h-12 w-full rounded-xl bg-emerald-600 text-sm font-medium text-white transition hover:bg-emerald-700"
                        >
                            Login
                        </button>
                    </Form>

                    {/* Divider */}
                    <div className="my-6 flex items-center gap-3">

                        <div className="h-px flex-1 bg-slate-200"></div>

                        <span className="text-xs uppercase tracking-[2px] text-slate-400">
                            OR
                        </span>

                        <div className="h-px flex-1 bg-slate-200"></div>
                    </div>

                    {/* Google Login */}
                    <button
                        onClick={handleLoginWithGoogle}
                        className="flex h-12 w-full items-center justify-center gap-3 rounded-xl border border-slate-300 bg-white text-sm font-medium text-slate-700 transition hover:border-emerald-500 hover:text-emerald-600"
                    >
                        <FcGoogle className="text-xl" />

                        Continue with Google
                    </button>

                    {/* Footer */}
                    <p className="mt-7 text-center text-sm text-slate-500">

                        Don’t have an account?

                        <Link
                            href="/signup"
                            className="ml-2 font-medium text-emerald-600 transition hover:text-emerald-700"
                        >
                            Create Account
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;