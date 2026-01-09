import { CustomButton } from "@/components/custom/CustomButton/CustomButton";
import SectionHeader from "@/components/custom/SectionHeader/SectionHeader";
import React from "react";

const Subscribe = () => {
  return (
    <div className="w-full mb-12 md:mb-14">
      <div className="max-w-7xl mx-auto flex flex-col items-center w-full p-4 md:p-6 ">
        <SectionHeader
          title="Never Miss a Deal!"
          subTitle="Subscribe to get the latest offers, new arrivals, and exclusive discounts"
        />

        {/* INNER CONTAINER — YAHAN WIDTH CONTROL HOGA */}
        <div
          className="
    w-full max-w-4xl
    bg-white rounded-2xl
    shadow-[0_10px_30px_rgba(0,0,0,0.08)]
    ring-1 ring-black/5
    overflow-hidden
    flex flex-col
    sm:flex-row
  "
        >
          <input
            type="email"
            placeholder="Enter your email address"
            className="
      w-full
      flex-1
      px-6 py-4
      text-base
      outline-none
      placeholder:text-gray-400
    "
          />

          <button
            className="
      w-full sm:w-auto
      px-10 py-4
      font-medium text-white
      bg-gradient-to-r from-blue-600 to-blue-500
      hover:from-blue-700 hover:to-blue-600
      transition-all duration-200
    "
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
