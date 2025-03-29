"use client";

import { ibm, lora, poppins } from "@/lib/library";
import { getCookie } from "cookies-next";
import { jwtDecode } from "jwt-decode";
import Image from "next/image";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState, useEffect, useMemo } from "react";
import { SuiClient, SuiTransactionBlockResponse } from "@mysten/sui/client";

export default function BuyerProfile() {
  const userToken = getCookie("token") as string | undefined;
  const [naira, setNaira] = useState(0);
  const [sui, setSui] = useState(0);
  const [balance, setBalance] = useState(0);
  const [transactions, setTransactions] = useState<
    { id: string; type: string; amount: string }[]
  >([]);

let decodedToken: {
  user?: {
    name?: string;
    _id?: string;
    email?: string;
    role?: string;
    suiWalletAddress?: string;
  };
} | null = null;

if (userToken) {
  try {
    decodedToken = jwtDecode(userToken);
  } catch (error) {
    console.error("Error decoding token:", error);
  }
}

const user = decodedToken?.user;

  useEffect(() => {
    async function fetchSuiPrice() {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/simple/price?ids=sui&vs_currencies=usd,ngn`
      );
      const jsonData = await response.json();
      setSui(jsonData.sui.ngn);
    }
    fetchSuiPrice();
  }, []);

const client = useMemo(() => new SuiClient({ url: `https://fullnode.devnet.sui.io` }), []);

  useEffect(() => {
    async function fetchBalance() {
      if (decodedToken?.user?.suiWalletAddress) {
        const balanceData = await client.getBalance({
          owner: decodedToken?.user.suiWalletAddress,
        });
        setBalance(parseFloat(balanceData.totalBalance) / 1e9);
      }
    }
    fetchBalance();
  }, [decodedToken?.user?.suiWalletAddress, client]);

  useEffect(() => {
    async function fetchTransactions() {
      try {
        const transactions = await client.queryTransactionBlocks({
          filter: { ToAddress: decodedToken?.user?.suiWalletAddress || "" },
          limit: 3,
          order: "descending",
          options: {
            showInput: true,
            showEffects: true,
            showBalanceChanges: true,
          },
        });
        const formattedTransactions = transactions.data.map((tx) => ({
          id: tx.digest,
          type: getTransactionType(tx),
          amount: getTransactionAmount(tx),
        }));
        setTransactions(formattedTransactions);
      } catch (error) {
        console.error(error);
      }
    }
    fetchTransactions();
  }, [client, decodedToken?.user?.suiWalletAddress]);

  function getTransactionType(tx: SuiTransactionBlockResponse): string {
    if (
      tx.transaction &&
      tx.transaction.data &&
      tx.transaction.data.transaction
    ) {
      return tx.transaction.data.transaction.kind || "Unknown";
    }
    return "Unknown";
  }

  function getTransactionAmount(tx: {
    balanceChanges?: Array<{
      coinType: string;
      amount: string;
    }> | null;
  }): string {
    if (tx.balanceChanges && Array.isArray(tx.balanceChanges)) {
      const suiBalanceChange = tx.balanceChanges.find(
        (change) => change.coinType === "0x2::sui::SUI"
      );
      return suiBalanceChange
        ? `${Number(suiBalanceChange.amount) / 1e9} SUI`
        : "0 SUI";
    }
    return "Unknown";
  }

  return (
    <div className="w-full flex justify-around">
      <div className="left space-y-[50px] w-[35%]">
        <div className="user flex justify-between">
          <div className="profile flex items-center gap-5">
            <Image src={"/user.png"} width={60} height={60} alt="User Avatar" />
            <div className="text flex flex-col gap-[10px]">
              <p className={`${ibm.className} text-sm font-semibold`}>
                {" "}
                {user?.name}{" "}
              </p>
              <p className={`${lora.className} text-xs font-medium`}>
                {" "}
                {user?.email}{" "}
              </p>
            </div>
          </div>
          <Link
            href={"/"}
            className={`${lora.className} text-xs pt-[9px] font-semibold`}
          >
            Edit Profile
          </Link>
        </div>
        <div className="wallet flex flex-col gap-5">
          <div className="balance flex flex-col gap-[10px]">
            <p className={`${lora.className} font-bold`}>Wallet Balance</p>
            <p
              className={`flex items-center gap-[10px] ${poppins.className} text-xl items-center font-medium`}
            >
              <Image src={"/sui-blue.png"} width={20} height={20} alt="Sui" />{" "}
              {balance} $SUI{" "}
            </p>
          </div>
        </div>
        <Tabs>
          <TabsList className="flex justify-between gap-[70px] w-full">
            <TabsTrigger
              className={`${lora.className} cursor-pointer text-xs font-semibold flex gap-[5px]`}
              value="transfer"
            >
              Transfer{" "}
              <Image
                src={"/transfer.svg"}
                width={12}
                height={10}
                alt="Transfer"
              />
            </TabsTrigger>
            <TabsTrigger
              className={`${lora.className} cursor-pointer text-xs font-semibold flex gap-[5px]`}
              value="deposit"
            >
              Deposit{" "}
              <Image
                src={"/deposit.svg"}
                width={14}
                height={15}
                alt="Deposit"
              />
            </TabsTrigger>
            <TabsTrigger
              className={`${lora.className} cursor-pointer text-xs font-semibold flex gap-[5px]`}
              value="withdraw"
            >
              Withdraw{" "}
              <Image
                src={"/withdraw.svg"}
                width={22}
                height={18}
                alt="Withdraw"
              />
            </TabsTrigger>
          </TabsList>
          <TabsContent value="deposit">
            <div className="space-y-[25px]">
              <div className="flex flex-col gap-[10px] w-[70%]">
                <p className={`${lora.className} text-xs font-semibold`}>
                  How much do you want to deposit?
                </p>
                <div className="flex justify-between w-[75%]">
                  <div
                    className={`${poppins.className} w-[40%] flex flex-col gap-[7px] text-[10px] font-medium`}
                  >
                    <label htmlFor="amount">Amount</label>
                    <div className="w-full relative">
                      <Image
                        src={"/naira.svg"}
                        width={11}
                        height={21}
                        alt="Naira"
                        className="absolute top-[37%] left-2"
                      />
                      <input
                        onChange={(e) =>
                          setNaira(Number(e.currentTarget.value))
                        }
                        type="number"
                        className="border max-w-[80px] border-[#B3B3B3] p-[10px] rounded-[5px] pl-6"
                      />
                    </div>
                  </div>
                  <div
                    className={`${poppins.className} w-[40%] flex flex-col gap-[7px] text-[10px] font-medium`}
                  >
                    <label htmlFor="sui">$SUI</label>
                    <div className="w-full relative">
                      <Image
                        src={"/sui-icon.png"}
                        width={11}
                        height={21}
                        alt="Naira"
                        className="absolute top-[30%] left-2"
                      />
                      <input
                        type="number"
                        value={Math.floor((naira / sui) * 1000) / 1000}
                        disabled
                        className="border bg-[#242424] max-w-[80px] border-[#B3B3B3] p-[10px] rounded-[5px] pl-6"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <button className="flex gap-[5px] cursor-pointer p-[10px] bg-[var(--secondary)] rounded-[40px] items-center">
                <Image
                  src={"/paystack.png"}
                  width={18}
                  height={18}
                  alt="Paystack"
                />
                <p className={`${lora.className} text-[13px] font-semibold`}>
                  Pay with Paystack
                </p>
              </button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
      <div className="right w-[40%]">
        <div className="transactions flex flex-col gap-[25px]">
          <p className={`${lora.className} font-bold`}>Transaction History</p>
          <ul className="flex flex-col gap-[15px]">
            {transactions.map((transaction, index) => {
              return (
                <li
                  key={index}
                  className={`${poppins.className} flex justify-between font-semibold text-xs`}
                >
                    <p>ID: {transaction.id.substring(0, 10) + "XXX"}</p>
                    <p>{transaction.amount && !isNaN(parseFloat(transaction.amount)) ? parseFloat(transaction.amount).toFixed(2) : "0.000"} $SUI</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
