
import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const MusicPlayer: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    const audioElement = audioRef.current;
    if (!audioElement) return;

    const playAudio = () => {
      audioElement.play().catch(error => {
        if (error.name === 'NotAllowedError') {
          console.warn('Background music autoplay was prevented by the browser.');
          if (!hasInteracted) {
            toast('Click anywhere to enable background music', {
              id: 'music-toast',
              duration: 10000,
            });
          }
        }
      });
    };

    if (hasInteracted) {
      setIsMuted(false);
      playAudio();
    }
    
    const onFirstInteraction = () => {
      if (!hasInteracted) {
        setHasInteracted(true);
      }
      window.removeEventListener('click', onFirstInteraction);
      window.removeEventListener('keydown', onFirstInteraction);
    };

    window.addEventListener('click', onFirstInteraction, { once: true });
    window.addEventListener('keydown', onFirstInteraction, { once: true });

    return () => {
      window.removeEventListener('click', onFirstInteraction);
      window.removeEventListener('keydown', onFirstInteraction);
    };

  }, [hasInteracted]);
  
  useEffect(() => {
      if (audioRef.current) {
          audioRef.current.muted = isMuted;
      }
  }, [isMuted]);

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (!hasInteracted) {
        setHasInteracted(true);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <audio ref={audioRef} src="/sounds/background.mp3" loop />
      <Button onClick={toggleMute} variant="outline" size="icon">
        {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
      </Button>
    </div>
  );
};

export default MusicPlayer;
