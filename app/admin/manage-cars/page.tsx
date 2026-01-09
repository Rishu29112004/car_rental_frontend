import React from "react";

const page = () => {
  return (
    <div className="min-h-screen bg-slate-50 px-6 py-8">
      <div className="mx-auto max-w-7xl">

        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900">
            Manage Cars
          </h1>
          <p className="mt-2 max-w-2xl text-slate-500">
            View all listed cars, update their details, or remove them from
            the booking platform.
          </p>
        </div>

        {/* Table Card */}
        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">

          {/* Table Header */}
          <div className="grid grid-cols-5 items-center bg-slate-100 px-6 py-3 text-sm font-medium text-slate-700">
            <span>Car</span>
            <span>Category</span>
            <span>Price</span>
            <span>Status</span>
            <span className="text-right">Active</span>
          </div>

          {/* Empty State / Rows Placeholder */}
          <div className="px-6 py-10 text-center text-slate-500">
            No cars added yet.
          </div>

        </div>
      </div>
    </div>
  );
};

export default page;
