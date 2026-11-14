"use client";

import React, { useState, useEffect } from "react";
import EnvelopeIntro from "@/components/EnvelopeIntro";
import WeddingEntrance from "@/components/WeddingEntrance";
import BeautifulBeginning from "@/components/BeautifulBeginning";
import CelebrationEvents from "@/components/CelebrationEvents";
import WeddingVenue from "@/components/WeddingVenue";
import ThankYouSection from "@/components/ThankYouSection";
import PetalsCanvas from "@/components/PetalsCanvas";
import AudioController from "@/components/AudioController";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  const [isEnvelopeOpened, setIsEnvelopeOpened] = useState(false);
  const [envelopeKey, setEnvelopeKey] = useState(0);

  // Always reset scroll to top on page reload / load
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
  }, []);

  const handleOpenEnvelope = () => {
    setIsEnvelopeOpened(true);
  };

  const handleReplayInvitation = () => {
    // Scroll smoothly to top
    window.scrollTo({ top: 0, behavior: "smooth" });
    // Reset envelope state with a new key so it re-mounts fresh
    setTimeout(() => {
      setIsEnvelopeOpened(false);
      setEnvelopeKey((prev) => prev + 1);
    }, 400);
  };

  return (
    <main className="relative min-h-screen w-full bg-[#160309] text-[#F8F0E3] selection:bg-[#C5A059] selection:text-[#38251F] overflow-x-hidden">
      {/* Scroll Progress Bar at the Top */}
      <ScrollProgress />

      {/* Floating Rose Petals & Golden Specks (Hardware Accelerated Canvas) */}
      <PetalsCanvas />

      {/* Floating Audio Controller (Mute / Unmute & Live Visualizer) */}
      <AudioController autoStartTrigger={isEnvelopeOpened} />

      {/* Centered Mobile-First Experience Container - 6 Pristine Royal Wedding Pages */}
      <div className="w-full mx-auto flex flex-col items-center">
        
        {/* 1. Page 1: Royal Palace Gates 3D Door Opening & Radha-Krishna Divine Blessing */}
        <div id="envelope-section" className="w-full">
          <EnvelopeIntro
            key={envelopeKey}
            onOpen={handleOpenEnvelope}
            isOpen={isEnvelopeOpened}
          />
        </div>

        {/* 2. Page 2: Royal Wedding Mandap Invitation (Daksh & Isha Announcement) */}
        <WeddingEntrance />

        {/* 3. Page 3: "The Beginning" Calligraphy & Romantic Story */}
        <BeautifulBeginning />

        {/* 4. Page 4: Auspicious Wedding Ceremonies Schedule + Live Countdown */}
        <CelebrationEvents />

        {/* 5. Page 5: Wedding Venue (The View Gir Resort, Sasan Gir) & Google Maps Link */}
        <WeddingVenue />

        {/* 6. Page 6: Family Blessings (Mungara Family) & Warm Gratitude Finale */}
        <ThankYouSection onReplay={handleReplayInvitation} />

      </div>
    </main>
  );
}
