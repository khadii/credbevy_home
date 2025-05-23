"use client";

import React, { useState } from "react";
import Header from "../components/major/header";
import Footertwo from "../components/major/Footertwo";
import CustomButton, { CustomButtonTwo } from "../components/customButton";
import FAQ from "./FaQ";
import { borrowerFaqItems, lenderFaqItems } from "../library/faq";

export default function Page() {
  const tabs = ["For Borrower", "For Lenders"];
  const [active, setActive] = useState(tabs[0]);

  return (
    <section>
      <Header />
      <div className="space-y-6 lg:mb-[62px] mb-[49px] pt-[49px] lg:pt-[129px] w-full justify-center flex items-center flex-col">
        <p className="text-mygrey2 font-semibold text-[24px] leading-[100%] tracking-[0%] text-center">
          FAQs
        </p>
        <p className="text-myblack font-bold lg:text-[96px] leading-[100%] tracking-[0%] text-center text-[48px] max-w-[872px]">
          Frequently Asked Questions
        </p>
      </div>
      <div className="flex space-x-6 w-full justify-center lg:mb-[82px] mb-[49px] cursor-pointer">
        {tabs.map((tab, index) => (
          <div key={index}>
            <p
              className={`text-sm font-medium ${
                active === tab ? "text-mygreen" : "text-mygrey"
              }`}
              onClick={() => setActive(tab)}
            >
              {tab}
            </p>
            <p
              className={`h-[2px] mt-2 w-[97px]  ${
                active === tab ? "bg-[#156064]" : "bg-transparent"
              }`}
            ></p>
          </div>
        ))}
      </div>
      <div>
        <FAQ
          data={active === "For Borrower" ? borrowerFaqItems : lenderFaqItems}
        />
      </div>
      <div>
        <p className="font-bold lg:text-[48px] text-myblack text-center mb-[24px] text-2xl mt-[69px]">
          Got More Questions?
        </p>
      </div>
      <div className="w-full justify-center flex pb-[227px]">
        <CustomButtonTwo className="px-[133px]" text={"Contact Us"} />
      </div>
      <Footertwo />
    </section>
  );
}
