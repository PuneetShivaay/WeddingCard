"use client";

import { useState, useEffect, useMemo } from 'react';

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isPast: boolean;
};

const CountdownTimer = ({ targetDate }: { targetDate: string }) => {
  const targetTime = useMemo(() => new Date(targetDate).getTime(), [targetDate]);
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = now - targetTime;
      const absDiff = Math.abs(difference);

      return {
        days: Math.floor(absDiff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((absDiff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((absDiff / 1000 / 60) % 60),
        seconds: Math.floor((absDiff / 1000) % 60),
        isPast: difference >= 0
      };
    };

    // Initial calculation on mount
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetTime]);

  const renderUnit = (value: number | undefined, label: string) => (
    <div className="flex flex-col items-center justify-center bg-accent/10 p-2 sm:p-4 rounded-xl border border-accent/20 min-w-[70px] md:min-w-[100px] shadow-inner">
      <span className="text-2xl md:text-5xl font-headline font-bold text-primary tabular-nums">
        {value !== undefined ? String(value).padStart(2, '0') : '--'}
      </span>
      <span className="text-[10px] md:text-xs font-body uppercase tracking-widest text-primary/70 mt-1">{label}</span>
    </div>
  );

  return (
    <div className="flex flex-col items-center gap-6 w-full py-4">
      <div className="flex flex-row justify-center gap-2 md:gap-4 w-full">
        {renderUnit(timeLeft?.days, 'Days')}
        {renderUnit(timeLeft?.hours, 'Hours')}
        {renderUnit(timeLeft?.minutes, 'Minutes')}
        {renderUnit(timeLeft?.seconds, 'Seconds')}
      </div>
      {timeLeft && (
        <p className="text-sm font-body text-primary/60 italic animate-pulse">
          {timeLeft.isPast ? "Time passed since the special day" : "Time remaining until the big day"}
        </p>
      )}
    </div>
  );
};

export default CountdownTimer;
