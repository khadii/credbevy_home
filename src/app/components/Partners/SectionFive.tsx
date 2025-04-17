import React from "react";
import Card from "./Card";

export default function SectionFour() {
  const cardData = [
    {
      imageSrc: "images/Coinbase.svg",
      companyName: "Coinbase",
      companyDesc: "Coinbase Technologies Solution Limited",
    },
    {
      imageSrc:
        "https://upload.wikimedia.org/wikipedia/commons/1/12/Binance_logo.svg",
      companyName: "Binance",
      companyDesc: "Binance Financial Services Ltd",
    },
    {
      imageSrc:
        "https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg",
      companyName: "Stripe",
      companyDesc: "Stripe Payment Processing Inc",
    },
    {
      imageSrc:
        "https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg",
      companyName: "PayPal",
      companyDesc: "PayPal Holdings, Inc.",
    },
    {
      imageSrc: "images/Coinbase.svg",
      companyName: "Robinhood",
      companyDesc: "Robinhood Markets, Inc.",
    },
    {
      imageSrc: "images/Coinbase.svg",
      companyName: "Square",
      companyDesc: "Square Financial Services",
    },
  ];

  return (
    <section className=" lg:px-24 w-full justify-center flex px-[15px]  pb-[151px] lg:pb-[299px]">
      <div className="max-w-7xl">
        <div className="w-full flex justify-center">
          <p className=" text-myblack font-bold lg:text-[64px] text-[40px] leading-[1.5] tracking-normal text-center mb-6 lg:mb-[40px]sm:max-w-[390px] md:max-w-[490px] lg:max-w-[1080px]  ">
            Our Lender Partners
          </p>
        </div>

        <div>
          <h1 className="text-myblack font-medium  text-xl  lg:text-2xl  lg:leading-[1.7]   leading-[2.19]  tracking-normal text-center">
            We are proud to partner with a growing list of reputable lenders,
            from banks and credit unions to fintech companies and alternative
            finance providers. Together, we’re committed to providing borrowers
            with a wide range of loan options and making financial access easier
            for everyone.
          </h1>
        </div>
         <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 w-full mt-[20px]  ">
          {cardData.map((card, index) => (
            <div className="" key={index}>
              <Card
                imageSrc={card.imageSrc}
                companyName={card.companyName}
                companyDesc={card.companyDesc}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
