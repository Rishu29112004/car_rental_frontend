"use client";

import { useEffect, useRef } from "react";
import { useAuth } from "@/context/auth-context";
import { useModal } from "@/context/modal-context";
import LoginForm from "@/components/screens/Login/components/LoginForm";
import { usePathname } from "next/navigation";

const PUBLIC_ROUTES = ["/", "/cars", "/car-details/123"];

export const useAuthGuard = () => {
  const { isAuthenticated, isLoading } = useAuth();
  const { openModal, closeModal, isOpen } = useModal();
  const pathname = usePathname();
  const hasOpenedRef = useRef(false);

  const isPublicRoute = PUBLIC_ROUTES.some(route => 
    pathname === route || pathname.startsWith(route + "/")
  );

  useEffect(() => {
    if (isLoading || isPublicRoute) return; 

    if (!isAuthenticated && !hasOpenedRef.current) {
      openModal(<LoginForm />,false);
      hasOpenedRef.current = true;
    }

    if (isAuthenticated && isOpen) {
      closeModal();
      hasOpenedRef.current = false;
    }
  }, [isAuthenticated, isLoading, isOpen, isPublicRoute, openModal, closeModal, pathname]);
};
