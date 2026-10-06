import React, { useState, useEffect, useRef } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { invitationData } from './config/invitationData';
import IntroScreen from './components/IntroScreen';
import SimantInvitation from './sections/SimantInvitation';
import FloatingActions from './components/FloatingActions';
import './styles/invitation.css';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [isOpened, setIsOpened] = useState(false);
  const lenisRef = useRef(null);

  // Initialize Lenis smooth scroll and synchronize with GSAP ScrollTrigger
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.5,
    });

    lenisRef.current = lenis;

    // Update ScrollTrigger on Lenis scroll
    lenis.on('scroll', ScrollTrigger.update);

    // Sync GSAP ticker with Lenis requestAnimationFrame
    const updateTicker = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateTicker);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(updateTicker);
      lenis.destroy();
    };
  }, []);

  const handleOpenInvitation = () => {
    setIsOpened(true);
    // Refresh ScrollTrigger calculations after opening
    setTimeout(() => {
      ScrollTrigger.refresh();
      if (lenisRef.current) {
        lenisRef.current.scrollTo(0, { immediate: true });
      }
    }, 400);
  };

  const handleScrollTop = () => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { duration: 1.2 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="app-wrapper">
      {/* Desktop Ambient Background Decoration */}
      <div className="desktop-ambient" aria-hidden="true">
        <div className="desktop-ambient-blur-1" />
        <div className="desktop-ambient-blur-2" />
        <div className="desktop-side-banner left">
          ॥ શ્રી ગણેશાય નમઃ ॥ શ્રી સ્વામિનારાયણ નમઃ ॥
        </div>
        <div className="desktop-side-banner right">
          ॥ સીમંત સંસ્કાર મંગલ આમંત્રણ ॥
        </div>
      </div>

      {/* Intro Screen / Opening Envelope */}
      <IntroScreen
        isOpen={isOpened}
        onOpen={handleOpenInvitation}
      />

      {/* Main Digital Invitation */}
      {isOpened && (
        <SimantInvitation data={invitationData} />
      )}

      {/* Floating Action Controls with Automatic Full Sound */}
      <FloatingActions
        audioUrl={invitationData.audioUrl}
        whatsapp={invitationData.whatsapp}
        onScrollTop={handleScrollTop}
        isOpened={isOpened}
      />
    </div>
  );
}
