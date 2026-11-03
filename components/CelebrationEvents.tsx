"use client";

import React from "react";
import { motion } from "framer-motion";
import { FloralDivider, RoyalCornerOrnament, MandalaRosette } from "./DecorativeSVGs";
import { Calendar, Clock, Sun, Sparkles, Moon, HeartHandshake, Utensils } from "lucide-react";

export default function CelebrationEvents() {
  const day1Events = [
    {
      time: "08:30 AM",
      title: "MANDAP ROPAN",
      subtitle: "Morning Ceremony",
      desc: "Invocations of divine blessings and setting up the sacred wedding mandap.",
      icon: Sun,
    },
    {
      time: "03:00 PM",
      title: "HALDI CEREMONY",
      subtitle: "Auspicious Turmeric Ritual",
      desc: "Joyous laughter, vibrant yellow hues, and blessings of love and prosperity.",
      icon: Sparkles,
    },
    {
      time: "08:00 PM",
      title: "EVENING RASGARBA",
      subtitle: "Traditional Dandiya & Garba Night",
      desc: "An enchanting evening of rhythmic folk dance, music, and royal celebration.",
      icon: Moon,
    },
  ];

  const day2Events = [
    {
      time: "11:00 AM",
      title: "HAST MELAP",
      subtitle: "Sacred Wedding Rituals",
      desc: "The sacred union of hands and souls before the holy fire with Vedic mantras.",
      icon: HeartHandshake,
      extra: "FOLLOWED BY WEDDING LUNCH",
    },
  ];

  // Helper to add events to calendar
  const handleAddToCalendar = () => {
    const title = encodeURIComponent("Daksh & Isha Royal Wedding Celebrations");
    const details = encodeURIComponent(
      "Royal Wedding Celebrations of Daksh & Isha.\n\nDec 1: Mandap Ropan (08:30 AM), Haldi Ceremony (03:00 PM), Evening Rasgarba (08:00 PM)\nDec 2: Hast Melap (11:00 AM) followed by Wedding Lunch.\n\nVenue: ATM Farm House, Gujarat."
    );
    const location = encodeURIComponent("ATM Farm House, Ambala-Kenedipur Road, Sasan Road, Ambala, Mendarda, Gujarat – 362260");
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
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#C5A059]/40 bg-[#800F2F]/30 mb-3">
            <Calendar className="w-3.5 h-3.5 text-[#DFB76C]" />
            <span className="text-[10px] font-cinzel tracking-[0.25em] text-[#FFF2B2] uppercase font-semibold">
              Celebration Schedule
            </span>
          </div>

          <h2 className="font-royal text-2xl sm:text-3xl font-bold tracking-[0.16em] text-[#FFF9EF] uppercase drop-shadow">
            WEDDING CELEBRATIONS
          </h2>
          <p className="font-cormorant text-base sm:text-lg text-[#F8F0E3]/80 italic mt-1">
            Join us in the sacred festivities and joyous moments
          </p>

          <FloralDivider className="my-4" />
        </motion.div>

        {/* ============================================================== */}
        {/* DAY 1: 1 DECEMBER 2026 */}
        {/* ============================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9 }}
          className="w-full rounded-3xl bg-[#FFF9EF] text-[#38251F] p-6 sm:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.8)] border-2 border-[#C5A059] relative overflow-hidden mb-8"
        >
          {/* Subtle Paper Dots */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#800F2F_1px,transparent_1px)] [background-size:12px_12px] pointer-events-none" />

          {/* Corners */}
          <div className="absolute top-2 left-2 pointer-events-none opacity-70">
            <RoyalCornerOrnament className="w-9 h-9" />
          </div>
          <div className="absolute top-2 right-2 pointer-events-none opacity-70 rotate-90">
            <RoyalCornerOrnament className="w-9 h-9" />
          </div>

          {/* Day 1 Badge Header */}
          <div className="text-center relative z-10 mb-6">
            <div className="inline-block px-5 py-1.5 rounded-full bg-[#590D22] border border-[#C5A059] shadow-md">
              <span className="text-[11px] sm:text-xs font-cinzel font-bold tracking-[0.25em] text-[#FFF2B2] uppercase">
                DATE: 1 DECEMBER 2026
              </span>
            </div>
            <h3 className="font-royal text-lg sm:text-xl font-bold tracking-wider text-[#590D22] uppercase mt-2">
              DAY OF RITUALS & FESTIVITIES
            </h3>
            <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-[#C5A059] to-transparent mx-auto mt-2" />
          </div>

          {/* Day 1 Event Items */}
          <div className="space-y-4 relative z-10">
            {day1Events.map((evt, idx) => {
              const IconComponent = evt.icon;
              return (
                <div
                  key={idx}
                  className="group relative rounded-2xl bg-[#FFFDF9] border border-[#C5A059]/40 p-4 transition-all duration-300 hover:border-[#800F2F] hover:shadow-md"
                >
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-full bg-[#590D22] text-[#DFB76C] flex items-center justify-center shrink-0 shadow-sm">
                      <IconComponent className="w-5 h-5" />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center gap-1.5 text-[#800F2F] text-xs font-cinzel font-bold tracking-widest">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{evt.time}</span>
                      </div>

                      <h4 className="font-royal text-base sm:text-lg font-bold tracking-wide text-[#38251F] uppercase mt-0.5">
                        {evt.title}
                      </h4>

                      <p className="text-[11px] font-cinzel tracking-wider text-[#8C6A28] uppercase font-semibold">
                        {evt.subtitle}
                      </p>

                      <p className="font-cormorant text-xs sm:text-sm text-[#38251F]/80 mt-1 leading-snug">
                        {evt.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Decorative Divider Between Days */}
        <div className="w-full flex items-center justify-center gap-3 my-2">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#DFB76C]" />
          <div className="p-1 rounded-full border border-[#DFB76C] bg-[#590D22]">
            <Sparkles className="w-4 h-4 text-[#FFF2B2]" />
          </div>
          <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#DFB76C]" />
        </div>

        {/* ============================================================== */}
        {/* DAY 2: 2 DECEMBER 2026 */}
        {/* ============================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9 }}
          className="w-full rounded-3xl bg-gradient-to-b from-[#400717] via-[#590D22] to-[#300511] text-[#FFF9EF] p-6 sm:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.8)] border-2 border-[#DFB76C] relative overflow-hidden mt-6 mb-8"
        >
          {/* Subtle Burgundy Sparkles */}
          <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#DFB76C_0.8px,transparent_0.8px)] [background-size:14px_14px] pointer-events-none" />

          {/* Corners */}
          <div className="absolute top-2 left-2 pointer-events-none opacity-80">
            <RoyalCornerOrnament className="w-9 h-9 text-[#DFB76C]" />
          </div>
          <div className="absolute top-2 right-2 pointer-events-none opacity-80 rotate-90">
            <RoyalCornerOrnament className="w-9 h-9 text-[#DFB76C]" />
          </div>

          {/* Day 2 Badge Header */}
          <div className="text-center relative z-10 mb-6">
            <div className="inline-block px-5 py-1.5 rounded-full bg-[#FFF9EF] border border-[#DFB76C] shadow-md">
              <span className="text-[11px] sm:text-xs font-cinzel font-bold tracking-[0.25em] text-[#590D22] uppercase">
                DATE: 2 DECEMBER 2026
              </span>
            </div>
            <h3 className="font-royal text-lg sm:text-xl font-bold tracking-wider text-[#FFF2B2] uppercase mt-2">
              THE SACRED WEDDING DAY
            </h3>
            <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-[#DFB76C] to-transparent mx-auto mt-2" />
          </div>

          {/* Day 2 Event Item */}
          <div className="space-y-4 relative z-10">
            {day2Events.map((evt, idx) => {
              const IconComponent = evt.icon;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-[#FFF9EF] text-[#38251F] border border-[#C5A059] p-5 shadow-xl relative overflow-hidden"
                >
                  <div className="flex items-start gap-3.5">
                    <div className="w-11 h-11 rounded-full bg-[#800F2F] text-[#FFF2B2] flex items-center justify-center shrink-0 shadow-md">
                      <IconComponent className="w-6 h-6" />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center gap-1.5 text-[#800F2F] text-xs font-cinzel font-bold tracking-widest">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{evt.time}</span>
                      </div>

                      <h4 className="font-royal text-xl sm:text-2xl font-extrabold tracking-wide text-[#590D22] uppercase mt-0.5">
                        {evt.title}
                      </h4>

                      <p className="text-xs font-cinzel tracking-wider text-[#8C6A28] uppercase font-semibold">
                        {evt.subtitle}
                      </p>

                      <p className="font-cormorant text-sm sm:text-base text-[#38251F]/90 mt-1 leading-snug">
                        {evt.desc}
                      </p>

                      {/* FOLLOWED BY WEDDING LUNCH */}
                      <div className="mt-4 pt-3 border-t border-[#C5A059]/40 flex items-center gap-2 bg-[#F8F0E3] p-2.5 rounded-xl border border-dashed border-[#C5A059]">
                        <Utensils className="w-4 h-4 text-[#800F2F] shrink-0" />
                        <div>
                          <span className="text-[10px] font-cinzel font-semibold tracking-widest text-[#8C6A28] uppercase block">
                            FOLLOWED BY
                          </span>
                          <span className="text-xs font-cinzel font-bold tracking-[0.2em] text-[#590D22] uppercase">
                            WEDDING LUNCH
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Add to Calendar Action Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <button
            onClick={handleAddToCalendar}
            className="inline-flex items-center gap-2 rounded-full border border-[#DFB76C] bg-gradient-to-r from-[#590D22] to-[#800F2F] px-6 py-2.5 text-xs font-cinzel font-bold tracking-[0.2em] text-[#FFF9EF] shadow-lg hover:shadow-[0_0_20px_rgba(223,183,108,0.4)] transition-all active:scale-95"
          >
            <Calendar className="w-4 h-4 text-[#DFB76C]" />
            <span>SAVE TO GOOGLE CALENDAR</span>
          </button>
        </motion.div>

      </div>
    </section>
  );
}

