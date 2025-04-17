import Image from "next/image";
import React from "react";

export default function Hero() { 
  return (
    <section className="w-full">
      <div className="space-y-6 lg:mb-[96px] mb-[49px] pt-[49px] lg:pt-[129px]">
        <p className="text-mygrey2 font-semibold text-[24px] leading-[100%] tracking-[0%] text-center">
          About us
        </p>
        <p className="text-myblack font-bold lg:text-[96px] leading-[100%] tracking-[0%] text-center text-[48px]">
          Our Story
        </p>
      </div>
      <div className="w-full relative h-[600px]" >
        <Image
          src={"/images/imagehero2.svg"}
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