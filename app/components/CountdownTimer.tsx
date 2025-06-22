"use client";

import { useEffect, useState } from 'react';

function CountdownTimer() {
  const initialDuration = 451 * 24 * 60 * 60 + 4 * 60 * 60 + 54 * 60 + 56; // in seconds
  const [secondsLeft, setSecondsLeft] = useState(initialDuration);

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const days = String(Math.floor(secondsLeft / (60 * 60 * 24))).padStart(2, '0');
  const hours = String(Math.floor((secondsLeft / (60 * 60)) % 24)).padStart(2, '0');
  const minutes = String(Math.floor((secondsLeft / 60) % 60)).padStart(2, '0');
  const seconds = String(secondsLeft % 60).padStart(2, '0');

  return (
    <div className="absolute bottom-6 left-6 w-40 h-40 bg-orange-500 text-white rounded-full flex flex-col items-center justify-center shadow-xl">
      <p className="text-sm mb-1">Launching in.</p>
      <div className="text-center">
        <p className="text-lg font-bold">{days} : {hours} : {minutes} : {seconds}</p>
        <p className="text-xs">Days Hours Mins Secs</p>
      </div>
    </div>
  );
}

export default CountdownTimer;