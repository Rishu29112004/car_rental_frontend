import React from 'react'

const page = () => {
  return (
      <div className="min-h-screen bg-slate-50 px-6 py-8">
      <div className="mx-auto max-w-7xl">

        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900">
            Manage Bookings
          </h1>
          <p className="mt-2 max-w-2xl text-slate-500">
            Track all customer bookings, approve or cancel requests, and manage booking statuses.
          </p>
        </div>

        {/* Table Card */}
        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">

          {/* Table Header */}
          <div className="grid grid-cols-5 items-center bg-slate-100 px-6 py-3 text-sm font-medium text-slate-700">
            <span>Car</span>
            <span>Date Range</span>
            <span>Total</span>
            <span>Payment</span>
            <span className="text-right">Active</span>
          </div>

          {/* Empty State / Rows Placeholder */}
          <div className="px-6 py-10 text-center text-slate-500">
            No cars added yet.
          </div>

        </div>
      </div>
    </div>
  )
}

export default page
