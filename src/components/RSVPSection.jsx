import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import emailjs from '@emailjs/browser';
import { Send, CheckCircle2, Mail, Loader2, MessageCircle } from 'lucide-react';

export default function RSVPSection({ whatsappConfig, emailjsConfig }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [attending, setAttending] = useState('yes');
  const [guestCount, setGuestCount] = useState('1');
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const handleAttendanceChange = (status) => {
    setAttending(status);
    if (status === 'yes') {
      confetti({
        particleCount: 30,
        spread: 60,
        origin: { y: 0.75 },
        colors: ['#A97822', '#CFA356', '#E9A6A7', '#F5EDE0'],
        ticks: 200,
        gravity: 0.8,
        scalar: 0.85,
        disableForReducedMotion: true
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim()) return;

    setIsSending(true);
    setStatusMessage('ઇમેઇલ દ્વારા પરિવારને જાણ મોકલાઈ રહી છે...');

    const attendanceText = attending === 'yes' ? 'હા, હું આવીશ (Attending)' : 'માફ કરશો, આવી શકીશ નહીં (Not Attending)';

    // Template parameters for EmailJS
    const templateParams = {
      from_name: name,
      from_email: email || 'No email provided',
      attendance: attendanceText,
      guest_count: attending === 'yes' ? guestCount : '0',
      message: message || 'શુભેચ્છાઓ',
      to_email: emailjsConfig?.toEmail || 'khushimungra89@gmail.com',
      event_name: 'સીમંત સંસ્કાર - રાજેશ્રી અને અક્ષય'
    };

    try {
      // Check if user has entered real EmailJS keys
      if (
        emailjsConfig?.publicKey &&
        emailjsConfig.publicKey !== 'YOUR_EMAILJS_PUBLIC_KEY' &&
        emailjsConfig.serviceId !== 'service_simant'
      ) {
        await emailjs.send(
          emailjsConfig.serviceId,
          emailjsConfig.templateId,
          templateParams,
          emailjsConfig.publicKey
        );
        console.log('EmailJS: RSVP email dispatched successfully!');
      } else {
        // Simulated local delay if credentials are still placeholder
        await new Promise((resolve) => setTimeout(resolve, 800));
        console.log('EmailJS: Serverless payload prepared (Configure keys in invitationData.js):', templateParams);
      }
    } catch (err) {
      console.warn('EmailJS transmission note:', err);
    } finally {
      setIsSending(false);
      setSubmitted(true);
      setStatusMessage('આપની હાજરી સફળતાપૂર્વક નોંધાઈ ગઈ છે!');

      if (attending === 'yes') {
        confetti({
          particleCount: 50,
          spread: 70,
          origin: { y: 0.7 },
          colors: ['#A97822', '#CFA356', '#E9A6A7', '#FFFDF8'],
          ticks: 250,
          gravity: 0.75,
          scalar: 0.9,
          disableForReducedMotion: true
        });
      }

      // Optional WhatsApp confirmation
      const waText = `*સીમંત સંસ્કાર આમંત્રણ RSVP*\n\n` +
        `*નામ:* ${name}\n` +
        (email ? `*ઇમેઇલ:* ${email}\n` : '') +
        `*હાજરી:* ${attending === 'yes' ? 'હા, હું ચોક્કસ આવીશ' : 'માફ કરશો, આવી શકીશ નહીં'}\n` +
        (attending === 'yes' ? `*મહેમાનોની સંખ્યા:* ${guestCount}\n` : '') +
        (message ? `*શુભેચ્છા સંદેશ:* ${message}\n` : '');

      const waUrl = `https://wa.me/${whatsappConfig.number}?text=${encodeURIComponent(waText)}`;

      setTimeout(() => {
        window.open(waUrl, '_blank');
      }, 1400);
    }
  };

  return (
    <section className="rsvp-section" id="rsvp-section">
      <h2 className="section-title">આપની ઉપસ્થિતિ</h2>
      <p style={{ fontSize: '13.5px', color: 'var(--text-brown-muted)', textAlign: 'center', marginBottom: '8px' }}>
        આપનું આગમન અમારે માટે આનંદનો પ્રસંગ રહેશે.
      </p>

      <div className="ornament-divider">
        <span className="ornament-line" />
        <span className="ornament-symbol">❧</span>
        <span className="ornament-line" />
      </div>

      <div className="rsvp-card">
        <form onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="rsvp-form-group">
            <label className="rsvp-label" htmlFor="rsvp-name">
              તમારું નામ (Name) *
            </label>
            <input
              id="rsvp-name"
              type="text"
              className="rsvp-input"
              placeholder="આપનું શુભ નામ લખો..."
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          {/* Optional Email Field for Serverless Notification */}
          <div className="rsvp-form-group">
            <label className="rsvp-label" htmlFor="rsvp-email">
              ઇમેઇલ સરનામું (Email - Optional)
            </label>
            <input
              id="rsvp-email"
              type="email"
              className="rsvp-input"
              placeholder="example@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Attendance Choice */}
          <div className="rsvp-form-group">
            <label className="rsvp-label">હાજરી આપશો? (Attendance)</label>
            <div className="rsvp-attendance-options">
              <button
                type="button"
                className={`rsvp-choice-btn ${attending === 'yes' ? 'active' : ''}`}
                onClick={() => handleAttendanceChange('yes')}
              >
                <span>👍</span>
                <span>હા, હું આવીશ</span>
              </button>

              <button
                type="button"
                className={`rsvp-choice-btn ${attending === 'no' ? 'active' : ''}`}
                onClick={() => handleAttendanceChange('no')}
              >
                <span>🙏</span>
                <span>માફ કરશો</span>
              </button>
            </div>
          </div>

          {/* Guest Count (if attending) */}
          <AnimatePresence>
            {attending === 'yes' && (
              <motion.div
                className="rsvp-form-group"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
              >
                <label className="rsvp-label" htmlFor="rsvp-guests">
                  કેટલા મહેમાનો? (Number of Guests)
                </label>
                <select
                  id="rsvp-guests"
                  className="rsvp-input"
                  value={guestCount}
                  onChange={(e) => setGuestCount(e.target.value)}
                >
                  <option value="1">૧ (એકલા)</option>
                  <option value="2">૨ (બે વ્યક્તિ)</option>
                  <option value="3">૩ (ત્રણ વ્યક્તિ)</option>
                  <option value="4">૪ (ચાર વ્યક્તિ)</option>
                  <option value="5+">૫+ (સપરિવાર)</option>
                </select>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Optional Wishes / Message */}
          <div className="rsvp-form-group">
            <label className="rsvp-label" htmlFor="rsvp-message">
              શુભેચ્છા સંદેશ (Wishes)
            </label>
            <textarea
              id="rsvp-message"
              className="rsvp-input"
              rows={2}
              placeholder="અક્ષય અને રાજેશ્રી માટે શુભકામનાઓ..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>

          {/* Submit CTA */}
          <motion.button
            type="submit"
            className="rsvp-submit-btn"
            disabled={isSending}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            aria-label="હાજરી નોંધાવો"
          >
            {isSending ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                <span>મોકલી રહ્યા છીએ...</span>
              </>
            ) : (
              <>
                <span>હાજરી નોંધાવો (Email & RSVP)</span>
                <Send size={16} />
              </>
            )}
          </motion.button>
        </form>

        {submitted && (
          <motion.div
            className="rsvp-success-box"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <CheckCircle2 size={24} style={{ margin: '0 auto 6px', color: '#637544' }} />
            <p>{statusMessage}</p>
            <p style={{ fontSize: '12.5px', marginTop: '4px', fontWeight: 500, color: 'var(--text-brown-muted)' }}>
              WhatsApp & Email દ્વારા આપનો સંદેશ પરિવાર સુધી પહોંચાડવામાં આવી રહ્યો છે.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
