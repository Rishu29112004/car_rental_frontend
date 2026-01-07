"use client";
import React, { useState } from "react";
import Image from "next/image";
import { cityList } from "@/public/assets";
import { Search } from "lucide-react";

const LandingPage = () => {
    const [pickupLocation, setPickupLocation] = useState("");

    return (
        <div className="min-h-screen w-full bg-slate-100 flex flex-col items-center pt-16 px-4">

            {/* Heading */}
            <h1 className="text-3xl md:text-5xl font-semibold mb-10 text-center">
                Luxury cars on Rent
            </h1>

            {/* Search Card / Bar */}
            <form
                className="
          w-full max-w-md md:max-w-4xl
          bg-white
          shadow-[0px_8px_20px_rgba(0,0,0,0.12)]
          rounded-2xl md:rounded-full
          p-6 md:px-8 md:py-6
          flex flex-col md:flex-row
          gap-6 md:gap-10 md:justify-around
          md:items-center
        "
            >

                {/* Pickup Location */}
                <div className="flex flex-col gap-1 relative">
                    <span className="text-sm font-medium text-black">
                        Pickup Location
                    </span>
                    <span className="text-sm text-gray-500">
                        {pickupLocation || "Please select location"}
                    </span>

                    <select
                        value={pickupLocation}
                        onChange={(e) => setPickupLocation(e.target.value)}
                        required
                        className="absolute inset-0 opacity-0 cursor-pointer"
                    >
                        <option value="">Please select location</option>
                        {cityList.map((city) => (
                            <option key={city} value={city}>
                                {city}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Divider (Desktop only) */}
                <div className="hidden md:block h-10 w-px bg-gray-200" />

                {/* Pickup Date */}
                <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium">Pick-up Date</label>
                    <input
                        type="date"
                        min={new Date().toISOString().split("T")[0]}
                        className="text-sm text-gray-500 bg-transparent outline-none"
                        required
                    />
                </div>

                {/* Divider (Desktop only) */}
                <div className="hidden md:block h-10 w-px bg-gray-200" />

                {/* Return Date */}
                <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium">Return Date</label>
                    <input
                        type="date"
                        className="text-sm text-gray-500 bg-transparent outline-none"
                        required
                    />
                </div>

                {/* Divider (Desktop only) */}
                <div className="hidden md:block h-10 w-px bg-gray-200" />

                {/* Search Button */}
                <button
                    type="submit"
                    className="
            flex items-center justify-center gap-2
            bg-blue-600 hover:bg-blue-700
            text-white
            px-8 py-3.5
            rounded-full
            transition
            w-full md:w-auto
          "
                >
                    <Search className="h-4 w-4" />
                    Search
                </button>
            </form>

            {/* Car Image */}
            <div className="mt-14 md:mt-18">
                <Image
                    src="/main_car.png"
                    alt="Car"
                    width={800}
                    height={600}
                    className="object-contain"
                />
            </div>
        </div>
    );
};

export default LandingPage;
