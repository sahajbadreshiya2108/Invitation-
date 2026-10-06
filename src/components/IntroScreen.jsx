import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ganeshImg from '../assets/ganesh.png';
import { ArrowRight } from 'lucide-react';

export default function IntroScreen({ isOpen, onOpen }) {
  return (
    <AnimatePresence>
      {!isOpen && (
        <motion.div
          className="intro-screen"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            y: -30,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
          }}
        >
          {/* Decorative Corner Borders */}
          <div className="corner-ornament corner-top-left" />
          <div className="corner-ornament corner-top-right" />
          <div className="corner-ornament corner-bottom-left" />
          <div className="corner-ornament corner-bottom-right" />

          <motion.div
            className="intro-content"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            {/* Shloka */}
            <motion.p
              className="shloka-text"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              ॥ શ્રી ગણેશાય નમઃ ॥
            </motion.p>

            {/* Ganesh Artwork with Aura */}
            <motion.div
              className="intro-ganesh-wrap"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.9, ease: 'backOut' }}
            >
              <div className="intro-ganesh-aura" />
              <img
                src={ganeshImg}
                alt="શ્રી ગણેશ"
                className="intro-ganesh-img"
              />
            </motion.div>

            {/* Swaminarayan Shloka */}
            <motion.p
              className="shloka-text"
              style={{ fontSize: '13px', marginBottom: '8px' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.9 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              ॥ શ્રી સ્વામિનારાયણ નમઃ ॥
            </motion.p>

            {/* Title */}
            <motion.h1
              className="intro-title"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.8 }}
            >
              સીમંત સંસ્કાર
            </motion.h1>

            {/* Ornamental Divider */}
            <div className="ornament-divider">
              <span className="ornament-line" />
              <span className="ornament-symbol">✦</span>
              <span className="ornament-line" />
            </div>

            {/* Subtitle */}
            <motion.p
              className="intro-subtitle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              આ શુભ પ્રસંગનું મંગલ આમંત્રણ પત્રિકા
            </motion.p>

            {/* Premium CTA Button */}
            <motion.button
              className="cta-gold-button"
              onClick={onOpen}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.05, duration: 0.7 }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              aria-label="આમંત્રણ જુઓ"
            >
              <span>આમંત્રણ જુઓ</span>
              <ArrowRight size={18} />
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
