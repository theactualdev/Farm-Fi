"use client";

import { getCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  useEffect(() => {
    const token = getCookie("token");
    if (!token) {
      router.push("/login");
      return;
    }

    try {
      const roleCookie = getCookie("role");
      if (typeof roleCookie === "string") {
        if (roleCookie === "buyer") router.push("/dashboard/buyer");
        else if (roleCookie === "farmer") router.push("/dashboard/farmer");
      } else {
        router.push("/login");
      }
    } catch (error) {
      console.error("Error fetching role:", error);
      router.push("/login");
    }
  }, [router]);

  return <div className="wrapper">{children}</div>;
}