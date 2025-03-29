'use client';

import { ibm, lora, recentlyViewed } from "@/lib/library";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BuyerMarketPlaceLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const pathname = usePathname();
  return (
    <div
      className={`flex justify-between space-y-8 items-center overflow-y-scroll w-full flex-col text-[var(--text-colour)] py-8`}
    >
      <h1 className={`${lora.className} font-semibold`}>{!pathname.endsWith("marketplace") ? "Produce Details" : "Marketplace"}</h1>
      {children}
      <div className="">
        <h2 className={`${ibm.className} font-bold text-[22px]`}>{!pathname.endsWith("marketplace") ? "Explore more commodities" : "Recently Viewed Items"}</h2>
        <div className="grid grid-cols-1 place-items-center gap-y-8 md:grid-cols-6 gap-6 py-6">
          {recentlyViewed.map((item, index) => (
            <Link href={`/dashboard/buyer/marketplace/${item.title}`} key={index} className="flex flex-col gap-[10px]">
              <Image
                src={item.photo}
                width={130}
                height={130}
                alt={item.title}
              />
              <div className="text flex flex-col gap-[5px]">
                <p className={`${ibm.className} font-medium`}> {item.title} </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
