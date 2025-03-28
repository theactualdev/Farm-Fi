"use client";

import { useState } from "react";
import { LoginFormProps } from "@/lib/interface";
import { lora } from "@/lib/library";
import Link from "next/link";
import Image from "next/image";
import { Eye, EyeClosed } from "lucide-react";

export default function LoginForm({ onSubmit, loading }: LoginFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [viewPassword, setViewPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ email, password });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="input flex flex-col gap-[10px]">
        <label htmlFor="email" className={`${lora.className}`}>
          Email
        </label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          name="email"
          id="email"
          className={`${lora.className} p-[10px] border-[var(--text-colour)] placeholder:text-[var(--text-colour)] border-1 rounded-[5px]`}
          placeholder="Enter your email"
        />
      </div>
      <div className="input flex flex-col gap-[10px]">
        <label htmlFor="password" className={`${lora.className}`}>
          Password
        </label>
        <div className="pass w-full relative">
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type={viewPassword ? "text" : "password"}
            name="password"
            id="password"
            className={`${lora.className} w-full p-[10px] placeholder:text-[var(--text-colour)] border-[var(--text-colour)] border-1 rounded-[5px]`}
            placeholder="Enter your password"
          />
          <EyeClosed
            size={12}
            className={`absolute right-4 ${
              !viewPassword ? "absolute" : "hidden"
            } cursor-pointer top-1/3`}
            onClick={() => setViewPassword(!viewPassword)}
            color="black"
          />
          <Eye
            size={12}
            className={`${
              viewPassword ? "absolute" : "hidden"
            } right-4 cursor-pointer top-1/3`}
            onClick={() => setViewPassword(!viewPassword)}
            color="black"
          />
        </div>
      </div>
      <Link className={`${lora.className} text-end text-sm`} href={"/"}>
        Forgotten Password?
      </Link>
      <div className="button flex justify-center">
        <button
          type="submit"
          className={`${lora.className} cursor-pointer bg-[var(--secondary)] w-fit px-6 py-3 rounded-[30px]`}
        >
          {loading ? (
            <Image
              src="/ring.png"
              className="animate-spin"
              width={20}
              height={20}
              alt="Loading"
            />
          ) : (
            "Sign In"
          )}
        </button>
      </div>
    </form>
  );
}
