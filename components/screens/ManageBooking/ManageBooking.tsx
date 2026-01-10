import SectionHeader from "@/components/custom/SectionHeader/SectionHeader";
import React from "react";
export const carBookingData = [
  {
    id: 1,
    car: "BMW X5",
    dateRange: "2026-01-01 → 2026-01-05",
    total: 7500,
    payment: "Paid",
    status: "Completed",
  },
  {
    id: 2,
    car: "Audi A6",
    dateRange: "2026-01-03 → 2026-01-07",
    total: 6500,
    payment: "Pending",
    status: "In Progress",
  },
  {
    id: 3,
    car: "Mercedes C-Class",
    dateRange: "2026-01-05 → 2026-01-10",
    total: 9000,
    payment: "Paid",
    status: "Completed",
  },
  {
    id: 4,
    car: "Toyota Fortuner",
    dateRange: "2026-01-08 → 2026-01-12",
    total: 5500,
    payment: "Pending",
    status: "In Progress",
  },
  {
    id: 5,
    car: "Hyundai Verna",
    dateRange: "2026-01-10 → 2026-01-15",
    total: 4200,
    payment: "Paid",
    status: "Completed",
  },
  {
    id: 6,
    car: "Tesla Model 3",
    dateRange: "2026-01-12 → 2026-01-16",
    total: 15000,
    payment: "Paid",
    status: "Completed",
  },
  {
    id: 7,
    car: "Kia Seltos",
    dateRange: "2026-01-14 → 2026-01-18",
    total: 5200,
    payment: "Pending",
    status: "In Progress",
  },
  {
    id: 8,
    car: "Mercedes GLE",
    dateRange: "2026-01-16 → 2026-01-20",
    total: 14000,
    payment: "Paid",
    status: "Completed",
  },
  {
    id: 9,
    car: "Hyundai Creta",
    dateRange: "2026-01-18 → 2026-01-22",
    total: 4900,
    payment: "Pending",
    status: "In Progress",
  },
  {
    id: 10,
    car: "Audi Q7",
    dateRange: "2026-01-20 → 2026-01-25",
    total: 13000,
    payment: "Paid",
    status: "Completed",
  },
];

const ManageBooking = () => {
  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          title="Manage Cars"
          subTitle="   View all listed cars, update their details, or remove them from the
            booking platform."
          align="left"
        />
        <div className="border overflow-hidden rounded-md w-full">
          <table className="w-full">
            <thead className="bg-slate-100 rounded-t-md">
              <tr>
                <td className="py-4 px-4 text-left font-semibold">Car</td>
                <td className="py-3 px-4 text-left font-semibold">Date Range</td>
                <td className="py-3 px-4 text-left font-semibold">Total</td>
                <td className="py-3 px-4 text-left font-semibold">Payment</td>
                <td className="py-3 px-4 text-left font-semibold">Actions</td>
              </tr>
            </thead>
            <tbody className="">
              {carBookingData.map((t) => (
                <tr key={t.id} className="border-t">
                  <td className="px-4 py-">{t.car}</td>
                  <td className="px-4 py-3">{t.dateRange}</td>
                  <td className="px-4 py-3">{t.total}</td>
                  <td className="px-4 py-3">{t.payment}</td>
                  <td className={`px-4 py-3 font-semibold ${t.payment==="Paid"? "text-blue-500" : "text-gray-500"}`}>{t.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageBooking;
