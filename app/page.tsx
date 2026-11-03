"use client";

import React, { useState } from "react";
import EnvelopeIntro from "@/components/EnvelopeIntro";
import WeddingEntrance from "@/components/WeddingEntrance";
import BeautifulBeginning from "@/components/BeautifulBeginning";
import ScratchRevealDate from "@/components/ScratchRevealDate";
import CountdownTimer from "@/components/CountdownTimer";
import CelebrationEvents from "@/components/CelebrationEvents";
import WeddingVenue from "@/components/WeddingVenue";
import FamilyDetails from "@/components/FamilyDetails";
import ThankYouSection from "@/components/ThankYouSection";
import PetalsCanvas from "@/components/PetalsCanvas";
import AudioController from "@/components/AudioController";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  const [isEnvelopeOpened, setIsEnvelopeOpened] = useState(false);
  const [envelopeKey, setEnvelopeKey] = useState(0);

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

      {/* Centered Mobile-First Experience Container */}
      <div className="w-full mx-auto flex flex-col items-center">
        
        {/* 1. First Screen: Interactive 3D Luxury Envelope Opening */}
        <div id="envelope-section" className="w-full">
          <EnvelopeIntro
            key={envelopeKey}
            onOpen={handleOpenEnvelope}
            isOpen={isEnvelopeOpened}
          />
        </div>

        {/* 2. Cinematic Wedding Entrance Section */}
        <WeddingEntrance />

        {/* 3. A Beautiful Beginning – Couple Introduction */}
        <BeautifulBeginning />

        {/* 4. Interactive Scratch-to-Reveal Wedding Date */}
        <ScratchRevealDate />

        {/* 5. Live Wedding Countdown to 1 Dec 2026, 08:30 AM IST */}
        <CountdownTimer />

        {/* 6. Wedding Celebration Events Timeline */}
        <CelebrationEvents />

        {/* 7. Wedding Venue (ATM Farm House, Gujarat) with Directions */}
        <WeddingVenue />

        {/* 8. Family Details & Blessings (Mungara Family) */}
        <FamilyDetails />

        {/* 9. Final Thank You Section with Replay Button */}
        <ThankYouSection onReplay={handleReplayInvitation} />

      </div>
    </main>
  );
}
