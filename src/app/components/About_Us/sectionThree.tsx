import Image from "next/image";
import React from "react";

export default function SectionThree() {
  return (
    <section className="w-full flex justify-center lg:px-24 px-[15px]">
      

      <div className="lg:pb-[80px] w-full  justify-center pb-[50px]  max-w-7xl  ">
        
        {/* section2 */}
        <p className="font-bold lg:text-[64px] text-myblack leading-[150%] tracking-[0%] lg:mb-6 text-[40px]  text-center mb-6">
            Our Core Values
          </p>
       <div className="flex-col md:flex-row  gap-[24px]  lg:gap-48 w-full flex justify-center  ">
       <div className="max-w-[555px]">
          <Image
            src={"/images/values.svg"}
            alt={"credbevy"}
            height={542}
            width={555}
            priority={true}
          />
        </div>
        {/* section one */}
        <div className="lg:pt-[40px] pt-0">
        
          {/* Transparency */}
          <p className="font-inter font-bold text-[20px] leading-[150%] tracking-[0%] text-myblack">
            Transparency
          </p>
          <p className="font-medium lg:text-[16px] leading-[210%] tracking-[0%] text-justify  max-w-[555px] text-[14px] text-myblack mb-2">
            We believe that trust is built through clarity. We ensure that
            borrowers and lenders have all the information they need to make
            informed decisions.
          </p>

          {/* Innovation */}
          <p className="font-inter font-bold text-[20px] leading-[150%] tracking-[0%] text-myblack">
            Innovation
          </p>
          <p className="font-medium lg:text-[16px] leading-[210%] tracking-[0%] text-justify  max-w-[555px] text-[14px] text-myblack mb-2">
            By leveraging AI and data analytics, we continuously push the
            boundaries of what's possible in loan matchmaking, making the
            process more efficient.
          </p>

          {/* Empowerment */}
          <p className="font-inter font-bold text-[20px] leading-[150%] tracking-[0%] text-myblack">
            Empowerment
          </p>
          <p className="font-medium lg:text-[16px] leading-[210%] tracking-[0%] text-justify  max-w-[555px] text-[14px] text-myblack mb-2">
            We empower borrowers with financial opportunities and lenders with
            access to a broader range of customers, creating a win-win scenario.
          </p>

          {/* Security */}
          <p className="font-inter font-bold text-[20px] leading-[150%] tracking-[0%] text-myblack">
            Security
          </p>
          <p className="font-medium lg:text-[16px] leading-[210%] tracking-[0%] text-justify  max-w-[555px] text-[14px] text-myblack">
            Your data is safe with us. We use state-of-the-art encryption and
            security protocols to protect your personal and financial
            information.
          </p>
        </div></div>
      </div>
    </section>
  );
}

