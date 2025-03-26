import React from 'react';

interface CardtwoProps {
  imageSrc: string;
  title: string;
  subTitle: string;
}

const Cardtwo: React.FC<CardtwoProps> = ({ imageSrc, title, subTitle }) => {
  return (
<div className="max-w-[398px] w-full max-h-[374px]">

      <img src={imageSrc} alt={title} className="w-auto h-auto" /> 
      <p className="text-[20px] text-myblack font-semibold mb-1 mt-2 ">{title}</p>
      <h2 className="text-base text-myblack font-normal">{subTitle}</h2>
    </div>
  );
};

export default Cardtwo;
