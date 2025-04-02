"use client";

import { product, Features, Resources } from "@/app/library/navdata";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export default function NavbarCard() {
  const pathname = usePathname();

  return (
    <div className="bg-white rounded-[10px] px-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[20px] overflow-y-scroll h-full"> {/* Added max height and overflow */}
        {Features.map((section, index) => (
          <div key={index}>
            <h3 className="text-mygrey font-semibold text-sm mb-[14px]">
              {section.title}
            </h3>
            <div className="mb-6">
              <button className="flex justify-between w-full rounded-[5px] border border-[#E5EAEF] py-4 px-[14px] items-center h-full">
                <h3 className="text-mygreen font-medium text-sm">
                  {section.title}
                </h3>
                <div><ChevronDown size={16}/></div>
              </button>
            </div>
            
            <div className="space-y-4">
              {section.links.map((link, i) => {
                const isActive = pathname === link.path;
                const IconComponent = link.icon;
                
                return (
                  <Link
                    href={link.path}
                    key={i}
                    className={`flex max-w-[365px] items-start gap-3 px-5 py-3 rounded-md hover:bg-[#F6F6F6] transition-colors duration-200 ${
                      isActive ? "bg-[#F6F6F6]" : ""
                    }`}
                  >
                    <IconComponent isActive={isActive} />
                    <div>
                      <p className={`text-base ${isActive?"text-mygreen":"text-myblack"} font-semibold`}>
                        {link.name}
                      </p>
                      <p className="text-[#8C8C8C] text-sm max-w-[284px] font-medium">
                        {link.text}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}




export  function NavbarCard2() {
  const pathname = usePathname();

  return (
    <div className="bg-white rounded-[10px] px-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[20px] overflow-y-scroll h-full"> {/* Added max height and overflow */}
        {product.map((section, index) => (
          <div key={index}>
            <h3 className="text-mygrey font-semibold text-sm mb-[14px]">
              {section.title}
            </h3>
            <div className="mb-6">
              <button className="flex justify-between w-full rounded-[5px] border border-[#E5EAEF] py-4 px-[14px] items-center h-full">
                <h3 className="text-mygreen font-medium text-sm">
                  {section.title}
                </h3>
                <div><ChevronDown size={16}/></div>
              </button>
            </div>
            
            <div className="space-y-4">
              {section.links.map((link, i) => {
                const isActive = pathname === link.path;
                const IconComponent = link.icon;
                
                return (
                  <Link
                    href={link.path}
                    key={i}
                    className={`flex max-w-[365px] items-start gap-3 px-5 py-3 rounded-md hover:bg-[#F6F6F6] transition-colors duration-200 ${
                      isActive ? "bg-[#F6F6F6]" : ""
                    }`}
                  >
                    <IconComponent isActive={isActive} />
                    <div>
                      <p className={`text-base ${isActive?"text-mygreen":"text-myblack"} font-semibold`}>
                        {link.name}
                      </p>
                      <p className="text-[#8C8C8C] text-sm max-w-[284px] font-medium">
                        {link.text}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}



export  function NavbarCardm3() {
  const pathname = usePathname();

  return (
    <div className="bg-white rounded-[10px] px-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[20px] overflow-y-scroll h-full"> {/* Added max height and overflow */}
        {Resources.map((section, index) => (
          <div key={index}>
            <h3 className="text-mygrey font-semibold text-sm mb-[14px]">
              {section.title}
            </h3>
            <div className="mb-6">
              <button className="flex justify-between w-full rounded-[5px] border border-[#E5EAEF] py-4 px-[14px] items-center h-full">
                <h3 className="text-mygreen font-medium text-sm">
                  {section.title}
                </h3>
                <div><ChevronDown size={16}/></div>
              </button>
            </div>
            
            <div className="space-y-4">
              {section.links.map((link, i) => {
                const isActive = pathname === link.path;
                const IconComponent = link.icon;
                
                return (
                  <Link
                    href={link.path}
                    key={i}
                    className={`flex max-w-[365px] items-start gap-3 px-5 py-3 rounded-md hover:bg-[#F6F6F6] transition-colors duration-200 ${
                      isActive ? "bg-[#F6F6F6]" : ""
                    }`}
                  >
                    <IconComponent isActive={isActive} />
                    <div>
                      <p className={`text-base ${isActive?"text-mygreen":"text-myblack"} font-semibold`}>
                        {link.name}
                      </p>
                      <p className="text-[#8C8C8C] text-sm max-w-[284px] font-medium">
                        {link.text}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}







export  function NavbarCarddesktop() {
  const pathname = usePathname();

  return (
    <div className="w-[1000px]  bg-white px-[40px] pt-[54px] pb-[83px] rounded-[10px] shadow hidden xl:flex">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[52px]">
        {Features.map((section, index) => (
          <div key={index}>
            <h3 className="text-mygrey font-semibold text-lg mb-4">
              {section.title}
            </h3>
            <div className="space-y-4">
              {section.links.map((link, i) => {
                const isActive = pathname === link.path;
                const IconComponent = link.icon;
                
                return (
                  <Link
                    href={link.path}
                    key={i}
                    className={`flex max-w-[365px] items-start gap-3 px-5 py-3 rounded-md hover:bg-[#F6F6F6] transition-colors duration-200 ${
                      isActive ? "bg-[#F6F6F6]" : ""
                    }`}
                  >
                    <IconComponent isActive={isActive} />
                    <div>
                    <p className={`text-base ${isActive?"text-mygreen":"text-myblack"} font-semibold`}>
                        {link.name}
                      </p>
                      <p className="text-[#8C8C8C] text-sm max-w-[284px] font-medium">
                        {link.text}
                      </p>
                    </div>
                  </Link>
                );
              })}
            
            </div>
          </div>
        ))}
          <div>
                <img
                src="/images/features.svg"/>

                <p className="font-semibold text-base text-myblack  leading-[100%] tracking-[0%] mt-2">Learn more about our Features</p>
              </div>
      </div>
    </div>
  );
}





export  function NavbarCarddesktop2() {
  const pathname = usePathname();

  return (
    <div className="w-[1000px]  bg-white px-[40px] pt-[54px] pb-[83px] rounded-[10px] shadow hidden xl:flex">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[52px]">
        {product.map((section, index) => (
          <div key={index}>
            <h3 className="text-mygrey font-semibold text-lg mb-4">
              {section.title}
            </h3>
            <div className="space-y-4">
              {section.links.map((link, i) => {
                const isActive = pathname === link.path;
                const IconComponent = link.icon;
                
                return (
                  <Link
                    href={link.path}
                    key={i}
                    className={`flex max-w-[365px] items-start gap-3 px-5 py-3 rounded-md hover:bg-[#F6F6F6] transition-colors duration-200 ${
                      isActive ? "bg-[#F6F6F6]" : ""
                    }`}
                  >
                    <IconComponent isActive={isActive} />
                    <div>
                    <p className={`text-base ${isActive?"text-mygreen":"text-myblack"} font-semibold`}>
                        {link.name}
                      </p>
                      <p className="text-[#8C8C8C] text-sm max-w-[284px] font-medium">
                        {link.text}
                      </p>
                    </div>
                  </Link>
                );
              })}
            
            </div>
          </div>
        ))}
          <div>
                <img
                src="/images/product.svg"/>

                <p className="font-semibold text-base text-myblack  leading-[100%] tracking-[0%] mt-2">Learn more about our Products</p>
              </div>
      </div>
    </div>
  );
}




export  function NavbarCarddesktop3() {
  const pathname = usePathname();

  return (
    <div className="w-[1000px]  bg-white px-[40px] pt-[54px] pb-[83px] rounded-[10px] shadow hidden xl:flex">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[52px]">
        {Resources.map((section, index) => (
          <div key={index}>
            <h3 className="text-mygrey font-semibold text-lg mb-4">
              {section.title}
            </h3>
            <div className="space-y-4">
              {section.links.map((link, i) => {
                const isActive = pathname === link.path;
                const IconComponent = link.icon;
                
                return (
                  <Link
                    href={link.path}
                    key={i}
                    className={`flex max-w-[365px] items-start gap-3 px-5 py-3 rounded-md hover:bg-[#F6F6F6] transition-colors duration-200 ${
                      isActive ? "bg-[#F6F6F6]" : ""
                    }`}
                  >
                    <IconComponent isActive={isActive} />
                    <div>
                      <p className={`text-base ${isActive?"text-mygreen":"text-myblack"} font-semibold`}>
                        {link.name}
                      </p>
                      <p className="text-[#8C8C8C] text-sm max-w-[284px] font-medium">
                        {link.text}
                      </p>
                    </div>
                  </Link>
                );
              })}
            
            </div>
          </div>
        ))}
          <div>
                <img
                src="/images/resources.svg"/>

                <p className="font-semibold text-base text-myblack  leading-[100%] tracking-[0%] mt-2">We’ve just released an update!</p>
              </div>
      </div>
    </div>
  );
}