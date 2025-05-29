'use client'

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import CustomButton from './customButton'
import { borrowerFaqItems } from '../library/faq';
import { useRouter } from 'next/navigation';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);
const router = useRouter()

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
        {(showAll ? borrowerFaqItems : borrowerFaqItems.slice(0, 5)).map((item, index) => (
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

      {borrowerFaqItems.length > 5 && (
        <div className="mt-12 w-full pb-[245px] justify-center flex ">
          <CustomButton 
            text={showAll ? "See Less" : "See All"} 
            className="px-[130px] cursor-pointer"
            onClick={() =>router.push('/faqs')}
          />
        </div>
      )}
    </div>
   </section>
  );
};

export default FAQ;
