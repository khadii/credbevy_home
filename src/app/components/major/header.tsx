"use client";
import Link from "next/link";
import React, { useState } from "react";
import CustomButton, { CustomButtonMobile } from "../customButton";
import { ChevronDown, Menu, X } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const logo = "/images/logo.svg";
  
  const footerData = [
    {
      title: "Products",
      links: [
        { name: "Features", path: "/features" },
        { name: "Integrations", path: "/integrations" },
        { name: "Support", path: "/support" },
        { name: "Why CredBevy", path: "/why-credbevy" },
      ],
    },
    {
      title: "Features",
      links: [
        { name: "Multiple loan offers", path: "/guides" },
        { name: "Credit Score", path: "/emi-calculator" },
        { name: "Free Transfer", path: "/blog" },
        { name: "Pay Bills", path: "/security" },
        { name: "Integrations", path: "/security" },
        { name: "API Integrations", path: "/security" },
        { name: "Partner Integrations", path: "/security" },
      ],
    },
    {
      title: "Partners",
      links: [
        { name: "Guides", path: "/guides" },
        { name: "EMI Calculator", path: "/emi-calculator" },
        { name: "Blog", path: "/blog" },
        { name: "Security", path: "/security" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About us ", path: "/guides" },
        { name: "Contact us", path: "/emi-calculator" },
        { name: "Career", path: "/blog" },
        { name: "News and Media", path: "/security" },
      ]},
    // {
    //   title: "Pricing",
    //   links: [
    //     { name: "About", path: "/about" },
    //     { name: "Contact", path: "/contact" },
    //     { name: "Media", path: "/media" },
    //     { name: "Partners", path: "/partners" },
    //     { name: "Team", path: "/team" },
    //   ],
    // },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
            {footerData.map((data, index) => (
              <div key={index} className="relative">
                <div 
                  className="font-bold text-base text-myblack flex items-center space-x-2 cursor-pointer"
                  onClick={() => toggleDropdown(index)}
                >
                  <p>{data.title}</p>
                  <ChevronDown 
                    size={16} 
                    className={`transition-transform ${openIndex === index ? "rotate-180" : ""}`}
                  />
                </div>
                
                {/* Dropdown Menu */}
                {openIndex === index && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-50">
                    {data.links.map((link, linkIndex) => (
                      <Link 
                        key={linkIndex} 
                        href={link.path}
                        className="block px-4 py-2 text-sm text-mygrey hover:bg-gray-100"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                )}
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
          <div className="absolute top-0 right-6 left-6 bg-white z-40 overflow-y-auto shadow-lg rounded-lg pb-10">
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
              {footerData.map((data, index) => (
                <div key={index} className="pb-4">
                  <div 
                    className="flex justify-between items-center text-sm font-bold text-myblack cursor-pointer"
                    onClick={() => toggleDropdown(index)}
                  >
                    <span>{data.title}</span>
                    <ChevronDown 
                      size={20} 
                      className={`transition-transform ${openIndex === index ? "rotate-180" : ""}`}
                    />
                  </div>
                  
                  {/* Mobile Dropdown Items */}
                  {openIndex === index && (
                    <div className="mt-4  space-y-4">
                      {data.links.map((link, linkIndex) => (
                        <Link
                          key={linkIndex}
                          href={link.path}
                          onClick={toggleMobileMenu}
                          className="block text-sm text-mygrey font-semibold"
                        >
                          {link.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Mobile Get Started Button */}
              <div className="mt-13">
                <CustomButtonMobile
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