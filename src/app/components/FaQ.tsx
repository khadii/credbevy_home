'use client'

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import CustomButton from './customButton';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  const faqItems = [
    { question: "What is OneWeek?", answer: "Answer content would go here" },
    { question: "How does OneWeek work for businesses?", answer: "Answer content would go here" },
    { question: "What types of work can I apply for on OneWeek?", answer: "Answer content would go here" },
    { question: "What are the eligibility criteria to apply for a loan?", answer: "Answer content would go here" },
    { question: "How long does it take to get a loan?", answer: "Answer content would go here" },
    { question: "How long does it take to get a loan?", answer: "Answer content would go here" },
    { question: "How long does it take to get a loan?", answer: "Answer content would go here" },
    { question: "How long does it take to get a loan?", answer: "Answer content would go here" },
  ];

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
   <section className='w-full flex justify-center'>
     <div className="max-w-[1243px] px-[16px] lg:px-6 w-full">
      <div className="text-center mb-6">
        <h2 className="lg:text-[40px] text-myblack font-bold text-2xl">Frequently Asked Questions</h2>
        <p className="italic opacity-80 font-semibold text-myblack text-base text-center mb-12">What you need to know</p>
      </div>
      
      <div className="space-y-4">
        {(showAll ? faqItems : faqItems.slice(0, 5)).map((item, index) => (
          <div key={index} className="border border-[#606060] rounded-sm overflow-hidden">
            <button
              className="w-full flex justify-between items-center p-4 text-left hover:bg-gray-50 focus:outline-none"
              onClick={() => toggleQuestion(index)}
            >
              <span className='text-base font-semibold text-myblack'>{item.question}</span>
              <ChevronDown className="h-5 w-5 text-myblack" />
            </button>
            
            {openIndex === index && (
              <div className="p-4 bg-gray-50 border-t border-gray-200">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {faqItems.length > 5 && (
        <div className="mt-12 w-full pb-[245px] justify-center flex">
          <CustomButton 
            text={showAll ? "See Less" : "See All"} 
            className="px-[130px]"
            onClick={() => setShowAll(!showAll)}
          />
        </div>
      )}
    </div>
   </section>
  );
};

export default FAQ;
