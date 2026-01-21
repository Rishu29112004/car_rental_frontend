// components/auth/AuthGuardClient.tsx
"use client";

import { useAuthGuard } from "@/hooks/useAuthGuard";

const AuthGuardClient = () => {
  useAuthGuard();
  return null;
};

export default AuthGuardClient;
