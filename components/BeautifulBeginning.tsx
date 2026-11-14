"use client";

import React from "react";
import { motion } from "framer-motion";
import { FloralDivider, MandalaRosette, RoyalCornerOrnament } from "./DecorativeSVGs";
import { Heart } from "lucide-react";
import Image from "next/image";

export default function BeautifulBeginning() {
  return (
    <section className="relative w-full py-4 sm:py-6 px-3 sm:px-4 flex flex-col items-center justify-center overflow-hidden bg-[#1c040c]">
      {/* Background Mandala Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] pointer-events-none opacity-10 text-[#C5A059]">
        <MandalaRosette className="w-full h-full animate-[spin_120s_linear_infinite]" />
      </div>

      {/* Ambient Burgundy Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[320px] sm:w-[480px] h-[320px] sm:h-[480px] bg-[#800F2F]/20 rounded-full blur-[100px] pointer-events-none" />

      {/* Main Luxury Frame */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1 }}
        className="relative z-10 w-full max-w-[440px] rounded-3xl bg-gradient-to-b from-[#400717] via-[#590D22] to-[#300511] border-2 border-[#C5A059]/80 p-8 sm:p-10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] overflow-hidden text-center"
      >
        {/* Subtle Ornamental Corner Accents */}
        <div className="absolute top-2 left-2 pointer-events-none opacity-70">
          <RoyalCornerOrnament className="w-10 h-10 text-[#DFB76C]" />
        </div>
        <div className="absolute top-2 right-2 pointer-events-none opacity-70 rotate-90">
          <RoyalCornerOrnament className="w-10 h-10 text-[#DFB76C]" />
        </div>
        <div className="absolute bottom-2 left-2 pointer-events-none opacity-70 -rotate-90">
          <RoyalCornerOrnament className="w-10 h-10 text-[#DFB76C]" />
        </div>
        <div className="absolute bottom-2 right-2 pointer-events-none opacity-70 rotate-180">
          <RoyalCornerOrnament className="w-10 h-10 text-[#DFB76C]" />
        </div>

        {/* Inner Border */}
        <div className="absolute inset-2.5 rounded-2xl border border-[#DFB76C]/30 pointer-events-none" />

        {/* Section Heading Tag */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#C5A059]/40 bg-[#800F2F]/40 mb-3"
        >
          <Heart className="w-3 h-3 text-[#DFB76C] fill-[#DFB76C]/40" />
          <span className="text-[10px] font-cinzel tracking-[0.25em] text-[#FFF2B2] uppercase font-semibold">
            Our Love Story
          </span>
          <Heart className="w-3 h-3 text-[#DFB76C] fill-[#DFB76C]/40" />
        </motion.div>

        {/* The Beginning Calligraphy Artwork (Replaces old text, divider & logo) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="my-3 sm:my-5 flex items-center justify-center"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/the-beginning-gold.png"
            alt="The Beginning"
            className="w-60 sm:w-68 h-auto object-contain drop-shadow-[0_4px_18px_rgba(223,183,108,0.45)] hover:scale-102 transition-transform duration-500"
          />
        </motion.div>

        <FloralDivider className="my-5 opacity-80" />

        {/* Description Text */}
        <div className="space-y-4 px-2 sm:px-4">
          <p className="font-cormorant text-lg sm:text-xl text-[#F8F0E3] leading-relaxed italic drop-shadow-sm font-light">
            &ldquo;Two hearts, one beautiful journey, and a lifetime of togetherness.&rdquo;
          </p>

          <p className="font-cormorant text-base sm:text-lg text-[#F8F0E3]/90 leading-relaxed font-normal">
            With the blessings of our families, we invite you to celebrate the beginning of a beautiful new chapter.
          </p>
        </div>

        <FloralDivider className="my-6 opacity-80" />

        {/* Couple Signature */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-2"
        >
          <span className="font-royal text-xl sm:text-2xl text-[#FFF2B2] tracking-[0.2em] font-semibold uppercase drop-shadow-md">
            A LIFETIME OF TOGETHERNESS
          </span>
          <p className="text-[10px] font-cinzel tracking-[0.25em] text-[#DFB76C]/80 uppercase mt-2">
            Beginning Our Forever
          </p>
        </motion.div>

      </motion.div>
    </section>
  );
}

