"use client";

import { useState, useEffect, useMemo } from 'react';

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
} | null;

const CountdownTimer = ({ targetDate }: { targetDate: string }) => {
  const targetTime = useMemo(() => new Date(targetDate).getTime(), [targetDate]);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(null);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetTime - now;

      if (difference <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
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
  // This covers the server render and the initial client render before useEffect runs.
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

  const isFinished = Object.values(timeLeft).every(v => v === 0);

  if (isFinished) {
    return <div className="text-2xl font-headline text-accent">The big day is here!</div>;
  }

  return (
    <div className="grid grid-cols-4 gap-2 md:gap-4 text-center auto-rows-max">
      {renderUnit(timeLeft.days, 'Days')}
      {renderUnit(timeLeft.hours, 'Hours')}
      {renderUnit(timeLeft.minutes, 'Minutes')}
      {renderUnit(timeLeft.seconds, 'Seconds')}
    </div>
  );
};

export default CountdownTimer;
