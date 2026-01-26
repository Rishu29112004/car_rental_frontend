import SectionHeader from "@/components/custom/SectionHeader/SectionHeader";
import React from "react";

const Dashboard = () => {
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

        <div className="border p-4 rounded-lg bg-slate-100">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-white p-6">
              <div>
                <p className="text-sm font-semibold text-slate-500">Total Cars</p>
                <p className="mt-1 text-2xl font-semibold text-slate-900">0</p>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                🚗
              </div>
            </div>

            <div className="flex items-center justify-between rounded-xl border bg-white border-slate-200 p-6">
              <div>
                <p className="text-sm font-semibold text-slate-500">Total Bookings</p>
                <p className="mt-1 text-2xl font-semibold text-slate-900">0</p>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                📋
              </div>
            </div>

            <div className="flex items-center justify-between rounded-xl border bg-white border-slate-200 p-6">
              <div>
                <p className="text-sm font-semibold text-slate-500">Total Active Cars</p>
                <p className="mt-1 text-2xl font-semibold text-slate-900">0</p>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                ⚠️
              </div>
            </div>

            <div className="flex items-center font-semibold justify-between rounded-xl border bg-white border-slate-200 p-6">
              <div>
                <p className="text-sm text-slate-500">Total Inactive Cars</p>
                <p className="mt-1 text-2xl font-semibold text-slate-900">0</p>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                ✅
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {/* Recent Bookings */}
            <div className="lg:col-span-2 rounded-xl border bg-white border-slate-200 p-6">
              <h2 className="text-lg font-semibold text-slate-900">
                Recent Bookings
              </h2>
              <p className="mt-1 text-sm font-semibold text-slate-500">
                Latest customer bookings
              </p>

              <div className="mt-8 text-sm text-slate-400">
                No recent bookings available.
              </div>
            </div>

            {/* Monthly Revenue */}
            <div className="rounded-xl border bg-white border-slate-200 p-6">
              <h2 className="text-lg font-semibold text-slate-900">
                Monthly Revenue
              </h2>
              <p className="mt-1 font-semibold text-sm text-slate-500">
                Revenue for current month
              </p>

              <div className="mt-8 text-3xl font-bold text-blue-500">$0</div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Dashboard;
