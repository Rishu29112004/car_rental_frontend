"use client";
import { AddCarsHOC } from "@/components/screens/AddCars/AddCarsHOC";
import React from "react";

export default function AddCarPage() {
  return (
    // <div className="min-h-screen w-full">
    //   <div className="mx-auto max-w-6xl">

    //     {/* Header */}
    //     <div className="mb-10">
    //       <h1 className="text-3xl font-bold text-slate-900">
    //         Add New Car
    //       </h1>
    //       <p className="mt-2 max-w-2xl text-slate-500">
    //         Fill in the details to list a new car for booking, including pricing,
    //         availability, and specifications.
    //       </p>
    //     </div>

    //     {/* Card */}
    //     <div className="rounded-2xl border border-slate-200 bg-slate-50 shadow-sm">

    //       {/* Upload */}
    //       <div className="flex items-center gap-6 border-b border-slate-200 p-8">
    //         <div className="flex h-22 w-22 cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-blue-500 bg-blue-50 text-blue-600 hover:bg-blue-100 transition">
    //           <span className="text-3xl">📷</span>
    //           <span className="mt-1 text-sm font-medium">Upload</span>
    //         </div>
    //         <div>
    //           <p className="text-base font-medium text-slate-900">
    //             Upload Car Image
    //           </p>
    //           <p className="text-sm text-slate-500">
    //             JPG, PNG • Max 5MB
    //           </p>
    //         </div>
    //       </div>

    //       {/* Form */}
    //       <div className="p-8">
    //         <div className="grid grid-cols-1 gap-6 md:grid-cols-3">

    //           <div>
    //             <label className="mb-1 block text-sm font-medium text-slate-700">
    //               Brand
    //             </label>
    //             <input
    //               className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
    //               placeholder="BMW, Mercedes, Audi"
    //             />
    //           </div>

    //           <div>
    //             <label className="mb-1 block text-sm font-medium text-slate-700">
    //               Model
    //             </label>
    //             <input
    //               className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
    //               placeholder="X5, E-Class, M4"
    //             />
    //           </div>

    //           <div>
    //             <label className="mb-1 block text-sm font-medium text-slate-700">
    //               Year
    //             </label>
    //             <input
    //               type="number"
    //               placeholder="0"
    //               className="w-full rounded-lg border border-slate-300 px-3 py-2.5 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
    //             />
    //           </div>

    //           <div>
    //             <label className="mb-1 block text-sm font-medium text-slate-700">
    //               Daily Price ($)
    //             </label>
    //             <input
    //               type="number"
    //               placeholder="0"
    //               className="w-full rounded-lg border border-slate-300 px-3 py-2.5 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
    //             />
    //           </div>

    //           <div>
    //             <label className="mb-1 block text-sm font-medium text-slate-700">
    //               Category
    //             </label>
    //             <select className="w-full rounded-lg border border-slate-300 px-3 py-2.5 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none">
    //               <option>Select category</option>
    //               <option>Luxury</option>
    //               <option>SUV</option>
    //               <option>Sedan</option>
    //               <option>Sports</option>
    //             </select>
    //           </div>

    //           <div>
    //             <label className="mb-1 block text-sm font-medium text-slate-700">
    //               Transmission
    //             </label>
    //             <select className="w-full rounded-lg border border-slate-300 px-3 py-2.5 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none">
    //               <option>Select transmission</option>
    //               <option>Automatic</option>
    //               <option>Manual</option>
    //             </select>
    //           </div>

    //           <div>
    //             <label className="mb-1 block text-sm font-medium text-slate-700">
    //               Fuel Type
    //             </label>
    //             <select className="w-full rounded-lg border border-slate-300 px-3 py-2.5 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none">
    //               <option>Select fuel</option>
    //               <option>Petrol</option>
    //               <option>Diesel</option>
    //               <option>Electric</option>
    //             </select>
    //           </div>

    //           <div>
    //             <label className="mb-1 block text-sm font-medium text-slate-700">
    //               Seating Capacity
    //             </label>
    //             <input
    //               type="number"
    //               className="w-full rounded-lg border border-slate-300 px-3 py-2.5 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
    //             />
    //           </div>

    //           <div>
    //             <label className="mb-1 block text-sm font-medium text-slate-700">
    //               Location
    //             </label>
    //             <select className="w-full rounded-lg border border-slate-300 px-3 py-2.5 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none">
    //               <option>Select location</option>
    //               <option>Delhi</option>
    //               <option>Mumbai</option>
    //               <option>Bangalore</option>
    //             </select>
    //           </div>

    //           <div className="md:col-span-3">
    //             <label className="mb-1 block text-sm font-medium text-slate-700">
    //               Description
    //             </label>
    //             <textarea
    //               rows={4}
    //               className="w-full rounded-lg border border-slate-300 px-3 py-2.5 resize-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
    //               placeholder="Luxury SUV with premium interior and powerful engine..."
    //             />
    //           </div>
    //         </div>

    //         {/* Buttons */}
    //         <div className="mt-10 flex justify-end">
    //           <button className="rounded-lg bg-blue-500 px-8 py-2.5 font-medium text-white hover:bg-blue-600 transition">
    //             List Car
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <AddCarsHOC/>
  );
}
