"use client";

import LoginForm from "@/components/screens/Login/components/LoginForm";
import { useAuth } from "@/context/auth-context";
import { useModal } from "@/context/modal-context";
import { clearTokens } from "@/utils/token";
import { useEffect, useRef } from "react";

const ProfileDropdown = () => {
  const { user, logout } = useAuth();
  const {openModal}=useModal()
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const handleLogout = async () => {
    await logout();
    openModal(<LoginForm/>,false)
 
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        dropdownRef.current.style.display = "none";
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      ref={dropdownRef}
      className="absolute right-3 top-16 w-64 bg-white border border-gray-200 shadow-xl rounded-xl p-4 z-50 animate-in fade-in zoom-in-95"
    >
      {/* User Info */}
      <div className="flex items-center gap-3 border-b pb-3">
        <div className="h-10 w-10 rounded-full bg-slate-200 flex items-center justify-center font-semibold text-slate-700">
          {user?.name?.charAt(0).toUpperCase()}
        </div>

        <div className="flex flex-col">
          <p className="font-semibold text-gray-800 leading-tight">
            {user?.name}
          </p>
          <p className="text-xs text-gray-500 truncate">{user?.email}</p>
        </div>
      </div>

      {/* Actions */}
      <button
        onClick={handleLogout}
        className="mt-4 w-full flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 transition text-white rounded-lg py-2 text-sm font-medium"
      >
        Logout
      </button>
    </div>
  );
};

export default ProfileDropdown;
