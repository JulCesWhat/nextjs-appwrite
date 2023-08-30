"use client";

import useAuth from "@/context/useAuth";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import appwriteService from "@/appwrite/config";

const LogoutPage = () => {
  const router = useRouter();
  const { setAuthStatus } = useAuth();

  useEffect(() => {
    appwriteService.logout().then((res) => {
      setAuthStatus(false);
      router.replace("/");
    });
  }, []);

  return <div>Logout Page</div>;
};

export default LogoutPage;
