import React from "react";
import Header from "../../major/header";
import Footertwo from "../../major/Footertwo";
import Sectiontwo from "./sectiontwo";
import Image from "next/image";
import SocialIcons from "../../SocialIcons";
import NewsletterSignup from "../../NewsletterSignup";
import NewsCardsGrid from "../../NewsCardsGrid";
export default function News_view() {
  return (
    <div>
      <Header />
      <div className="">
        <div className="space-y-6 lg:mb-[96px]  mb-[49px]  pt-[49px] lg:pt-[129px justify-center w-full flex flex-col items-center px-[15px] lg:px-[100px]">
          <p className="text-myblack font-bold lg:text-[64px] leading-[100%] tracking-[0%]  text-[28px] max-w-6xl  ">
            Mobile Banking: Tips for Safe and Effective Money Management on Your
            Phone
          </p>
        </div>
        <div className="w-full justify-center flex xl:hidden">
          <Image
            src={"/view.png"}
            alt={"credbevy"}
            priority={true}
            width={1440}
            height={600}
          />
        </div>

        <div className="w-full relative h-[600px] xl:flex hidden">
          <Image
            src={"/view.png"}
            alt={"credbevy"}
            priority={true}
            fill
            style={{ objectFit: "cover" }}
            quality={100}
          />
        </div>
        <div className="flex items-center px-36  py-[30px] space-x-4 text-sm">
          <span className="font-medium text-gray-900">Oripeloye Timilehin</span>
          <span>September 30, 2024</span>
        </div>

        <div className="pb-6">
          <SocialIcons />
        </div>
      </div>
      <Sectiontwo />
      <div className=" flex justify-center w-full mt-[90px] mb-[40px] px-[15px]">
        <NewsletterSignup />
      </div>
 <div className="pb-[100px] flex justify-center w-full">
          <SocialIcons />
        </div>
        <NewsCardsGrid/>
      <Footertwo />
    </div>
  );
}
