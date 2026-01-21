"use client";

import { useEffect, useRef } from "react";
import { useAuth } from "@/context/auth-context";
import { useModal } from "@/context/modal-context";
import LoginForm from "@/components/screens/Login/components/LoginForm";

export const useAuthGuard = () => {
  const { isAuthenticated, isLoading } = useAuth();
  const { openModal, closeModal, isOpen } = useModal();

  const hasOpenedRef = useRef(false);

  useEffect(() => {
    if (isLoading) return;

    // user NOT logged in → open login modal once
    if (!isAuthenticated && !hasOpenedRef.current) {
      openModal(<LoginForm />);
      hasOpenedRef.current = true;
    }

    // user logged in → close modal
    if (isAuthenticated && isOpen) {
      closeModal();
      hasOpenedRef.current = false;
    }
  }, [isAuthenticated]);

  return { isAuthenticated, isLoading };
};
