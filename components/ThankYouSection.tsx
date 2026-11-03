"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FloralDivider, RoyalCornerOrnament, MandalaRosette } from "./DecorativeSVGs";
import { RotateCcw, Share2, Heart, Check } from "lucide-react";

interface ThankYouSectionProps {
  onReplay: () => void;
}

export default function ThankYouSection({ onReplay }: ThankYouSectionProps) {
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "Daksh & Isha Royal Wedding Invitation",
        text: "You are cordially invited to celebrate the royal wedding of Daksh & Isha on 1 & 2 December 2026 at ATM Farm House, Gujarat.",
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section className="relative w-full py-24 px-4 flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#1c040c] via-[#2f0614] to-[#120207]">
      {/* Background Mandala */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] opacity-10 text-[#C5A059] pointer-events-none">
        <MandalaRosette className="w-full h-full" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1 }}
        className="relative z-10 w-full max-w-[450px] rounded-3xl bg-[#FFF9EF] text-[#38251F] p-8 sm:p-10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] border-2 border-[#C5A059] overflow-hidden text-center"
      >
        {/* Subtle Paper Texture */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#800F2F_1px,transparent_1px)] [background-size:12px_12px] pointer-events-none" />

        {/* Four Royal Corners */}
        <div className="absolute top-2 left-2 pointer-events-none opacity-80">
          <RoyalCornerOrnament className="w-11 h-11" />
        </div>
        <div className="absolute top-2 right-2 pointer-events-none opacity-80 rotate-90">
          <RoyalCornerOrnament className="w-11 h-11" />
        </div>
        <div className="absolute bottom-2 left-2 pointer-events-none opacity-80 -rotate-90">
          <RoyalCornerOrnament className="w-11 h-11" />
        </div>
        <div className="absolute bottom-2 right-2 pointer-events-none opacity-80 rotate-180">
          <RoyalCornerOrnament className="w-11 h-11" />
        </div>

        {/* Inner Border */}
        <div className="absolute inset-2.5 rounded-2xl border border-[#C5A059]/70 pointer-events-none" />
        <div className="absolute inset-4 rounded-xl border border-dashed border-[#DFB76C]/40 pointer-events-none" />

        {/* Main Content */}
        <div className="relative z-10 flex flex-col items-center">
          
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#C5A059]/40 bg-[#800F2F]/10 mb-4">
            <Heart className="w-3.5 h-3.5 text-[#800F2F] fill-[#800F2F]" />
            <span className="text-[10px] font-cinzel tracking-[0.25em] text-[#800F2F] font-bold uppercase">
              Warmest Gratitude
            </span>
            <Heart className="w-3.5 h-3.5 text-[#800F2F] fill-[#800F2F]" />
          </div>

          {/* Heading */}
          <h2 className="font-royal text-xl sm:text-2xl font-bold tracking-[0.16em] text-[#590D22] uppercase leading-snug">
            WE CAN&apos;T WAIT TO CELEBRATE
          </h2>
          <h3 className="font-royal text-lg sm:text-xl font-bold tracking-[0.16em] text-[#800F2F] uppercase mt-1">
            THIS SPECIAL BEGINNING
          </h3>
          <p className="font-cinzel text-xs tracking-[0.25em] text-[#8C6A28] uppercase mt-1">
            WITH YOU!
          </p>

          <FloralDivider className="my-5" />

          {/* With Love and Blessings */}
          <div className="space-y-2 my-2">
            <span className="text-xs font-cinzel tracking-[0.28em] text-[#800F2F] uppercase font-semibold block">
              WITH LOVE AND BLESSINGS
            </span>

            <div className="my-3">
              <h1 className="font-calligraphy text-4xl sm:text-5xl text-[#590D22] drop-shadow-sm">
                Daksh & Isha
              </h1>
            </div>

            <div className="pt-2">
              <span className="text-[11px] font-cinzel tracking-[0.22em] text-[#8C6A28] uppercase block">
                AND THE ENTIRE
              </span>
              <h4 className="font-royal text-xl sm:text-2xl font-extrabold tracking-[0.2em] text-[#590D22] uppercase mt-0.5">
                MUNGARA FAMILY
              </h4>
            </div>
          </div>

          <FloralDivider className="my-5" />

          {/* Actions: REPLAY INVITATION & SHARE */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full mt-2">
            <button
              onClick={onReplay}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#C5A059] bg-gradient-to-r from-[#590D22] via-[#800F2F] to-[#590D22] px-6 py-3 text-xs font-cinzel font-bold tracking-[0.22em] text-[#FFF9EF] shadow-xl hover:shadow-[0_0_20px_rgba(197,160,89,0.5)] active:scale-95 transition-all"
            >
              <RotateCcw className="w-4 h-4 text-[#DFB76C]" />
              <span>REPLAY INVITATION</span>
            </button>

            <button
              onClick={handleShare}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-[#C5A059] bg-[#FFFDF9] px-5 py-3 text-xs font-cinzel font-semibold tracking-wider text-[#590D22] hover:bg-[#F8F0E3] transition-all"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>Link Copied</span>
                </>
              ) : (
                <>
                  <Share2 className="w-4 h-4 text-[#800F2F]" />
                  <span>Share Invitation</span>
                </>
              )}
            </button>
          </div>

          {/* Footer Note */}
          <div className="mt-8 pt-4 border-t border-[#C5A059]/30 w-full text-center">
            <p className="text-[10px] font-cinzel tracking-widest text-[#8C6A28] uppercase">
              #DakshWedsIsha • December 2026
            </p>
          </div>

        </div>
      </motion.div>
    </section>
  );
}

