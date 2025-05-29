import Image from "next/image";
import React from "react";
import CustomButton, { CustomButtonTwo } from "../../customButton";

export default function SectionTwo() {
  return (
    <section className="w-full flex justify-center">
      <div className="px-6 sm:px-[15px] lg:px-24 grid grid-cols-1 lg:grid-cols-2 items-center py-12 lg:py-[80px] gap-10 lg:gap-[126px]">
        <div>
          <p className="font-bold text-[32px] sm:text-[40px] lg:text-[64px] leading-tight text-myblack max-w-full  text-center sm:text-left lg:max-w-[553px]">
            Secured Loans
          </p>
          <h1 className="text-myyellow font-semibold text-base leading-none tracking-normal mb-6 text-center md:text-left">
            Lower Interest, Higher Loan Amounts
          </h1>

          <p className="font-medium text-[14px] sm:text-base leading-relaxed text-justify text-myblackmax-w-full lg:max-w-[553px]  mb-3 lg:mb-6 ">
            Secured loans require collateral, such as a house, car, or business
            assets. In return, you get lower interest rates and higher borrowing
            limits. Ideal for those looking for long-term financial solutions
            with added security.
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
           Lower interest rates than unsecured loans
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
               Higher loan limits based on collateral value
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
              Longer repayment terms for manageable installments
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
            Options include: Mortgage loans, auto loans, secured business loans
              </p>
            </div>
          </div>
          <CustomButtonTwo
            text={"Check Eligibility"}
            className="w-full sm:w-[342px]  mt-8 lg:mt-[68px] "
          />
        </div>
        <div className="w-full flex justify-center">
          <Image
          src={"/secured.svg"}
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
