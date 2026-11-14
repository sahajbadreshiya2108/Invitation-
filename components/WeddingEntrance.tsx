"use client";

import React from "react";
import { motion } from "framer-motion";
import { GaneshaIcon, RoyalCornerOrnament, FloralDivider, DILogo } from "./DecorativeSVGs";

export default function WeddingEntrance() {
  return (
    <section
      id="wedding-entrance"
      className="relative w-full flex items-center justify-center py-4 sm:py-6 px-3 sm:px-4 overflow-hidden bg-gradient-to-b from-[#180309] via-[#280511] to-[#140207]"
    >
      {/* Soft Ambient Radiance */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[550px] h-[340px] sm:h-[550px] bg-[#800F2F]/20 rounded-full blur-[120px] pointer-events-none" />

      {/* Main Luxury Station Card Frame with Full Page Pheras Art Background */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-20 w-full max-w-[400px] sm:max-w-[440px] aspect-[4/6.4] max-h-[680px] rounded-3xl border-2 border-[#D4AF37] shadow-[0_30px_70px_-15px_rgba(0,0,0,0.95)] overflow-hidden flex flex-col justify-between p-6 sm:p-8"
      >
        {/* Full Original Wedding Pheras & Palace Lanterns Art as Complete Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/feras-wedding-bg.jpg')",
          }}
        />

        {/* Soft Gold & Ivory Lighting Gradient for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/50 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

        {/* Golden Ornamental Frame Borders */}
        <div className="absolute inset-2.5 rounded-2xl border border-[#D4AF37]/80 pointer-events-none" />
        <div className="absolute inset-3.5 rounded-xl border border-dashed border-[#800F2F]/40 pointer-events-none" />

        {/* Four Royal Corners */}
        <div className="absolute top-2 left-2 pointer-events-none opacity-85">
          <RoyalCornerOrnament className="w-10 h-10 text-[#D4AF37]" />
        </div>
        <div className="absolute top-2 right-2 pointer-events-none opacity-85 rotate-90">
          <RoyalCornerOrnament className="w-10 h-10 text-[#D4AF37]" />
        </div>
        <div className="absolute bottom-2 left-2 pointer-events-none opacity-85 -rotate-90">
          <RoyalCornerOrnament className="w-10 h-10 text-[#D4AF37]" />
        </div>
        <div className="absolute bottom-2 right-2 pointer-events-none opacity-85 rotate-180">
          <RoyalCornerOrnament className="w-10 h-10 text-[#D4AF37]" />
        </div>

        {/* Top Section Content (placed nicely under the palace arch) */}
        <div className="relative z-10 flex flex-col items-center text-center mt-3">
          
          {/* Shubh Vivah & Ganesha Invocation */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center mb-1"
          >
            <div className="px-3.5 py-0.5 rounded-full bg-[#590D22]/90 border border-[#D4AF37] shadow-md mb-2">
              <span className="text-[11px] font-royal font-bold tracking-[0.22em] text-[#FFF4D4] uppercase">
                ॥ शुभ विवाह ॥
              </span>
            </div>
            
            <GaneshaIcon className="w-10 h-10 drop-shadow-sm text-[#D4AF37]" />
            <span className="font-royal text-[11px] sm:text-xs tracking-[0.25em] text-[#800F2F] font-bold mt-1 uppercase">
              || ॐ श्री गणेशाय नमः ||
            </span>
          </motion.div>

          {/* Invitation Honorifics */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-0.5 my-1.5"
          >
            <p className="font-cinzel text-[10px] sm:text-[11px] tracking-[0.2em] text-[#800F2F] font-bold uppercase">
              YOU ARE CORDIALLY INVITED TO CELEBRATE
            </p>
          </motion.div>

          {/* Couple Names (Primary Display 2 of 2) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.35 }}
            className="my-1.5 flex flex-col items-center bg-[#FFF9EF]/85 px-6 py-2.5 rounded-2xl border border-[#D4AF37]/60 shadow-lg backdrop-blur-xs"
          >
            <h1 className="font-calligraphy text-4xl sm:text-5xl text-[#590D22] drop-shadow-sm leading-tight">
              Daksh & Isha
            </h1>
            <div className="h-[1px] w-20 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent my-1" />
            <p className="font-cinzel text-[10px] tracking-[0.25em] text-[#8C6A28] uppercase font-semibold">
              MUNGARA FAMILY
            </p>
          </motion.div>

        </div>

        {/* Bottom Section (Floating cleanly above the lotus agni kund base) */}
        <div className="relative z-10 flex flex-col items-center text-center mb-1">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D4AF37] bg-[#590D22]/90 shadow-xl text-[#FFF4D4] text-[10px] sm:text-[11px] font-cinzel font-bold tracking-widest uppercase">
            <span>✦</span>
            <span>The View Gir Resort</span>
            <span>✦</span>
          </div>
        </div>

      </motion.div>
    </section>
  );
}
