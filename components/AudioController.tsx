"use client";

import React, { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX, Music } from "lucide-react";

interface AudioControllerProps {
  autoStartTrigger?: boolean;
}

export default function AudioController({ autoStartTrigger = false }: AudioControllerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Initialize audio element with uploaded wedding song (lazy load on user interaction)
    const audio = new Audio("/wedding-song.m4a");
    audio.loop = true;
    audio.preload = "none";
    audioRef.current = audio;

    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);

    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onPause);

    const onVideoPlay = () => {
      audio.pause();
      setIsPlaying(false);
    };

    const onVideoPause = () => {
      // Optional: don't automatically resume unless user gestures
    };

    window.addEventListener("wedding-video-playing", onVideoPlay);
    window.addEventListener("wedding-video-paused", onVideoPause);

    return () => {
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("pause", onPause);
      window.removeEventListener("wedding-video-playing", onVideoPlay);
      window.removeEventListener("wedding-video-paused", onVideoPause);
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {
        // Autoplay policy prevented playback until user gesture
      });
    }
  };

  const pauseAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMusic = () => {
    if (isPlaying) {
      pauseAudio();
    } else {
      playAudio();
    }
  };

  // When envelope is opened
  useEffect(() => {
    if (autoStartTrigger && audioRef.current && audioRef.current.paused) {
      playAudio();
    }
  }, [autoStartTrigger]);

  // Global user interaction listener to auto-start song on first tap anywhere
  useEffect(() => {
    const handleFirstGesture = () => {
      if (audioRef.current && audioRef.current.paused) {
        playAudio();
      }
      window.removeEventListener("pointerdown", handleFirstGesture);
      window.removeEventListener("touchstart", handleFirstGesture);
      window.removeEventListener("click", handleFirstGesture);
    };

    window.addEventListener("pointerdown", handleFirstGesture, { passive: true });
    window.addEventListener("touchstart", handleFirstGesture, { passive: true });
    window.addEventListener("click", handleFirstGesture, { passive: true });

    return () => {
      window.removeEventListener("pointerdown", handleFirstGesture);
      window.removeEventListener("touchstart", handleFirstGesture);
      window.removeEventListener("click", handleFirstGesture);
    };
  }, []);

  return (
    <div className="fixed top-5 right-5 z-50">
      <button
        onClick={toggleMusic}
        className="group relative flex items-center gap-2 rounded-full border border-[#C5A059]/60 bg-[#590D22]/90 px-3.5 py-2 text-xs font-cinzel tracking-wider text-[#F8F0E3] shadow-xl backdrop-blur-md transition-all duration-300 hover:border-[#DFB76C] hover:bg-[#800F2F] hover:shadow-[0_0_20px_rgba(197,160,89,0.5)] active:scale-95"
        aria-label="Toggle Wedding Music"
      >
        <span className="relative flex h-3 w-3 items-center justify-center">
          {isPlaying ? (
            <span className="flex items-end gap-[2px] h-3">
              <span className="w-[2px] h-3 bg-[#DFB76C] animate-pulse" />
              <span className="w-[2px] h-2 bg-[#DFB76C] animate-bounce" />
              <span className="w-[2px] h-3.5 bg-[#DFB76C] animate-pulse" />
            </span>
          ) : (
            <Music className="h-3.5 w-3.5 text-[#DFB76C]" />
          )}
        </span>

        <span className="hidden sm:inline">
          {isPlaying ? "Music Playing" : "Wedding Song"}
        </span>

        {isPlaying ? (
          <Volume2 className="h-4 w-4 text-[#DFB76C]" />
        ) : (
          <VolumeX className="h-4 w-4 text-[#DFB76C]/70" />
        )}

        {/* Ambient Ring Glow */}
        {isPlaying && (
          <span className="absolute -inset-1 -z-10 rounded-full bg-[#DFB76C]/30 blur-sm animate-pulse" />
        )}
      </button>
    </div>
  );
}
