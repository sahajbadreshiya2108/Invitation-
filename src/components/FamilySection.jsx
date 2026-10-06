import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Phone, Heart } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function FamilySection({ inviters }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.family-card',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
            once: true
          }
        }
      );

      gsap.fromTo(
        '.family-member-name',
        { opacity: 0, y: 15 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 0.8,
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
    <section className="family-section" ref={sectionRef}>
      <h2 className="section-title">{inviters.heading}</h2>

      <div className="ornament-divider">
        <span className="ornament-line" />
        <span className="ornament-symbol">❧</span>
        <span className="ornament-line" />
      </div>

      <div className="family-card">
        {inviters.names.map((name, idx) => (
          <h3 key={idx} className="family-member-name">
            {name}
          </h3>
        ))}

        <div style={{ marginTop: '14px' }}>
          <a
            href={`tel:${inviters.contactNumber}`}
            className="family-contact"
            aria-label="સંપર્ક નંબર"
          >
            <Phone size={14} />
            <span>{inviters.displayContact}</span>
          </a>
        </div>

        <p style={{ marginTop: '12px', fontSize: '13.5px', color: 'var(--gold-dark)', fontWeight: 600 }}>
          {inviters.family}
        </p>
      </div>
    </section>
  );
}
