'use client'

import { authClient } from "@/lib/auth-client";
import {
    Button,
    Description,
    FieldError,
    Form,
    Input,
    Label,
    TextField
} from "@heroui/react";

import Link from "next/link";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";

const SignUpPage = () => {

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const user = Object.fromEntries(formData.entries());

        const { data, error } = await authClient.signUp.email({
            email: user.email,
            password: user.password,
            name: user.name,
            image: user.image,
        })
        // console.log(data, error)
        if (data) {
            toast.success(`Welcome ${user.name}! Account created successfully`)
            redirect('/')
        }
        if (error) {
            toast('Something went Wrong')
        }
    }


    return (
        <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-12">

            <div className="w-full max-w-md">

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
                        Create your account
                    </h1>

                    <p className="mt-2 text-sm text-slate-500">
                        Start booking your favorite sports facilities.
                    </p>
                </div>


                <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">

                    <Form
                        onSubmit={onSubmit}
                        className="flex w-full flex-col gap-5">
                        <TextField
                            isRequired
                            name="name"
                            type="text"
                            className="w-full"
                        >
                            <div className="w-full">

                                <Label className="mb-2 block text-sm font-medium text-slate-700">
                                    Full Name
                                </Label>

                                <Input
                                    placeholder="John Doe"
                                    className="w-full"
                                />

                                <FieldError className="mt-1 text-sm text-red-500" />
                            </div>
                        </TextField>


                        <TextField
                            isRequired
                            name="email"
                            type="email"
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


                        <TextField
                            name="image"
                            type="url"
                            className="w-full"
                        >
                            <div className="w-full">

                                <div className="mb-2 flex items-center justify-between">

                                    <Label className="text-sm font-medium text-slate-700">
                                        Profile Image
                                    </Label>

                                    <span className="text-xs text-slate-400">
                                        Optional
                                    </span>
                                </div>

                                <Input
                                    placeholder="https://example.com/photo.jpg"
                                    className="w-full"
                                />

                                <FieldError className="mt-1 text-sm text-red-500" />
                            </div>
                        </TextField>


                        <TextField
                            isRequired
                            minLength={8}
                            name="password"
                            type="password"
                            className="w-full"
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
                                    Minimum 8 characters
                                </Description>

                                <FieldError className="mt-1 text-sm text-red-500" />
                            </div>
                        </TextField>


                        <Button
                            type="submit"
                            className="mt-2 h-12 w-full rounded-xl bg-emerald-600 text-sm font-medium text-white transition hover:bg-emerald-700"
                        >
                            Create Account
                        </Button>
                    </Form>


                    <div className="my-6 flex items-center gap-3">

                        <div className="h-px flex-1 bg-slate-200"></div>

                        <span className="text-xs uppercase tracking-[2px] text-slate-400">
                            OR
                        </span>

                        <div className="h-px flex-1 bg-slate-200"></div>
                    </div>


                    <button
                        className="flex cursor-pointer h-12 w-full items-center justify-center gap-3 rounded-xl border border-slate-300 bg-white text-sm font-medium text-slate-700 transition hover:border-emerald-500 hover:text-emerald-600"
                    >
                        <FcGoogle className="text-xl" />

                        Continue with Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SignUpPage;