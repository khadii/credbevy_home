import React from "react";

export default function Home_section_two() {
const image1='/images/signup.svg'
const image2='/images/find.svg'
const image3='/images/Apply.svg'

const images = [image1, image2, image3];
  return (
    <section className="px-[12px] mb-[80px] lg:px-24">
      <div className="w-full justify-center flex flex-col items-center maxw-w-7xl">
    
        <p className="lg:max-w-[1243px] md:max-w-3xl sm:max-w-[403px] text-myblack font-semibold lg:text-[54px] text-[24px] text-center lg:mb-[80px] mb-[60px] ">
          We make borrowing simple, fast, and secure by connecting you to{" "}
          <span className="text-myyellow">trusted lenders</span> with the best{" "}
          <span className="text-myyellow">rates and terms. </span>
        </p>
        <h1 className="font-bold  text-2xl  lg:text-[40px] text-myblack text-center">
        How Credbevy Works
        </h1>
        <h2 className="text-myblack italic font-semibold text-base text-center mb-6 lg:mb-12 opacity-80">A simple 3-step process</h2>
        <div className="grid lg:grid-cols-3 justify-center gap-4 items-center md:grid md:grid-cols-3  ">

            {images.map((src, index) => (
              <img key={index} src={src} alt={`Step ${index + 1}`} className="w-full h-full" />
            ))}
        </div>
        </div>
     
    </section>
  );
}
