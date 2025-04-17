import React from "react";

export default function SectionFour() {
  return (
    <section className="lg:pb-[80px] lg:px-24 w-full justify-center flex px-[15px] pb-[50px]">
      <div className="max-w-7xl">
        <div className="w-full flex justify-center">
          <p className=" text-myblack font-bold lg:text-[64px] text-[40px] leading-[1.5] tracking-normal text-center mb-6 lg:mb-[40px]sm:max-w-[390px] md:max-w-[490px] lg:max-w-[1080px]  ">
            Seamless Onboarding for Lenders
          </p>
        </div>
        <div className="space-y-6">
          <div>
            <h1 className="text-myblack font-medium  text-xl  lg:text-2xl  lg:leading-[1.7]   leading-[2.19]  tracking-normal text-center">
              Partnering with Credbevy is simple and straightforward. Our
              dedicated team will guide you through the onboarding process,
              ensuring that your loan products are ready to go live in no time.
            </h1>
            <ul className="list-decimal text-myblack font-medium  text-xl  lg:text-2xl leading-[1.7] tracking-normal text-center lg:text-left pl-5 hidden lg:block">
              <li>
                Contact Us: Get in touch through our Lender Contact Form or
                email us at partners@credbevy.com to begin the partnership..
              </li>
              <li>
                Create Your Loan Products: Work with our team to design loan
                products that match your lending criteria.
              </li>
              <li>
                Get Listed: Once your products are live, Credbevy will begin
                matching you with pre-qualified borrowers, streamlining the
                process from application to disbursement.
              </li>
            </ul>

            {/* mobile */}
            <ul className="list-decimal  text-myblack font-medium  leading-[2.19]  tracking-normal text-center lg:text-left  lg:hidden block list-inside  text-xl  lg:text-2xl">
              <li>
                Contact Us: Get in touch through our Lender Contact Form or
                email us at partners@credbevy.com to begin the partnership.
              </li>
              <li>
                Create Your Loan Products: Work with our team to design loan
                products that match your lending criteria.
              </li>
              <li>
                Get Listed: Once your products are live, Credbevy will begin
                matching you with pre-qualified borrowers, streamlining the
                process from application to disbursement.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
