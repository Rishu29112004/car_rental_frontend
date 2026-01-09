"use client";

import Image from "next/image";


const AdminNavbar = () => {
  return (
    <div className="w-full bg-white shadow-md fixed top-0 z-50">
      {/* NAVBAR */}
      <div className="px-6 h-16 flex items-center justify-between ">
        {/* Logo */}
        <Image
          src="/logo.svg"
          alt="Logo"
          width={120}
          height={40}
          className="object-contain"
        />
         <div>
        <p className="font-semibold text-gray-500">Welcome,Rishu</p>
      </div>
      </div>
     
    </div>
  );
};

export default AdminNavbar;
