"use client";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import CustomButton, { CustomButtonMobile } from "../customButton";
import { ChevronDown, Menu, X } from "lucide-react";
import NavbarCard, { NavbarCard2, NavbarCarddesktop, NavbarCarddesktop2, NavbarCarddesktop3, NavbarCardm3 } from "./Cards/navbarCard";
import Image from "next/image";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const logo = "/images/logo.svg";
  
  const footerData = [
    {
      title: "Products",
      data: <NavbarCard2 />
    },
    {
      title: "Features",
      data: <NavbarCard />
    },
    {
      title: "Partners",
      data: <NavbarCardm3 />
    },
    {
      title: "Company",
      data: <NavbarCard />
    },
  ];

  const footerDataDesktop = [
    {
      title: "Products",
      data: <NavbarCarddesktop2 />
    },
    {
      title: "Features",
      data: <NavbarCarddesktop />
    },
    {
      title: "Partners",
      data: <NavbarCarddesktop3 />
    },
    {
      title: "Resources",
      data: <NavbarCarddesktop3 />
    },
  ];
  
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const dropdownRefs = useRef<(HTMLDivElement | null)[]>([]);
  const triggerRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggleDropdown = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Check if click is outside all dropdowns and their triggers
      const isOutside = dropdownRefs.current.every((ref, index) => {
        const trigger = triggerRefs.current[index];
        return (
          (!ref || !ref.contains(event.target as Node)) &&
          (!trigger || !trigger.contains(event.target as Node))
        );
      });

      if (isOutside) {
        setOpenIndex(null);
      }
    };

    // Add when component mounts
    document.addEventListener("mousedown", handleClickOutside);
    
    // Clean up when component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="lg:w-full xl:flex lg:justify-center lg:px-24 py-10 hidden relative">
        <div className="w-full lg:flex items-center justify-between max-w-7xl">
          {/* Logo */}
          <div>
          <Image src={logo} alt="credbevy" width={185} height={44} />

          </div>

          {/* Navigation Links */}
          <div className="flex space-x-6 lg:space-x-10 relative">
            {footerDataDesktop.map((data, index) => {
              // Calculate position for each dropdown
              let dropdownPosition = "";
              if (index === 0) {
                // First item
                dropdownPosition = "-left-[380px]"; 
              } else if (index === footerDataDesktop.length - 1) {
                // Last item
                dropdownPosition = "-left-[600px]";
              } else {
                // Middle items
                dropdownPosition ="-left-[500px]"; 
              }

              return (
                <div key={index} className="relative">
                  <div 
                    ref={el => { triggerRefs.current[index] = el; }}
                    className="font-bold text-base text-myblack flex items-center space-x-2 cursor-pointer"
                    onClick={() => toggleDropdown(index)}
                  >
                    <p>{data.title}</p>
                    <ChevronDown 
                      size={16} 
                      className={`transition-transform ${openIndex === index ? "rotate-180" : ""}`}
                    />
                  </div>
                  
                  {openIndex === index && (
                    <div 
                      ref={el => { dropdownRefs.current[index] = el; }}
                      className={`w-full absolute ${dropdownPosition} top-12 z-50`}
                    >
                      {data.data}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Get Started Button */}
          <div>
            <CustomButton text="Get Started" className="px-7" />
          </div>
        </div>
      </nav>

      {/* Mobile and Tablet Navigation */}
      <nav className="xl:hidden sticky top-0 left-0 w-full z-50 bg-bg">
        <div className="flex justify-between items-center px-4 py-4 overflow-scroll ">
          {/* Mobile Logo */}
          <div>
          <Image src={logo} alt="credbevy" width={157} height={37} />

          </div>

          {/* Mobile Menu Toggle */}
          <button onClick={toggleMobileMenu} className="focus:outline-none">
            {<Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
         <div 
      className="fixed top-0 right-6 left-6 bg-white z-40 overflow-y-auto max-h-screen shadow-lg rounded-lg pb-10"
      ref={el => { dropdownRefs.current[footerDataDesktop.length] = el; }}
    >
            <div className="flex justify-between items-center px-4 py-4">
              {/* Mobile Logo */}
              <div>
              <Image src={logo} alt="credbevy" width={157} height={37} />

              </div>

              {/* Mobile Menu Toggle */}
              <button onClick={toggleMobileMenu} className="focus:outline-none">
                {isMobileMenuOpen ? (
                  <X size={32} className="text-mygreen" />
                ) : (
                  <Menu size={24} />
                )}
              </button>
            </div>
            <div className="px-4 pt-15 space-y-6">
              {footerData.map((data, index) => (
                <div key={index} className="pb-4">
                  <div 
                    ref={el => { triggerRefs.current[footerDataDesktop.length + index] = el; }}
                    className="flex justify-between items-center text-sm font-bold text-myblack cursor-pointer"
                    onClick={() => toggleDropdown(index)}
                  >
                    <span className="pb-4">{data.title}</span>
                    <ChevronDown 
                      size={20} 
                      className={`transition-transform ${openIndex === index ? "rotate-180" : ""}`}
                    />
                  </div>
                  
                  {/* Mobile Dropdown Items */}
                  {openIndex === index && (
                    <div ref={el => { dropdownRefs.current[footerDataDesktop.length + index] = el; }}   className="overflow-y-auto max-h-[50vh]">
                      {data.data}
                    </div>
                  )}
                </div>
              ))}

              {/* Mobile Get Started Button */}
              <div className="mt-13">
                <CustomButton
                  text="Get Started"
                  className="w-full"
                  onClick={toggleMobileMenu}
                />
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}