import Image from "next/image";
import React from "react";

interface CardProps {
  imageSrc: string;
  companyName: string;
  companyDesc: string;
}

export default function Card({ imageSrc, companyName, companyDesc }: CardProps) {
  return (
    <div className="max-w-[400px] max-h-[215px]  rounded-[8px] p-[32px] bg-white w-full h-full">
      <div className="relative w-[47px] h-[47px] mb-[16px]">
        <Image
          src={imageSrc}
          alt="features"
          fill
          className="object-contain"
          priority
        />
      </div>
      <div className="space-y-6">
        <p className="text-myblack font-semibold text-2xl leading-8 ">
          {companyName}
        </p>
        <p className=" font-medium text-sm leading-8 text-myblack">
          {companyDesc}
        </p>
      </div>
    </div>
  );
}
