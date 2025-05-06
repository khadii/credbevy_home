import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <section>
      <div className="space-y-6 lg:mb-[96px]  mb-[49px]  pt-[49px] lg:pt-[129px]">
        <p className="text-mygrey2 font-semibold text-[24px] leading-[100%] tracking-[0%] text-center ">
        Career
        </p>
        <p className="text-myblack font-bold lg:text-[96px] leading-[100%] tracking-[0%] text-center text-[48px]">
        Join Us
        </p>
      </div>
      <div className="w-full justify-center flex xl:hidden" >
        <Image
          src={"/joinus.svg"}
          alt={"credbevy"}
          priority={true}
          width={1440}
          height={600}
        />
      </div>

      <div className="w-full relative h-[600px] xl:flex hidden" >
        <Image
          src={"/joinus.svg"}
          alt={"credbevy"}
          priority={true}
          fill 
          style={{ objectFit: "cover" }}  
          quality={100}  
        />
      </div>
    </section>
  );
}


