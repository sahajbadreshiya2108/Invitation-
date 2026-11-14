"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { Play, Pause, Volume2, VolumeX, Sparkles, ChevronDown, RotateCcw } from "lucide-react";

interface EnvelopeIntroProps {
  onOpen: () => void;
  isOpen: boolean;
}

export default function EnvelopeIntro({ onOpen, isOpen }: EnvelopeIntroProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [isEnded, setIsEnded] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleStartPlay = () => {
    if (!videoRef.current) return;

    videoRef.current.muted = false;
    setIsMuted(false);

    videoRef.current
      .play()
      .then(() => {
        setIsPlaying(true);
        setHasStarted(true);
        setIsEnded(false);
        onOpen();

        // Pause background audio while video plays
        window.dispatchEvent(new CustomEvent("wedding-video-playing"));

        // Burst celebration confetti
        confetti({
          particleCount: 80,
          spread: 90,
          origin: { y: 0.6 },
          colors: ["#D4AF37", "#F3E5AB", "#FFF9EF", "#800020", "#E6C280"],
        });
      })
      .catch(() => {
        // Fallback with muted if browser autoplay blocked audio
        if (videoRef.current) {
          videoRef.current.muted = true;
          setIsMuted(true);
          videoRef.current.play();
          setIsPlaying(true);
          setHasStarted(true);
        }
      });
  };

  const handleTogglePlay = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
      window.dispatchEvent(new CustomEvent("wedding-video-paused"));
    } else {
      videoRef.current.play();
      setIsPlaying(true);
      window.dispatchEvent(new CustomEvent("wedding-video-playing"));
    }
  };

  const handleToggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;

    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleReplayVideo = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;

    videoRef.current.currentTime = 0;
    videoRef.current.play();
    setIsPlaying(true);
    setIsEnded(false);
    window.dispatchEvent(new CustomEvent("wedding-video-playing"));
  };

  const handleScrollDown = () => {
    const entranceEl = document.getElementById("wedding-entrance");
    if (entranceEl) {
      entranceEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;

    const onEnd = () => {
      setIsPlaying(false);
      setIsEnded(true);
      window.dispatchEvent(new CustomEvent("wedding-video-paused"));
    };

    vid.addEventListener("ended", onEnd);
    return () => {
      vid.removeEventListener("ended", onEnd);
    };
  }, []);

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center p-3 sm:p-4 py-8 overflow-hidden bg-gradient-to-b from-[#1b0309] via-[#2a0612] to-[#120206]">
      {/* Background Subtle Golden Radiance */}
      <div className="absolute inset-0 pointer-events-none opacity-25 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:24px_24px]" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[340px] sm:w-[500px] h-[340px] sm:h-[500px] bg-[#800F2F]/25 rounded-full blur-[100px] pointer-events-none" />

      {/* Main Container */}
      <div className="relative z-30 w-full max-w-[390px] sm:max-w-[420px] flex flex-col items-center">
        
        {/* Top Header Badge */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-3 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#4A0818]/95 via-[#6B0D24]/95 to-[#4A0818]/95 border border-[#D4AF37] shadow-xl">
            <Sparkles className="w-3.5 h-3.5 text-[#F3E5AB] animate-pulse" />
            <span className="text-xs sm:text-sm font-royal font-bold tracking-[0.25em] text-[#FFF4D4] uppercase">
              ॥ शुभ विवाह निमंत्रण ॥
            </span>
            <Sparkles className="w-3.5 h-3.5 text-[#F3E5AB] animate-pulse" />
          </div>
        </motion.div>

        {/* The Wedding Video Card (Page 1) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative w-full aspect-[9/16] max-h-[720px] rounded-3xl border-2 border-[#D4AF37] shadow-[0_30px_70px_-15px_rgba(0,0,0,0.95)] overflow-hidden bg-black select-none"
        >
          {/* Video Player */}
          <video
            ref={videoRef}
            src="/wedding-intro.mp4"
            playsInline
            preload="metadata"
            className="w-full h-full object-cover cursor-pointer"
            onClick={hasStarted ? handleTogglePlay : handleStartPlay}
          />

          {/* Floating Sound Toggle Button (Visible when playing) */}
          {hasStarted && !isEnded && (
            <button
              onClick={handleToggleMute}
              className="absolute top-4 right-4 z-40 p-2.5 rounded-full bg-[#1b0309]/80 border border-[#D4AF37]/70 text-[#F3E5AB] shadow-lg backdrop-blur-xs hover:scale-105 active:scale-95 transition-all"
              aria-label={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted ? <VolumeX className="w-4 h-4 text-red-300" /> : <Volume2 className="w-4 h-4 text-[#F3E5AB]" />}
            </button>
          )}

          {/* LAYER 1: Initial Play Prompt Overlay (Before Starting) */}
          <AnimatePresence>
            {!hasStarted && (
              <motion.div
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.4 } }}
                className="absolute inset-0 z-30 flex flex-col items-center justify-center p-6 bg-gradient-to-t from-black/80 via-black/40 to-black/60 cursor-pointer"
                onClick={handleStartPlay}
              >
                {/* Center Glowing Play Button */}
                <motion.div
                  animate={{ scale: [1, 1.08, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 border-[#D4AF37] bg-gradient-to-br from-[#800F2F] via-[#590D22] to-[#2B030D] shadow-[0_0_35px_rgba(212,175,55,0.85)] flex items-center justify-center"
                >
                  <Play className="w-9 h-9 sm:w-11 sm:h-11 text-[#F3E5AB] fill-[#F3E5AB] translate-x-1 drop-shadow-md" />
                </motion.div>

                {/* Call to Action */}
                <motion.div
                  animate={{ y: [0, -3, 0] }}
                  transition={{ repeat: Infinity, duration: 1.8 }}
                  className="mt-6 text-center"
                >
                  <span className="text-xs sm:text-sm font-cinzel font-bold tracking-[0.22em] text-[#FFF9EF] bg-gradient-to-r from-[#590D22]/95 via-[#800F2F]/95 to-[#590D22]/95 px-5 py-2.5 rounded-full border-2 border-[#D4AF37] shadow-[0_12px_28px_rgba(0,0,0,0.9)] inline-flex items-center gap-2 hover:scale-105 active:scale-95 transition-transform">
                    <Sparkles className="w-3.5 h-3.5 text-[#F3E5AB] animate-pulse" />
                    TAP TO WATCH INVITATION
                    <Sparkles className="w-3.5 h-3.5 text-[#F3E5AB] animate-pulse" />
                  </span>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* LAYER 2: Video Ended Overlay (Replay & Next) */}
          <AnimatePresence>
            {isEnded && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 z-30 flex flex-col items-center justify-center p-6 bg-black/75 backdrop-blur-xs text-center"
              >
                <div className="space-y-4 flex flex-col items-center">
                  <div className="px-4 py-1 rounded-full bg-[#590D22] border border-[#D4AF37] shadow-md">
                    <span className="text-xs font-royal font-bold tracking-[0.25em] text-[#FFF4D4] uppercase">
                      ॥ शुभ विवाह ॥
                    </span>
                  </div>

                  <h3 className="font-royal text-2xl sm:text-3xl font-bold text-[#FFF9EF] tracking-wide">
                    Daksh &amp; Isha
                  </h3>

                  <div className="flex flex-col gap-3 w-full max-w-[260px] pt-2">
                    <button
                      onClick={handleScrollDown}
                      className="w-full flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#590D22] via-[#800F2F] to-[#590D22] border-2 border-[#D4AF37] text-xs font-cinzel font-bold tracking-[0.2em] text-[#FFF4D4] shadow-xl hover:scale-105 active:scale-95 transition-all animate-bounce"
                    >
                      <span>VIEW WEDDING DETAILS</span>
                      <ChevronDown className="w-4 h-4 text-[#D4AF37]" />
                    </button>

                    <button
                      onClick={handleReplayVideo}
                      className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-[#D4AF37]/50 text-xs font-cinzel tracking-wider text-[#F3E5AB] hover:bg-white/20 transition-all"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Watch Again</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Pause Indicator overlay on tap */}
          {hasStarted && !isPlaying && !isEnded && (
            <div 
              onClick={handleTogglePlay}
              className="absolute inset-0 z-30 flex items-center justify-center bg-black/35 cursor-pointer"
            >
              <div className="w-16 h-16 rounded-full bg-black/60 border border-[#D4AF37] flex items-center justify-center text-[#F3E5AB] shadow-xl">
                <Play className="w-8 h-8 fill-[#F3E5AB] translate-x-0.5" />
              </div>
            </div>
          )}
        </motion.div>

        {/* Scroll CTA Button below the video card */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-5 flex flex-col items-center cursor-pointer"
          onClick={handleScrollDown}
        >
          <button className="group relative flex items-center gap-2 rounded-full border-2 border-[#D4AF37] bg-gradient-to-r from-[#590D22] via-[#800F2F] to-[#590D22] px-6 py-2.5 text-xs font-cinzel font-bold tracking-[0.22em] text-[#FFF9EF] shadow-xl hover:shadow-[0_0_25px_rgba(212,175,55,0.6)] transition-all active:scale-95">
            <span>ENTER WEDDING CELEBRATION</span>
            <ChevronDown className="w-4 h-4 text-[#D4AF37] group-hover:translate-y-0.5 transition-transform" />
          </button>
        </motion.div>

      </div>
    </div>
  );
}
