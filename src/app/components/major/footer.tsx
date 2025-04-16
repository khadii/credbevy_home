import React from "react";
import CustomButton, { CustomButtonTwo } from "../customButton";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
const logo = "/images/logo.svg";
export default function Footer() {
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

  return (
    <footer className="bg-bgdarkgreen w-full flex justify-center lg:px-24 px-4 md:px-4 relative">
      <div className=" max-w-7xl w-full pb-[72px] relative ">
        {/* title */}
        <div className="lg:text-center py-[40px] sm:py-[60px] ">
          <p className="text-mywhite font-bold text-[32px]  lg:text-[64px]">
            Ready to Get Started?
          </p>
          {/* subtext */}
          <h1 className="text-mywhite text-lg sm:text-xl  lg:text-2xl font-medium italic mt-2 sm:mt-4">
            Take the first step toward achieving your financial goals.
          </h1>
        </div>
        {/* Get Started Now button */}
        <div className="w-full lg:justify-center flex pb-[60px] sm:pb-[80px]  lg:pb-[104px]">
          <CustomButtonTwo text={"Get Started Now"} className="px-12  lg:px-28" />
        </div>

        {/* footer links */}
        <div className=" w-full">
        <div className="flex flex-col lg:flex-row lg:items-start space-y-8 lg:space-y-0 lg:space-x-[214px] py-[40px] sm:py-[60px] lg:py-[90px]">
  {/* logo */}
  <div className="flex  lg:justify-start">
    <Image
     src={logo} alt="credbevy" className="w-[120px] sm:w-[140px] h-full" />
  </div>

  {/* footer links */}
  <div className="flex flex-col sm:flex-row sm:flex-wrap gap-8 sm:gap-12 px-2 w-full md:justify-start lg:justify-between">
    {footerData.map((section, index) => (
      <div key={index} className="text-left">
        <h3 className="font-semibold mb-4 text-base sm:text-lg text-mywhite">
          {section.title}
        </h3>
        <ul className="space-y-2">
          {section.links.map((link, i) => (
            <li key={i}>
              <Link
                href={link.path}
                className="hover:underline text-mywhite text-xs sm:text-sm font-medium"
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

        {/* media */}
        <div className="max-w-[1040px] mx-auto md:px-4 sm:px-6">
          <div className="border-t text-mywhite mb-6 sm:mb-8"></div>

          <div className="flex flex-col sm:flex-row justify-between items-start space-y-6 sm:space-y-0 mb-6 sm:mb-8">
            <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-2 sm:space-y-0">
              <p className="text-xs sm:text-sm font-normal text-mywhite">2023 CredBevy. All right reserved.</p>
              <div className="flex flex-row sm:flex-row space-x-6 sm:space-x-6 space-y-2 sm:space-y-0">
                <Link href="/privacy-policy" className="text-xs sm:text-sm font-normal text-mywhite underline">
                  Privacy Policy
                </Link>
                <Link
                  href="/terms-of-service"
                  className="text-xs sm:text-sm font-normal text-mywhite underline"
                >
                  Terms of Service
                </Link>
                <Link
                  href="/cookies-settings"
                  className="text-xs sm:text-sm font-normal text-mywhite underline"
                >
                  Cookies Settings
                </Link>
              </div>
            </div>

            <div className="flex space-x-5 text-mywhite">
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

          <div className="text-xs sm:text-sm text-mywhite font-normal w-full">
            <p>
              CredBevy and featured clients are financial technology companies
              and not a bank. Banking services are provided by Credbevy's
              partner banks who are Member FDIC.
            </p>
          </div>
        </div>
        <div className="absolute top-8 right-8  lg:top-48 lg:right-20 hidden lg:flex">
        <div className="relative w-20 h-20">
          <div className="absolute top-0 left-0 w-6 h-6  lg:w-8  lg:h-8 rounded-full bg-[#F4C418]"></div>
          <div className="absolute top-0 right-2 w-6 h-6  lg:w-8  lg:h-8 rounded-full bg-[#F4C418]"></div>
          <div className="absolute bottom-0 left-0 w-6 h-6  lg:w-8  lg:h-8 rounded-full bg-[#F4C418]"></div>
        </div>
      </div>
      </div>
    </footer>
  );
} 

// </div>
// <div className="absolute top-[280px] right-8  lg:top-12  lg:right-12 lg:top-48 lg:right-36">
// <div className="relative w-20 h-20">
//   <div className="absolute   top-0 right-6 lg:top-0 lg:left-0 w-6 h-6  lg:w-8  lg:h-8 rounded-full bg-[#F4C418]"></div>
//   <div className="absolute bottom-16 right-0 lg:top-0 lg:right-2 w-6 h-6  lg:w-8  lg:h-8 rounded-full bg-[#F4C418]"></div>
//   <div className="absolute   top-5 right-0 lg:bottom-0 lg:left-0 w-6 h-6  lg:w-8  lg:h-8 rounded-full bg-[#F4C418]"></div>
// </div>
// </div>
// </div>
// </footer>