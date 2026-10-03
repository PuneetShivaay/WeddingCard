"use client";

import { useState, useEffect, useMemo } from 'react';

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isPast: boolean;
} | null;

const CountdownTimer = ({ targetDate }: { targetDate: string }) => {
  const targetTime = useMemo(() => new Date(targetDate).getTime(), [targetDate]);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(null);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      // Calculate difference from the target date to now (elapsed time)
      const difference = now - targetTime;
      
      // Use absolute value to show the magnitude of time difference
      const absDiff = Math.abs(difference);

      return {
        days: Math.floor(absDiff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((absDiff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((absDiff / 1000 / 60) % 60),
        seconds: Math.floor((absDiff / 1000) % 60),
        isPast: difference >= 0
      };
    };

    // Set initial time and then start the interval
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetTime]);

  const renderUnit = (value: number | undefined, label: string) => (
    <div className="flex flex-col items-center justify-center bg-accent/10 p-3 rounded-lg border border-accent/20">
      <span className="text-3xl md:text-5xl font-headline font-bold text-primary">
        {value !== undefined ? String(value).padStart(2, '0') : '--'}
      </span>
      <span className="text-xs md:text-sm font-body uppercase tracking-wider text-primary/80">{label}</span>
    </div>
  );

  // Render a placeholder if timeLeft hasn't been calculated yet.
  if (timeLeft === null) {
    return (
      <div className="grid grid-cols-4 gap-2 md:gap-4 text-center auto-rows-max">
        {renderUnit(undefined, 'Days')}
        {renderUnit(undefined, 'Hours')}
        {renderUnit(undefined, 'Minutes')}
        {renderUnit(undefined, 'Seconds')}
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="grid grid-cols-4 gap-2 md:gap-4 text-center auto-rows-max w-full">
        {renderUnit(timeLeft.days, 'Days')}
        {renderUnit(timeLeft.hours, 'Hours')}
        {renderUnit(timeLeft.minutes, 'Minutes')}
        {renderUnit(timeLeft.seconds, 'Seconds')}
      </div>
      <p className="text-sm font-body text-primary/60 italic">
        {timeLeft.isPast ? "Time passed since the special day" : "Time remaining until the big day"}
      </p>
    </div>
  );
};

export default CountdownTimer;
