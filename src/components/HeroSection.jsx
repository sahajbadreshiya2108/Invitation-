import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import archHeaderImg from '../assets/arch-top-clean.png';

export default function HeroSection({ data }) {
  const heroRef = useRef(null);
  const archRef = useRef(null);
  const titleRef = useRef(null);
  const coupleRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        archRef.current,
        { opacity: 0, y: -20, scale: 0.98 },
        { opacity: 1, y: 0, scale: 1, duration: 1.1, delay: 0.1 }
      )
        .fromTo(
          '.hero-shloka',
          { y: 15, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.15, duration: 0.8 },
          '-=0.6'
        )
        .fromTo(
          titleRef.current,
          { y: 20, opacity: 0, scale: 0.96 },
          { y: 0, opacity: 1, scale: 1, duration: 0.9 },
          '-=0.5'
        )
        .fromTo(
          coupleRef.current,
          { y: 25, opacity: 0, scale: 0.97 },
          { y: 0, opacity: 1, scale: 1, duration: 0.9 },
          '-=0.5'
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero-section" ref={heroRef}>
      {/* Authentic Carved Marble Arch with Golden Ganesha */}
      <div className="hero-arch-container" ref={archRef}>
        <img
          src={archHeaderImg}
          alt="શ્રી ગણેશાય નમઃ મંદિર કમાન"
          className="hero-arch-image"
          loading="eager"
        />
      </div>

      {/* Sacred Invocations */}
      <div className="hero-shloka-group">
        <p className="shloka-text hero-shloka">
          {data.shlokas[0]}
        </p>
        <p className="shloka-text hero-shloka" style={{ fontSize: '13px', marginTop: '4px' }}>
          {data.shlokas[1]}
        </p>
      </div>

      {/* Main Title */}
      <h1 className="main-title" ref={titleRef}>
        ॥ {data.title} ॥
      </h1>

      <div className="ornament-divider">
        <span className="ornament-line" />
        <span className="ornament-symbol">✤</span>
        <span className="ornament-line" />
      </div>

      {/* Couple Reveal Card */}
      <div className="couple-section" ref={coupleRef} style={{ width: '100%', padding: '6px 0' }}>
        <p className="husband-name">{data.husbandName}</p>
        <p className="relation-text">{data.relation}</p>
        <div className="mother-to-be-card">
          <h2 className="bride-name">{data.name}</h2>
        </div>
      </div>
    </section>
  );
}
