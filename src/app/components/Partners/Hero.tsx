import Image from "next/image";
import React from "react";

export default function hero() {
  return (
    <section>
      <div className="space-y-6 lg:mb-[96px]  mb-[49px]  pt-[49px] lg:pt-[129px]">
        <p className="text-mygrey2 font-semibold text-[24px] leading-[100%] tracking-[0%] text-center ">
          Partners
        </p>
        <div className="w-full flex justify-center">
          {" "}
          <p className="text-myblack font-bold lg:text-[96px] leading-[100%] tracking-[0%] text-center text-[48px] xl:max-w-[957px] lg:max-w-[950px] md:max-w-[600px] sm:max-w-[30pxpx] ">
            CredBevy’s Lending Partners
          </p>
        </div>
      </div>
      <div className="w-full justify-center flex xl:hidden mb-[40px]">
        <Image
          src={"/images/partners.svg"}
          alt={"credbevy"}
          priority={true}
          width={1440}
          height={600}
        />
      
      </div>

      <div className=" relative w-full  h-[600px] xl:flex hidden mb-[40px]">
        {/* <div className="absolute inset-0 bg-black opacity-[20%] z-10"></div> */}
        <Image
          src={"/images/partners.svg"}
          alt={"credbevy"}
          priority={true}    
          fill
          style={{ objectFit: "cover" }}
          quality={100}
          loading="eager"
        />
      </div>
      <div className="w-full flex justify-center px-[20px]">
 <p className="font-medium xl:text-2xl  text-xl leading-[1.75] tracking-normal text-center text-myblack xl:max-w-[957px] lg:max-w-[950px] md:max-w-[600px] sm:max-w-[380px]">
  We’re transforming the way lenders connect with borrowers through our
  AI-powered loan marketplace. By partnering with us, lenders gain access
  to a broad and diverse pool of pre-qualified borrowers, while enjoying
  advanced tools that simplify loan management, enhance borrower matching,
  and improve lending efficiency.
</p>
 </div>
    </section>
  );
}
