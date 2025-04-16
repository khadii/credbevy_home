import React from 'react';

interface PhoneCardsProps {
  imageUrl: string;
  text: string;
  subtext: string;
}
import Image from "next/image";
export default function PhoneCards({ imageUrl, text, subtext }: PhoneCardsProps) {
  return (
    <div className="relative bg-[#6E8C8D3D] w-full h-full flex justify-center items-center">
      <Image src={imageUrl} alt={text}   height={538}
  width={403}
    />
      
      <div className=" h-[28%]  w-[93%]  bg-white opacity-[97%] rounded-sm absolute justify-center flex flex-col pl-4 bottom-4 ">
        <p className="text-myblack text-sm font-semibold mb-2">{text}</p>
        <h1 className="text-myblack text-xs font-medium">{subtext}</h1>
      </div>
    </div>
  );
}
