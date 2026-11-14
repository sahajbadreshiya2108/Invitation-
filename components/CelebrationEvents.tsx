"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FloralDivider, RoyalCornerOrnament, MandalaRosette } from "./DecorativeSVGs";
import { Calendar, Clock, Sun, Sparkles, Moon, HeartHandshake, Utensils, Users } from "lucide-react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isPast: boolean;
}

export default function CelebrationEvents() {
  const [activeTab, setActiveTab] = useState<"all" | "day1" | "day2">("all");

  // Target: 2 December 2026, 10:30 AM IST (UTC: 2026-12-02T05:00:00Z)
  const targetTimestamp = Date.UTC(2026, 11, 2, 5, 0, 0);

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
    { label: "MINS", value: timeLeft.minutes },
    { label: "SECS", value: timeLeft.seconds },
  ];

  const day1Events = [
    {
      time: "08:30 AM",
      title: "MANDAP ROPAN",
      subtitle: "Morning Ceremony & Invocations",
      icon: Sun,
    },
    {
      time: "03:00 PM",
      title: "HALDI CEREMONY",
      subtitle: "Auspicious Turmeric Ritual & Celebration",
      icon: Sparkles,
    },
    {
      time: "08:00 PM",
      title: "EVENING RASGARBA",
      subtitle: "Traditional Dandiya & Folk Dance Night",
      icon: Moon,
    },
  ];

  const day2Events = [
    {
      time: "EARLY MORNING",
      title: "JAAN AAGMAN",
      subtitle: "Welcoming the Baraat with Joy",
      icon: Users,
    },
    {
      time: "10:30 AM",
      title: "HAST MELAP (MANDAP)",
      subtitle: "Sacred Wedding Pheras & Vedic Mantras",
      icon: HeartHandshake,
    },
    {
      time: "11:30 AM ONWARDS",
      title: "LUNCH (BHOJAN SAMARAMBH)",
      subtitle: "Royal Celebratory Wedding Feast",
      icon: Utensils,
    },
  ];

  // Helper to add events to calendar
  const handleAddToCalendar = () => {
    const title = encodeURIComponent("Daksh & Isha Royal Wedding Celebrations");
    const details = encodeURIComponent(
      "Wedding Celebrations of Daksh & Isha.\n\nDec 1: Mandap Ropan (08:30 AM), Haldi Ceremony (03:00 PM), Evening Rasgarba (08:00 PM)\nDec 2: Jaan Aagman (Early Morning), Hast Melap (10:30 AM), Lunch / Bhojan Samarambh (11:30 AM Onwards).\n\nVenue: The View Gir Resort, Ambala, Mendarda, Gujarat."
    );
    const location = encodeURIComponent("The View Gir Resort, Survey No. 72, Ambala-Kenedipur Road, Sasan Road, Ambala, Mendarda, Gujarat – 362260");
    const dates = "20261201T030000Z/20261202T120000Z";

    const gcalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}&dates=${dates}`;
    window.open(gcalUrl, "_blank");
  };

  return (
    <section className="relative w-full py-20 px-4 flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#1c040c] via-[#2d0613] to-[#1c040c]">
      {/* Background Mandala */}
      <div className="absolute top-1/3 right-0 translate-x-1/2 w-96 h-96 opacity-10 text-[#C5A059] pointer-events-none">
        <MandalaRosette className="w-full h-full" />
      </div>

      <div className="relative z-10 w-full max-w-[460px] flex flex-col items-center">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-5 w-full"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#C5A059]/40 bg-[#800F2F]/30 mb-2.5">
            <Calendar className="w-3.5 h-3.5 text-[#DFB76C]" />
            <span className="text-[10px] font-cinzel tracking-[0.25em] text-[#FFF2B2] uppercase font-semibold">
              Celebration Schedule
            </span>
          </div>

          <h2 className="font-royal text-2xl sm:text-3xl font-bold tracking-[0.16em] text-[#FFF9EF] uppercase drop-shadow">
            WEDDING CELEBRATIONS
          </h2>
          <p className="font-cormorant text-sm sm:text-base text-[#F8F0E3]/80 italic mt-0.5">
            1 &amp; 2 December 2026 • The View Gir Resort
          </p>

          {/* Integrated Compact Live Countdown */}
          <div className="mt-4 p-3 rounded-2xl bg-gradient-to-r from-[#400717]/90 via-[#590D22]/90 to-[#400717]/90 border border-[#D4AF37]/60 shadow-lg text-center max-w-[320px] mx-auto">
            <div className="flex items-center justify-center gap-1.5 mb-1.5">
              <Clock className="w-3 h-3 text-[#F3E5AB] animate-pulse" />
              <span className="text-[9px] font-cinzel tracking-[0.22em] text-[#FFF4D4] uppercase font-bold">
                Countdown to Wedding Mandap
              </span>
            </div>
            <div className="grid grid-cols-4 gap-1.5">
              {timeUnits.map((u, i) => (
                <div key={i} className="flex flex-col items-center bg-[#2B040F]/80 border border-[#D4AF37]/35 rounded-xl py-1 px-1 shadow-inner">
                  <span className="font-royal text-base sm:text-lg font-bold text-[#FFF9EF] leading-tight">
                    {mounted ? String(u.value).padStart(2, "0") : "--"}
                  </span>
                  <span className="text-[7px] font-cinzel tracking-wider text-[#F3E5AB]/85 uppercase mt-0.5">
                    {u.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ============================================================== */}
        {/* SINGLE UNIFIED CELEBRATIONS CARD (Both Days Combined) */}
        {/* ============================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9 }}
          className="w-full rounded-3xl bg-[#FFF9EF] text-[#38251F] p-5 sm:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.85)] border-2 border-[#C5A059] relative overflow-hidden"
        >
          {/* Subtle Paper Dots */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#800F2F_1px,transparent_1px)] [background-size:12px_12px] pointer-events-none" />

          {/* Corners */}
          <div className="absolute top-2 left-2 pointer-events-none opacity-70">
            <RoyalCornerOrnament className="w-8 h-8" />
          </div>
          <div className="absolute top-2 right-2 pointer-events-none opacity-70 rotate-90">
            <RoyalCornerOrnament className="w-8 h-8" />
          </div>
          <div className="absolute bottom-2 left-2 pointer-events-none opacity-70 -rotate-90">
            <RoyalCornerOrnament className="w-8 h-8" />
          </div>
          <div className="absolute bottom-2 right-2 pointer-events-none opacity-70 rotate-180">
            <RoyalCornerOrnament className="w-8 h-8" />
          </div>

          {/* Day Switcher Tab Filter */}
          <div className="relative z-10 flex items-center justify-center p-1 rounded-full bg-[#590D22]/10 border border-[#C5A059]/50 mb-5 max-w-[340px] mx-auto">
            <button
              onClick={() => setActiveTab("all")}
              className={`flex-1 py-1.5 px-2 rounded-full text-[10px] sm:text-[11px] font-cinzel font-bold tracking-wider transition-all ${
                activeTab === "all"
                  ? "bg-[#590D22] text-[#FFF4D4] shadow-md border border-[#D4AF37]"
                  : "text-[#800F2F] hover:text-[#590D22]"
              }`}
            >
              ALL EVENTS
            </button>
            <button
              onClick={() => setActiveTab("day1")}
              className={`flex-1 py-1.5 px-2 rounded-full text-[10px] sm:text-[11px] font-cinzel font-bold tracking-wider transition-all ${
                activeTab === "day1"
                  ? "bg-[#590D22] text-[#FFF4D4] shadow-md border border-[#D4AF37]"
                  : "text-[#800F2F] hover:text-[#590D22]"
              }`}
            >
              1 DEC (RITUALS)
            </button>
            <button
              onClick={() => setActiveTab("day2")}
              className={`flex-1 py-1.5 px-2 rounded-full text-[10px] sm:text-[11px] font-cinzel font-bold tracking-wider transition-all ${
                activeTab === "day2"
                  ? "bg-[#590D22] text-[#FFF4D4] shadow-md border border-[#D4AF37]"
                  : "text-[#800F2F] hover:text-[#590D22]"
              }`}
            >
              2 DEC (VIVAH)
            </button>
          </div>

          {/* ========================================================== */}
          {/* SECTION: 1 DECEMBER 2026 */}
          {/* ========================================================== */}
          {(activeTab === "all" || activeTab === "day1") && (
            <div className="relative z-10 mb-6">
              {/* Day 1 Badge */}
              <div className="text-center mb-3">
                <div className="inline-block px-4 py-1 rounded-full bg-[#590D22] border border-[#C5A059] shadow-sm">
                  <span className="text-[10px] sm:text-[11px] font-cinzel font-bold tracking-[0.22em] text-[#FFF2B2] uppercase">
                    TUESDAY, 1 DECEMBER 2026
                  </span>
                </div>
                <h3 className="font-royal text-base sm:text-lg font-bold tracking-wider text-[#590D22] uppercase mt-1">
                  DAY OF RITUALS &amp; RASGARBA
                </h3>
              </div>

              {/* Day 1 Items */}
              <div className="space-y-2.5">
                {day1Events.map((evt, idx) => {
                  const IconComponent = evt.icon;
                  return (
                    <div
                      key={idx}
                      className="group rounded-xl bg-[#FFFDF9] border border-[#C5A059]/40 p-3 flex items-center gap-3 transition-all hover:border-[#800F2F] hover:shadow-sm"
                    >
                      <div className="w-9 h-9 rounded-full bg-[#590D22] text-[#DFB76C] flex items-center justify-center shrink-0 shadow-xs">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-1.5 text-[#800F2F] text-[10px] font-cinzel font-bold tracking-wider">
                          <Clock className="w-3 h-3 text-[#C5A059]" />
                          <span>{evt.time}</span>
                        </div>
                        <h4 className="font-royal text-sm sm:text-base font-bold tracking-wide text-[#38251F] uppercase">
                          {evt.title}
                        </h4>
                        <p className="text-[10px] font-cinzel tracking-wider text-[#8C6A28] uppercase font-semibold">
                          {evt.subtitle}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Divider between days when viewing both */}
          {activeTab === "all" && (
            <div className="w-full flex items-center justify-center gap-2 my-5 relative z-10">
              <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#C5A059] to-transparent" />
              <div className="p-1 rounded-full border border-[#C5A059] bg-[#590D22]">
                <Sparkles className="w-3.5 h-3.5 text-[#FFF2B2]" />
              </div>
              <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-[#C5A059] to-transparent" />
            </div>
          )}

          {/* ========================================================== */}
          {/* SECTION: 2 DECEMBER 2026 */}
          {/* ========================================================== */}
          {(activeTab === "all" || activeTab === "day2") && (
            <div className="relative z-10">
              {/* Day 2 Badge */}
              <div className="text-center mb-3">
                <div className="inline-block px-4 py-1 rounded-full bg-[#800F2F] border border-[#C5A059] shadow-sm">
                  <span className="text-[10px] sm:text-[11px] font-cinzel font-bold tracking-[0.22em] text-[#FFF2B2] uppercase">
                    WEDNESDAY, 2 DECEMBER 2026
                  </span>
                </div>
                <h3 className="font-royal text-base sm:text-lg font-bold tracking-wider text-[#590D22] uppercase mt-1">
                  THE SACRED WEDDING DAY
                </h3>
              </div>

              {/* Day 2 Items */}
              <div className="space-y-2.5">
                {day2Events.map((evt, idx) => {
                  const IconComponent = evt.icon;
                  return (
                    <div
                      key={idx}
                      className="group rounded-xl bg-[#FFF9EF] border border-[#C5A059]/60 p-3 flex items-center gap-3 transition-all hover:border-[#800F2F] hover:shadow-sm"
                    >
                      <div className="w-9 h-9 rounded-full bg-[#800F2F] text-[#FFF2B2] flex items-center justify-center shrink-0 shadow-xs">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-1.5 text-[#800F2F] text-[10px] font-cinzel font-bold tracking-wider">
                          <Clock className="w-3 h-3 text-[#C5A059]" />
                          <span>{evt.time}</span>
                        </div>
                        <h4 className="font-royal text-sm sm:text-base font-extrabold tracking-wide text-[#590D22] uppercase">
                          {evt.title}
                        </h4>
                        <p className="text-[10px] font-cinzel tracking-wider text-[#8C6A28] uppercase font-semibold">
                          {evt.subtitle}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Calendar Sync Button at Bottom of Combined Card */}
          <div className="mt-6 pt-4 border-t border-[#C5A059]/40 text-center relative z-10">
            <button
              onClick={handleAddToCalendar}
              className="inline-flex items-center gap-2 rounded-full border border-[#C5A059] bg-gradient-to-r from-[#590D22] to-[#800F2F] px-5 py-2 text-xs font-cinzel font-bold tracking-[0.18em] text-[#FFF9EF] shadow-md hover:shadow-lg transition-all active:scale-95"
            >
              <Calendar className="w-3.5 h-3.5 text-[#DFB76C]" />
              <span>SAVE TO GOOGLE CALENDAR</span>
            </button>
          </div>

        </motion.div>

      </div>
    </section>
  );
}

