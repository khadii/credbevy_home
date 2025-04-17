import React from "react";

export default function SectionTwo() {
  return (
    <section className="lg:py-[80px] lg:px-24 w-full justify-center flex px-[15px] py-[34px]">
      <div className="max-w-7xl">
        <div className="w-full flex justify-center">
          <p className=" text-myblack font-bold lg:text-[64px] text-[40px] leading-[1.5] tracking-normal text-center mb-6 lg:mb-[40px] sm:max-w-[300px] md:max-w-[400px] lg:max-w-[690px] ">
            Why Partner With Us?
          </p>
        </div>
      <div className="space-y-6"> 
      <div>
          <p className=" font-semibold lg:text-2xl  text-[20px] leading-[1.5] tracking-normal text-myblack text-center  lg:text-left mb-2">
            Access to Qualified Borrowers
          </p>

          <h1 className="text-myblack font-medium lg:text-base text-sm leading-[1.7] tracking-normal text-center lg:text-left">
            Our AI-driven platform carefully pre-qualifies borrowers based on
            their financial profile, credit history, and other key indicators,
            ensuring that you are matched with creditworthy applicants. From
            individuals seeking personal loans to businesses needing financing,
            Credbevy helps you connect with the right customers at the right
            time.
          </h1>
        </div>
        <div>
          <p className=" font-semibold lg:text-2xl  text-[20px] leading-[1.5] tracking-normal text-myblack text-center  lg:text-left mb-2">
            Customizable Loan Products
          </p>

          <h1 className="text-myblack font-medium lg:text-base text-sm leading-[1.7] tracking-normal text-center lg:text-left">
            With Credbevy, you have full control over the design of your loan
            products. Tailor the loan amount, interest rate, repayment terms,
            and eligibility criteria to suit your lending model. Whether you're
            offering personal, business, or mortgage loans—collateralized or
            non-collateralized—Credbevy has you covered.
          </h1>
        </div>
        <div>
          <p className=" font-semibold lg:text-2xl  text-[20px] leading-[1.5] tracking-normal text-myblack text-center  lg:text-left mb-2">
            Data-Driven Decisions
          </p>

          <h1 className="text-myblack font-medium lg:text-base text-sm lg:leading-[1.7]   leading-[2.19]  tracking-normal text-center lg:text-left">
            Our platform provides you with real-time insights into borrower
            behavior, loan performance, and financial trends. With data at your
            fingertips, you can make informed decisions, reduce risk, and
            optimize your lending strategy for better outcomes.
          </h1>
        </div>
        <div>
          <p className=" font-semibold lg:text-2xl  text-[20px] leading-[1.5] tracking-normal text-myblack text-center  lg:text-left mb-2">
            Seamless Integration
          </p>

          <h1 className="text-myblack font-medium lg:text-base text-sm lg:leading-[1.7]   leading-[2.19]  tracking-normal text-center lg:text-left">
            We understand that lenders often have their own systems in place.
            That’s why we offer flexible integration options, including API and
            webhook support. Whether you prefer to use our built-in lender
            wallet or integrate Credbevy into your existing loan management
            system, we make it simple and convenient.
          </h1>
        </div>

        <div>
          <p className=" font-semibold lg:text-2xl  text-[20px] leading-[1.5] tracking-normal text-myblack text-center  lg:text-left mb-2">
            Efficient Loan Management
          </p>

          <h1 className="text-myblack font-medium lg:text-base text-sm lg:leading-[1.7]   leading-[2.19]  tracking-normal text-center lg:text-left">
            Credbevy's Lender Dashboard allows you to easily manage every aspect
            of the lending process:
          </h1>
          <ul className="list-disc text-myblack font-medium lg:text-base text-sm leading-[1.7] tracking-normal text-center lg:text-left pl-5 hidden lg:block">
            <li>View and approve loan applications.</li>
            <li>Track disbursements and repayments.</li>
            <li>Monitor loan performance with detailed analytics.</li>
          </ul>

          {/* mobile */}
          <ul className="list-disc  text-myblack font-medium lg:text-base text-sm  leading-[2.19]  tracking-normal text-center lg:text-left  lg:hidden block list-inside">
            <li>View and approve loan applications.</li>
            <li>Track disbursements and repayments.</li>
            <li>Monitor loan performance with detailed analytics.</li>
          </ul>
        </div>
      </div>
      </div>
    </section>
  );
}
