import Image from "next/image";
import { navLinks } from "@/lib/library";
import { ibm, lora } from "@/lib/library";
import Link from "next/link";

export default function Navbar(){
    return(
        <nav className="bg-[var(--background)] flex justify-between items-center text-white py-[30px] px-10">
            <div className="logo-container flex gap-[15px] items-center">
                <Image src={"/logo.svg"} height={28} width={28} alt="Logo" />
                <h1 className={`${ibm.className} text-lg`}>FarmFi</h1>
            </div>
            <ul className="list-container flex gap-16 py-[10px]">
                {navLinks.map((link, index) => {
                    return(
                        <Link key={index} href={link.href}> <li className={`${lora.className} font-semibold`}> {link.name} </li> </Link>
                    )
                })}
            </ul>
            <Link href={"/"} className={`bg-white text-[var(--background)] ${lora.className} font-semibold px-4 py-[10px] rounded-4xl`}>Log in</Link>
        </nav>
    )
}