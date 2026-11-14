"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GaneshaIcon, DILogo } from "./DecorativeSVGs";
import confetti from "canvas-confetti";
import { Sparkles, ChevronDown } from "lucide-react";

interface EnvelopeIntroProps {
  onOpen: () => void;
  isOpen: boolean;
}

export default function EnvelopeIntro({ onOpen, isOpen }: EnvelopeIntroProps) {
  const [isOpened, setIsOpened] = useState(false);

  const handleOpenInvitation = () => {
    if (isOpened) return;

    setIsOpened(true);
    onOpen();

    confetti({
      particleCount: 85,
      spread: 90,
      origin: { y: 0.55 },
      colors: ["#D4AF37", "#F3E5AB", "#FFF9EF", "#800020", "#E6C280"],
    });

    // Smooth scroll down to main entrance after door opens
    setTimeout(() => {
      const entranceEl = document.getElementById("wedding-entrance");
      if (entranceEl) {
        entranceEl.scrollIntoView({ behavior: "smooth" });
      }
    }, 2200);
  };

  const handleScrollDown = () => {
    const entranceEl = document.getElementById("wedding-entrance");
    if (entranceEl) {
      entranceEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full min-h-[100dvh] flex flex-col items-center justify-center p-3 sm:p-4 pt-4 pb-4 sm:pt-6 sm:pb-6 overflow-hidden bg-gradient-to-b from-[#1b0309] via-[#2a0612] to-[#120206]">
      {/* Background Subtle Golden Radiance */}
      <div className="absolute inset-0 pointer-events-none opacity-25 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:24px_24px]" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[340px] sm:w-[500px] h-[340px] sm:h-[500px] bg-[#800F2F]/25 rounded-full blur-[100px] pointer-events-none" />

      {/* Main Luxury Wedding Presentation Card */}
      <div className="relative z-30 w-full max-w-[390px] sm:max-w-[440px] flex flex-col items-center">
        
        {/* Top Header Badge: Auspicious Invocation */}
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

        {/* The 3D Royal Palace Gateway Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          style={{ perspective: "1400px" }}
          className="relative w-full aspect-[9/16] max-w-[390px] sm:max-w-[420px] max-h-[720px] rounded-3xl border-2 border-[#D4AF37] shadow-[0_30px_70px_-15px_rgba(0,0,0,0.95)] overflow-hidden bg-[#FAF4EA]"
        >
          {/* LAYER 1: Full Original Radha-Krishna Divine Painting (Revealed Inside) */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/radha-krishna-bg.jpg')",
            }}
          />

          {/* Golden Ornamental Frame Borders */}
          <div className="absolute inset-2.5 rounded-2xl border border-[#D4AF37]/80 pointer-events-none" />
          <div className="absolute inset-3.5 rounded-xl border border-dashed border-[#800F2F]/40 pointer-events-none" />

          {/* Top Shree Ganesh Shlok */}
          <div className="absolute top-3.5 inset-x-0 flex flex-col items-center pointer-events-none z-10">
            <span className="text-[10px] sm:text-[11px] font-royal font-bold tracking-[0.22em] text-[#590D22] bg-[#FFF9EF]/90 px-3.5 py-1 rounded-full border border-[#D4AF37] shadow-md">
              || ॐ श्री गणेशाय नमः ||
            </span>
          </div>

          {/* Middle Auspicious Shlok (Enlarged & Prominent) */}
          <div className="absolute top-[37.5%] inset-x-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 pointer-events-none z-10">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.25 }}
              className="flex flex-col items-center w-full max-w-[340px]"
            >
              {/* Shubh Vivah Tag */}
              <div className="px-4 py-1 rounded-full bg-gradient-to-r from-[#4A0818]/95 via-[#6B0D24]/95 to-[#4A0818]/95 border border-[#D4AF37] shadow-md mb-2.5">
                <span className="text-xs sm:text-sm font-royal font-bold tracking-[0.25em] text-[#FFF4D4] uppercase">
                  ॥ शुभ विवाह ॥
                </span>
              </div>

              {/* Sacred Sanskrit Invocation Shlok */}
              <div className="space-y-1.5 px-2">
                <p className="font-royal text-xs sm:text-sm md:text-[15px] font-bold tracking-[0.16em] text-[#590D22] drop-shadow-sm leading-relaxed">
                  वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ ।
                </p>
                <p className="font-royal text-xs sm:text-sm md:text-[15px] font-bold tracking-[0.16em] text-[#590D22] drop-shadow-sm leading-relaxed">
                  निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा ॥
                </p>
              </div>

              {/* Subtle Gold Floral Divider Accent */}
              <div className="w-28 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mt-3" />
            </motion.div>
          </div>

          {/* Divine Golden Light Radiance Effect upon door opening */}
          {isOpened && (
            <motion.div
              initial={{ opacity: 0.9, scale: 0.8 }}
              animate={{ opacity: 0, scale: 1.5 }}
              transition={{ duration: 1.8, ease: "easeOut" }}
              className="absolute inset-0 bg-radial from-[#FFE8A3]/75 via-[#D4AF37]/35 to-transparent pointer-events-none z-15"
            />
          )}

          {/* LAYER 2: 3D Royal Double Palace Doors (Opens on Click) */}
          <div 
            className="absolute inset-0 pointer-events-none z-20"
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Left Palace Door */}
            <motion.div
              style={{ 
                transformOrigin: "left center",
                transformStyle: "preserve-3d",
              }}
              initial={false}
              animate={
                isOpened
                  ? { rotateY: -115, opacity: 0, transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1] } }
                  : { rotateY: 0, opacity: 1, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
              }
              className="absolute left-0 top-0 w-1/2 h-full cursor-pointer pointer-events-auto"
              onClick={handleOpenInvitation}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/royal-door-left.jpg"
                alt="Royal Palace Door Left"
                className="w-full h-full object-fill select-none pointer-events-none shadow-2xl"
              />
              {/* Dynamic 3D shadow */}
              <motion.div
                animate={{ opacity: isOpened ? 0.7 : 0 }}
                transition={{ duration: 1.2 }}
                className="absolute inset-0 bg-black/60 pointer-events-none"
              />
            </motion.div>

            {/* Right Palace Door */}
            <motion.div
              style={{ 
                transformOrigin: "right center",
                transformStyle: "preserve-3d",
              }}
              initial={false}
              animate={
                isOpened
                  ? { rotateY: 115, opacity: 0, transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1] } }
                  : { rotateY: 0, opacity: 1, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
              }
              className="absolute right-0 top-0 w-1/2 h-full cursor-pointer pointer-events-auto"
              onClick={handleOpenInvitation}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/royal-door-right.jpg"
                alt="Royal Palace Door Right"
                className="w-full h-full object-fill select-none pointer-events-none shadow-2xl"
              />
              {/* Dynamic 3D shadow */}
              <motion.div
                animate={{ opacity: isOpened ? 0.7 : 0 }}
                transition={{ duration: 1.2 }}
                className="absolute inset-0 bg-black/60 pointer-events-none"
              />
            </motion.div>
          </div>

          {/* LAYER 3: Interactive Action & Touch Overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center z-30 pointer-events-none">
            <AnimatePresence>
              {!isOpened ? (
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 1.15, opacity: 0, transition: { duration: 0.4 } }}
                  className="flex flex-col items-center pointer-events-auto cursor-pointer select-none"
                  onClick={handleOpenInvitation}
                >
                  {/* Glowing halo over the center brass knockers */}
                  <div className="relative flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full border-2 border-[#D4AF37] bg-[#590D22]/60 backdrop-blur-xs flex items-center justify-center shadow-[0_0_30px_rgba(212,175,55,0.85)] animate-pulse">
                      <Sparkles className="w-7 h-7 text-[#F3E5AB] animate-pulse" />
                    </div>
                  </div>

                  {/* Pulsing Hint Pill */}
                  <motion.div
                    animate={{ y: [0, -3, 0] }}
                    transition={{ repeat: Infinity, duration: 1.8 }}
                    className="mt-4 text-center"
                  >
                    <span className="text-xs sm:text-sm font-cinzel font-bold tracking-[0.22em] text-[#FFF9EF] bg-gradient-to-r from-[#590D22]/95 via-[#800F2F]/95 to-[#590D22]/95 px-5 py-2.5 rounded-full border-2 border-[#D4AF37] shadow-[0_12px_28px_rgba(0,0,0,0.9)] inline-flex items-center gap-2 hover:scale-105 active:scale-95 transition-transform">
                      <Sparkles className="w-3.5 h-3.5 text-[#F3E5AB] animate-pulse" />
                      TAP TO OPEN ROYAL GATES
                      <Sparkles className="w-3.5 h-3.5 text-[#F3E5AB] animate-pulse" />
                    </span>
                  </motion.div>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  className="absolute bottom-5 inset-x-0 flex flex-col items-center pointer-events-auto cursor-pointer"
                  onClick={handleScrollDown}
                >
                  <button className="flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-[#590D22]/95 via-[#800F2F]/95 to-[#590D22]/95 border-2 border-[#D4AF37] text-xs font-cinzel font-bold tracking-[0.2em] text-[#FFF4D4] shadow-xl hover:scale-105 active:scale-95 transition-all animate-bounce">
                    <span>ENTER WEDDING CELEBRATION</span>
                    <ChevronDown className="w-4 h-4 text-[#D4AF37]" />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Scroll CTA Button after opening */}
        <AnimatePresence>
          {isOpened && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-5 flex flex-col items-center cursor-pointer"
              onClick={handleScrollDown}
            >
              <button
                className="group relative flex items-center gap-2 rounded-full border-2 border-[#D4AF37] bg-gradient-to-r from-[#590D22] via-[#800F2F] to-[#590D22] px-6 py-2.5 text-xs font-cinzel font-bold tracking-[0.22em] text-[#FFF9EF] shadow-xl hover:shadow-[0_0_25px_rgba(212,175,55,0.6)] transition-all active:scale-95"
              >
                <span>ENTER WEDDING CELEBRATION</span>
                <ChevronDown className="w-4 h-4 text-[#D4AF37] group-hover:translate-y-0.5 transition-transform" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
