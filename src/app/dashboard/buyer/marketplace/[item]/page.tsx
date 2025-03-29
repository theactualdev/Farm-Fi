"use client";

import { useParams } from "next/navigation";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useState } from "react";
import { ibm, lora, marketPlaceItems, poppins } from "@/lib/library";
import { useCart } from "../../cart/CartProvider";

export default function ItemPage() {
  const params = useParams();
  const itemName = params.item as string;
  const { addToCart } = useCart();
  const [showProduceAdded, setShowProduceAdded] = useState(false);

  const allItems = [
    ...marketPlaceItems.stapleCrops,
    ...marketPlaceItems.cashCrops,
  ];
  const selectedItem = allItems.find(
    (item) => item.title.toLowerCase() === itemName.toLowerCase()
  );

  const [quantity, setQuantity] = useState(1);

  if (!selectedItem) {
    return <div className="text-center text-red-500">Item not found.</div>;
  }

  return (
    <section className="w-full pl-[59px] relative flex flex-col gap-[50px] pr-[236px]">
      <div className="details flex justify-between">
        <Image
          src={selectedItem.photo}
          width={250}
          height={250}
          alt={selectedItem.title}
        />
        <div className="flex flex-col justify-between">
          <div className="deets flex flex-col gap-[50px]">
            <div className="text flex flex-col gap-[10px]">
              <p className={`${ibm.className} text-xl font-medium`}>
                {selectedItem.title}
              </p>
              <p className={`${poppins.className} text-lg font-semibold`}>
                {Number(selectedItem.price) * quantity} $SUI
              </p>
            </div>
            <div className={`${ibm.className} text-sm`}>
              <p>Seller: {selectedItem.seller?.name ?? "Unknown"} </p>
              <p>Location: {selectedItem.seller?.location ?? "Unknown"} </p>
            </div>
          </div>
          <div className="flex flex-col gap-[5px]">
            <div className="flex gap-2 items-center relative">
              <p
                className={`${poppins.className} absolute left-3 font-semibold`}
              >
                kg
              </p>
              <Input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.currentTarget.value))}
                placeholder="Select Quantity"
                className={`${lora.className} pl-10 placeholder:text-[var(--text-colour)] h-[50px]`}
              />
            </div>
            <p className={`${lora.className} text-[10px] italic font-medium`}>
              Input desired quantity
            </p>
          </div>
        </div>
        <button
          className={`flex ${lora.className} font-semibold text-sm rounded-[40px] cursor-pointer flex-col bg-[var(--secondary)] py-3 px-9 h-fit justify-start`}
          onClick={() => {
            addToCart({
              title: selectedItem.title,
              quantity,
              image: selectedItem.photo,
              price: Number(selectedItem.price),
            });
            setShowProduceAdded(true);  
            setTimeout(() => setShowProduceAdded(false), 1400);
          }}
        >
          Add to Cart
        </button>
        {showProduceAdded && <ProduceAdded />}
      </div>

      <div className="desc flex flex-col gap-4">
        <h3 className={`${lora.className} font-bold`}>Item Description</h3>
        <p
          className={`border border-[#B3B3B3] p-[10px] ${lora.className} text-sm font-medium rounded-[5px]`}
        >
          {selectedItem.description ?? "No description available."}
        </p>
      </div>

      <div className="review space-y-5">
        <div className="flex flex-col gap-[5px]">
          <div className="rating flex items-center gap-[10px]">
            <p className={`${lora.className} font-bold text-[15px]`}>
              {selectedItem.rating ?? 0}
            </p>
            <div className="flex gap-1">
              {selectedItem.rating &&
                !isNaN(Number(selectedItem.rating)) &&
                Array.from(
                  { length: Number(selectedItem.rating) },
                  (_, index) => (
                    <Image
                      key={index}
                      src="/star.svg"
                      alt="Star"
                      width={18}
                      height={18}
                    />
                  )
                )}
            </div>
          </div>
          <p className={`${lora.className}`}>Produce Reviews</p>
        </div>
        <div className="reviews border-b border-b-[var(--text-colour)] pb-[10px]">
          {selectedItem.reviews.map((review, index) => {
            return (
              <div
                className={`border-t ${lora.className} py-[10px] space-y-[5px] border-t-[var(--text-colour)]`}
                key={index}
              >
                <p className="text-sm font-semibold"> {review.name} </p>
                <p className="text-xs font-medium"> {review.review} </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ProduceAdded() {
  return (
    <div className="w-[490px] flex show-produce-added left-1/4 justify-center p-[10px] absolute border border-[#B3B3B3] rounded-b-[10px] bg-[var(--success)]">
      <p className={`${lora.className} text-sm font-semibold`}>
        Produce Added Successfully
      </p>
    </div>
  );
}