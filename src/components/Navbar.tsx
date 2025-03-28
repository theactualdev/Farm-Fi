import Image from "next/image";
import { navLinks } from "@/lib/library";
import { ibm, lora } from "@/lib/library";
import Link from "next/link";

export default function Navbar(){
    return(
        <nav className="bg-[var(--background)] flex justify-around items-center text-white py-[30px]">
            <div className="logo-container flex gap-[15px] items-center">
                <Image src={"/logo.svg"} height={28} width={28} alt="Logo" />
                <h1 className={`${ibm.className} font-semibold text-lg`}>FarmFi</h1>
            </div>
            <ul className="list-container hidden md:flex gap-16 py-[10px]">
                {navLinks.map((link, index) => {
                    return(
                        <Link key={index} href={link.href}> <li className={`${lora.className} font-semibold`}> {link.name} </li> </Link>
                    )
                })}
            </ul>
            <Link href={"/login"} className={`bg-transparent border border-[var(--text-colour)] text-[var(--text-colour)] ${lora.className} font-semibold px-4 py-[10px] rounded-4xl`}>Log in</Link>
        </nav>
    )
}