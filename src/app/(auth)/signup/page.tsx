"use client";

import { ibm, lora } from "@/lib/library";
import SignupForm from "./form";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SignUp() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
async function handleSignUp({
    name,
    email,
    password,
    role,
}: {
    name: string;
    email: string;
    password: string;
    role: string;
}) {
    try {
        setIsLoading(true);
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}auth/register`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name, email, password, role }),
                credentials: "include",
            }
        );
        if (!res.ok) {
            setIsLoading(false);
            throw new Error("Signup Failed");
        }
        const data = await res.json();
        document.cookie = `token=${data.token}; path=/; secure; HttpOnly;`;
        router.push("/login");
    } catch (error) {
        console.error(error);
    } finally {
        setIsLoading(false);
    }
}
  return (
    <div className="wrapper bg-[var(--background)] flex justify-between">
      <div className="image-container bg-[url('/signup.png')] bg-cover min-h-screen md:w-1/2" />
      <div className="form space-y-[25px] text-[var(--text-colour)] py-10 px-20 md:w-1/2">
        <h2
          className={`${ibm.className} text-[25px] font-semibold text-center`}
        >
          Sign Up
        </h2>
        <SignupForm onSubmit={handleSignUp} loading={isLoading} />
        <div className="flex items-center justify-between">
          <div className="bg-white w-[45%] h-[1px]"></div>
          <p className={`${lora.className} text-sm font-medium`}>Or</p>
          <div className="bg-white w-[45%] h-[1px]"></div>
        </div>
        <button className="flex justify-between w-full items-center text-[var(--background)] py-[10px] px-[22px] rounded-[40px] cursor-pointer bg-white">
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
          href={"/login"}
          className={`${lora.className} flex gap-2 justify-center text-sm`}
        >
          Already have an account?<span className="font-bold"> Sign in</span>
        </Link>
      </div>
    </div>
  );
}
