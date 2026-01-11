import {
  Car,
  CircleCheckBig,
  Fuel,
  MapPin,
  MoveLeft,
  UsersRound,
} from "lucide-react";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export const carFeatures = [
  {
    id: 1,
    name: "360° Camera",
    available: true,
  },
  {
    id: 2,
    name: "Bluetooth",
    available: true,
  },
  {
    id: 3,
    name: "GPS",
    available: true,
  },
  {
    id: 4,
    name: "Heated Seats",
    available: true,
  },
  {
    id: 5,
    name: "Rear View Mirror",
    available: true,
  },
];

const CarRental = () => {
  return (
    <div className="min-h-screen w-full">
      <div className="max-w-7xl px-4 lg:px-2 mx-auto flex flex-col justify-between items-center">
        <div className="w-full flex flex-col mt-12 md:mt-18">
          <Link href={"/"}>
            <button className="text-gray-500 font-semibold flex gap-2">
              <span className="text-blue-500">
                <MoveLeft />
              </span>
              Back to all cars
            </button>
          </Link>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 px-4 md:px-0 w-full mt-10 p-6">
          <div className="">
            <Image
              src="/banner_car_image.png"
              alt="img"
              width={2000}
              height={500}
              className=""
            />
          </div>
          <div className=" w-full">
            <form className="border border-gray-200 bg-slate-100 flex flex-col gap-4 p-4 rounded-md ">
              <div className="flex justify-between ">
                <h1 className="text-2xl font-semibold">{"$200"}</h1>
                <p className="text-gray-500">Per Day</p>
              </div>
              <hr className="border w-full" />
              <div className="flex flex-col gap-2">
                <label htmlFor="date">Pickup Date</label>
                <input
                  type="date"
                  className="border border-gray-300 rounded-md p-4"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="date">Return Date</label>
                <input
                  type="date"
                  className="border border-gray-300 rounded-md p-4"
                />
              </div>
              <div>
                <button className="w-full py-2 font-semibold text-white bg-blue-500 rounded-md">
                  Book Now
                </button>
              </div>
              <p className="text-sm text-gray-500 w-full flex items-center justify-center">
                No credit card required to reserve
              </p>
            </form>
          </div>
        </div>
        <div className="w-full mt-10">
          <p className="text-3xl font-bold">Jeep Wrangler</p>
          <p className="text-gray-500 font-semibold">SUB . 2023</p>
        </div>
        <hr className="border-t my-6 border w-full" />
        <div className="flex flex-col md:flex-row gap-6 md:gap-2 items-center mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center justify-around w-full md:w-1/2 px-4 md:px-0">
            <div className="flex flex-col items-center gap-2 px-16 py-3 bg-slate-100 rounded-md">
              <p className="text-gray-500">
                <UsersRound />
              </p>
              <p className="font-semibold">4 Seats</p>
            </div>
            <div className="flex flex-col items-center gap-2 px-8 py-3 bg-slate-100 rounded-md">
              <p className="text-gray-500">
                <Fuel />
              </p>
              <p className="font-semibold">Hybrid</p>
            </div>
            <div className="flex flex-col items-center gap-2 px-8 py-3 bg-slate-100 rounded-md">
              <p className="text-gray-500">
                <Car />
              </p>
              <p className="font-semibold">Automatic</p>
            </div>
            <div className="flex flex-col items-center gap-2 px-8 py-3 bg-slate-100 rounded-md">
              <p className="text-gray-500">
                <MapPin />
              </p>
              <p className="font-semibold">Los Angeles</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex flex-col gap-5 p-5">
            <p className="text-xl font-semibold">Description</p>
            <p className="text-gray-500">
              The Jeep Wrangler is a mid-size luxury SUV produced by Jeep. The
              Wrangler made its debut in 2003 as the first SUV ever produced by
              Jeep.
            </p>
          </div>
        </div>
        <div className="w-full pb-4 md:py-6 p-5 md:p-0">
          <p className="text-xl font-semibold">Features:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:flex gap-4 md:gap-0 items-center justify-around pt-4">
            {carFeatures.map((t) => (
              <div key={t.id} className="">
                <p className="flex gap-2 text-gray-500 font-semibold">
                  <span className="text-blue-500">
                    <CircleCheckBig />
                  </span>
                  {t.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarRental;
