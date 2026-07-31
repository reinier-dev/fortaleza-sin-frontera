'use client'

import React, { useState } from 'react';
import { Loader } from './components/Loader';
import { BackgroundAtmosphere } from './components/BackgroundAtmosphere';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/sections/HeroSection';
import { GlassCardsSection } from './components/sections/GlassCardsSection';
import { FounderSection } from './components/sections/FounderSection';
import { WhoIsThisForSection } from './components/sections/WhoIsThisForSection';
import { ScheduleLocationSection } from './components/sections/ScheduleLocationSection';
import { FinalCTASection } from './components/sections/FinalCTASection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { BookingModal } from './components/BookingModal';
import { ScheduleModal } from './components/ScheduleModal';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isScheduleOpen, setIsScheduleOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#050505] text-[#F5F5F5] selection:bg-[#B31217] selection:text-white font-sans relative overflow-x-hidden">
      {/* 1.5s Black Initial Loader with Red Light Sweep */}
      <Loader />

      {/* Dynamic Background Atmosphere (Grain, Drifting Ambient Light, Dust Particles, Vignette Breath) */}
      <BackgroundAtmosphere />

      {/* Top Navbar */}
      <Navbar
        onOpenBooking={() => setIsBookingOpen(true)}
        onOpenSchedule={() => setIsScheduleOpen(true)}
      />

      {/* Main Sections (Strictly 6 sections) */}
      <main className="relative z-10">
        {/* SECTION 1: Full-screen cinematic hero */}
        <HeroSection
          onOpenBooking={() => setIsBookingOpen(true)}
          onOpenSchedule={() => setIsScheduleOpen(true)}
        />

        {/* SECTION 2: Three premium glass cards */}
        <GlassCardsSection />

        {/* SECTION 3: Founder Story */}
        <FounderSection />

        {/* SECTION 4: Who is this for? */}
        <WhoIsThisForSection onOpenBooking={() => setIsBookingOpen(true)} />

        {/* SECTION 5: Schedule & Location */}
        <ScheduleLocationSection />

        {/* SECTION 6: Final cinematic CTA */}
        <FinalCTASection onOpenBooking={() => setIsBookingOpen(true)} />

        {/* Footer */}
        <Footer />
      </main>

      {/* Custom branded floating WhatsApp button */}
      <FloatingWhatsApp onOpenBookingModal={() => setIsBookingOpen(true)} />

      {/* Modals */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />

      <ScheduleModal
        isOpen={isScheduleOpen}
        onClose={() => setIsScheduleOpen(false)}
        onOpenBooking={() => setIsBookingOpen(true)}
      />
    </div>
  );
}

