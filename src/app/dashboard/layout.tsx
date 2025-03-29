"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { getCookie } from "cookies-next";
import Image from "next/image";
import { dashboardLinks, lora } from "@/lib/library";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [userRole, setUserRole] = useState<string | null>(null);
//   const [activeBar, setActiveBar] = useState<string | null>(null);

  useEffect(() => {
    const role = (getCookie("role") as string) || null;
    setUserRole(role);

    if (!role) {
      router.push("/");
      return;
    }

    if (pathname === "/dashboard") {
      const targetPath =
        role === "buyer"
          ? "/dashboard/buyer/profile"
          : "/dashboard/farmer/profile";
      router.replace(targetPath);
    }

    const currentLink = dashboardLinks.find((link) =>
      pathname.includes(link.url)
    );
    if (currentLink) {
    //   setActiveBar(currentLink.title);
    }
  }, [pathname, router]);

  return (
    <div className="wrapper bg-[var(--background)] overflow-y-hidden flex h-screen">
      {/* Left Sidebar */}
      <div className="left w-[20%] space-y-10 bg-[var(--primary)] py-11">
        <div className="pl-8">
          <Link href="/">
            <Image src="/white-logo.svg" alt="Logo" width={24} height={24} />
          </Link>
        </div>
        <ul className="flex flex-col gap-8">
          {dashboardLinks.map((link, index) => {
            const fullUrl = `/dashboard/${userRole}${link.url}`;
            const isActive = pathname.includes(fullUrl);

            return (
              <li
                key={index}
                className={`flex gap-3 pl-8 ${lora.className} 
                  text-sm font-bold items-center cursor-pointer 
                  ${
                    isActive
                      ? "bg-[var(--secondary)] py-4 text-white"
                      : "text-[var(--text-colour)]"
                  }
                `}
                onClick={() => {}}
              >
                <Image
                  src={link.icon}
                  width={18}
                  height={18}
                  alt={link.title}
                />
                <Link href={fullUrl}>{link.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Right Content Area */}
      <div className="right overflow-y-scroll w-[80%]">{children}</div>
    </div>
  );
}
