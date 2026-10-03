"use client";

import { useRef, useState, useEffect } from 'react';
import { Play, Pause } from 'lucide-react';
import { Button } from '@/components/ui/button';

const MusicPlayer = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const audioElement = audioRef.current;
    if (isClient && audioElement) {
      // Try to autoplay, but update state based on what happens
      audioElement.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {
        // Autoplay was prevented.
        setIsPlaying(false);
      });
    }
  }, [isClient]);

  const togglePlayPause = () => {
    const audioElement = audioRef.current;
    if (audioElement) {
      if (isPlaying) {
        audioElement.pause();
      } else {
        audioElement.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  if (!isClient) {
    return null; // Don't render on the server to avoid hydration issues.
  }

  return (
    <>
      <audio ref={audioRef} loop>
        <source src="/shehnai.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <div className="fixed top-4 right-4 z-50">
        <Button onClick={togglePlayPause} variant="outline" size="icon" className="rounded-full border-accent/30 bg-background/50 backdrop-blur-sm hover:bg-accent/20">
          {isPlaying ? <Pause className="h-5 w-5 text-primary" /> : <Play className="h-5 w-5 text-primary" />}
          <span className="sr-only">{isPlaying ? 'Pause music' : 'Play music'}</span>
        </Button>
      </div>
    </>
  );
};

export default MusicPlayer;
