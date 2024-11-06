"use client"
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

type CountdownCircleProps = {
  value: number;
  label: string;
};

type CountdownState = {
  hours: number;
  days: number;
  minutes: number;
  seconds: number;
};

const CountdownCircle: React.FC<CountdownCircleProps> = ({ value, label }) => (
  <div className="flex flex-col items-center justify-center bg-white rounded-full w-12 h-12 sm:w-16 sm:h-16">
    <span className="text-lg sm:text-xl font-bold text-black">{value}</span>
    <span className="text-xs sm:text-xs text-gray-600">{label}</span>
  </div>
);

const PromoBanner: React.FC = () => {
  const [countdown, setCountdown] = useState<CountdownState>({
    hours: 23,
    days: 5,
    minutes: 59,
    seconds: 35,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-auto sm:h-96 bg-black overflow-hidden">
      <div className="absolute inset-0 flex flex-col sm:flex-row items-center sm:items-center justify-center sm:justify-between px-4 sm:px-16 py-8 sm:py-0">
        <div className="space-y-4 sm:space-y-8 z-10">
          <div>
            <span className="text-green-400 text-sm">Categories</span>
            <h1 className="text-3xl sm:text-4xl font-bold text-white mt-2">
              Enhance Your <br className="hidden sm:block" />Music Experience
            </h1>
          </div>
          
          <div className="flex space-x-2 sm:space-x-4">
            <CountdownCircle value={countdown.hours} label="Hours" />
            <CountdownCircle value={countdown.days} label="Days" />
            <CountdownCircle value={countdown.minutes} label="Minutes" />
            <CountdownCircle value={countdown.seconds} label="Seconds" />
          </div>
          
          <button className="bg-green-400 text-white px-6 py-2 sm:px-8 sm:py-3 rounded-md hover:bg-green-500 transition-colors">
            Buy Now!
          </button>
        </div>
        
        <div className="object-cover mt-8 sm:mt-0">
          <Image
            height={500}
            width={1170}
            src="/jbl-banner.png"
            alt="JBL Speaker"
            className="w-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;