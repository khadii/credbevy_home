import React from 'react';
import Image from "next/image";
interface CardtwoProps {
  imageSrc: string;
  title: string;
  subTitle: string;
}

const Cardtwo: React.FC<CardtwoProps> = ({ imageSrc, title, subTitle }) => {
  return (
<div className="max-w-[398px] w-full max-h-[374px]">

    <Image src={imageSrc} alt={title}   height={316}
     width={398}
     priority={true} 
       /> 
      <p className="text-[20px] text-myblack font-semibold mb-1 mt-2 ">{title}</p>
      <h2 className="text-base text-myblack font-normal">{subTitle}</h2>
    </div>
  );
};

export default Cardtwo;
