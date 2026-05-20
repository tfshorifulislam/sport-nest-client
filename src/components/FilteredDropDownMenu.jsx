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
        <Dropdown>

            <Dropdown.Trigger className="bg-emerald-600 text-white px-4 py-2 rounded-xl cursor-pointer">

                {selectedType || "Filter"}

            </Dropdown.Trigger>

            <Dropdown.Popover>

                <Dropdown.Menu aria-label="Filter Menu">

                    {items.map((item) => (

                        <Dropdown.Item
                            key={item}
                            textValue={item}
                        >

                            <form method="GET">

                                <input
                                    type="hidden"
                                    name="types"
                                    value={item}
                                />

                                <button
                                    type="submit"
                                    className="w-full text-left"
                                >
                                    {item}
                                </button>

                            </form>

                        </Dropdown.Item>
                    ))}

                </Dropdown.Menu>

            </Dropdown.Popover>

        </Dropdown>
    );
}