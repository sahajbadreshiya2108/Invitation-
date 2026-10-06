import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Navigation } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function VenueSection({ venue }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.venue-card',
        { y: 35, opacity: 0, scale: 0.96 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.9,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
            once: true
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="venue-section" ref={sectionRef}>
      <h2 className="section-title">{venue.heading}</h2>

      <div className="ornament-divider">
        <span className="ornament-line" />
        <span className="ornament-symbol">❖</span>
        <span className="ornament-line" />
      </div>

      <div className="venue-card">
        <div className="venue-pin-circle">
          <MapPin size={26} />
        </div>

        <h3 className="venue-place-name">{venue.name}</h3>
        <p className="venue-address">{venue.fullAddress}</p>

        <a
          href={venue.mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="venue-map-btn"
          aria-label="Google Maps માં સ્થળ જુઓ"
        >
          <Navigation size={16} />
          <span>{venue.buttonText}</span>
        </a>
      </div>
    </section>
  );
}
