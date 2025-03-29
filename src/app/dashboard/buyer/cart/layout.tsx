import { lora } from "@/lib/library";
import React from "react";

export default function CartLayout({
    children, 
}: Readonly<{
    children: React.ReactNode
}>){
    return(
        <div className="text-white pt-5 flex flex-col h-full items-center">
            <h1 className={`${lora.className} font-semibold`}>Cart</h1>
            {children}
        </div>
    )
}