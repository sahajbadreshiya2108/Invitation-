"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FloralDivider, RoyalCornerOrnament } from "./DecorativeSVGs";
import { Clock, Sparkles } from "lucide-react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isPast: boolean;
}

export default function CountdownTimer() {
  // Target: 1 December 2026, 08:30 AM IST (UTC: 2026-12-01T03:00:00Z)
  const targetTimestamp = Date.UTC(2026, 11, 1, 3, 0, 0);

  const calculateTimeLeft = (): TimeLeft => {
    const now = new Date().getTime();
    const difference = targetTimestamp - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    return { days, hours, minutes, seconds, isPast: false };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isPast: false,
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: "DAYS", value: timeLeft.days },
    { label: "HOURS", value: timeLeft.hours },
    { label: "MINUTES", value: timeLeft.minutes },
    { label: "SECONDS", value: timeLeft.seconds },
  ];

  return (
    <section className="relative w-full py-20 px-4 flex flex-col items-center justify-center overflow-hidden bg-[#1c040c]">
      {/* Ambient Burgundy Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[500px] h-[340px] bg-[#800F2F]/20 rounded-full blur-[100px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1 }}
        className="relative z-10 w-full max-w-[440px] rounded-3xl bg-gradient-to-b from-[#3d0615] via-[#590D22] to-[#2b040f] border-2 border-[#C5A059]/80 p-6 sm:p-8 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] overflow-hidden text-center"
      >
        {/* Four Royal Corners */}
        <div className="absolute top-2 left-2 pointer-events-none opacity-60">
          <RoyalCornerOrnament className="w-10 h-10 text-[#DFB76C]" />
        </div>
        <div className="absolute top-2 right-2 pointer-events-none opacity-60 rotate-90">
          <RoyalCornerOrnament className="w-10 h-10 text-[#DFB76C]" />
        </div>
        <div className="absolute bottom-2 left-2 pointer-events-none opacity-60 -rotate-90">
          <RoyalCornerOrnament className="w-10 h-10 text-[#DFB76C]" />
        </div>
        <div className="absolute bottom-2 right-2 pointer-events-none opacity-60 rotate-180">
          <RoyalCornerOrnament className="w-10 h-10 text-[#DFB76C]" />
        </div>

        {/* Inner Border */}
        <div className="absolute inset-2.5 rounded-2xl border border-[#DFB76C]/30 pointer-events-none" />

        {/* Section Tag */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#C5A059]/40 bg-[#800F2F]/40 mb-3">
          <Clock className="w-3.5 h-3.5 text-[#DFB76C]" />
          <span className="text-[10px] font-cinzel tracking-[0.25em] text-[#FFF2B2] uppercase font-semibold">
            The Countdown
          </span>
          <Clock className="w-3.5 h-3.5 text-[#DFB76C]" />
        </div>

        {/* Headings */}
        <h2 className="font-royal text-xl sm:text-2xl font-bold tracking-[0.16em] text-[#FFF9EF] uppercase">
          COUNTING EVERY HEARTBEAT
        </h2>
        <p className="font-cinzel text-xs tracking-[0.25em] text-[#DFB76C] uppercase mt-1">
          OUR CELEBRATION BEGINS IN
        </p>

        <FloralDivider className="my-5" />

        {/* Countdown Cards Grid */}
        {!timeLeft.isPast ? (
          <div className="grid grid-cols-4 gap-2 sm:gap-3 my-4">
            {timeUnits.map((unit) => (
              <div
                key={unit.label}
                className="relative rounded-2xl bg-[#FFF9EF] border border-[#C5A059] p-2.5 sm:p-3 shadow-lg flex flex-col items-center justify-center transition-transform hover:scale-105"
              >
                {/* Subtle Inner Border */}
                <div className="absolute inset-1 rounded-xl border border-dashed border-[#C5A059]/30 pointer-events-none" />

                <span className="font-royal text-2xl sm:text-3xl font-extrabold text-[#590D22] leading-tight">
                  {mounted ? String(unit.value).padStart(2, "0") : "--"}
                </span>
                <span className="text-[8.5px] sm:text-[10px] font-cinzel font-bold tracking-widest text-[#8C6A28] uppercase mt-1">
                  {unit.label}
                </span>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-4 rounded-2xl bg-[#FFF9EF] border border-[#C5A059] text-[#590D22] my-4">
            <Sparkles className="w-6 h-6 text-[#C5A059] mx-auto mb-2 animate-bounce" />
            <h3 className="font-royal text-lg font-bold">
              THE CELEBRATION HAS BEGUN!
            </h3>
            <p className="text-xs font-cinzel tracking-wider text-[#8C6A28] mt-1">
              Blessings & Joy to Daksh & Isha
            </p>
          </div>
        )}

        {/* Target Timezone Badge */}
        <div className="mt-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2B040F] border border-[#C5A059]/40 text-[#DFB76C] text-[10px] font-cinzel tracking-wider">
          <span>✦ 1 December 2026 • 08:30 AM IST (Asia/Kolkata) ✦</span>
        </div>
      </motion.div>
    </section>
  );
}

