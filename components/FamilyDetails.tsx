"use client";

import React from "react";
import { motion } from "framer-motion";
import { FloralDivider, RoyalCornerOrnament, GaneshaIcon } from "./DecorativeSVGs";
import { HeartHandshake } from "lucide-react";

export default function FamilyDetails() {
  return (
    <section className="relative w-full py-20 px-4 flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#1c040c] via-[#2f0614] to-[#1c040c]">
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1 }}
        className="relative z-10 w-full max-w-[440px] rounded-3xl bg-[#FFF9EF] text-[#38251F] p-7 sm:p-9 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.85)] border-2 border-[#C5A059] overflow-hidden text-center"
      >
        {/* Subtle Paper Texture */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#800F2F_1px,transparent_1px)] [background-size:12px_12px] pointer-events-none" />

        {/* Four Royal Corners */}
        <div className="absolute top-2 left-2 pointer-events-none opacity-80">
          <RoyalCornerOrnament className="w-10 h-10" />
        </div>
        <div className="absolute top-2 right-2 pointer-events-none opacity-80 rotate-90">
          <RoyalCornerOrnament className="w-10 h-10" />
        </div>
        <div className="absolute bottom-2 left-2 pointer-events-none opacity-80 -rotate-90">
          <RoyalCornerOrnament className="w-10 h-10" />
        </div>
        <div className="absolute bottom-2 right-2 pointer-events-none opacity-80 rotate-180">
          <RoyalCornerOrnament className="w-10 h-10" />
        </div>

        {/* Inner Border */}
        <div className="absolute inset-2.5 rounded-2xl border border-[#C5A059]/70 pointer-events-none" />
        <div className="absolute inset-4 rounded-xl border border-dashed border-[#DFB76C]/40 pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center">
          
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#C5A059]/40 bg-[#800F2F]/10 mb-3">
            <HeartHandshake className="w-3.5 h-3.5 text-[#800F2F]" />
            <span className="text-[10px] font-cinzel tracking-[0.25em] text-[#800F2F] font-bold uppercase">
              Elder Blessings
            </span>
            <HeartHandshake className="w-3.5 h-3.5 text-[#800F2F]" />
          </div>

          <GaneshaIcon className="w-10 h-10 mb-1" />

          {/* Heading */}
          <p className="font-cinzel text-xs sm:text-sm tracking-[0.28em] text-[#8C6A28] font-bold uppercase mt-1">
            WITH THE BLESSINGS OF
          </p>

          <FloralDivider className="my-4" />

          {/* Elders' Names */}
          <div className="space-y-4 my-2">
            <div>
              <p className="text-[11px] font-cinzel tracking-[0.22em] text-[#800F2F] uppercase font-semibold">
                Respected Father & Mother
              </p>
              <h3 className="font-royal text-xl sm:text-2xl font-bold tracking-wide text-[#590D22] mt-1">
                Kiritbhai Haribhai Mungara
              </h3>
              <h3 className="font-royal text-xl sm:text-2xl font-bold tracking-wide text-[#590D22] mt-1">
                Rekhaben Kiritbhai Mungara
              </h3>
            </div>
          </div>

          <FloralDivider className="my-4" />

          {/* Mungara Family Banner */}
          <div className="my-2">
            <span className="text-[10px] font-cinzel tracking-[0.25em] text-[#8C6A28] uppercase block mb-1">
              Warmly Welcomed By
            </span>
            <h4 className="font-royal text-2xl sm:text-3xl font-extrabold tracking-[0.2em] text-[#590D22] uppercase">
              MUNGARA FAMILY
            </h4>
            <p className="font-cormorant text-sm sm:text-base text-[#38251F]/80 italic mt-2">
              &amp; Relatives, Friends, and Well-Wishers
            </p>
          </div>

        </div>
      </motion.div>
    </section>
  );
}

