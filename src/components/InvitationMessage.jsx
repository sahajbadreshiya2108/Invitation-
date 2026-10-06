import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function InvitationMessage({ data }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.invitation-card',
        { y: 35, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
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
    <section className="invitation-message-section" ref={sectionRef}>
      <h2 className="section-title">સ્નેહભર્યું આમંત્રણ</h2>

      <div className="ornament-divider">
        <span className="ornament-line" />
        <span className="ornament-symbol">❧</span>
        <span className="ornament-line" />
      </div>

      <div className="invitation-card">
        <div className="salutation-badge">
          શ્રીમાન
        </div>

        <div className="invitation-body-text">
          <p style={{ marginBottom: '14px' }}>
            {data.blessingsText}
          </p>

          <p style={{ marginBottom: '14px', fontWeight: 600, color: 'var(--gold-dark)' }}>
            {data.parentsText}
          </p>

          <p style={{ marginBottom: '14px' }}>
            <span style={{ fontWeight: 700, color: 'var(--text-brown)' }}>
              {data.husbandName} {data.relation} {data.name}
            </span>{' '}
            {data.invitationText}
          </p>
        </div>
      </div>
    </section>
  );
}
