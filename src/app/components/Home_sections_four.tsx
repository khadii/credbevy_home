import React from "react";
import Cardtwo from "./major/Cards/Cardtwo";

export default function Home_sections_four() {
  return (
    <section className="w-full lg:py-[80px] lg:px-24 px-[15px] py-[60px] flex justify-center">
      <div>
        <p className="text-myblack lg:text-[40px] text-2xl font-bold text-center">
          Types of Loans
        </p>
        <h1 className="italic opacity-80  font-semibold text-myblack text-base text-center mb-12">
          Loans for every need
        </h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-3 gap-[23px]  ">

          <Cardtwo
            imageSrc={"images/personal.svg"}
            title={"Personal Loans"}
            subTitle={"For emergencies, travel, education, and more."}
          />
          <Cardtwo
            imageSrc={"images/business.svg"}
            title={"Business Loans"}
            subTitle={"Fuel your business growth with the right funding."}
          />
          <Cardtwo
            imageSrc={"images/mortgage.svg"}
            title={"Mortgage Loans"}
            subTitle={"Own your dream home with flexible repayment options."}
          />
        </div>
      </div>
    </section>
  );
}
