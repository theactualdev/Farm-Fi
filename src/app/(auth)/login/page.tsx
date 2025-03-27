"use client";

import Image from "next/image";
import { ibm, lora } from "@/lib/library";
import LoginForm from "./form";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { jwtDecode } from "jwt-decode";
import { setCookie } from "cookies-next";

export default function Login() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
        credentials: "include",
      });

      if (!res.ok) throw new Error("Invalid Email or Password");

      const data = await res.json();
      const token = data.token;

      const decodedToken: { user?: { role?: string } } = jwtDecode(token);

      const role = decodedToken?.user?.role;

      if (!role) throw new Error("Role not found in token");

      setCookie("token", token, { path: "/", secure: true });
      setCookie("role", role, { path: "/", secure: true });

      setTimeout(() => {
        router.push(
          role === "farmer" ? "/dashboard/farmer" : "/dashboard/buyer"
        );
      }, 500);
    } catch (error: unknown) {
      setError(
        error instanceof Error
          ? error.message
          : "An error occurred. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="wrapper bg-[var(--background)] flex justify-between">
      <div className="image-container bg-[url('/signin.png')] bg-cover min-h-screen md:w-1/2" />

      <div className="form space-y-[36px] text-white px-20 py-[130px] md:w-1/2">
        <h1 className={`${ibm.className} text-2xl text-center font-semibold`}>
          Sign In
        </h1>

        {error && (
          <p
            className={`text-red-500 font-medium text-center ${lora.className}`}
          >
            {error}
          </p>
        )}

        <LoginForm loading={isLoading} onSubmit={handleLogin} />

        <div className="flex items-center justify-center gap-[10px]">
          <div className="md:w-[210px] bg-white h-[1px]"></div>
          <p className={`${lora.className} text-sm font-medium`}>or</p>
          <div className="md:w-[210px] bg-white h-[1px]"></div>
        </div>

        <button
          className="flex justify-between w-full items-center text-[var(--background)] py-[10px] px-[22px] rounded-[40px] cursor-pointer bg-white disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={isLoading}
        >
          <div className="icon">
            <Image
              src={"/google-icon.svg"}
              width={25}
              height={25}
              alt="Google"
            />
          </div>
          <p className={`${lora.className} font-semibold`}>
            Continue with Google
          </p>
          <div />
        </button>

        <Link
          href="/signup"
          className={`${lora.className} flex gap-2 justify-center text-sm`}
          prefetch={false}
        >
          Don’t have an account? <span className="font-bold">Register</span>
        </Link>
      </div>
    </div>
  );
}
