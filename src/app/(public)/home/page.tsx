import Navbar from "@/components/Navbar";
import { ibm, lora, poppins } from "@/app/layout";
import { heroStats, joinCards, offerIcons, feedback } from "@/lib/library";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="wrapper bg-[var(--background)] text-white">
      <Navbar />

      <section
        className={`bg-[url("/hero.png")] bg-cover bg-center h-screen flex items-center justify-center`}
        id="cta"
      >
        <div className="text text-white text-center flex flex-col items-center space-y-4">
          <h2 className={`${ibm.className} text-[30px]`}>
            Trading Agricultural Commodities Made Seamless
          </h2>
          <p className={`max-w-[690px] ${lora.className} font-medium`}>
            FarmFi utilizes smart contracts and $SUI-based escrows to ensure
            secure, instant payments, eliminate intermediaries, and create a
            trustless, transparent marketplace for farm produce.
          </p>
          <Link
            className={`flex ${lora.className} font-medium py-[18px] px-5 bg-[var(--primary)] rounded-[40px] gap-6`}
            href={"/"}
          >
            {" "}
            Get Started{" "}
            <Image
              src={"/cta-arrow.png"}
              width={22}
              height={22}
              alt="Get Started"
            />{" "}
          </Link>
        </div>
      </section>

      <section id="stats" className="grid md:grid-cols-4 p-16 place-items-center">
        {heroStats.map((stat, index) => {
          return (
            <div key={index} className="flex flex-col space-y-3 items-center">
              <p className={`${poppins.className} font-bold text-[35px]`}>
                {" "}
                {stat.stat}{" "}
              </p>
              <p className={`${lora.className} text-lg font-semibold`}>
                {" "}
                {stat.title}{" "}
              </p>
            </div>
          );
        })}
      </section>

      <section id="trading" className="mx-36 space-y-16 mb-32">
        <h3 className={`${ibm.className} text-center text-[30px]`}>
          Trading with $SUI
        </h3>
        <div className="flex justify-between">
          <p className={`md:w-1/2 ${lora.className}`}>
            Say goodbye to slow transactions and high fees—$SUI is built for
            speed, scalability, and security. With its cutting-edge Move-based
            technology, SUI empowers developers, fuels innovation, and brings
            Web3 to the masses like never before.
          </p>
          <Image
            className="flex-shrink-0"
            src={"/sui-solar.png"}
            width={395}
            height={380}
            alt="Sui in the solar system"
          />
        </div>
      </section>

      <section id="join" className="mx-[169px] space-y-10">
        <div className="title flex flex-col items-center justify-center space-y-16">
          <h3 className={`${ibm.className} text-[30px]`}>Become a Part of FarmFi</h3>
          <p className={`${lora.className}`}>Want to Trade on FarmFi, we have just what you need.</p>
        </div>
        <div className="cards flex justify-between">
            {joinCards.map((card, index) => {
                return(
                    <div className="md:max-w-[45%] space-y-[30px]" key={index}>
                        <Image src={card.image} width={395} height={380} alt={card.title} />
                        <div className="text-container space-y-5">
                            <h4 className={`${ibm.className} text-[25px]`}> {card.title} </h4>
                            <p className={`${lora.className}`}> {card.description} </p>
                        </div>
                    </div>
                )
            })}
        </div>
      </section>

      <section id="offer" className="p-16 space-y-16">
        <h2 className={`capitalize ${ibm.className} text-[30px] text-center`}>What we offer</h2>
        <div className="grid md:grid-cols-4 gap-y-16 place-items-center">
            {offerIcons.map((offer, index) => {
                return(
                    <div className="flex gap-4 md:max-w-[250px] justify-start" key={index}>
                        <div className="border p-[10px] h-fit rounded-xl border-[#B3B3B3]">
                            <Image src={offer.icon} width={24} height={24} alt="Icon" />
                        </div>
                        <p className={`${lora.className} font-semibold text-lg`}> {offer.text} </p>
                    </div>
                )
            })}
        </div>
        <div className={`${lora.className} flex justify-center space-x-4`}>
            <Link className="bg-[var(--primary)] font-semibold py-3 px-4 rounded-[40px]" href={"/"}>Join Us Today!</Link>
            <Link className="text-[var(--background)] bg-white font-semibold py-3 px-4 rounded-[40px]" href={"/"}>Discover More Features!</Link>
        </div>
      </section>

      <section id="id" className="p-16 flex flex-col items-center space-y-16">
        <h3 className={`${ibm.className} text-[30px]`}>What Our Users Are Saying</h3>
        <div className="grid md:grid-cols-2 gap-6">
            {feedback.map((feed, index) => {
                return(
                    <div key={index} className="p-4 rounded-xl border border-[#B3B3B3] flex flex-col gap-3">
                        <div className="head flex items-center gap-3">
                            <Image src={feed.avatar} width={32} height={32} alt={`${feed.name}'s feedback`} />
                            <p className={`${lora.className} font-medium text-lg`}> {feed.name} </p>
                        </div>
                        <p className={`${lora.className} font-normal text-xl`}> {feed.feed} </p>
                    </div>
                )
            })}
        </div>
      </section>

      <Footer />
    </div>
  );
}
