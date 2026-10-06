import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import krishnaMataImg from '../assets/krishna-mata.png';
import lotusImg from '../assets/lotus.png';

gsap.registerPlugin(ScrollTrigger);

export default function MaternitySection({ verse }) {
  const sectionRef = useRef(null);
  const krishnaRef = useRef(null);
  const lotusRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Verse reveal
      gsap.fromTo(
        '.maternity-verse-top',
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            once: true
          }
        }
      );

      gsap.fromTo(
        '.maternity-big-word',
        { opacity: 0, scale: 0.9, y: 30 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            once: true
          }
        }
      );

      // Artwork entrance
      gsap.fromTo(
        krishnaRef.current,
        { opacity: 0, x: -30, scale: 0.95 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            once: true
          }
        }
      );

      gsap.fromTo(
        lotusRef.current,
        { opacity: 0, x: 30, scale: 0.95 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            once: true
          }
        }
      );

      // Subtle Parallax on scroll
      gsap.to(krishnaRef.current, {
        y: -15,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.5
        }
      });

      gsap.to(lotusRef.current, {
        y: -35,
        scale: 1.04,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 2
        }
      });

      gsap.to(glowRef.current, {
        scale: 1.2,
        opacity: 0.7,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="maternity-section" ref={sectionRef}>
      <p className="maternity-verse-top">
        {verse.line1}
      </p>
      
      <h2 className="maternity-big-word">
        {verse.highlight}
      </h2>

      <div className="ornament-divider">
        <span className="ornament-line" />
        <span className="ornament-symbol">✤</span>
        <span className="ornament-line" />
      </div>

      {/* Composite Artwork Stage with Parallax */}
      <div className="artwork-container">
        <div className="art-soft-glow" ref={glowRef} />

        <img
          src={krishnaMataImg}
          alt="દાંપત્ય અને માતૃત્વ સ્નેહ"
          className="art-krishna-mata"
          ref={krishnaRef}
          loading="lazy"
        />

        <img
          src={lotusImg}
          alt="કમળ પુષ્પ"
          className="art-lotus-parallax"
          ref={lotusRef}
          loading="lazy"
        />
      </div>
    </section>
  );
}
