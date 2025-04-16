"use client";

import { product, Features, Resources } from "@/app/library/navdata";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

const linkStyles = {
  active: {
    bg: "bg-[#F6F6F6]",
    text: "text-mygreen",
    icon: "text-mygreen"
  },
  inactive: {
    text: "text-myblack",
    icon: "text-myblack"
  },
  hover: {
    group: "group hover:bg-[#F6F6F6]",
    text: "group-hover:text-mygreen",
    icon: "group-hover:text-mygreen"
  }
};

export default function NavbarCard() {
  const pathname = usePathname();

  return (
    <div className="bg-white rounded-[10px] px-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[20px] overflow-y-scroll h-full">
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
                    className={`group flex max-w-[365px] items-start gap-3 px-5 py-3 rounded-md transition-colors duration-200 
                      ${linkStyles.hover.group} ${isActive ? linkStyles.active.bg : ""}`}
                  >
                    <div className={`${isActive ? linkStyles.active.icon : linkStyles.inactive.icon} 
                      ${linkStyles.hover.icon}`}>
                      <IconComponent isActive={isActive} />
                    </div>
                    <div>
                      <p className={`text-base font-semibold 
                        ${isActive ? linkStyles.active.text : linkStyles.inactive.text} 
                        ${linkStyles.hover.text}`}>
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

export function NavbarCard2() {
  const pathname = usePathname();

  return (
    <div className="bg-white rounded-[10px] px-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[20px] overflow-y-scroll h-full">
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
                    className={`group flex max-w-[365px] items-start gap-3 px-5 py-3 rounded-md transition-colors duration-200 
                      ${linkStyles.hover.group} ${isActive ? linkStyles.active.bg : ""}`}
                  >
                    <div className={`${isActive ? linkStyles.active.icon : linkStyles.inactive.icon} 
                      ${linkStyles.hover.icon}`}>
                      <IconComponent isActive={isActive} />
                    </div>
                    <div>
                      <p className={`text-base font-semibold 
                        ${isActive ? linkStyles.active.text : linkStyles.inactive.text} 
                        ${linkStyles.hover.text}`}>
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

export function NavbarCardm3() {
  const pathname = usePathname();

  return (
    <div className="bg-white rounded-[10px] px-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[20px] overflow-y-scroll h-full">
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
                    className={`group flex max-w-[365px] items-start gap-3 px-5 py-3 rounded-md transition-colors duration-200 
                      ${linkStyles.hover.group} ${isActive ? linkStyles.active.bg : ""}`}
                  >
                    <div className={`${isActive ? linkStyles.active.icon : linkStyles.inactive.icon} 
                      ${linkStyles.hover.icon}`}>
                      <IconComponent isActive={isActive} />
                    </div>
                    <div>
                      <p className={`text-base font-semibold 
                        ${isActive ? linkStyles.active.text : linkStyles.inactive.text} 
                        ${linkStyles.hover.text}`}>
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

export function NavbarCarddesktop() {
  const pathname = usePathname();

  return (
    <div className="w-[1000px] bg-white px-[40px] pt-[54px] pb-[83px] rounded-[10px] shadow hidden xl:flex">
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
                    className={`group flex max-w-[365px] items-start gap-3 px-5 py-3 rounded-md transition-colors duration-200 
                      ${linkStyles.hover.group} ${isActive ? linkStyles.active.bg : ""}`}
                  >
                    <div className={`${isActive ? linkStyles.active.icon : linkStyles.inactive.icon} 
                      ${linkStyles.hover.icon}`}>
                      <IconComponent isActive={isActive} />
                    </div>
                    <div>
                      <p className={`text-base font-semibold 
                        ${isActive ? linkStyles.active.text : linkStyles.inactive.text} 
                        ${linkStyles.hover.text}`}>
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
          <Image
            src="/images/features.svg" 
            alt="Features"
            height={300}
            width={300}
            priority={true} 
          />
          <p className="font-semibold text-base text-myblack leading-[100%] tracking-[0%] mt-2">
            Learn more about our Features
          </p>
        </div>
      </div>
    </div>
  );
}

export function NavbarCarddesktop2() {
  const pathname = usePathname();

  return (
    <div className="w-[1000px] bg-white px-[40px] pt-[54px] pb-[83px] rounded-[10px] shadow hidden xl:flex">
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
                    className={`group flex max-w-[365px] items-start gap-3 px-5 py-3 rounded-md transition-colors duration-200 
                      ${linkStyles.hover.group} ${isActive ? linkStyles.active.bg : ""}`}
                  >
                    <div className={`${isActive ? linkStyles.active.icon : linkStyles.inactive.icon} 
                      ${linkStyles.hover.icon}`}>
                      <IconComponent isActive={isActive} />
                    </div>
                    <div>
                      <p className={`text-base font-semibold 
                        ${isActive ? linkStyles.active.text : linkStyles.inactive.text} 
                        ${linkStyles.hover.text}`}>
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
          <Image
            priority={true} 
            src="/images/product.svg" 
            height={300}
            width={300} 
            alt="Product"
          />
          <p className="font-semibold text-base text-myblack leading-[100%] tracking-[0%] mt-2">
            Learn more about our Products
          </p>
        </div>
      </div>
    </div>
  );
}

export function NavbarCarddesktop3() {
  const pathname = usePathname();

  return (
    <div className="w-[1000px] bg-white px-[40px] pt-[54px] pb-[83px] rounded-[10px] shadow hidden xl:flex">
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
                    className={`group flex max-w-[365px] items-start gap-3 px-5 py-3 rounded-md transition-colors duration-200 
                      ${linkStyles.hover.group} ${isActive ? linkStyles.active.bg : ""}`}
                  >
                    <div className={`${isActive ? linkStyles.active.icon : linkStyles.inactive.icon} 
                      ${linkStyles.hover.icon}`}>
                      <IconComponent isActive={isActive} />
                    </div>
                    <div>
                      <p className={`text-base font-semibold 
                        ${isActive ? linkStyles.active.text : linkStyles.inactive.text} 
                        ${linkStyles.hover.text}`}>
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
          <Image
            priority={true} 
            src="/images/resources.svg"
            height={300}
            width={300} 
            alt="Resources"
          />
          <p className="font-semibold text-base text-myblack leading-[100%] tracking-[0%] mt-2">
            We've just released an update!
          </p>
        </div>
      </div>
    </div>
  );
}