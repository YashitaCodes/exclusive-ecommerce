import { ChevronLeft, ChevronRight } from 'lucide-react';
import React from 'react';

export const experimental_ppr = true;

interface SectionBannerProps {
  heading: string;
  subtext: string;
}

const SectionBanner: React.FC<SectionBannerProps> = ({ heading, subtext }) => {
  return (
    <div className="flex items-end mb-8">
      <div className="flex flex-col items-center gap-4">
        <div className="flex justify-start items-center mr-auto">
          <div className="bg-primary w-5 h-8 rounded-lg mr-4" />
          <span className="text-primary font-bold">{heading}</span>
        </div>
        <h2 className="text-3xl font-bold">{subtext}</h2>
      </div>
      <div className="flex items-center gap-2 ml-auto">
        <button className="p-2 rounded-full transition-colors bg-gray-50 cursor-not-allowed">
          <ChevronLeft className="w-5 h-5 text-black" />
        </button>
        <button className="p-2 rounded-full transition-colors bg-gray-50 cursor-not-allowed">
          <ChevronRight className="w-5 h-5 text-black" />
        </button>
      </div>
    </div>
  );
};

export default SectionBanner;
