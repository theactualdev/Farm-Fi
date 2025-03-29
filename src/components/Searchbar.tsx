'use client';

import Link from "next/link";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { marketPlaceItems } from "@/lib/library";
import Image from "next/image";

export default function Searchbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const allItems = [...marketPlaceItems.stapleCrops, ...marketPlaceItems.cashCrops];

  const filteredItems = allItems.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="relative w-full max-w-md">
      <Input
        placeholder="Search for crops..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <Image src={"/searchbar.svg"} width={25} height={25} alt="Search" className="absolute right-5 top-1/5 " />
      
      {searchQuery && (
        <div className="absolute top-full mt-2 w-full bg-white shadow-lg rounded-md max-h-60 overflow-auto">
          {filteredItems.length > 0 ? (
            filteredItems.map((item, index) => (
              <Link key={index} href={`/dashboard/buyer/marketplace/${item.title.toLowerCase()}`} className="block px-4 py-2 hover:bg-gray-200">
                {item.title}
              </Link>
            ))
          ) : (
            <p className="p-4 text-gray-500">No results found</p>
          )}
        </div>
      )}
    </div>
  );
}
