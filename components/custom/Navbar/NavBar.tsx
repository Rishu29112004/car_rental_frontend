"use client";

import Image from "next/image";
import { CustomButton } from "../CustomButton/CustomButton";
import { Menu, Search, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useModal } from "@/context/modal-context";
// import LoginForm from "@/components/screens/Login/components/LoginForm";
import SignupForm from "@/components/screens/Signup/SignupForm";
import { useAuth } from "@/context/auth-context";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import ProfileDropdown from "../profile-Dropdown/ProfileDropdown";
// import ProfileDropdown from "../profile-Dropdown/profileDropdown";

export const navbarLinks = [
  {
    id: 1,
    label: "Home",
    href: "/",
  },
  {
    id: 2,
    label: "Cars",
    href: "/cars",
  },
  {
    id: 3,
    label: "My Bookings",
    href: "/bookings",
  },
];

const NavBar = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();
  const { openModal } = useModal();
  const { user } = useAuth();

  const initials =user?.name ?.split(" ").map((word) => word[0]).join("").toUpperCase() || "";


  const [openProfileDropdown,setOpenProfileDropdown]=useState(false)

  const handleLoginClick = () => {
  setOpenProfileDropdown((prev) => !prev);
};



  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsSheetOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  // const handleLoginClick = () => {
  //   openModal(<LoginForm />);
  // };

  const handleSignupClick = () => {
    openModal(<SignupForm />);
  };

  return (
    <div className="w-full bg-slate-100">
      {/* NAVBAR */}
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between relative">
        {/* Logo */}
        <Image
          src="/logo.svg"
          alt="Logo"
          width={120}
          height={40}
          className="object-contain"
        />

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
          {navbarLinks.map((t) => (
            <Link key={t.id} href={t.href}>
              <p
                className={`cursor-pointer hover:text-blue-500 ${
                  pathname === t.href
                    ? "text-blue-500 font-semibold underline"
                    : ""
                }`}
              >
                {t.label}
              </p>
            </Link>
          ))}

          <div className="relative w-64 hidden lg:block">
            <Input
              type="text"
              placeholder="Search"
              className="w-full rounded-full border border-gray-300 bg-white py-2 px-4 text-sm"
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          </div>
        </div>

        {/* Desktop Right */}
        <div className="hidden sm:flex items-center gap-4">
          <Link href={"/admin/dashboard"}>
            <p className="cursor-pointer font-medium text-slate-600 hover:text-blue-500">
              Dashboard
            </p>
          </Link>

          {!user ? (
            <>
              <CustomButton
                // onClick={handleLoginClick}
                onClick={handleLoginClick}
                content="Login"
                className="px-6 py-2 rounded-md text-white bg-blue-600 hover:bg-blue-700"
              />
              {/* <CustomButton
                onClick={handleSignupClick}
                content="Sign Up"
                className="px-6 py-2 rounded-md text-white bg-gray-600 hover:bg-gray-700"
              /> */}
            </>
          ) : (
            <Avatar className="cursor-pointer">
              <AvatarImage src={""} alt={user.name} />
              <AvatarFallback className="bg-blue-600 text-white font-semibold">
                {initials}
              </AvatarFallback>
            </Avatar>
          )}
        </div>
{openProfileDropdown && (
  <ProfileDropdown

  />
)}


        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsSheetOpen((prev) => !prev)}
          className={`sm:hidden bg-blue-500 p-2 rounded-full md:hidden
    hover:scale-105 active:scale-95
    transition duration-300 ease-in-out text-white absolute ${isSheetOpen ? "right-66" : "right-3"} `}
        >
          {isSheetOpen ? (
            <X className="h-4 w-4" />
          ) : (
            <Menu className="h-4 w-4" />
          )}
        </button>
      </div>

      {/* MOBILE SIDEBAR */}
      <div
        ref={containerRef}
        className={`fixed top-0 right-0 z-50 h-screen w-64 bg-blue-500 text-white
           transition-transform duration-300 ease-in-out
           ${isSheetOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="mt-20 px-6 flex flex-col gap-3">
          {navbarLinks.map((item) => (
            <Link key={item.id} href={item.href}>
              <div
                onClick={() => setIsSheetOpen(false)}
                className={`flex items-center justify-between text-lg font-semibold px-5 py-4 rounded-xl cursor-pointer transition-all duration-200 active:scale-95 ${
                  pathname === item.href
                    ? "bg-white/20 text-blue-200"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                <span>{item.label}</span>
                <span className="text-white/60 text-sm">→</span>
              </div>
            </Link>
          ))}

          <div className="h-px bg-white/20 my-3" />

          <Link href="/admin/dashboard">
            <div
              onClick={() => setIsSheetOpen(false)}
              className="flex items-center justify-between text-white text-lg font-semibold px-5 py-4 rounded-xl cursor-pointer bg-white/10 hover:bg-white/20 transition-all duration-200 active:scale-95"
            >
              <span>Dashboard</span>
              <span className="text-white/60 text-sm">→</span>
            </div>
          </Link>

          <div
            onClick={handleLoginClick}
            className="mt-2 flex items-center justify-center text-blue-500 text-lg font-bold px-5 py-4 rounded-xl cursor-pointer bg-slate-300 transition-all duration-200 active:scale-95"
          >
            Sign in
          </div>
        </div>
      </div>

      <hr className="border-slate-300" />
    </div>
  );
};

export default NavBar;
