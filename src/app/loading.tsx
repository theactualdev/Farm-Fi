import Image from "next/image";

export default function Loading(){
    return(
        <div className="wrapper flex items-center justify-center h-screen">
            <Image src="/ring.png" className="animate-spin" alt="loading" width={100} height={100} />
        </div>
    )
}