import React from "react";

interface ButtonProps {
  onClick?: () => void;
  text: string;
  className?: string;
}

const CustomButton: React.FC<ButtonProps> = ({ onClick, text, className = "" }) => {
  return (
    <button
      className={`bg-bggreen  text-mywhite h-14 text-center lg:text-sm text-lg font-semibold rounded-sm ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default CustomButton;


export const CustomButtonMobile: React.FC<ButtonProps> = ({ onClick, text, className = "" }) => {
    return (
      <button
        className={`bg-bggreen  text-mywhite h-14 text-center  text-base font-bold rounded-4xl ${className}`}
        onClick={onClick}
      >
        {text}
      </button>
    );
  };
  

  
export const CustomButtonTwo: React.FC<ButtonProps> = ({ onClick, text, className = "" }) => {
    return (
      <button
        className={`bg-bggreen  text-mywhite h-16 text-center lg:text-sm  font-semibold rounded-sm ${className}`}
        onClick={onClick}
      >
        {text}
      </button>
    );
  };
  