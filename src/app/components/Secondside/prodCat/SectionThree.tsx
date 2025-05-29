import Image from "next/image";
import React from "react";
import CustomButton, { CustomButtonTwo } from "../../customButton";

export default function SectionThree() {
  return (
    <section className="w-full flex justify-center">
      <div className="flex sm:mb-[270px]   mb-24 flex-col-reverse lg:grid lg:grid-cols-2 px-6 sm:px-[15px] lg:px-24 items-center pb-12 lg:pb-[80px] gap-10 lg:gap-[126px]">
        <div className="w-full flex justify-center">
          <Image
            src={"/unsecured.svg"}
            alt={"credbevy"}
            priority={true}
            width={558}
            height={622}
            className="w-full max-w-[558px] h-auto"
          />
        </div>
        <div>
          <p className="font-bold text-[32px] sm:text-[40px] lg:text-[64px] leading-tight text-myblack max-w-full  text-center sm:text-left lg:max-w-[553px]">
            Unsecured Loans
          </p>
          <h1 className="text-myyellow font-semibold text-base leading-none tracking-normal mb-6 text-center md:text-left">
            No Collateral, Quick & Convenient Funding
          </h1>

          <p className="font-medium text-[14px] sm:text-base leading-relaxed text-justify text-myblackmax-w-full lg:max-w-[553px]  mb-3 lg:mb-6 ">
            Unsecured loans don’t require collateral, making them accessible for
            personal or business needs. Approval is based on credit history and
            income. Perfect for short-term expenses and quick financing.
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
                No collateral required
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
                Faster approval process
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
                Ideal for personal or small business needs
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
                Options include: Personal loans, credit lines, short-term
                business loans
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
