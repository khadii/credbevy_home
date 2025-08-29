"use client";

import { useState } from "react";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail("");
      }, 3000);
    }
  };

  return (
    <div className="bg-[#156064] rounded-[20px] px-4 sm:px-8 md:px-16 pt-10 pb-10 md:pt-[71px] md:pb-[130px] max-w-[1049px] w-full mx-auto text-center">
      <h2 className="text-white text-2xl sm:text-3xl md:text-[40px] font-semibold mb-4">
        Did you enjoy reading this?
      </h2>
      <p className="text-white text-base sm:text-lg md:text-[18px] font-semibold mb-8">
        Receive regular financial education content and product updates from us
      </p>

      {!isSubmitted ? (
        <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
          <input
            type="email"
            placeholder="Your email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-4 py-3 rounded-[10px] placeholder-[#8A8B9F] placeholder:text-base focus:outline-none transition-all duration-200 bg-white text-sm"
          />
          <button
            onClick={handleSubmit}
            className="px-6 py-3 bg-white text-[#156064] font-semibold rounded-[10px] hover:bg-gray-50 focus:outline-none focus:ring-2 text-sm transition-all duration-200 transform hover:scale-105"
          >
            Sign up
          </button>
        </div>
      ) : (
        <div className="max-w-xl mx-auto mt-4">
          <div className="bg-[#156064] rounded-lg p-4">
            <p className="text-white font-semibold">Thanks for subscribing!</p>
            <p className="text-teal-100 text-sm mt-1">
              We'll send you valuable financial insights soon.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
