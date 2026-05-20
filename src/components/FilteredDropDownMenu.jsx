"use client";

import { Dropdown } from "@heroui/react";
import { useSearchParams } from "next/navigation";

export function FilterdDropDownMenu() {
    const searchParams = useSearchParams();
    const selectedType = searchParams.get("types");

    const items = [
        "Football Turf",
        "Box Cricket",
        "Pickleball Court",
        "Pickleball",
        "Futsal Court",
        "Basketball",
        "Multi-Sport Turf",
        "Futsal",
        "Multi-Sport",
        "Tennis Court",
        "badminton",
        "cricket",
    ];

    return (
        <div className="w-full sm:w-auto">
            <Dropdown>

                {/* Trigger */}
                <Dropdown.Trigger
                    className="
                        flex w-full sm:w-auto items-center justify-center gap-2
                        rounded-2xl border border-emerald-200
                        bg-emerald-600 px-5 py-2.5
                        text-sm font-semibold text-white
                        shadow-sm transition
                        hover:bg-emerald-700
                        active:scale-[0.98]
                    "
                >
                    {selectedType || "Filter Type"}
                </Dropdown.Trigger>

                {/* Dropdown */}
                <Dropdown.Popover>
                    <Dropdown.Menu
                        aria-label="Filter Menu"
                        className="
                            max-h-80 overflow-y-auto
                            rounded-2xl border border-slate-200
                            bg-white p-2 shadow-xl
                        "
                    >
                        {items.map((item) => (
                            <Dropdown.Item
                                key={item}
                                textValue={item}
                                className="
                                    rounded-xl px-2 py-1
                                    hover:bg-slate-100
                                "
                            >
                                <form method="GET" className="w-full">
                                    <input
                                        type="hidden"
                                        name="types"
                                        value={item}
                                    />

                                    <button
                                        type="submit"
                                        className="
                                            w-full rounded-xl px-3 py-2
                                            text-left text-sm text-slate-700
                                            transition
                                            hover:bg-emerald-50 hover:text-emerald-700
                                        "
                                    >
                                        {item}
                                    </button>
                                </form>
                            </Dropdown.Item>
                        ))}
                    </Dropdown.Menu>
                </Dropdown.Popover>

            </Dropdown>
        </div>
    );
}