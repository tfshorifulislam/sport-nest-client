"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  FiEdit2,
  FiMail,
  FiShield,
  FiUser,
  FiLock,
  FiCalendar,
  FiMapPin,
} from "react-icons/fi";

const ProfilePage = () => {
  const { data: session } = authClient.useSession();

  const user = session?.user;

  const [myBookingsList, setMyBookingsList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.id) return;

    const fetchBookings = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/bookings/${user.id}`,
          {
            method: "GET",
            headers: {
              "content-type": "application/json",
            },
            cache: "no-store",
          }
        );

        const data = await res.json();

        setMyBookingsList(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, [user?.id]);

  return (
    <section className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100 py-10 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
            Manage your personal account details and bookings.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* LEFT SIDE */}
          <div className="lg:col-span-1">
            <div
              className="
                overflow-hidden
                rounded-[32px]
                border
                border-slate-200
                bg-white
                shadow-[0_10px_60px_rgba(15,23,42,0.06)]
              "
            >
              {/* Banner */}
              <div className="relative h-40 bg-gradient-to-r from-emerald-500 via-emerald-600 to-teal-500">
                <div className="absolute inset-0 bg-black/5"></div>
              </div>

              {/* Content */}
              <div className="relative px-6 pb-8">
                {/* Avatar */}
                <div className="-mt-16 flex flex-col items-center">
                  <div
                    className="
                      relative
                      h-32
                      w-32
                      overflow-hidden
                      rounded-full
                      border-[6px]
                      border-white
                      bg-slate-100
                      shadow-2xl
                    "
                  >
                    {user?.image ? (
                      <Image
                        src={user.image}
                        alt={user?.name || "User"}
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
                          text-5xl
                          font-bold
                          text-emerald-700
                        "
                      >
                        {user?.name?.charAt(0).toUpperCase()}
                      </div>
                    )}
                  </div>

                  <h2 className="mt-5 text-center text-3xl font-bold text-slate-900">
                    {user?.name || "Unknown User"}
                  </h2>

                  <p className="mt-2 flex items-center gap-2 text-sm text-slate-500 break-all">
                    <FiMail />
                    {user?.email}
                  </p>

                  <div className="mt-4 rounded-full bg-emerald-50 px-4 py-2 text-xs font-semibold text-emerald-700">
                    Active Account
                  </div>
                </div>

                {/* Info */}
                <div className="mt-8 space-y-4">
                  <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm">
                        <FiUser className="text-lg text-emerald-600" />
                      </div>

                      <div>
                        <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                          Full Name
                        </p>

                        <h3 className="mt-1 text-lg font-semibold text-slate-900">
                          {user?.name || "Not Provided"}
                        </h3>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm">
                        <FiShield className="text-lg text-emerald-600" />
                      </div>

                      <div className="min-w-0">
                        <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                          User ID
                        </p>

                        <p className="mt-2 break-all text-sm leading-7 text-slate-600">
                          {user?.id || "No ID Found"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Buttons */}
                <div className="mt-8 flex flex-col gap-4">
                  <button
                    className="
                      flex
                      h-12
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
                    "
                  >
                    <FiEdit2 />
                    Edit Profile
                  </button>

                  <button
                    className="
                      flex
                      h-12
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
                    "
                  >
                    <FiLock />
                    Change Password
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="lg:col-span-2">
            <div
              className="
                rounded-[32px]
                border
                border-slate-200
                bg-white
                p-6
                shadow-[0_10px_60px_rgba(15,23,42,0.06)]
                sm:p-8
              "
            >
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900">
                    My Bookings
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    All your booked sports facilities.
                  </p>
                </div>

                <div className="rounded-2xl bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">
                  {myBookingsList?.length || 0} Bookings
                </div>
              </div>

              {/* Booking List */}
              <div className="mt-8 space-y-5">
                {loading ? (
                  <div className="flex h-40 items-center justify-center">
                    <p className="text-slate-500">Loading bookings...</p>
                  </div>
                ) : myBookingsList?.length === 0 ? (
                  <div
                    className="
                      flex
                      h-52
                      flex-col
                      items-center
                      justify-center
                      rounded-3xl
                      border
                      border-dashed
                      border-slate-300
                      bg-slate-50
                      text-center
                    "
                  >
                    <h3 className="text-xl font-semibold text-slate-700">
                      No Bookings Found
                    </h3>

                    <p className="mt-2 text-sm text-slate-500">
                      You haven’t booked any sports facility yet.
                    </p>
                  </div>
                ) : (
                  myBookingsList?.map((booking) => (
                    <div
                      key={booking._id}
                      className="
                        rounded-3xl
                        border
                        border-slate-200
                        bg-slate-50
                        p-5
                        transition-all
                        hover:border-emerald-200
                        hover:bg-emerald-50/40
                      "
                    >
                      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                        <div>
                          <h3 className="text-xl font-bold text-slate-900">
                            {booking?.facilityName}
                          </h3>

                          <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-slate-500">
                            <div className="flex items-center gap-2">
                              <FiCalendar className="text-emerald-600" />
                              {booking?.date}
                            </div>

                            <div className="flex items-center gap-2">
                              <FiMapPin className="text-emerald-600" />
                              {booking?.location}
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col items-start gap-3 md:items-end">
                          <div className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
                            Confirmed
                          </div>

                          <p className="text-lg font-bold text-slate-900">
                            ৳ {booking?.price}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;