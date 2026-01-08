"use client";

import Image from "next/image";
import { CustomButton } from "../CustomButton/CustomButton";
import { Menu, Search, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Input } from "@/components/ui/input";

const NavBar = () => {
    const [isSheetOpen, setIsSheetOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement | null>(null)

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
    })

    return (
        <div className="w-full bg-slate-100 pb-12 md:pb-14">
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
                    <p className="cursor-pointer hover:text-blue-500">Home</p>
                    <p className="cursor-pointer hover:text-blue-500">Cars</p>
                    <p className="cursor-pointer hover:text-blue-500">About</p>

                    <div className="relative w-64">
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
                    <p className="cursor-pointer font-medium text-slate-600 hover:text-blue-500">
                        List cars
                    </p>
                    <CustomButton content="Sign in" className="px-6 py-2 rounded-md text-white bg-blue-600 hover:bg-blue-700" />
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsSheetOpen((prev) => !prev)}
                    className={`sm:hidden bg-blue-500 p-2 rounded-full  transition-transform duration-300 ease-in-out text-white absolute ${isSheetOpen ? "right-66" : "right-3"} `}
                >
                    {
                        isSheetOpen ? <X /> : <Menu />
                    }
                </button>
            </div>

            {/* MOBILE SIDEBAR */}
            <div
                ref={containerRef}
                className={`fixed top-0 right-0 z-50 transition-transform duration-300 ease-in-out h-screen w-64 bg-blue-500 text-white
        transform 
        ${isSheetOpen ? "translate-x-0" : "translate-x-full"}`}
            >
                {/* Menu Items */}
                <div className="mt-16 px-6 text-xl space-y-4">
                    <p className="cursor-pointer">Home</p>
                    <p className="cursor-pointer">Cars</p>
                    <p className="cursor-pointer">About</p>
                    <p className="cursor-pointer">List cars</p>
                    {/* <CustomButton content="Sign in"  className="bg-blue-600 rounded-md w-full p-4"/> */}
                    <p>Sign in</p>
                </div>
            </div>
            <hr className="border-slate-300"/>
        </div>
    );
};

export default NavBar;
