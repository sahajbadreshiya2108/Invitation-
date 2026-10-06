import React from 'react';
import coupleImg from '../assets/couple.png';

export default function ClosingSection({ closing }) {
  return (
    <footer className="closing-section">
      {/* Couple Photo replacing the bottom lotus */}
      <div className="closing-couple-wrap">
        <img
          src={coupleImg}
          alt="ચિ. અક્ષય અને અ.સૌ. રાજેશ્રી"
          className="closing-couple-img"
          loading="lazy"
        />
      </div>

      <p className="closing-blessing">
        {closing.line1}
      </p>

      <div className="ornament-divider" style={{ maxWidth: '120px' }}>
        <span className="ornament-line" />
        <span className="ornament-symbol">✦</span>
        <span className="ornament-line" />
      </div>

      <p className="closing-family-signature">
        {closing.line2}
      </p>

      <p style={{ fontFamily: 'var(--font-serif)', fontSize: '16.5px', color: 'var(--gold-dark)', fontWeight: 800, marginTop: '4px' }}>
        {closing.family}
      </p>

      <p style={{ fontFamily: 'var(--font-serif)', fontSize: '13px', color: 'var(--text-brown-muted)', marginTop: '16px', opacity: 0.8 }}>
        ॥ શ્રી સ્વામિનારાયણ વિજયતે ॥
      </p>
    </footer>
  );
}
