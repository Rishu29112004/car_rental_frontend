import { Filter, Search } from "lucide-react";
import Link from "next/link";

import React from "react";
import { dummyCarData } from "@/public/assets";
import CarCard, { Car } from "@/components/custom/carCard/CarCard";
import Footer from "@/components/custom/Footer/Footer";

const Cars = () => {
  return (
    <div className="w-full flex flex-col">
      <div className="w-full bg-slate-100 text-center flex items-center flex-col px-4 md:px-0 p-12">
        <h1 className="text-3xl md:text-5xl font-semibold mb-4 md:mb-6">
          Available Cars
        </h1>
        <p className="text-md font-normal mb-8 md:mb-10 max-w-2xl text-black">
          Browse our selection of premium vehicles available for your next
          adventure
        </p>
        <div className="mx-auto flex w-full max-w-xl items-center gap-3 rounded-full border border-gray-200 bg-white px-4 py-3 shadow-md">
          <Search className="h-4 w-4 shrink-0 text-gray-500" />

          <input
            type="text"
            placeholder="Search by make, model, or features"
            className="w-full bg-transparent text-sm text-gray-700 placeholder-gray-400 focus:outline-none"
          />

          <Filter className="h-4 w-4 shrink-0 cursor-pointer text-gray-500" />
        </div>
      </div>

      <div className="mb-12 md:mb-14 p-4 md:p-0">
        <div className="max-w-7xl mx-auto">
          <p className="text-gray-500 w-full flex justify-start font-semibold py-4 md:py-6">
            Showing 8 Cars
          </p>
           <Link href={"/car-details/123"}>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {dummyCarData.map((car: Car) => (
              <CarCard key={car._id} car={car} />
            ))}
          </div>
           </Link>
        </div>
      </div>
    </div>
  );
};

export default Cars;
