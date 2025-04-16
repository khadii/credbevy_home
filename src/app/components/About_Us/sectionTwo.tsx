import Image from "next/image";
import React from "react";

export default function SectionTwo() {
  return (
    <section className="w-full flex justify-center  px-[15px] lg:px-24">
      <div className="lg:py-[80px] w-full flex justify-center lg:gap-48 py-[49px]  gap-[24px] flex-col  md:flex-row max-w-7xl">
        {/* //section one */}
        <div className="lg:pt-[40px] pt-0">
       <p className="font-bold lg:text-[64px] text-myblack leading-[150%] tracking-[0%] lg:mb-6 text-[40px] mb-[16px]">
          Who We Are
        </p>
        <p className="font-inter font-medium lg:text-[16px] leading-[210%] tracking-[0%] text-justify max-w-[555px] text-[14px] text-myblack">
          Credbevy is a cutting-edge fintech platform revolutionizing how people
          access loans. Our technology-driven approach ensures that borrowers
          get personalized loan offers while helping lenders reach
          pre-qualified, creditworthy customers. We understand that every
          borrower is different, which is why our platform goes beyond
          traditional credit scores to deliver loan options that match each
          individual’s financial situation.



         
        </p>
        <p className="font-inter font-medium lg:text-[16px] leading-[210%] tracking-[0%] text-justify  max-w-[555px] text-[14px] mt-8 text-myblack" >
          Founded with a vision to democratize
          access to finance, Credbevy brings together lenders and borrowers in a
          secure, trusted, and user-friendly environment.
          </p>
       </div>
       {/* section2 */}
       <div className="max-w-[555px]">
        <Image src={"/images/whoarewe.svg"} alt={"credbevy"} height={542} width={555}   priority={true}/>
       </div>
      </div>
    </section>
  );
}
