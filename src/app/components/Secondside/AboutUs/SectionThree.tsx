import Image from "next/image";
import React from "react";
import CustomButton, { CustomButtonTwo } from "../../customButton";

export default function SectionThree() {
  return (
    <section className="w-full flex justify-center">
<div className="flex flex-col-reverse lg:grid lg:grid-cols-2 px-6 sm:px-[15px] lg:px-24 items-center pb-12 lg:pb-[80px] gap-10 lg:gap-[126px]">
      <div className="w-full flex justify-center">
          <Image
            src={"/secthreeabtjn.svg"}
            alt={"credbevy"}
            priority={true}
            width={558}
            height={622}
            className="w-full max-w-[558px] h-auto"
          />
        </div>
        <div>
          <p className="font-bold text-[32px] sm:text-[40px] lg:text-[64px] leading-tight text-myblack max-w-full  text-center sm:text-left lg:max-w-[553px]">
            Business Loans
          </p>
          <h1 className="text-myyellow font-semibold text-base leading-none tracking-normal mb-6 ">
            Powering Your Business Growth
          </h1>

          <p className="font-medium text-[14px] sm:text-base leading-relaxed text-justify text-myblackmax-w-full lg:max-w-[553px]  mb-3 lg:mb-6 ">
            Whether you're launching a startup or expanding operations, our
            business loans offer the capital you need to thrive.
          </p>
          <div className="space-y-[17px]">
            <div className="w-full flex items-center gap-[12px]">
              <Image
                src={"/list.svg"}
                alt={"credbevy"}
                priority={true}
                width={24}
                height={24}
              />{" "}
              <img />
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
              />{" "}
              <img />
              <p className=" text-myblack font-medium text-sm leading-[150%] tracking-normal">
              Low-interest rates
              </p>
            </div>
            <div className="w-full flex items-center gap-[12px]">
              <Image
                src={"/list.svg"}
                alt={"credbevy"}
                priority={true}
                width={24}
                height={24}
              />{" "}
              <img />
              <p className=" text-myblack font-medium text-sm leading-[150%] tracking-normal">
              Quick disbursement
              </p>
            </div>
            <div className="w-full flex items-center gap-[12px]">
              <Image
                src={"/list.svg"}
                alt={"credbevy"}
                priority={true}
                width={24}
                height={24}
              />{" "}
              <img />
              <p className=" text-myblack font-medium text-sm leading-[150%] tracking-normal">
            Instant online application
              </p>
            </div>
          </div>
          <CustomButtonTwo
            text={"Get Started"}
            className="w-full sm:w-[342px]  mt-8 lg:mt-[68px] "
          />
        </div>
       
      </div>
    </section>
  );
}
