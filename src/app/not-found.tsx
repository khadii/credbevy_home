'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation'; 
import { Home, ArrowLeft } from 'lucide-react';
import Header from './components/major/header';
import Footertwo from './components/major/Footertwo';

export default function ErrorPage() {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter(); 

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4">
        <div className="max-w-lg w-full text-center">
          {/* 404 Number */}
          <div className="relative mb-8">
            <h1
              className={`text-8xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 transition-transform duration-300 ${isHovered ? 'scale-110' : 'scale-100'}`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              404
            </h1>
            <div className="absolute inset-0 text-8xl md:text-9xl font-bold text-yellow-200 opacity-20 -z-10 blur-sm">
              404
            </div>
          </div>

          {/* Error Message */}
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
              Page not found
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Oops! The page you are looking for does not exist or has been deleted.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <button
              onClick={() => router.push('/')} 
              className="group flex items-center gap-2 bg-[#156064] text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:shadow-lg hover:scale-105"
            >
              <Home size={18} />
              Go back Home
            </button>

            <button
              onClick={() => router.back()} 
              className="group flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:shadow-lg hover:scale-105"
            >
              <ArrowLeft size={18} />
              Go Back
            </button>
          </div>

          {/* Decorative Bouncing Dots */}
          <div className="mt-12 flex justify-center space-x-2">
            <div className="w-2 h-2 bg-yellow-400 rounded-full bounce-sm"></div>
            <div className="w-2 h-2 bg-yellow-500 rounded-full bounce-md" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-2 h-2 bg-orange-500 rounded-full bounce-lg" style={{ animationDelay: '0.2s' }}></div>
          </div>
        </div>
      </div>
      <Footertwo />

      {/* Custom Bounce Animations */}
      <style jsx>{`
        @keyframes bounceSm {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @keyframes bounceMd {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }

        @keyframes bounceLg {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-30px); }
        }

        .bounce-sm {
          animation: bounceSm 1s infinite ease-in-out;
        }

        .bounce-md {
          animation: bounceMd 1s infinite ease-in-out;
        }

        .bounce-lg {
          animation: bounceLg 1s infinite ease-in-out;
        }
      `}</style>
    </>
  );
}
