'use client'

import { lora } from "@/lib/library";
import React from "react";

export default function ProfileLayout({
    children,
} : Readonly<{
    children: React.ReactNode
}>) {
    return(
        <div className="flex justify-between space-y-15 items-center overflow-y-scroll w-full flex-col text-[var(--text-colour)] py-8">
            <h1 className={`${lora.className} font-semibold`}> User Profile </h1>
            {children}
        </div>
    )
}