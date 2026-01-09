"use client";
import Image from "next/image";
import { LayoutDashboard, Car, PlusCircle,LayoutDashboardIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Sidebar = () => {
  const pathname = usePathname();

  const routes = [
    {
      label: "Dashboard",
      icon: LayoutDashboard,
      href: "/admin",
    },
    {
      label: "Add Car",
      icon: PlusCircle,
      href: "/admin/add-car",
    },
    {
      label: "Manage Cars",
      icon: Car,
      href: "/admin/manage-cars",
    },
    {
      label: "Manage Booking",
      icon: LayoutDashboardIcon,
      href: "/admin/manage-booking",
    },
  ];

  return (
    <div className="hidden md:flex h-screen w-64 flex-col bg-white shadow-md border-r border-t-2 border-gray-200">
      {/* Logo */}
      <div className="p-5 border-b flex flex-col items-center">
        <Image
          src="/user_profile.png"
          alt="Logo"
          width={60}
          height={40}
          className="object-contain rounded-full"
        />
        <h1 className="text-xl font-semibold text-gray-900">Rishu</h1>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-4 py-6 space-y-1">
        {routes.map((route) => {
          const isActive =
            pathname === route.href || pathname.startsWith(route.href + "/");

          return (
            <Link
              key={route.href}
              href={route.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition
                ${
                  isActive
                    ? "bg-blue-50 text-blue-700 font-medium"
                    : "text-gray-600 hover:bg-gray-50"
                }
              `}
            >
              <route.icon
                className={`h-5 w-5 ${
                  isActive ? "text-blue-600" : "text-gray-400"
                }`}
              />
              {route.label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;
