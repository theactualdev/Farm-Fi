import { poppins, ibm, lora } from "@/lib/library"
import { footerLinks } from "@/lib/library"
import Image from "next/image"
import Link from "next/link"

export default function Footer(){
    const year = new Date().getFullYear();
    return(
        <div className="mx-16 border-t border-t-white space-y-10">
            <div className="grid md:grid-cols-4 pt-10 md:gap-x-[100px]">
                {Object.entries(footerLinks).map(([key, value], index) => {
                    return(
                        <div className="space-y-4" key={index}>
                            <h3 className={`${poppins.className} font-bold text-sm`}> {key} </h3>
                            <ul className="flex flex-col gap-4">
                                {value.map((link, index) => {
                                    return(
                                        <Link className={`${poppins.className} font-medium text-sm`} href={link.href} key={index}> <li> {link.name} </li> </Link>
                                    )
                                })}
                            </ul>
                        </div>
                    )
                })}
            </div>
            <div className="flex flex-col gap-[22px] pb-10">
                <div className="flex gap-4 items-center">
                    <Image src={"/white-logo.svg"} width={28} height={28} alt="Logo" />
                    <p className={`${ibm.className} font-bold`}>Agricultural Commodities Exchange on Blockchain Platform</p>
                </div>
                <p className={`${lora.className} text-center`}> &copy; {year} Commodities Exchange. All rights reserved. </p>
            </div>
        </div>
    )
}