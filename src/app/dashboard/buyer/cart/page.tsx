"use client";

import { lora, poppins } from "@/lib/library";
import { useCart } from "./CartProvider";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getCookie } from "cookies-next";
import { jwtDecode } from "jwt-decode";

export default function BuyerCart() {
  const deliveryFee = 0.06;
  const { cart } = useCart();

  const [user, setUser] = useState<{ name?: string; email?: string } | null>(
    null
  );
  const [ludes, setLudes] = useState<{ latitude?: number; longitude?: number }>(
    {}
  );
  const [location, setLocation] = useState("");

  useEffect(() => {
    const token = getCookie("token") as string | undefined;
    if (token) {
      try {
        const decodedToken: { user: { name: string; email: string } } = jwtDecode(token);
        setUser(decodedToken.user);
      } catch (error) {
        console.error("Invalid token:", error);
      }
    }
  }, []);

  const getCoordinates = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLudes({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  useEffect(() => {
    async function getLocation() {
      if (!ludes.latitude || !ludes.longitude) return;

      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/reverse?lat=${ludes.latitude}&lon=${ludes.longitude}&format=json`
        );
        const data = await response.json();
        setLocation(data.display_name);
      } catch (error) {
        console.error("Error fetching location:", error);
      }
    }

    getLocation();
  }, [ludes]);

  const totalPrice = cart
    .reduce((total, item) => total + item.price * item.quantity, 0)
    .toFixed(2);
  const total = (parseFloat(totalPrice) + deliveryFee).toFixed(2);

  return (
    <div className="wrapper flex justify-between h-full pt-11 w-full">
      <div className="left w-6/10 space-y-10 ml-12">
        <div
          className={`head grid grid-cols-4 ${lora.className} gap-x-10 text-[17px] font-semibold `}
        >
          <p>Produce</p>
          <p>Name</p>
          <p>Quantity (kg)</p>
          <p>Price ($SUI)</p>
        </div>
        <div className="flex flex-col gap-10">
          {cart.map((item, index) => (
            <div
              className="grid grid-cols-4 place-items-center gap-x-10"
              key={index}
            >
              <Image src={item.image} width={130} height={130} alt={item.title} />
              <p className={`${lora.className} font-medium`}>{item.title}</p>
              <p className={`${poppins.className} font-medium`}>{item.quantity}</p>
              <p className={`${poppins.className} font-medium`}>{item.price}</p>
            </div>
          ))}
        </div>
      </div>

      <div
        className={`right min-h-fit ${lora.className} w-34/100 px-5 pt-7 flex flex-col bg-[#242424]`}
      >
        <h3 className="text-[15px] font-semibold pb-4 border-b border-b-[#B3B3B380] w-full text-center">
          Order Summary
        </h3>
        <div className="pt-[30px] border-b border-b-[#B3B3B3] pb-5 flex flex-col gap-[30px]">
          <div className="flex justify-between w-full">
            <p className="font-semibold">Produce ({cart.length})</p>
            <p className={`${poppins.className} font-semibold`}>
              {totalPrice} $SUI
            </p>
          </div>
          <div className="flex justify-between items-center">
            <p className="font-semibold">Location</p>
            <p
              onClick={getCoordinates}
              className="text-[var(--secondary)] text-sm font-medium cursor-pointer"
            >
              Change
            </p>
          </div>
        </div>

        <div className="border-b space-y-[10px] border-b-[#B3B3B3] py-[10px]">
          <p className="text-sm font-semibold">{user?.name}</p>
          <p className="text-sm font-medium">{location}</p>
        </div>

        <div className="pt-5 py-[30px] border-b border-b-[#B3B3B380] space-y-[30px]">
          <div className="flex justify-between items-center">
            <p className="font-semibold">Delivery Fee</p>
            <p className={`${poppins.className} font-semibold`}>{deliveryFee} $SUI</p>
          </div>
        </div>

        <p className="flex justify-between py-[30px] font-semibold">
          Total <span className={`${poppins.className}`}>{total} $SUI</span>
        </p>

        <button className="bg-[var(--secondary)] text-sm font-semibold p-[10px] rounded-[40px]">
          Pay now
        </button>
      </div>
    </div>
  );
}