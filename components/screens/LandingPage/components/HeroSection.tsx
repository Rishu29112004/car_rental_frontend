import { Search } from "lucide-react";
import React, { useState } from "react";
import { cityList } from "@/public/assets";
import Image from "next/image";

const HeroSection = () => {
  const [pickupLocation, setPickupLocation] = useState("");

  return (
    <div className="bg-slate-100 w-full flex h-[75vh] md:min-h-screen mb-12 md:mb-14">
      <div className="max-w-7xl  mx-auto text-center flex items-center flex-col px-4 md:px-0">
        <h1 className="text-3xl md:text-5xl font-semibold mb-4 md:mb-6">
          Luxury cars on Rent
        </h1>
        <p className="text-md font-normal mb-8 md:mb-10 max-w-2xl text-black">Experience elegance, comfort, and performance with our exclusive collection of luxury vehicles—perfect for business trips, vacations, or special occasions.</p>

        {/* Search Card */}
        <form
          className="
            mx-auto
            w-full max-w-md md:max-w-4xl
            bg-white
            shadow-[0px_8px_20px_rgba(0,0,0,0.12)]
            rounded-2xl md:rounded-full
            p-6 md:px-8 md:py-6
            flex flex-col md:flex-row
            gap-6 md:gap-10
            md:items-center md:justify-around
            mb-10 md:mb-12
          "
        >
          {/* Pickup Location */}
          <div className="relative flex flex-col gap-1">
            <span className="text-sm font-medium">Pickup Location</span>
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

          <div className="hidden md:block h-10 w-px bg-gray-200" />

          {/* Pickup Date */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">Pick-up Date</label>
            <input
              type="date"
              min={new Date().toISOString().split("T")[0]}
              required
              className="text-sm text-gray-500 bg-transparent outline-none"
            />
          </div>

          <div className="hidden md:block h-10 w-px bg-gray-200" />

          {/* Return Date */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">Return Date</label>
            <input
              type="date"
              required
              className="text-sm text-gray-500 bg-transparent outline-none"
            />
          </div>

          <div className="hidden md:block h-10 w-px bg-gray-200" />

          {/* Search Button */}
          <button
            type="submit"
            className="
              w-full md:w-auto
              flex items-center justify-center gap-2
              bg-blue-600 hover:bg-blue-700
              text-white
              px-8 py-3.5
              rounded-full
              transition
            "
          >
            <Search className="h-4 w-4" />
            Search
          </button>
        </form>
        <div className="mb-6 md:mb-0">
          <Image
            src="/main_car.png"
            alt="Car"
            width={800}
            height={600}
            className="object-contain "
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
