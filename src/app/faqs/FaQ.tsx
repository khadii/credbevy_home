'use client'

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';


const FAQ = ({data}:{data:any}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);


  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
   <section className='w-full flex justify-center'>
     <div className=" px-[16px] lg:px-24 w-full">
      
      <div className="space-y-4">
        {data.map((item:any, index:any) => (
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
    </div>
   </section>
  );
};

export default FAQ;
