import React from "react";

interface CardOneProps {
  imageSrc: string; // Path to the image
  title: string;
  description: string;
}

const CardOne: React.FC<CardOneProps> = ({ imageSrc, title, description }) => {
  return (
    <div className="pt-[30px] pb-[62px] pl-[18px] pr-[30px] rounded-sm transition-transform duration-300 hover:scale-105 bg-darkgreentwo max-w-[388px]">
      <img src={imageSrc} alt={title} className="w-10 h-10 mb-7" /> 
      <p className="text-[20px] text-mywhite font-semibold mb-2">{title}</p>
      <h1 className="font-medium text-mywhite text-sm">{description}</h1>
    </div>
  );
};

export default CardOne;
