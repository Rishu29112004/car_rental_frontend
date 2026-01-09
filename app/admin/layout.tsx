import React, { ReactNode } from 'react'
import AdminNavbar from '@/components/custom/admin-layout/AdminNavbar'
import Sidebar from '@/components/custom/admin-layout/Sidebar'

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen">
      <AdminNavbar />

      <div className="flex pt-16">
        {/* Sidebar */}
        <aside className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 z-40">
          <Sidebar />
        </aside>

        {/* Main content */}
        <main className="ml-64 w-full min-h-screen p-6">
          {children}
        </main>
      </div>
    </div>
  )
}

export default layout
