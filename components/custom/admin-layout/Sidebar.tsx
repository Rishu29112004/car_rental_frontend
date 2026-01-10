"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Car,
  PlusCircle,
  LayoutDashboardIcon,
} from "lucide-react";

const routes = [
  { label: "Dashboard", icon: LayoutDashboard, href: "/admin/dashboard" },
  { label: "Add Car", icon: PlusCircle, href: "/admin/add-car" },
  { label: "Manage Cars", icon: Car, href: "/admin/manage-cars" },
  { label: "Manage Booking", icon: LayoutDashboardIcon, href: "/admin/manage-booking" },
];

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="h-screen w-16 md:w-64 flex flex-col bg-white border-r border-gray-200 shadow-sm">
      {/* Logo */}
      <div className="p-4 border-b flex flex-col items-center gap-2">
        <Image
          src="/user_profile.png"
          alt="Logo"
          width={40}
          height={40}
          className="rounded-full"
        />
        <h1 className="hidden md:block text-lg font-semibold text-gray-900">
          Rishu
        </h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-2 md:px-4 py-6 space-y-2">
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={`
              flex items-center justify-center md:justify-start
              gap-3 px-3 py-3 rounded-lg transition
              ${
                pathname === route.href ||
                pathname.startsWith(route.href + "/")
                  ? "bg-blue-50 text-blue-700"
                  : "text-gray-600 hover:bg-gray-50"
              }
            `}
          >
            <route.icon
              className={`h-5 w-5 ${
                pathname === route.href ||
                pathname.startsWith(route.href + "/")
                  ? "text-blue-600"
                  : "text-gray-400"
              }`}
            />

            <span className="hidden md:block font-medium">
              {route.label}
            </span>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
