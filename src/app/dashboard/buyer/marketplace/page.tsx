"use client";

import { useState, useRef } from "react";
import { ibm, lora, marketPlaceItems, poppins } from "@/lib/library";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function BuyerMarketPlace() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeTab, setActiveTab] = useState<string>("stapleCrops");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  // All items for dropdown search  
  const allItems = [
    ...marketPlaceItems.stapleCrops,
    ...marketPlaceItems.cashCrops,
  ];

  // Filter items for dropdown
  const filteredItems = allItems.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="wrapper w-full scrollbar-hide pl-16 pr-[94px]">
      <div className="relative w-[80%]">
        <Input
          ref={inputRef}
          placeholder="What produce do you want to search for?"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setIsDropdownOpen(e.target.value.length > 0);
          }}
          onBlur={() => setTimeout(() => setIsDropdownOpen(false), 200)}
          className={`w-full h-[45px] p-4 ${lora.className} border border-gray-300 bg-[#242424] rounded-md`}
        />
        <Image src={"/searchbar.svg"} className="absolute right-5 top-[23%] cursor-pointer" width={25} height={25} alt="Search" />

        {isDropdownOpen && (
          <div className="absolute w-full bg-white shadow-md border border-gray-200 rounded-md mt-1 z-50">
            {filteredItems.length > 0 ? (
              filteredItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 p-3 hover:bg-gray-100 cursor-pointer"
                  onMouseDown={() =>
                    router.push(`/dashboard/buyer/marketplace/${item.title.toLowerCase()}`)
                  }
                >
                  <Image
                    src={item.photo}
                    alt={item.title}
                    width={30}
                    height={30}
                  />
                  <p className={`text-[var(--background)] ${lora.className} font-medium`}>{item.title}</p>
                </div>
              ))
            ) : (
              <p className="p-3 text-[var(--background)] text-sm">No results found</p>
            )}
          </div>
        )}
      </div>

      <Tabs
        value={activeTab}
        onValueChange={setActiveTab}
        className="mt-6 flex items-center"
      >
        <TabsList className="flex justify-center w-1/2 gap-4">
          <TabsTrigger className={`cursor-pointer ${activeTab === 'stapleCrops'  && 'text-[var(--secondary)]'} `} value="stapleCrops">
            Staple Crops
          </TabsTrigger>
          <TabsTrigger className={`cursor-pointer ${activeTab === 'cashCrops'  && 'text-[var(--secondary)]'} `} value="cashCrops">
            Cash Crops
          </TabsTrigger>
          <TabsTrigger className={`cursor-pointer ${activeTab === 'otherCrops'  && 'text-[var(--secondary)]'} `} value="otherCrops">
            Other Crops
          </TabsTrigger>
        </TabsList>

        <TabsContent className="w-full" value="stapleCrops">
          <MarketplaceGrid items={marketPlaceItems.stapleCrops.map(item => ({
            ...item,
            price: parseFloat(item.price),
            weight: parseFloat(item.weight),
          }))} />
        </TabsContent>
        <TabsContent className="w-full" value="cashCrops">
          <MarketplaceGrid items={marketPlaceItems.cashCrops.map(item => ({
            ...item,
            price: parseFloat(item.price),
            weight: parseFloat(item.weight),
          }))} />
        </TabsContent>
      </Tabs>
    </div>
  );
}

function MarketplaceGrid({ items }: { items: { title: string; photo: string; price: number; weight: number }[] }) {
    return (
        <div className="grid grid-cols-1 place-items-center gap-y-8 md:grid-cols-5 gap-6 py-6">
            {items.map((item, index) => (
                <Link href={`/dashboard/buyer/marketplace/${item.title}`} key={index} className="flex flex-col gap-[10px]">
                    <Image src={item.photo} width={130} height={130} alt={item.title} />
                    <div className="text flex flex-col gap-[5px]">
                        <p className={`${ibm.className} font-medium`}> {item.title} </p>
                        <p className={`${poppins.className} font-bold`}> {item.price} $SUI </p>
                        <p className={`${poppins.className}`}> {item.weight}kg </p>
                    </div>
                </Link>
            ))}
        </div>
    );
}
