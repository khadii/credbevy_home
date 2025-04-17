import Image from 'next/image'
import React from 'react'

interface CardProps {
  imageSrc: string
  Name: string
}

export default function Card({ imageSrc, Name }: CardProps) {
  return (
    <div className="max-w-[400px] max-h-[193px] rounded-[8px] w-full h-full bg-white px-[71px] py-[42px] flex justify-center flex-col items-center">
      <div className="relative w-[40px] h-[40px] mb-[40px]">
        <Image
          src={imageSrc}
          alt="features"
          fill
          className="object-contain" 
          priority
        />
      </div>
      <div>
        <p className="text-myblack font-semibold text-2xl leading-[100%]">
          {Name}
        </p>
      </div>
    </div>
  )
}
