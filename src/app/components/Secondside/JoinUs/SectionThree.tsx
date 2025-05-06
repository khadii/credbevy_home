import React from 'react'

export default function SectionThree() {
  const values = [
    {
      id: "01",
      title: "Impactful Work",
      description:
        "You'll be part of a mission-driven company focused on creating financial inclusion and opportunities for everyone. We are at the forefront of innovation in the fintech space, giving you the chance to work on meaningful projects that transform lives.",
    },
    {
      id: "02",
      title: "Collaborative Culture",
      description:
        "We believe in the power of collaboration. Our team is made up of diverse, driven, and talented individuals who work together to solve complex problems and drive innovation. We value openness, transparency, and constant learning.",
    },
    {
      id: "03",
      title: "Growth Opportunities",
      description:
        "Whether you're just starting your career or you're an experienced professional, Credbevy provides opportunities for growth and development. We encourage continuous learning and offer mentorship programs, workshops.",
    },
    {
      id: "04",
      title: "Work-Life Balance",
      description:
        "We believe that a healthy work-life balance is key to productivity and creativity. At Credbevy, we offer flexible working hours, remote work options, and generous paid time off to ensure you have time to recharge.",
    },
  ];

  return (
    <section className="w-full flex justify-center mb-24 sm:mb-[270px] px-4 sm:px-[15px] lg:px-24">
      <div className="w-full max-w-7xl">
        <div className="w-full flex flex-col items-center text-center mb-10">
          <p className="font-bold text-[32px] sm:text-[48px] lg:text-[64px] leading-tight text-myblack mb-6 max-w-[700px]">
            Why Work With Us?
          </p>
          <h2 className="font-medium text-base sm:text-lg lg:text-[20px] leading-snug text-myblack max-w-[750px]">
            At Credbevy, we offer more than just a job—we provide a platform for you to grow and contribute to shaping the future of lending
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-y-[40px] md:gap-x-16 lg:gap-x-[209px]">
          {values.map((value) => (
            <div key={value.id} className="max-w-full">
              <div className="text-[#156064] text-xl sm:text-[24px] font-medium">
                {value.id}.
              </div>
              <p className="border-t-2 border-myblack mt-4 pb-6"></p>
              <h3 className="text-xl sm:text-2xl font-semibold text-myblack mb-4">
                {value.title}
              </h3>
              <p className="text-myblack text-sm sm:text-base leading-relaxed font-medium">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
