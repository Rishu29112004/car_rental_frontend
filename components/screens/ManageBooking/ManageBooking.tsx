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

const tableHeaders = ["Car", "Date Range", "Total", "Payment"];

const ManageBooking = () => {
  return (
    <div className="min-h-screen bg-slate-50 p-5 rounded-md">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          title="Manage Bookings"
          subTitle="View all car bookings on the platform."
          align="left"
        />

        <div className="border rounded-md h-[77vh] overflow-auto bg-white">
          <table className="w-full border-collapse text-sm">
            {/* HEADER */}
            <thead className="bg-slate-100 sticky top-0 z-10">
              <tr className="text-gray-700 font-semibold">
                {tableHeaders.map((h) => (
                  <th
                    key={h}
                    className="px-4 py-3 text-left whitespace-nowrap"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>

            {/* BODY */}
            <tbody>
              {carBookingData.map((t) => (
                <tr
                  key={t.id}
                  className="border-b last:border-none hover:bg-slate-50 transition"
                >
                  <td className="px-4 py-3 font-medium text-gray-800">
                    {t.car}
                  </td>

                  <td className="px-4 py-3 text-gray-600">
                    {t.dateRange}
                  </td>

                  <td className="px-4 py-3 text-gray-700">
                    ₹{t.total}
                  </td>

                  <td className="px-4 py-3">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold capitalize ${
                        t.payment === "Paid"
                          ? "bg-emerald-100 text-emerald-600"
                          : "bg-amber-100 text-amber-600"
                      }`}
                    >
                      {t.payment}
                    </span>
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

export default ManageBooking;
