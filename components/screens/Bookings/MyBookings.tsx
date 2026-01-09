import Footer from "@/components/custom/Footer/Footer";
import React from "react";

const MyBookings = () => {
  return (
    <div className="w-full min-h-screen bg-white">
      <div className="max-w-7xl mx-auto flex flex-col px-4 md:px-0 p-12">
        <h1 className="text-3xl max-w-7xl md:text-5xl font-semibold mb-4 md:mb-6">
          My Bookings
        </h1>
        <p className="text-md font-normal mb-8 md:mb-10 max-w-2xl text-gray-500">
          View and manage your all car bookings
        </p>
      </div>
    </div>
  );
};

export default MyBookings;
