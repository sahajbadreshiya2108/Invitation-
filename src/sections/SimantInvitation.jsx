import React from 'react';
import FloralDecor from '../components/FloralDecor';
import HeroSection from '../components/HeroSection';
import InvitationMessage from '../components/InvitationMessage';
import EventDetails from '../components/EventDetails';
import EventTimeline from '../components/EventTimeline';
import VenueSection from '../components/VenueSection';
import FamilySection from '../components/FamilySection';
import MaternitySection from '../components/MaternitySection';
import GenderPoll from '../components/GenderPoll';
import RSVPSection from '../components/RSVPSection';
import ClosingSection from '../components/ClosingSection';

export default function SimantInvitation({ data }) {
  return (
    <main className="invitation-container" id="invitation-main">
      {/* Persistent Decorative Frame & Florals */}
      <FloralDecor />

      {/* Decorative Outer Border */}
      <div className="page-ornamental-border" />

      {/* 1. Hero Section with Ganesh Invocations & Couple Card */}
      <HeroSection data={data} />

      {/* 2. Invitation Message from Elders & Family */}
      <InvitationMessage data={data} />

      {/* 3. Event Details (Vidhi & Bhojan) */}
      <EventDetails events={data.events} />

      {/* 4. Event Timeline */}
      <EventTimeline timeline={data.timeline} />

      {/* 5. Venue Section with Direct Map Navigation */}
      <VenueSection venue={data.venue} />

      {/* 6. Inviters & Family Details */}
      <FamilySection inviters={data.inviters} />

      {/* 7. Emotional Maternity Climax Section */}
      <MaternitySection verse={data.emotionalVerse} />

      {/* 8. Fun Interactive Gender Prediction Poll (Inspired by Reference Video) */}
      <GenderPoll />

      {/* 9. Interactive RSVP Section with Serverless EmailJS & WhatsApp */}
      <RSVPSection whatsappConfig={data.whatsapp} emailjsConfig={data.emailjs} />

      {/* 10. Final Lotus Blessings & Family Closing */}
      <ClosingSection closing={data.closing} />
    </main>
  );
}
