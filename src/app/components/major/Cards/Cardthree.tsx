import Link from "next/link";
import React from "react";
import { Star } from "lucide-react"; // Example icon
import { IoMdStar } from "react-icons/io";

interface CardthreeProps {
  handle: string;
  testimonies: string;
  imageSrc: string;
  title: string;
  link?: string;
}

const Cardthree: React.FC<CardthreeProps> = ({ handle, testimonies, imageSrc, title, link = "#" }) => {
  return (
    <div className="max-w-[400px] lg:min-w-[400px] max-h-[287px] py-[33px] px-[23px] bg-white w-full  flex flex-col items-center">
      <p className="font-bold text-sm text-myblack mb-7">{handle}</p>

      {/* Star Ratings */}
      <div className="flex space-x-2 mb-7">
        {[...Array(5)].map((_, index) => (
          <IoMdStar key={index} size={20} className="text-myyellow " />
        ))}
      </div>

      <p className="text-myblack2 text-xs font-medium mb-7 max-w-xs text-center">{testimonies}</p>

      <div className="flex items-center space-x-4">
        <Link href={link}>
          <img src={imageSrc} alt={title} className="w-auto h-auto" />
        </Link>
        <p className="text-myblack text-xs font-bold">App Store</p>
      </div>
    </div>
  );
};

export default Cardthree;
