"use client";

import { useEffect, useState } from "react";

export default function Timer() {
  const [time, setTime] = useState({
    days: 3,
    hours: 23,
    minutes: 19,
    seconds: 56,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => {
        if (
          prev.days === 0 &&
          prev.hours === 0 &&
          prev.minutes === 0 &&
          prev.seconds === 0
        ) {
          return { days: 3, hours: 23, minutes: 19, seconds: 56 };
        }

        let newTime = { ...prev };
        if (newTime.seconds > 0) {
          newTime.seconds--;
        } else {
          newTime.seconds = 59;
          if (newTime.minutes > 0) {
            newTime.minutes--;
          } else {
            newTime.minutes = 59;
            if (newTime.hours > 0) {
              newTime.hours--;
            } else {
              newTime.hours = 23;
              if (newTime.days > 0) {
                newTime.days--;
              }
            }
          }
        }
        return newTime;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center gap-4">
      {Object.entries(time).map(([unit, value]) => (
        <div key={unit} className="text-center">
          <div className="text-sm uppercase text-gray-500">{unit}</div>
          <div className="text-3xl font-bold">
            {String(value).padStart(2, "0")}
            {unit !== "seconds" && (
              <span className="text-primary mx-2">:</span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}