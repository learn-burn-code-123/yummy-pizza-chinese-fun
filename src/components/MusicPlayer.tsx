
import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';

const MusicPlayer: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // This effect runs once to set up an interaction listener that enables audio.
  useEffect(() => {
    const playAudioOnInteraction = () => {
      const audioElement = audioRef.current;
      if (audioElement && audioElement.paused) {
        audioElement.play().then(() => {
          setIsPlaying(true);
        }).catch(err => {
          // Play was blocked, user needs to click button.
          console.warn("Autoplay was blocked.", err);
        });
      }
      // Remove listener after first interaction
      window.removeEventListener('click', playAudioOnInteraction);
      window.removeEventListener('keydown', playAudioOnInteraction);
    };

    window.addEventListener('click', playAudioOnInteraction, { once: true });
    window.addEventListener('keydown', playAudioOnInteraction, { once: true });

    return () => {
      window.removeEventListener('click', playAudioOnInteraction);
      window.removeEventListener('keydown', playAudioOnInteraction);
    };
  }, []);

  const togglePlay = () => {
    const audioElement = audioRef.current;
    if (!audioElement) return;

    if (isPlaying) {
      audioElement.pause();
      setIsPlaying(false);
    } else {
      audioElement.play().catch(err => {
        console.error("Failed to play audio:", err);
      });
      setIsPlaying(true);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <audio ref={audioRef} src="/sounds/background.mp3" loop />
      <Button onClick={togglePlay} variant="outline" size="icon">
        {isPlaying ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
      </Button>
    </div>
  );
};

export default MusicPlayer;
