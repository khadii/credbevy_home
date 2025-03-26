"use client";
import Link from "next/link";
import React, { useState } from "react";
import CustomButton, { CustomButtonMobile } from "../customButton";
import { ChevronDown, Menu, X } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const logo = "/images/logo.svg";
  const navitems = [
    { name: "Products", link: "/Products" },
    { name: "Features", link: "/Features" },
    { name: "Partners", link: "/Partners" },
    { name: "Resources", link: "/Resources" },
    { name: "Pricing", link: "/Pricing" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="lg:w-full lg:flex lg:justify-center lg:px-24 py-10 hidden ">
        <div className="w-full lg:flex items-center justify-between max-w-7xl">
          {/* Logo */}
          <div>
            <img src={logo} alt="credbevy" className="w-full h-full" />
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-6 lg:space-x-10">
            {navitems.map((data, index) => (
              <div key={index}>
                <Link href={data.link}>
                  <div className="font-semibold text-base text-myblack flex items-center space-x-2">
                    <p>{data.name}</p>
                    <ChevronDown size={16} />
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {/* Get Started Button */}
          <div>
            <CustomButton text="Get Started" className="px-7" />
          </div>
        </div>
      </nav>

      {/* Mobile and Tablet Navigation */}
      <nav className="lg:hidden sticky top-0 left-0 w-full z-50 bg-bg ">
        <div className="flex justify-between items-center px-4 py-4">
          {/* Mobile Logo */}
          <div>
            <img src={logo} alt="credbevy" className="h-8 w-auto" />
          </div>

          {/* Mobile Menu Toggle */}
          <button onClick={toggleMobileMenu} className="focus:outline-none">
            {<Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="absolute top-0 right-6 left-6 bg-white  z-40 overflow-y-auto shadow-lg rounded-lg pb-10">
            <div className="flex justify-between items-center px-4 py-4">
              {/* Mobile Logo */}
              <div>
                <img src={logo} alt="credbevy" className="h-8 w-auto" />
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
              {navitems.map((data, index) => (
                <div key={index} className=" pb-4">
                  <Link
                    href={data.link}
                    onClick={toggleMobileMenu}
                    className="flex justify-between items-center text-sm font-bold text-myblack"
                  >
                    <span>{data.name}</span>
                    <ChevronDown size={20} />
                  </Link>
                </div>
              ))}

              {/* Mobile Get Started Button */}
              <div className="mt-13">
                <CustomButtonMobile
                  text="Get Started"
                  className="w-full "
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
