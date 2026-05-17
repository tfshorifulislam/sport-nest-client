import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-white px-6 text-center">

            {/* 404 Text */}
            <h1 className="text-7xl font-extrabold text-emerald-600">
                404
            </h1>

            {/* Title */}
            <h2 className="mt-4 text-3xl font-bold text-slate-800">
                Page Not Found
            </h2>

            {/* Description */}
            <p className="mt-3 max-w-md text-slate-500">
                Sorry, the page you are looking for does not exist or has been moved.
            </p>

            {/* Button */}
            <Link
                href="/"
                className="mt-8 rounded-full bg-emerald-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-emerald-700"
            >
                Back To Home
            </Link>
        </div>
    );
};

export default NotFoundPage;