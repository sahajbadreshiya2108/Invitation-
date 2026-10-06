import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function EventTimeline({ timeline }) {
  const containerRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate line height from 0 to 100% on scroll
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
            end: 'bottom 80%',
            scrub: 0.8
          }
        }
      );

      // Stagger items reveal
      gsap.fromTo(
        '.timeline-item',
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          stagger: 0.25,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 85%',
            once: true
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="timeline-section" ref={containerRef}>
      <h2 className="section-title">સમયરેખા (Timeline)</h2>

      <div className="ornament-divider">
        <span className="ornament-line" />
        <span className="ornament-symbol">✦</span>
        <span className="ornament-line" />
      </div>

      <div className="timeline-container">
        <div className="timeline-line" ref={lineRef} />

        {timeline.map((item, idx) => (
          <div key={idx} className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-time-badge">{item.time}</div>
            <h4 className="timeline-title">{item.title}</h4>
            <p className="timeline-desc">{item.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
