"use client";

import React from "react";
import { dummyCarData } from "@/public/assets";
import CarCard, { Car } from "@/components/custom/carCard/CarCard";
import Title from "@/components/custom/SectionHeader/SectionHeader";
import { ArrowRight } from "lucide-react";

const FeaturedSection: React.FC = () => {
  return (
    <section className="min-h-screen w-full mb-12 md:mb-14">
      <div className="max-w-7xl mx-auto flex flex-col gap-12 px-4 md:px-0">
        
        {/* Section Title */}
        <Title
          title="Featured Vehicles"
          subTitle="Explore our selection of premium vehicles available for your next adventure."
          align="center"
        />

        {/* Cars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 sm:gap-10">
          {dummyCarData.map((car: Car) => (
            <CarCard key={car._id} car={car} />
          ))}
        </div>

        {/* Explore Button */}
        <div className="flex justify-center">
          <button className="flex items-center gap-2 border border-gray-500 px-6 py-3 rounded-md hover:bg-gray-900 hover:text-white transition">
            Explore all cars
            <ArrowRight size={18} />
          </button>
        </div>

      </div>
    </section>
  );
};

export default FeaturedSection;
