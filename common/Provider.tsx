"use client";
import Footer from "@/components/custom/Footer/Footer";
import NavBar from "@/components/custom/Navbar/NavBar";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const HIDE_LAYOUT_ROUTES = ["/dashboard", "/admin"];

const Provider = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const [shouldHideLayout, setShouldHideLayout] = useState(false);

  useEffect(() => {
    if (!pathname) return;

    const hide = HIDE_LAYOUT_ROUTES.some(route =>
      pathname.startsWith(route)
    );

    setShouldHideLayout(hide);
  }, [pathname]);

  return (
    <>
      {!shouldHideLayout && <NavBar />}
      {children}
      {!shouldHideLayout && <Footer />}
    </>
  );
};

export default Provider;
