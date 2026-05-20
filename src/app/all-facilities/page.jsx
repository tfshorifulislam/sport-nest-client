
import { FiSearch } from "react-icons/fi";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import FetchingAllCard from "@/components/FetchingAllCard";
import { FilterdDropDownMenu } from "@/components/FilteredDropDownMenu";

const AllFacilities = async ({ searchParams }) => {
    const params = await searchParams;

    const search = params?.search || "";
    const types = params?.types || "";

    const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/sports?search=${search}&types=${types}`,
    {
        cache: "no-store",
    }
);

    const cardsData = await res.json();

    console.log(cardsData);

    return (

        <section className="min-h-screen bg-slate-50 py-14">

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* HEADER */}
                <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">

                    <div className="max-w-2xl">

                        <span className="inline-flex rounded-full bg-emerald-50 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-700">
                            Sports Facilities
                        </span>

                        <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">

                            Explore{" "}

                            <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
                                Premium
                            </span>{" "}

                            Sports Venues
                        </h1>

                        <p className="mt-3 text-sm leading-6 text-slate-500 sm:text-base">

                            Book high-quality football turfs, badminton courts,
                            cricket grounds, gyms, swimming pools, and more
                            across Bangladesh.
                        </p>

                        {/* SEARCH and filtered */}

                        <form
                            method="GET"
                            className="relative mt-6 max-w-xl"
                        >

                            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-lg text-slate-400" />

                            <input
                                type="text"
                                name="search"
                                defaultValue={search}
                                placeholder="Search by facility name, type or location..."
                                className="h-12 w-full rounded-2xl border border-slate-200 bg-white pl-12 pr-28 text-sm text-slate-700 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
                            />

                            <button
                                type="submit"
                                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-xl bg-emerald-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-emerald-700"
                            >
                                Search
                            </button>

                        </form>

                    </div>

                    <FilterdDropDownMenu />

                </div>

                {/* CARDS */}
                {
                    cardsData?.length > 0 ? (

                        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

                            {
                                cardsData.map((facility) => (

                                    <FetchingAllCard
                                        key={facility._id}
                                        facility={facility}
                                    />
                                ))
                            }

                        </div>

                    ) : (

                        <div className="flex min-h-[400px] flex-col items-center justify-center rounded-[32px] border border-dashed border-slate-200 bg-white p-10 text-center">

                            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50">

                                <span className="text-4xl">🏟️</span>

                            </div>

                            <h2 className="mt-6 text-2xl font-bold text-slate-800">
                                No Facilities Found
                            </h2>

                            <p className="mt-3 max-w-md text-sm leading-7 text-slate-500">

                                No sports facilities matched your search.
                                Try searching with another keyword.
                            </p>

                        </div>
                    )
                }

            </div>
        </section>
    );
};

export default AllFacilities;