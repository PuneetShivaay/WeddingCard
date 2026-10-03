"use client";

import { useRef, useState, useEffect } from 'react';
import { Play, Pause, Music } from 'lucide-react';
import { Button } from '@/components/ui/button';

const MusicPlayer = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    // Attempt to autoplay if possible, though browsers often block this
    const timer = setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch(() => {
          // Autoplay was blocked, user needs to click play
          setIsPlaying(false);
        });
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const togglePlayPause = () => {
    const audioElement = audioRef.current;
    if (audioElement) {
      if (isPlaying) {
        audioElement.pause();
      } else {
        audioElement.play().catch(e => console.log("Playback failed", e));
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="flex items-center justify-center my-6">
      <audio ref={audioRef} loop preload="auto">
        <source src="/shehnai.mp3" type="audio/mpeg" />
      </audio>
      <Button 
        onClick={togglePlayPause} 
        variant="outline" 
        size="default" 
        className="rounded-full border-accent/50 bg-background/50 backdrop-blur-sm hover:bg-accent/20 transition-all duration-300 min-w-[160px]"
      >
        {!isMounted ? (
            <Music className="h-4 w-4 mr-2 text-primary animate-pulse" />
        ) : isPlaying ? (
            <Pause className="h-4 w-4 mr-2 text-primary" />
        ) : (
            <Play className="h-4 w-4 mr-2 text-primary" />
        )}
        <span className="font-body text-xs uppercase tracking-widest font-bold text-primary">
            {!isMounted ? 'Loading...' : isPlaying ? 'Pause Music' : 'Play Music'}
        </span>
      </Button>
    </div>
  );
};

export default MusicPlayer;
