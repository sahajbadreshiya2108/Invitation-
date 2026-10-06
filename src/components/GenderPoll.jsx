import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';

export default function GenderPoll() {
  const [selected, setSelected] = useState(null);
  const [votes, setVotes] = useState({ kano: 46, gopi: 54 });

  const handleVote = (option) => {
    if (selected) return;
    setSelected(option);
    setVotes((prev) => ({
      ...prev,
      [option]: prev[option] + 1
    }));

    // Trigger subtle gold & pink sparkle
    confetti({
      particleCount: 25,
      spread: 45,
      origin: { y: 0.8 },
      colors: option === 'kano' ? ['#5E89B8', '#A97822', '#F5EDE0'] : ['#E88E91', '#A97822', '#F5EDE0'],
      disableForReducedMotion: true
    });
  };

  const total = votes.kano + votes.gopi;
  const kanoPercent = Math.round((votes.kano / total) * 100);
  const gopiPercent = 100 - kanoPercent;

  return (
    <section className="poll-section">
      <div className="poll-card">
        <h3 className="poll-heading">કાનો કે રાધા?</h3>
        <p className="poll-sub">
          આપના મતે રાજેશ્રી અને અક્ષયના ઘેર કોનું આગમન થશે?
        </p>

        <div className="poll-options-grid">
          <motion.button
            className={`poll-btn ${selected === 'kano' ? 'selected' : ''}`}
            onClick={() => handleVote('kano')}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            aria-label="કાનો (દીકરો)"
          >
            <span className="poll-btn-icon">🦚</span>
            <span className="poll-btn-label">કાનો</span>
            <span className="poll-btn-sub">દીકરો ({kanoPercent}%)</span>
          </motion.button>

          <motion.button
            className={`poll-btn ${selected === 'gopi' ? 'selected' : ''}`}
            onClick={() => handleVote('gopi')}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            aria-label="રાધા (દીકરી)"
          >
            <span className="poll-btn-icon">🌸</span>
            <span className="poll-btn-label">રાધા</span>
            <span className="poll-btn-sub">દીકરી ({gopiPercent}%)</span>
          </motion.button>
        </div>

        {/* Progress bar */}
        <div className="poll-progress-bar">
          <div className="poll-progress-kano" style={{ width: `${kanoPercent}%` }} />
          <div className="poll-progress-gopi" style={{ width: `${gopiPercent}%` }} />
        </div>

        {selected && (
          <motion.p
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ fontSize: '13px', color: 'var(--gold-dark)', marginTop: '8px', fontWeight: 600 }}
          >
            આપનો પ્રેમભર્યો મત નોંધાઈ ગયો છે! 💖
          </motion.p>
        )}
      </div>
    </section>
  );
}
