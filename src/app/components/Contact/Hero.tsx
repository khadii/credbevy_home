import React from "react";
import Card from "./Card";
import Form from "./Form";

export default function Hero() {
  const cardData = [
    {
      imageSrc: "images/call.svg",
      Name: "+2349055380387",
    },
    {
      imageSrc: "images/sms.svg",
      Name: "Credbevy@gmail.com",
    },
    {
      imageSrc: "images/location.svg",
      Name: "Lagos, Nigeria",
    },
  ];

  return (
   <section className="w-full lg:px-24 flex justify-center  px-4">
  
    <div className="w-full flex flex-col items-center pt-[50px] lg:pt-[129px] ">
      <div>
      <p className="text-mygrey2 font-semibold text-[24px] leading-[100%] tracking-[0%] text-center mb-6 ">
          Contact us
        </p>

        <div className="w-full flex justify-center mb-[87px]">
          <p className="text-myblack font-bold lg:text-[96px] leading-[100%] tracking-[0%] text-center text-[48px] xl:max-w-[957px] max-w-[320px] sm:max-w-[350px] md:max-w-[600px]">
            We’ll love to hear from you
          </p>
        </div>
      </div>

   <div className="w-full flex justify-center ">
   <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 w-full lg:mb-[64px] mb-[58px] max-w-7xl flex-wrap">
  {cardData.map((card, index) => (
    <div
      key={index}
      className={
        index === 2
          ? "md:col-span-2 md:flex md:justify-center xl:col-span-1"
          : ""
      }
    >
      <Card imageSrc={card.imageSrc} Name={card.Name} />
    </div>
  ))}
</div>

   </div>

      <Form/>
    </div>
  
   </section>
  );
}
