"use client";

import SectionHeader from "@/components/custom/SectionHeader/SectionHeader";
import React, { useState } from "react";
import clsx from "clsx";
import { Pencil } from "lucide-react";
import { AddCarForm } from "@/components/screens/AddCars/component/AddCarform";
import { useModal } from "@/context/modal-context";
import DeleteCarModal from "./component/DeleteCarModal";
// import { useModal } from "@/context/ModalContext"; // path check kar lena

// import { SheetContent } from "@/components/ui/sheet";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
// } from "@/components/ui/dialog";
// import { SheetContent } from "@/components/ui/sheet";

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
const { openSheet } = useModal();
const [isDeleteOpen, setIsDeleteOpen] = useState(false);


  const handleEdit = () => {
    openSheet(<AddCarForm />);
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
                      onClick={handleEdit}
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
                      onClick={() => setIsDeleteOpen(true)}
                      className="flex items-center gap-2 px-3 py-1.5 text-sm rounded-md
                      bg-blue-50 text-blue-600 border border-blue-200
                      hover:bg-blue-100 transition"
                    >
                      <Pencil size={14} />
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
{isDeleteOpen && <DeleteCarModal onClose={() => setIsDeleteOpen(false)} />}

          {/* EDIT FORM DIALOG */}
          {/* <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="max-w-3xl">
              <DialogHeader>
                <DialogTitle>Edit Car</DialogTitle>
              </DialogHeader>

              <AddCarForm />
            </DialogContent>
          </Dialog> */}
        </div>
      </div>
    </div>
  );
};

export default ManageCars;
