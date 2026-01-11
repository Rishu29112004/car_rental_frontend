"use client";
import SectionHeader from "@/components/custom/SectionHeader/SectionHeader";
import React, { useRef, useState } from "react";

const AddCars = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const [preview, setPreview] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="w-full flex justify-start items-start text-left">
        <SectionHeader
          align="left"
          title="Admin Dashboard"
          subTitle="Monitor overall platform performance including total cars, bookings, revenue, and recent activities"
        />
      </div>

      {/* FORM START */}
      <form className="space-y-4 border p-4 rounded-lg bg-slate-100">
        {/* Upload */}
        <div className="flex items-center gap-4">
          {/* Upload Box */}
          <div
            onClick={() => fileInputRef.current?.click()}
            className="w-24 h-24 border-2 border-dashed rounded-md bg-white flex items-center justify-center cursor-pointer overflow-hidden"
          >
            {preview ? (
              <img
                src={preview}
                alt="Preview"
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-sm text-gray-400">Upload</span>
            )}
          </div>

          {/* Hidden Input */}
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleImageChange}
            accept="image/*"
            className="hidden"
          />

          <span className="text-sm text-gray-600">
            Upload a picture of your car
          </span>
        </div>

        {/* Brand & Model */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">Brand</label>
            <input
              type="text"
              placeholder="e.g. BMW, Audi, Mercedes"
              className="border bg-white rounded-md px-3 py-2 w-full text-sm"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">Model</label>
            <input
              type="text"
              placeholder="e.g. X5, A6, C-Class"
              className="border bg-white rounded-md px-3 py-2 w-full text-sm"
            />
          </div>
        </div>

        {/* Year, Price, Category */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">
              Manufacturing Year
            </label>
            <input
              type="number"
              placeholder="e.g. 2022"
              className="border bg-white rounded-md px-3 py-2 w-full text-sm"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">
              Daily Price
            </label>
            <input
              type="number"
              placeholder="e.g. 4500"
              className="border bg-white rounded-md px-3 py-2 w-full text-sm"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">
              Category
            </label>
            <select className="border bg-white rounded-md px-3 py-2 w-full text-sm">
              <option>Select car category</option>
              <option>SUV</option>
              <option>Sedan</option>
              <option>Luxury</option>
            </select>
          </div>
        </div>

        {/* Transmission, Fuel, Seats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">
              Transmission
            </label>
            <select className="border bg-white rounded-md px-3 py-2 w-full text-sm">
              <option>Select transmission</option>
              <option>Automatic</option>
              <option>Manual</option>
            </select>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">
              Fuel Type
            </label>
            <select className="border bg-white rounded-md px-3 py-2 w-full text-sm">
              <option>Select fuel type</option>
              <option>Petrol</option>
              <option>Diesel</option>
              <option>Electric</option>
            </select>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">
              Seating Capacity
            </label>
            <input
              type="number"
              placeholder="e.g. 5"
              className="border rounded-md bg-white px-3 py-2 w-full text-sm"
            />
          </div>
        </div>

        {/* Location */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700">Location</label>
          <select className="border rounded-md bg-white px-3 py-2 w-full text-sm">
            <option>Select city</option>
            <option>Delhi</option>
            <option>Mumbai</option>
            <option>Bangalore</option>
          </select>
        </div>

        {/* Description */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            placeholder="Brief description about the car, features, condition etc."
            className="border rounded-md px-3 bg-white py-2 w-full h-24 text-sm"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="bg-blue-600 text-white px-5 py-2 rounded-md text-sm"
        >
          List Your Car
        </button>
      </form>
    </div>
  );
};

export default AddCars;
