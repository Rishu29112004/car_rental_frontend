import SectionHeader from "@/components/custom/SectionHeader/SectionHeader";
import React from "react";

export const carTableData = [
  { id: 1, car: "BMW X5", category: "SUV", price: 7500, status: "Approved" },
  { id: 2, car: "Audi A6", category: "Sedan", price: 6500, status: "Pending" },
  {
    id: 3,
    car: "Mercedes C-Class",
    category: "Luxury",
    price: 9000,
    status: "Approved",
  },
  {
    id: 4,
    car: "Toyota Fortuner",
    category: "SUV",
    price: 5500,
    status: "Pending",
  },
  {
    id: 5,
    car: "Hyundai Verna",
    category: "Sedan",
    price: 4200,
    status: "Approved",
  },
];
const tableHeaders = ["Car", "Category", "Price", "Status", "Actions"];

// status → tailwind classes mapping
const statusStyles: Record<string, string> = {
  Available: "bg-green-100 text-green-700",
  Booked: "bg-yellow-100 text-yellow-700",
  Maintenance: "bg-red-100 text-red-700",
};

const ManageCars = () => {
  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          title="Manage Cars"
          subTitle="   View all listed cars, update their details, or remove them from the
            booking platform."
          align="left"
        />

        <div className="border rounded-md h-[77vh]  overflow-x-scroll">
          <table className="w-full border-collaps">
            <thead className="rounded-t-md bg-slate-100 rounded-md overflow-x-scroll">
              <tr className="text-gray-700 font-semibold">
                {tableHeaders.map((header) => (
                  <th
                    key={header}
                    className={`text-left px-4 py-2 ${
                      header === "Car" ? "pl-4 py-4" : "py-2"
                    }`}
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {carTableData.map((t) => (
                <tr key={t.id} className="border-b">
                  <td className="px-4 py-3">{t.car}</td>
                  <td>{t.category}</td>
                  <td>{t.price}</td>
                  <td
                    className={`font-semibold ${t.status === "Approved" ? "text-blue-500" : "text-amber-500"}`}
                  >
                    {t.status}
                  </td>
                  <td className="mt-3">
                    {t.status === "Approved" ? (
                      <button className="font-semibold text-sm mr-4 border rounded-full bg-gray-500 text-white px-4 py-2">
                        Decline
                      </button>
                    ) : (
                      <div className="flex gap-1 ">
                        <button className="text-sm text-center font-semibold py-1 mr-4 border rounded-full bg-gray-500 text-white px-4">
                          Decline
                        </button>
                        <button className="text-sm text-center font-semibold py-1 mr-4 border rounded-full bg-blue-500 text-white px-4">
                          Approved
                        </button>
                      </div>
                    )}
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
