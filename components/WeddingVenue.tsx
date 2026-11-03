"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FloralDivider, RoyalCornerOrnament } from "./DecorativeSVGs";
import { MapPin, Navigation, ExternalLink, Copy, Check } from "lucide-react";

export default function WeddingVenue() {
  const [copied, setCopied] = useState(false);
  const mapsUrl = "https://maps.app.goo.gl/Ugv69M8jQwEj95eD6";
  const addressText = "ATM FARM HOUSE, Ambala-Kenedipur Road, Sasan Road, Ambala, Mendarda, Gujarat – 362260";

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(addressText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative w-full py-20 px-4 flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#1c040c] via-[#2a040e] to-[#1c040c]">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[500px] h-[340px] bg-[#800F2F]/20 rounded-full blur-[100px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1 }}
        className="relative z-10 w-full max-w-[450px] rounded-3xl bg-gradient-to-b from-[#3a0514] via-[#590D22] to-[#26030c] border-2 border-[#C5A059] p-6 sm:p-8 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] overflow-hidden text-center text-[#FFF9EF]"
      >
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#DFB76C_0.8px,transparent_0.8px)] [background-size:14px_14px] pointer-events-none" />

        {/* Four Royal Corners */}
        <div className="absolute top-2 left-2 pointer-events-none opacity-80">
          <RoyalCornerOrnament className="w-10 h-10 text-[#DFB76C]" />
        </div>
        <div className="absolute top-2 right-2 pointer-events-none opacity-80 rotate-90">
          <RoyalCornerOrnament className="w-10 h-10 text-[#DFB76C]" />
        </div>
        <div className="absolute bottom-2 left-2 pointer-events-none opacity-80 -rotate-90">
          <RoyalCornerOrnament className="w-10 h-10 text-[#DFB76C]" />
        </div>
        <div className="absolute bottom-2 right-2 pointer-events-none opacity-80 rotate-180">
          <RoyalCornerOrnament className="w-10 h-10 text-[#DFB76C]" />
        </div>

        {/* Inner Border */}
        <div className="absolute inset-2.5 rounded-2xl border border-[#DFB76C]/30 pointer-events-none" />

        {/* Section Tag */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#C5A059]/40 bg-[#800F2F]/40 mb-3">
          <MapPin className="w-3.5 h-3.5 text-[#DFB76C]" />
          <span className="text-[10px] font-cinzel tracking-[0.25em] text-[#FFF2B2] uppercase font-semibold">
            Wedding Destination
          </span>
          <MapPin className="w-3.5 h-3.5 text-[#DFB76C]" />
        </div>

        {/* Heading */}
        <h2 className="font-royal text-2xl sm:text-3xl font-bold tracking-[0.18em] text-[#FFF9EF] uppercase drop-shadow">
          THE VENUE
        </h2>

        <FloralDivider className="my-4" />

        {/* Venue Title & Decorative Medallion */}
        <div className="my-3 flex flex-col items-center">
          <div className="w-14 h-14 rounded-full border border-[#DFB76C] bg-gradient-to-br from-[#800F2F] to-[#2B040F] flex items-center justify-center shadow-lg mb-3">
            <Navigation className="w-7 h-7 text-[#FFF2B2]" />
          </div>

          <h3 className="font-royal text-2xl sm:text-3xl font-extrabold tracking-wide text-[#FFF2B2] drop-shadow-md">
            ATM FARM HOUSE
          </h3>

          <div className="h-[1px] w-28 bg-gradient-to-r from-transparent via-[#DFB76C] to-transparent my-2" />
        </div>

        {/* Address Lines */}
        <div className="space-y-1 font-cormorant text-base sm:text-lg text-[#F8F0E3]/95 leading-relaxed px-3 my-4">
          <p className="font-medium tracking-wide">Ambala-Kenedipur Road,</p>
          <p className="font-medium tracking-wide">Sasan Road,</p>
          <p className="font-medium tracking-wide">Ambala, Mendarda,</p>
          <p className="font-bold tracking-wider text-[#DFB76C]">
            Gujarat – 362260.
          </p>
        </div>

        {/* Interactive Map Embed / Preview Card */}
        <div className="relative w-full h-44 rounded-2xl overflow-hidden border border-[#C5A059] my-5 shadow-inner bg-[#2A0510] group">
          <iframe
            title="ATM Farm House Google Map"
            src="https://www.google.com/maps?q=Ambala-Kenedipur+Road,+Sasan+Road,+Ambala,+Mendarda,+Gujarat+362260&output=embed"
            className="w-full h-full border-0 filter contrast-125 opacity-80 group-hover:opacity-100 transition-opacity"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#26030c] via-transparent to-transparent pointer-events-none" />

          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-2 right-2 flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#590D22]/90 border border-[#DFB76C] text-[10px] font-cinzel text-[#FFF9EF] shadow-md hover:bg-[#800F2F] transition-colors"
          >
            <span>Open Interactive Map</span>
            <ExternalLink className="w-3 h-3 text-[#DFB76C]" />
          </a>
        </div>

        {/* Action Buttons: GET DIRECTIONS and COPY ADDRESS */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-4">
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#DFB76C] bg-gradient-to-r from-[#DFB76C] via-[#FFF2B2] to-[#C5A059] px-6 py-3 text-xs font-cinzel font-bold tracking-[0.22em] text-[#380514] shadow-xl hover:shadow-[0_0_25px_rgba(223,183,108,0.6)] hover:scale-105 active:scale-95 transition-all"
          >
            <Navigation className="w-4 h-4 text-[#590D22] fill-[#590D22]" />
            <span>GET DIRECTIONS</span>
          </a>

          <button
            onClick={handleCopyAddress}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-[#DFB76C]/60 bg-[#2B040F] px-4 py-2.5 text-xs font-cinzel tracking-wider text-[#DFB76C] hover:bg-[#800F2F] hover:text-[#FFF9EF] transition-all"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy Address</span>
              </>
            )}
          </button>
        </div>

      </motion.div>
    </section>
  );
}

