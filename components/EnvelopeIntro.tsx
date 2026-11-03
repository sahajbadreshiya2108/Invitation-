"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GaneshaIcon, RoyalCornerOrnament, MandalaRosette } from "./DecorativeSVGs";
import confetti from "canvas-confetti";
import { Sparkles, ChevronDown } from "lucide-react";

interface EnvelopeIntroProps {
  onOpen: () => void;
  isOpen: boolean;
}

export default function EnvelopeIntro({ onOpen, isOpen }: EnvelopeIntroProps) {
  const [stage, setStage] = useState<"closed" | "opening" | "cardRevealed" | "done">("closed");

  const handleTapToOpen = () => {
    if (stage !== "closed") return;

    setStage("opening");
    onOpen();

    // Trigger golden sparkles
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#C5A059", "#DFB76C", "#FFF9EF", "#800F2F"],
    });

    // Flap opens -> card slides up
    setTimeout(() => {
      setStage("cardRevealed");
    }, 900);

    // Transition smoothly to invitation body
    setTimeout(() => {
      setStage("done");
      const entranceEl = document.getElementById("wedding-entrance");
      if (entranceEl) {
        entranceEl.scrollIntoView({ behavior: "smooth" });
      }
    }, 2400);
  };

  const handleScrollDown = () => {
    const entranceEl = document.getElementById("wedding-entrance");
    if (entranceEl) {
      entranceEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center p-4 py-8 overflow-hidden bg-radial from-[#3b0816] via-[#20040c] to-[#0d0105]">
      {/* Background Ambient Glow & Floral Watermark */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(#c5a059_1px,transparent_1px)] [background-size:24px_24px]" />
      
      {/* Subtle Floating Lighting Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[340px] sm:w-[500px] h-[340px] sm:h-[500px] bg-[#800f2f]/25 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 w-[280px] h-[280px] bg-[#c5a059]/15 rounded-full blur-[90px] pointer-events-none" />

      {/* Main Interactive Envelope Container with 3D Perspective */}
      <div className="relative z-30 w-full max-w-[390px] sm:max-w-[430px] perspective-container flex flex-col items-center">
        
        {/* Envelope Top Hint (Tap To Open) */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-5 text-center"
        >
          <span className="text-[11px] sm:text-xs font-cinzel tracking-[0.28em] text-[#DFB76C] uppercase font-semibold flex items-center justify-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-[#DFB76C] animate-pulse" />
            Royal Wedding Invitation
            <Sparkles className="w-3.5 h-3.5 text-[#DFB76C] animate-pulse" />
          </span>
        </motion.div>

        {/* 3D Envelope Wrapper */}
        <div
          onClick={handleTapToOpen}
          className={`relative w-full aspect-[4/5.4] max-h-[580px] cursor-pointer select-none transition-transform duration-500 ${
            stage === "closed" ? "hover:scale-[1.02] active:scale-[0.98]" : ""
          }`}
        >
          {/* Outer Gold Shadow Box */}
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-b from-[#DFB76C]/40 via-[#800F2F]/30 to-[#C5A059]/40 blur-md opacity-70" />

          {/* Envelope Body Container */}
          <div className="relative w-full h-full rounded-2xl bg-[#590D22] border-2 border-[#C5A059]/70 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.85)] overflow-hidden preserve-3d">
            
            {/* Background Texture & Laser Cut Cream Filigree (Inspired by reference image 3) */}
            <div className="absolute inset-0 bg-[#420818] opacity-90" />
            <div className="absolute inset-0 bg-[radial-gradient(#C5A059_0.8px,transparent_0.8px)] [background-size:16px_16px] opacity-15" />

            {/* Laser Cut Cream Wings / Flaps (Left & Right Ornate Embossed Panels) */}
            <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-20 bg-gradient-to-r from-[#FFF9EF] via-[#F8F0E3] to-[#ebdcc2] opacity-90 border-r border-[#C5A059]/40 shadow-xl overflow-hidden pointer-events-none">
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#800F2F_1px,transparent_1px)] [background-size:10px_10px]" />
              <div className="absolute -top-6 -left-6 w-24 h-24 text-[#C5A059]/40">
                <MandalaRosette className="w-full h-full" />
              </div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 text-[#C5A059]/40">
                <MandalaRosette className="w-full h-full" />
              </div>
            </div>

            <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-20 bg-gradient-to-l from-[#FFF9EF] via-[#F8F0E3] to-[#ebdcc2] opacity-90 border-l border-[#C5A059]/40 shadow-xl overflow-hidden pointer-events-none">
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#800F2F_1px,transparent_1px)] [background-size:10px_10px]" />
              <div className="absolute -top-6 -right-6 w-24 h-24 text-[#C5A059]/40">
                <MandalaRosette className="w-full h-full" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 text-[#C5A059]/40">
                <MandalaRosette className="w-full h-full" />
              </div>
            </div>

            {/* Corner Ornaments */}
            <div className="absolute top-2 left-2 z-10 pointer-events-none opacity-80">
              <RoyalCornerOrnament className="w-12 h-12" />
            </div>
            <div className="absolute top-2 right-2 z-10 pointer-events-none opacity-80 rotate-90">
              <RoyalCornerOrnament className="w-12 h-12" />
            </div>
            <div className="absolute bottom-2 left-2 z-10 pointer-events-none opacity-80 -rotate-90">
              <RoyalCornerOrnament className="w-12 h-12" />
            </div>
            <div className="absolute bottom-2 right-2 z-10 pointer-events-none opacity-80 rotate-180">
              <RoyalCornerOrnament className="w-12 h-12" />
            </div>

            {/* ========================================================= */}
            {/* INVITATION CARD (EMERGING FROM INSIDE IN 3D) */}
            {/* ========================================================= */}
            <motion.div
              initial={false}
              animate={
                stage === "cardRevealed" || stage === "done"
                  ? {
                      y: -140,
                      scale: 1.03,
                      rotateX: 0,
                      boxShadow: "0 30px 60px -15px rgba(0,0,0,0.9)",
                    }
                  : {
                      y: 0,
                      scale: 0.98,
                      rotateX: 4,
                      boxShadow: "0 10px 25px rgba(0,0,0,0.5)",
                    }
              }
              transition={{
                duration: 1.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="absolute inset-x-5 top-8 bottom-8 z-20 rounded-xl bg-gradient-to-b from-[#FFFDF9] via-[#F8F0E3] to-[#F1E4CD] border-2 border-[#C5A059] p-5 flex flex-col items-center justify-between shadow-2xl text-[#38251F] text-center"
            >
              {/* Card Inner Border */}
              <div className="absolute inset-1.5 rounded-lg border border-[#C5A059]/60 pointer-events-none" />
              <div className="absolute inset-2.5 rounded-md border border-dashed border-[#DFB76C]/40 pointer-events-none" />

              {/* Card Top Details */}
              <div className="relative z-10 flex flex-col items-center mt-1">
                <GaneshaIcon className="w-10 h-10 mb-1" />
                <span className="text-[9px] font-cinzel tracking-[0.25em] text-[#800F2F] font-bold uppercase">
                  || ॐ श्री गणेशाय नमः ||
                </span>
                <span className="text-[10px] font-cinzel tracking-[0.2em] text-[#8C6A28] uppercase mt-1">
                  You Are Cordially Invited
                </span>
              </div>

              {/* Card Couple Names */}
              <div className="relative z-10 my-auto py-2">
                <span className="text-[10px] font-cinzel tracking-[0.3em] text-[#590D22]/80 uppercase block mb-1">
                  The Royal Wedding Of
                </span>
                <h1 className="font-calligraphy text-4xl sm:text-5xl text-[#590D22] drop-shadow-sm leading-tight">
                  Daksh
                </h1>
                <div className="flex items-center justify-center gap-2 my-0.5">
                  <div className="w-8 h-[1px] bg-[#C5A059]" />
                  <span className="font-calligraphy text-2xl text-[#C5A059]">&</span>
                  <div className="w-8 h-[1px] bg-[#C5A059]" />
                </div>
                <h1 className="font-calligraphy text-4xl sm:text-5xl text-[#590D22] drop-shadow-sm leading-tight">
                  Isha
                </h1>
              </div>

              {/* Card Bottom Details */}
              <div className="relative z-10 flex flex-col items-center mb-1">
                <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#C5A059] to-transparent mb-1" />
                <span className="text-[10px] font-cinzel tracking-[0.22em] text-[#800F2F] font-semibold uppercase">
                  1 & 2 December 2026
                </span>
                <span className="text-[9px] font-body text-[#38251F]/80 tracking-wider">
                  ATM Farm House • Gujarat
                </span>
              </div>
            </motion.div>

            {/* ========================================================= */}
            {/* ENVELOPE 3D FOLDABLE FLAP (OPENS BACKWARDS) */}
            {/* ========================================================= */}
            <motion.div
              initial={false}
              animate={
                stage === "closed"
                  ? { rotateX: 0 }
                  : { rotateX: -180 }
              }
              transition={{
                duration: 0.9,
                ease: [0.4, 0, 0.2, 1],
              }}
              style={{
                transformOrigin: "top center",
              }}
              className="absolute top-0 inset-x-0 h-1/2 z-30 preserve-3d"
            >
              {/* Flap Outer Face (Burgundy Triangle with Gold Trim) */}
              <div className="absolute inset-0 backface-hidden flex flex-col items-center">
                <svg
                  viewBox="0 0 400 240"
                  className="w-full h-full drop-shadow-[0_12px_15px_rgba(0,0,0,0.6)]"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient id="flapGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#75112B" />
                      <stop offset="60%" stopColor="#590D22" />
                      <stop offset="100%" stopColor="#3d0514" />
                    </linearGradient>
                  </defs>
                  {/* Flap Triangle */}
                  <polygon
                    points="0,0 400,0 200,230"
                    fill="url(#flapGrad)"
                    stroke="#C5A059"
                    strokeWidth="2"
                  />
                  {/* Flap Inner Gold Border Lines */}
                  <polygon
                    points="15,6 385,6 200,215"
                    fill="none"
                    stroke="#DFB76C"
                    strokeWidth="1"
                    strokeDasharray="4 2"
                    opacity="0.8"
                  />
                </svg>

                {/* Flap Tip Mandala Rosette */}
                <div className="absolute top-[165px] left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                  <div className="w-10 h-10 text-[#FFF2B2]">
                    <MandalaRosette className="w-full h-full" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* ========================================================= */}
            {/* LUXURY BELLY BAND / WAIST RIBBON & WAX SEAL */}
            {/* ========================================================= */}
            <AnimatePresence>
              {stage === "closed" && (
                <motion.div
                  initial={{ opacity: 1, scale: 1 }}
                  exit={{
                    opacity: 0,
                    scale: 1.15,
                    filter: "blur(6px)",
                    transition: { duration: 0.6 },
                  }}
                  className="absolute inset-x-0 top-1/2 -translate-y-1/2 z-40 flex flex-col items-center justify-center pointer-events-none"
                >
                  {/* Golden Belly Band Bar */}
                  <div className="w-full py-3.5 bg-gradient-to-r from-[#800F2F] via-[#590D22] to-[#800F2F] border-y-2 border-[#C5A059] shadow-2xl relative flex items-center justify-center">
                    {/* Inner gold line */}
                    <div className="absolute inset-x-0 top-[2px] h-[1px] bg-[#FFF2B2]/60" />
                    <div className="absolute inset-x-0 bottom-[2px] h-[1px] bg-[#FFF2B2]/60" />

                    <div className="px-6 py-1 bg-[#3A0514]/90 rounded border border-[#DFB76C]/60 flex flex-col items-center">
                      <span className="text-[10px] font-cinzel tracking-[0.28em] text-[#DFB76C] font-semibold uppercase">
                        YOU&apos;RE INVITED
                      </span>
                      <span className="font-calligraphy text-2xl text-[#FFF9EF] drop-shadow">
                        Daksh & Isha
                      </span>
                    </div>
                  </div>

                  {/* Pulsing Tap-To-Open Wax Seal Emblem */}
                  <div className="relative -mt-4 flex flex-col items-center">
                    <div className="relative flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#800F2F] via-[#590D22] to-[#2B030D] border-2 border-[#DFB76C] shadow-[0_10px_25px_rgba(0,0,0,0.9)] animate-pulse-glow">
                      <div className="absolute inset-1 rounded-full border border-dashed border-[#FFF2B2]/60" />
                      
                      <div className="text-center px-1">
                        <span className="font-calligraphy text-xl text-[#FFF2B2] block leading-none">
                          D & I
                        </span>
                        <span className="text-[7.5px] font-cinzel tracking-widest text-[#FFF9EF] uppercase block mt-1 font-bold">
                          TAP TO OPEN
                        </span>
                      </div>
                    </div>

                    {/* Hint Touch Icon */}
                    <motion.div
                      animate={{ y: [0, 4, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                      className="mt-2 text-center"
                    >
                      <span className="text-[11px] font-cinzel tracking-[0.2em] text-[#FFF9EF] bg-[#590D22]/90 px-3 py-1 rounded-full border border-[#DFB76C]/50 shadow-md">
                        ✦ Click or Tap to Open ✦
                      </span>
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Bottom Pocket Overlay (to hide lower card before it slides up) */}
            <div className="absolute bottom-0 inset-x-0 h-1/3 z-25 bg-gradient-to-t from-[#400717] via-[#590D22] to-transparent pointer-events-none opacity-80" />
          </div>
        </div>

        {/* Post-Opening Scroll Down CTA */}
        <AnimatePresence>
          {stage !== "closed" && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="mt-8 flex flex-col items-center gap-2 cursor-pointer"
              onClick={handleScrollDown}
            >
              <button
                className="group relative flex items-center gap-2 rounded-full border border-[#DFB76C] bg-gradient-to-r from-[#590D22] via-[#800F2F] to-[#590D22] px-6 py-2.5 text-xs font-cinzel font-semibold tracking-[0.22em] text-[#FFF9EF] shadow-xl hover:shadow-[0_0_25px_rgba(197,160,89,0.5)] transition-all active:scale-95"
              >
                <span>ENTER WEDDING CELEBRATION</span>
                <ChevronDown className="w-4 h-4 text-[#DFB76C] group-hover:translate-y-0.5 transition-transform" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}

