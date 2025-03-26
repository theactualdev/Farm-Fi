"use client";

import { lora } from "@/lib/library";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectItem,
  SelectLabel,
} from "@/components/ui/select";
import React, { useState } from "react";
import { SignupFormProps } from "@/lib/interface";
import Image from "next/image";
import { Eye, EyeClosed } from "lucide-react";

export default function SignupForm({ onSubmit, loading }: SignupFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [viewPassword, setViewPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ name, email, password, role });
  };

  return (
    <form onSubmit={handleSubmit} className={`flex ${lora.className} flex-col gap-[25px]`}>
      <div className="input flex flex-col gap-[10px]">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          className="border p-[10px] placeholder:text-[var(--text-colour)] rounded-[5px] border-[var(--text-colour)]"
          placeholder="Enter your firstname and surname"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="input flex flex-col gap-[10px]">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          className="border p-[10px] placeholder:text-[var(--text-colour)] rounded-[5px] border-[var(--text-colour)]"
          placeholder="Enter your email address"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="input flex flex-col gap-[10px]">
        <label htmlFor="password">Password</label>
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
            className={`absolute right-4 ${!viewPassword ? 'absolute' : 'hidden'} cursor-pointer top-1/3`}
            onClick={() => setViewPassword(!viewPassword)}
            color="black"
          />
          <Eye
            size={12}
            className={`${viewPassword ? 'absolute' : 'hidden'} right-4 cursor-pointer top-1/3`}
            onClick={() => setViewPassword(!viewPassword)}
            color="black"
          />
        </div>
      </div>
      <div className="input flex flex-col gap-[10px]">
        <label htmlFor="role">Role</label>
        <Select onValueChange={(value) => setRole(value)} value={role}>
          <SelectTrigger className="w-full outline-none">
            <SelectValue placeholder="Select your Role" />
          </SelectTrigger>
          <SelectContent className="bg-[var(--background)]">
            <SelectGroup>
              <SelectLabel
                className={`text-[var(--text-colour)] ${lora.className} p-2`}
              >
                Role
              </SelectLabel>
              <SelectItem
                className={`text-[var(--text-colour)] cursor-pointer ${lora.className} p-2 `}
                value="farmer"
              >
                Farmer
              </SelectItem>
              <SelectItem
                className={`text-[var(--text-colour)] cursor-pointer ${lora.className} p-2 `}
                value="buyer"
              >
                Buyer
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="button flex justify-center">
        <button
          type="submit"
          className={`${lora.className} cursor-pointer bg-[var(--primary)] w-fit px-6 py-3 rounded-[30px]`}
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
            "Sign up"
          )}
        </button>
      </div>
    </form>
  );
}
