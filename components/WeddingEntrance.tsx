"use client";

import React from "react";
import { motion } from "framer-motion";
import { GaneshaIcon, RoyalCornerOrnament, FloralDivider } from "./DecorativeSVGs";

export default function WeddingEntrance() {
  return (
    <section
      id="wedding-entrance"
      className="relative min-h-screen w-full flex items-center justify-center py-20 px-4 overflow-hidden bg-gradient-to-b from-[#20040c] via-[#350715] to-[#20040c]"
    >
      {/* Royal Draped Curtains Visual Framing (Ivory & Gold Sheen) */}
      <div className="absolute top-0 inset-x-0 h-28 pointer-events-none flex justify-between z-10 opacity-75">
        {/* Left Curtain Swag */}
        <div className="w-1/2 h-full bg-gradient-to-b from-[#FFF9EF]/20 via-[#F8F0E3]/10 to-transparent [clip-path:polygon(0_0,100%_0,85%_75%,50%_100%,0_80%)] border-b border-[#C5A059]/40" />
        {/* Right Curtain Swag */}
        <div className="w-1/2 h-full bg-gradient-to-b from-[#FFF9EF]/20 via-[#F8F0E3]/10 to-transparent [clip-path:polygon(0_0,100%_0,100%_80%,50%_100%,15%_75%)] border-b border-[#C5A059]/40" />
      </div>

      {/* Golden Curtain Tassels Accent */}
      <div className="absolute top-1 left-4 z-20 pointer-events-none w-6 h-16 border-l-2 border-b-2 border-[#DFB76C]/60 rounded-bl-xl opacity-60" />
      <div className="absolute top-1 right-4 z-20 pointer-events-none w-6 h-16 border-r-2 border-b-2 border-[#DFB76C]/60 rounded-br-xl opacity-60" />

      {/* Radial Glow Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[550px] h-[340px] sm:h-[550px] bg-[#800F2F]/25 rounded-full blur-[120px] pointer-events-none" />

      {/* Main Luxury Station Card Frame */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-20 w-full max-w-[440px] rounded-3xl bg-[#FFF9EF] text-[#38251F] p-7 sm:p-9 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.85)] border-2 border-[#C5A059] overflow-hidden"
      >
        {/* Paper Texture Subtle Dot Pattern */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#800F2F_1px,transparent_1px)] [background-size:12px_12px] pointer-events-none" />

        {/* Inner Gold Foil Frame Lines */}
        <div className="absolute inset-2.5 rounded-2xl border border-[#C5A059]/80 pointer-events-none" />
        <div className="absolute inset-4 rounded-xl border border-dashed border-[#DFB76C]/50 pointer-events-none" />

        {/* Four Royal Corners */}
        <div className="absolute top-2 left-2 pointer-events-none opacity-85">
          <RoyalCornerOrnament className="w-12 h-12" />
        </div>
        <div className="absolute top-2 right-2 pointer-events-none opacity-85 rotate-90">
          <RoyalCornerOrnament className="w-12 h-12" />
        </div>
        <div className="absolute bottom-2 left-2 pointer-events-none opacity-85 -rotate-90">
          <RoyalCornerOrnament className="w-12 h-12" />
        </div>
        <div className="absolute bottom-2 right-2 pointer-events-none opacity-85 rotate-180">
          <RoyalCornerOrnament className="w-12 h-12" />
        </div>

        {/* Card Content */}
        <div className="relative z-10 flex flex-col items-center text-center">
          
          {/* Shree Ganesh Invocation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center"
          >
            <div className="p-2.5 rounded-full bg-[#590D22]/5 border border-[#C5A059]/40 mb-2">
              <GaneshaIcon className="w-14 h-14" />
            </div>
            <h3 className="font-cinzel text-xs sm:text-sm font-bold tracking-[0.25em] text-[#800F2F] uppercase">
              || श्री गणेशाय नमः ||
            </h3>
            <span className="font-cinzel text-[10px] tracking-[0.28em] text-[#9E782F] uppercase mt-0.5">
              SHREE GANESHAY NAMAH
            </span>
          </motion.div>

          <FloralDivider className="my-4" />

          {/* Invitation Honorifics */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="space-y-1"
          >
            <p className="font-cinzel text-[11px] sm:text-xs tracking-[0.22em] text-[#800F2F] font-semibold uppercase">
              YOU ARE CORDIALLY INVITED
            </p>
            <p className="font-cinzel text-[10px] tracking-[0.25em] text-[#590D22]/75 uppercase">
              TO CELEBRATE THE WEDDING OF
            </p>
          </motion.div>

          {/* Grand Couple Typography */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="my-5 flex flex-col items-center"
          >
            <h1 className="font-calligraphy text-5xl sm:text-6xl text-[#590D22] drop-shadow-sm tracking-wide">
              Daksh
            </h1>
            
            <div className="flex items-center justify-center gap-3 my-1">
              <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#C5A059]" />
              <span className="font-calligraphy text-3xl sm:text-4xl text-[#C5A059] leading-none">
                &
              </span>
              <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#C5A059]" />
            </div>

            <h1 className="font-calligraphy text-5xl sm:text-6xl text-[#590D22] drop-shadow-sm tracking-wide">
              Isha
            </h1>
          </motion.div>

          <FloralDivider className="my-3" />

          {/* Blessings & Family */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.65 }}
            className="space-y-1.5"
          >
            <p className="font-cinzel text-[10px] tracking-[0.25em] text-[#9E782F] uppercase font-medium">
              WITH THE BLESSINGS OF OUR ELDERS
            </p>
            <p className="font-royal text-base sm:text-lg font-bold tracking-[0.18em] text-[#590D22] uppercase">
              MUNGARA FAMILY
            </p>
          </motion.div>

          {/* Golden Seal of Union */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="mt-6 flex items-center justify-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#C5A059]/50 bg-[#F8F0E3] shadow-inner text-[#800F2F] text-[10px] font-cinzel tracking-widest uppercase">
              <span>✦</span>
              <span>Royal Union • Gujarat</span>
              <span>✦</span>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}

