"use client";

import { useState } from "react";
import { CustomButtonTwo } from "../customButton";
import Link from "next/link";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import Image from "next/image";
export default function Footertwo() {
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
      title: "Resources",
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
        { name: "About", path: "/about" },
        { name: "Contact", path: "/contact" },
        { name: "Media", path: "/media" },
        { name: "Partners", path: "/partners" },
        { name: "Team", path: "/team" },
      ],
    },
  ];
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };





  
  return (
    <footer className="w-full relative overflow-hidden">
     <div className="w-full flex justify-center bg-bgdarkgreen">
  <div className="w-full flex justify-center lg:px-24 px-[22px] lg:py-[163px] py-[144px]">
    <div className="w-full flex justify-center">
      <div className="w-full lg:flex-row flex flex-col items-center lg:items-center justify-center lg:justify-between max-w-[1279px] gap-8">
      <div className="w-full flex flex-col items-center lg:items-start">
  <p className="font-bold lg:text-[45px] leading-[150%] tracking-[0%] md:max-w-[666px] text-mygreen text-[32px] mb-2 max-w-[383px] text-left">
    Start getting custom-made loans in seconds
  </p>
  <h1 className="font-medium italic text-myblack lg:text-[24px] text-sm leading-[150%] tracking-[0%] lg:max-w-[666px] text-mygreen max-w-[383px] text-left">
    Take the first step toward achieving your financial goals.
  </h1>
</div>
        <div className="w-full lg:w-[342px] flex justify-center lg:justify-start">
          <CustomButtonTwo text={"Get Started Now"} className="w-full" />
        </div>
      </div>
    </div>
  </div>
  <div className="absolute -left-24  -top-24">
    <Image src="images/Group.svg" alt={""} height={570 } width={570}/> 
  </div>
</div>
      {/* white */}
      <div className=" flex justify-center pt-[63px] lg:pt-[90px] lg:pl-[136px] lg:pr-[80px] px-4 lg:px-0">
        <div className="  w-full flex lg:flex-row lg:gap-[121px] flex-col gap-6 lg:mb-[90px] mb-[52px] max-w-[1224px]">
          {/* logosection */}
          <div className="  ">
            <Image
              src="/images/desktoplogo.svg"
              alt="logo"
              className="w-auto h-auto lg:flex hidden"
              height={135}
              width={234}
            />
          </div>

          {/* features section */}

          <div className="lg:flex justify-between   w-full hidden ">
            {footerData.map((section, index) => (
              <div key={index} className="text-left">
                <h3 className="font-semibold mb-4 text-base sm:text-lg text-myblack">
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.links.map((link, i) => (
                    <li key={i}>
                      <Link
                        href={link.path}
                        className="hover:underline text-myblack text-xs sm:text-sm font-medium"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* mobile
           */}
          <div className=" ">
            <Image
              src="/images/mobile.svg"
              alt="logo"
              className="w-auto h-auto lg:hidden flex  "
              height={93}
              width={394}
            />
          </div>
          <div className="w-full lg:hidden flex flex-col gap-6">
            {footerData.map((section, index) => (
              <div key={index} className="text-left ">
                <button
                  onClick={() => toggleDropdown(index)}
                  className="font-semibold mb-4 text-base sm:text-lg text-myblack flex justify-between items-center w-full"
                >
                  {section.title}
                  <span
                    className={`transform transition-transform ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </button>
                <ul
                  className={`space-y-2 overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-96" : "max-h-0"
                  }`}
                >
                  {section.links.map((link, i) => (
                    <li key={i}>
                      <Link
                        href={link.path}
                        className="hover:underline text-myblack text-xs sm:text-sm font-medium block py-1"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        
      </div>
      {/* line */}
      <div className="w-full flex justify-center lg:pl-24 lg:pr-16 px-[22px]">
  <div className="w-full flex flex-col max-w-[1279px] items-center text-center">
    <div className="border-t text-myblack mb-7 sm:mb-7 w-full"></div>

    <div className="flex flex-col sm:flex-row justify-between items-center space-y-6 sm:space-y-0 mb-8 sm:mb-[17px] w-full">
      <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-6 sm:space-y-0 items-center">
        <p className="text-xs sm:text-sm font-normal text-myblack">
          2023 CredBevy. All right reserved.
        </p>
        <div className="flex flex-row sm:flex-row space-x-6 sm:space-x-6 space-y-2 sm:space-y-0">
          <Link
            href="/privacy-policy"
            className="text-xs sm:text-sm font-normal text-myblack underline"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms-of-service"
            className="text-xs sm:text-sm font-normal text-myblack underline"
          >
            Terms of Service
          </Link>
          <Link
            href="/cookies-settings"
            className="text-xs sm:text-sm font-normal text-myblack underline"
          >
            Cookies Settings
          </Link>
        </div>
      </div>

      <div className="flex space-x-5 text-myblack sm:mb-3 items-center">
        <Link href="https://facebook.com" aria-label="Facebook">
          <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
        </Link>
        <Link href="https://instagram.com" aria-label="Instagram">
          <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
        </Link>
        <Link href="https://twitter.com" aria-label="Twitter">
          <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
        </Link>
        <Link href="https://linkedin.com" aria-label="LinkedIn">
          <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
        </Link>
      </div>
    </div>

    <div className="text-xs sm:text-sm text-myblack font-normal w-full pb-[78px] text-center">
      <p>
        CredBevy and featured clients are financial technology companies and not
        a bank. Banking services are provided by Credbevy's partner banks who
        are Member FDIC.
      </p>
    </div>
  </div>
</div>

    </footer>
  );
}
