import React from "react";
import CardOne from "./major/Cards/CardOne";

export default function Home_section_three() {
  return (
    <section className=" lg:pt-[60px] lg:px-24 px-[20px]  pt-[30px]  bg-bgdarkgreen w-full flex justify-center lg:pb-[172px] pb-[88px]">
      <div>
        {/* header */}
        <p className="text-myblack font-bold lg:text-[40px] text-2xl text-center">
          Why Choose Credbevy?
        </p>
        <h1 className="text-base font-semibold italic text-myblack text-center lg:mb-[145px] mb-[32px] opacity-80">
          Why Thousands Trust Credbevy for Loans
        </h1>
        <div className="w-full  grid lg:grid-cols-3 md:grid-cols-3 gap-[38px] ">
          {" "}
          <CardOne
            title={"Multiple Loan Options"}
            description={
              "Credbevy gives you opportunity to see tailor made loan offers available to you."
            }
            imageSrc={"/images/sun.svg"}
          />
          <CardOne
            title={"Wide Range of Lenders"}
            description={
              "Access a network of verified lenders offering competitive loan options tailored to your needs."
            }
            imageSrc={"/bubblee.svg"}
          />
          <CardOne
            title={"Fast & Easy Application"}
            description={
              "Complete your loan application in minutes and get matched with lenders instantly."
            }
            imageSrc={"/images/flash.svg"}
          />
        </div>
      </div>
    </section>
  );
}
