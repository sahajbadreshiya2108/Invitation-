import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calendar, Clock } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function EventDetails({ events }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.ornate-event-box',
        { y: 30, opacity: 0, scale: 0.97 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          stagger: 0.2,
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
    <section className="event-details-section" ref={sectionRef}>
      <h2 className="section-title">મંગલ કાર્યક્રમ</h2>

      <div className="ornament-divider">
        <span className="ornament-line" />
        <span className="ornament-symbol">❖</span>
        <span className="ornament-line" />
      </div>

      <div className="event-cards-grid">
        {events.map((evt) => (
          <div key={evt.id} className="ornate-event-box">
            <div className="event-box-header">
              <span style={{ color: 'var(--gold-antique)', fontSize: '18px' }}>«</span>
              <h3 className="event-badge-title">{evt.title}</h3>
              <span style={{ color: 'var(--gold-antique)', fontSize: '18px' }}>»</span>
            </div>

            <div className="event-date-row" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
              <Calendar size={15} color="#A97822" />
              <span>{evt.date}</span>
            </div>

            <div className="event-time-row" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', marginTop: '4px' }}>
              <Clock size={15} color="#7C4A12" />
              <span>{evt.day}, {evt.time}</span>
            </div>

            {evt.description && (
              <p style={{ fontSize: '12.5px', color: 'var(--text-brown-muted)', marginTop: '8px' }}>
                {evt.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
