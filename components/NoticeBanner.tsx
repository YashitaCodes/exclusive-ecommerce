"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function NoticeBanner() {
  const [language, setLanguage] = useState("English");
  const [showLanguages, setShowLanguages] = useState(false);

  const languages = ["English", "Spanish", "French", "German"];

  return (
    <div className="hidden md:block bg-black text-white py-2 px-4 relative">
      <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
        <div className="flex items-center gap-2 mx-auto">
          <span>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</span>
          <a href="#" className="underline hover:text-primary transition-colors">
            Shop Now
          </a>
        </div>
        <div className="relative">
          <button
            className="flex items-center gap-1 hover:opacity-80 transition-opacity"
            onClick={() => setShowLanguages(!showLanguages)}
          >
            {language} <ChevronDown className="w-4 h-4" />
          </button>
          {showLanguages && (
            <div className="absolute top-full left-0 mt-1 bg-white text-black rounded shadow-lg py-1 z-50">
              {languages.map((lang) => (
                <button
                  key={lang}
                  className="block w-full px-10 py-2 text-left hover:bg-gray-100 transition-colors"
                  onClick={() => {
                    setLanguage(lang);
                    setShowLanguages(false);
                  }}
                >
                  {lang}
                </button>
              ))}
            </div>
          )}
        </div>
        <div className="w-20"></div>
      </div>
    </div>
  );
}