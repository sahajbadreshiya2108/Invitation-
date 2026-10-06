import React, { useState, useEffect, useRef } from 'react';
import { ChevronUp, MessageCircle, VolumeX } from 'lucide-react';

export default function FloatingActions({ audioUrl, whatsapp, onScrollTop, isOpened }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = new Audio(audioUrl);
    audio.loop = true;
    audio.preload = 'auto';
    audio.volume = 1.0; // 100% Full Sound
    audioRef.current = audio;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);

    // Attempt automatic full volume playback immediately on page load
    const tryAutoplay = () => {
      audio.volume = 1.0;
      audio.play().then(() => {
        setIsPlaying(true);
        removeUnlockListeners();
      }).catch((err) => {
        console.log('Autoplay blocked pending user gesture:', err);
      });
    };

    // User gesture listener to unlock audio with 100% volume on first touch/click
    const handleUserGesture = () => {
      if (audioRef.current) {
        audioRef.current.volume = 1.0;
        audioRef.current.play().then(() => {
          setIsPlaying(true);
          removeUnlockListeners();
        }).catch((e) => console.log('Gesture play failed:', e));
      }
    };

    const removeUnlockListeners = () => {
      window.removeEventListener('click', handleUserGesture);
      window.removeEventListener('touchstart', handleUserGesture);
      window.removeEventListener('pointerdown', handleUserGesture);
      window.removeEventListener('keydown', handleUserGesture);
    };

    window.addEventListener('click', handleUserGesture, { once: true, passive: true });
    window.addEventListener('touchstart', handleUserGesture, { once: true, passive: true });
    window.addEventListener('pointerdown', handleUserGesture, { once: true, passive: true });
    window.addEventListener('keydown', handleUserGesture, { once: true, passive: true });

    // Initial autoplay attempt
    tryAutoplay();

    return () => {
      removeUnlockListeners();
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
      audio.pause();
    };
  }, [audioUrl]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.volume = 1.0;
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((err) => {
        console.log('Audio playback error:', err);
      });
    }
  };

  const handleWhatsApp = () => {
    const waUrl = `https://wa.me/${whatsapp.number}?text=${encodeURIComponent(whatsapp.defaultMessage)}`;
    window.open(waUrl, '_blank');
  };

  return (
    <div className="floating-action-bar">
      <div className="floating-action-inner">
        {/* Back to top (shown when invitation is opened) */}
        {isOpened ? (
          <button
            className="floating-btn"
            onClick={onScrollTop}
            aria-label="ટોચ પર જાઓ"
            title="Back to Top"
          >
            <ChevronUp size={20} />
          </button>
        ) : (
          <div style={{ width: 46 }} />
        )}

        {/* WhatsApp Direct (shown when invitation is opened) */}
        {isOpened && (
          <button
            className="floating-btn whatsapp"
            onClick={handleWhatsApp}
            aria-label="WhatsApp પર સંપર્ક કરો"
            title="WhatsApp Message"
          >
            <MessageCircle size={21} />
          </button>
        )}

        {/* Music Player Button (Always available with full sound indicator) */}
        <button
          className={`floating-btn music ${isPlaying ? 'playing' : ''}`}
          onClick={togglePlay}
          aria-label={isPlaying ? 'સંગીત બંધ કરો' : 'સંગીત શરૂ કરો'}
          title={isPlaying ? 'Pause Music' : 'Play Music (Full Sound)'}
        >
          {isPlaying ? (
            <div className="music-wave-bars">
              <span className="wave-bar" />
              <span className="wave-bar" />
              <span className="wave-bar" />
            </div>
          ) : (
            <VolumeX size={19} />
          )}
        </button>
      </div>
    </div>
  );
}
