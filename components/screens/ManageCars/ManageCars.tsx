"use client";

import SectionHeader from "@/components/custom/SectionHeader/SectionHeader";
import React, { useState } from "react";
import clsx from "clsx";
import { Pencil, Trash2 } from "lucide-react";
import { useModal } from "@/context/modal-context";
import DeleteCarModal from "./component/DeleteCarModal";
import EditCarDetailsForm from "./component/EditCarDetailsForm";

export const carTableData = [
  { id: 1, car: "BMW X5", category: "SUV", price: 7500, status: "active" },
  { id: 2, car: "Audi A6", category: "Sedan", price: 6500, status: "active" },
  {
    id: 3,
    car: "Mercedes C-Class",
    category: "Luxury",
    price: 9000,
    status: "inactive",
  },
  {
    id: 4,
    car: "Toyota Fortuner",
    category: "SUV",
    price: 5500,
    status: "active",
  },
  {
    id: 5,
    car: "Hyundai Verna",
    category: "Sedan",
    price: 4200,
    status: "booked",
  },
];

const tableHeaders = [
  "Car",
  "Category",
  "Price",
  "Status",
  "Changes",
  "Delete",
];

const ManageCars = () => {
  const { openSheet, openModal } = useModal();

  const handleEdit = (car: typeof carTableData[0]) => {
    openSheet(
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">Edit Car Details</h2>
        <EditCarDetailsForm/>
      </div>
    );
  };

  const handleDelete = (carName: string) => {
    console.log("handleDelete called with:", carName);
    console.log("openModal function:", openModal);
    openModal(
      <DeleteCarModal
        carName={carName}
        onConfirmDelete={() => {
          console.log(`Deleting car: ${carName}`);
          // Add your delete logic here
        }}
      />
    );
  };
  return (
    <div className="min-h-screen bg-slate-50 p-5 rounded-md">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          title="Manage Cars"
          subTitle="View all listed cars, update their details, or remove them from the booking platform."
          align="left"
        />

        <div className="border rounded-md h-[77vh] overflow-auto bg-white">
          <table className="w-full border-collapse text-sm">
            {/* TABLE HEAD */}
            <thead className="bg-slate-100 sticky top-0 z-10">
              <tr className="text-gray-700 font-semibold">
                {tableHeaders.map((header) => (
                  <th
                    key={header}
                    className="px-4 py-3 text-left whitespace-nowrap"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>

            {/* TABLE BODY */}
            <tbody>
              {carTableData.map((t) => (
                <tr
                  key={t.id}
                  className="border-b last:border-none hover:bg-slate-50 transition"
                >
                  <td className="px-4 py-3 font-medium text-gray-800">
                    {t.car}
                  </td>

                  <td className="px-4 py-3 text-gray-600">{t.category}</td>

                  <td className="px-4 py-3 text-gray-700">₹{t.price}</td>

                  <td className="px-4 py-3">
                    <span
                      className={clsx(
                        "px-3 py-1 rounded-full text-xs font-semibold capitalize",
                        t.status === "active" && "bg-blue-100 text-blue-600",
                        t.status === "booked" && "bg-amber-100 text-amber-600",
                        t.status === "inactive" &&
                          "bg-slate-200 text-slate-600",
                      )}
                    >
                      {t.status}
                    </span>
                  </td>

                  <td className="px-4 py-3">
                    <button
                      onClick={() => handleEdit(t)}
                      className="flex items-center gap-2 px-3 py-1.5 text-sm rounded-md
                      bg-blue-50 text-blue-600 border border-blue-200
                      hover:bg-blue-100 transition"
                    >
                      <Pencil size={14} />
                      Edit
                    </button>
                  </td>
                  <td className="px-4 py-3">
                    <button
                      onClick={() => handleDelete(t.car)}
                      className="flex items-center gap-2 px-3 py-1.5 text-sm rounded-md
                      bg-red-50 text-red-600 border border-red-200
                      hover:bg-red-100 transition"
                    >
                      <Trash2 size={14} />
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageCars;
