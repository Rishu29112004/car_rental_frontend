"use client"
// components/CarCard.tsx
import React from "react";
import Image from "next/image";
import { Dot } from "lucide-react";
import type { StaticImageData } from "next/image";
import { assets } from "@/public/assets";
import { useRouter } from "next/navigation";

// --- TypeScript Interface ---
export interface Car {
  _id: string;
  owner: string;
  brand: string;
  model: string;
  image: StaticImageData; // <-- string because it's from /public
  year: number;
  category: string;
  seating_capacity: number;
  fuel_type: string;
  transmission: string;
  pricePerDay: number;
  location: string;
  description: string;
  isAvailable: boolean;
  createdAt: string;
}

// --- Props Interface ---
interface CarCardProps {
  car: Car;
}

// --- CarCard Component ---
const CarCard = ({ car }: CarCardProps) => {
  const currency = process.env.NEXT_PUBLIC_CURRENCY || "$";
  const router=useRouter()

  return (
    <div 
      onClick={()=>router.push(`car-detail/${car._id}`)}
    className="w-full bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      {/* Car Image */}
      <div className="relative h-52 w-full overflow-hidden rounded-t-2xl">
        <Image
          src={car.image}
          alt={`${car.brand} ${car.model}`}
          fill
          className="object-cover"
          priority
        />

        {car.isAvailable && (
          <span className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-medium px-3 py-1 rounded-full">
            Available Now
          </span>
        )}

        <div className="absolute bottom-4 right-4 bg-black/80 text-white px-4 py-2 rounded-lg text-sm font-semibold">
          {currency}
          {car.pricePerDay} <span className="font-normal">/ day</span>
        </div>
      </div>

      {/* Car Info */}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-900">
          {car.brand} {car.model}
        </h3>

        <p className="flex items-center gap-1 text-sm text-gray-500 mt-1">
          {car.category}
          <Dot size={14} />
          {car.year}
        </p>

        {/* Car Specs */}
        <div className="mt-5 grid grid-cols-2 gap-y-3 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <Image src={assets.users_icon} alt="Seats" width={16} height={16} />
            {car.seating_capacity} Seats
          </div>

          <div className="flex items-center gap-2">
            <Image src={assets.fuel_icon} alt="Fuel" width={16} height={16} />
            {car.fuel_type}
          </div>

          <div className="flex items-center gap-2">
            <Image
              src={assets.car_icon}
              alt="Transmission"
              width={16}
              height={16}
            />
            {car.transmission}
          </div>

          <div className="flex items-center gap-2">
            <Image
              src={assets.location_icon}
              alt="Location"
              width={16}
              height={16}
            />
            {car.location}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
