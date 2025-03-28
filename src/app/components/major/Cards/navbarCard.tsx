"use client";
import React from "react";
import {
  FaUserTie,
  FaHandsHelping,
  FaBriefcase,
  FaBalanceScale,
  FaNewspaper,
  FaQuestionCircle,
  FaBook,
  FaGraduationCap,
} from "react-icons/fa";

const product = [
  {
    title: "Company",
    links: [
      {
        name: "About Us",
        text: "Learn about our story, mission, and values.",
        icon: FaUserTie,
      },
      {
        name: "Contact Us",
        text: "Reach out to us, we are looking forward to hearing from you.",
        icon: FaHandsHelping,
      },
      {
        name: "Career",
        text: "We are always looking for trained professionals.",
        icon: FaBriefcase,
      },
      {
        name: "Legal",
        text: "Legal documentation and information needed for public viewing.",
        icon: FaBalanceScale,
      },
    ],
  },
  {
    title: "Resources",
    links: [
      {
        name: "News and Media",
        text: "The latest industry news and trends.",
        icon: FaNewspaper,
      },
      {
        name: "FAQs",
        text: "Frequently Asked Questions about our services.",
        icon: FaQuestionCircle,
      },
      {
        name: "Press",
        text: "Press releases, news, and writing resources.",
        icon: FaBook,
      },
      {
        name: "Educational Videos",
        text: "Learn more about our services through videos.",
        icon: FaGraduationCap,
      },
    ],
  },
];

export default function NavbarCard() {
  return (
    <div className="max-w-[1240px] bg-white pl-[40px] pt-[54px] pb-[83px] rouned-[10px]">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[52px]">
        {product.map((section, index) => (
          <div key={index}>
            <h3 className="text-mygrey font-semibold text-lg mb-4">
              {section.title}
            </h3>
            <div className="space-y-4">
              {section.links.map((link, i) => (
                <div
                  key={i}
                  className="flex max-w-[365px] items-start gap-3 px-5 py-3 rounded-md hover:bg-[#F6F6F6] transition-colors duration-200 cursor-pointer"
                >
                  <link.icon className="text-myblack w-5 h-5" />
                  <div>
                    <p className="text-base text-myblack font-semibold">
                      {link.name}
                    </p>
                    <p className="text-[#8C8C8C] text-sm max-w-[284px] font-medium">
                      {link.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
