import React from "react";

// Styled paragraph for general use
const StyledParagraph = ({ children }: { children: any }) => {
  return (
    <div
      className="
        text-[16px] md:text-[18px] lg:text-[20px]
        font-[500]
        leading-[28px] md:leading-[36px] lg:leading-[40px]
        tracking-[0px]
        text-justify
      "
    //   style={{ fontFamily: "Inter", fontStyle: "normal" }}
    >
      {children}
    </div>
  );
};

export default StyledParagraph;

// Big styled paragraph for emphasis
export const BigStyledParagraph = ({ children }: { children: any }) => {
  return (
    <p
      className="
        text-[18px] md:text-[20px] lg:text-[24px]
        font-[600]
        leading-[28px] md:leading-[30px] lg:leading-[32px]
        tracking-[0px]
        text-justify
      "
    //   style={{ fontFamily: "Inter", fontStyle: "normal" }}
    >
      {children}
    </p>
  );
};

// Big bold heading
export const BigBoldHeading = ({ children }: { children: any }) => {
  return (
    <h1
      className="
        text-[32px] md:text-[48px] lg:text-[64px]
        font-[700]
        leading-[100%]
        tracking-[0%]
      "
    //   style={{ fontFamily: "Inter", fontStyle: "normal" }}
    >
      {children}
    </h1>
  );
};
