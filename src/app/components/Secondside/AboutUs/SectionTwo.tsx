import Image from "next/image";
import React from "react";
import CustomButton, { CustomButtonTwo } from "../../customButton";

export default function SectionTwo() {
  return (
    <section className="w-full flex justify-center">
      <div className="px-6 sm:px-[15px] lg:px-24 grid grid-cols-1 lg:grid-cols-2 items-center py-12 lg:py-[80px] gap-10 lg:gap-[126px]">
        <div>
          <p className="font-bold text-[32px] sm:text-[40px] lg:text-[64px] leading-tight text-myblack max-w-full  text-center sm:text-left lg:max-w-[553px]">
            Personal Loans
          </p>
          <h1 className="text-myyellow font-semibold text-base leading-none tracking-normal mb-6 ">
            Fast &amp; Flexible Financing for Life’s Needs
          </h1>

          <p className="font-medium text-[14px] sm:text-base leading-relaxed text-justify text-myblackmax-w-full lg:max-w-[553px]  mb-3 lg:mb-6 ">
            Whether it's for medical expenses, debt consolidation, or a dream
            vacation, our personal loans provide quick access to funds with
            competitive rates and hassle-free approval.
          </p>
          <div className="space-y-[17px]">
           <div className="w-full flex items-center gap-[12px]">
           <Image
            src={"/list.svg"}
            alt={"credbevy"}
            priority={true}
            width={24}
            height={24}
         
          />   <img/>
           <p className=" text-myblack font-medium text-sm leading-[150%] tracking-normal">
              Loan amounts up to ₦500M
            </p>
           </div>
           <div className="w-full flex items-center gap-[12px]">
           <Image
            src={"/list.svg"}
            alt={"credbevy"}
            priority={true}
            width={24}
            height={24}
         
          />   <img/>
           <p className=" text-myblack font-medium text-sm leading-[150%] tracking-normal">
           Flexible repayment terms
            </p>
           </div>
           <div className="w-full flex items-center gap-[12px]">
           <Image
            src={"/list.svg"}
            alt={"credbevy"}
            priority={true}
            width={24}
            height={24}
         
          />   <img/>
           <p className=" text-myblack font-medium text-sm leading-[150%] tracking-normal">
           No hidden fees
            </p>
           </div>
           <div className="w-full flex items-center gap-[12px]">
           <Image
            src={"/list.svg"}
            alt={"credbevy"}
            priority={true}
            width={24}
            height={24}
         
          />   <img/>
           <p className=" text-myblack font-medium text-sm leading-[150%] tracking-normal">
           Instant online application
            </p>
           </div>
          </div>
          <CustomButtonTwo
            text={"Apply Now"}
            className="w-full sm:w-[342px]  mt-8 lg:mt-[68px] "
          />
        </div>
        <div className="w-full flex justify-center">
          <Image
            src={"/sec2abt.svg"}
            alt={"credbevy"}
            priority={true}
            width={558}
            height={622}
            className="w-full max-w-[558px] h-auto"
          />
        </div>
      </div>
    </section>
  );
}
