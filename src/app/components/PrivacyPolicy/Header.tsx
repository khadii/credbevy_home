import Image from "next/image";
import React from "react";
import Component from "./Policy";
import Header from "../major/header";
import Footertwo from "../major/Footertwo";

export default function Hero() {
  return (
    <section>
         <Header />
   <div className="]">
       <div className="space-y-6 lg:mb-[96px]  mb-[49px]  pt-[49px] lg:pt-[129px justify-center w-full flex flex-col items-center px-[15px] lg:px-[100px">
        <p className="text-mygrey2 font-semibold text-[24px] leading-[100%] tracking-[0%] text-center  ">
          Privacy
        </p>
        <p className="text-myblack font-bold lg:text-[96px] leading-[100%] tracking-[0%] text-center text-[48px] max-w-4xl">
          Credbevy’s Privacy Policy
        </p>
        <p className="text-mygrey2 font-medium lg:text-[24px] text-[20px] leading-[100%] tracking-[0%] text-center ">
          The Privacy Policy as updated on the 30th of September 2024
        </p>
      </div>
      <div className="w-full justify-center flex xl:hidden">
        <Image
          src={"/privacypolicy.svg"}
          alt={"credbevy"}
          priority={true}
          width={1440}
          height={600}
        />
      </div>

      <div className="w-full relative h-[600px] xl:flex hidden">
        <Image
          src={"/privacypolicy.svg"}
          alt={"credbevy"}
          priority={true}
          fill
          style={{ objectFit: "cover" }}
          quality={100}
        />
      </div>
   </div>
    
      <Component/>
               <Footertwo />
    </section>
  );
}
