'use client'

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Calendar, ChevronDown } from 'lucide-react';
import { HERO_CONTENT } from '../../data/content';

interface HeroSectionProps {
  onOpenBooking: () => void;
  onOpenSchedule: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenBooking, onOpenSchedule }) => {
  const [videoVisible, setVideoVisible] = useState(false);

  useEffect(() => {
    // Hero video fades in only after headline text animation completes (~800ms)
    const timer = setTimeout(() => {
      setVideoVisible(true);
    }, 700);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#050505] pt-24 pb-16">
      {/* Background Video / Visual Layer - Starts only after text animation completes */}
      <div className="absolute inset-0 z-0">
        {/* PC Video (Desktop / Tablet) */}
        <video
          autoPlay
          loop
          muted
          playsInline
          poster={HERO_CONTENT.posterImage}
          className={`hidden sm:block w-full h-full object-cover scale-105 filter contrast-125 saturate-90 transition-opacity duration-1000 ease-out ${
            videoVisible ? 'opacity-40' : 'opacity-0'
          }`}
        >
          <source src={HERO_CONTENT.videoSourcePc} type="video/mp4" />
        </video>

        {/* Cell Video (Mobile) */}
        <video
          autoPlay
          loop
          muted
          playsInline
          poster={HERO_CONTENT.posterImage}
          className={`block sm:hidden w-full h-full object-cover scale-105 filter contrast-125 saturate-90 transition-opacity duration-1000 ease-out ${
            videoVisible ? 'opacity-40' : 'opacity-0'
          }`}
        >
          <source src={HERO_CONTENT.videoSourceCell} type="video/mp4" />
        </video>

        {/* Ambient Dark Luxury Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-[#050505]/80"></div>
        <div className="absolute inset-0 bg-radial from-transparent via-[#050505]/40 to-[#050505]"></div>
        
        {/* Subtle Ambient Red Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#B31217]/15 rounded-full blur-[140px] pointer-events-none"></div>

        {/* Film grain overlay */}
        <div className="absolute inset-0 film-grain-moving pointer-events-none opacity-30"></div>
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 text-center flex flex-col items-center">
        {/* Tagline Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-panel border border-white/10 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-[#B31217] animate-pulse"></span>
          <span className="text-xs font-semibold tracking-widest uppercase text-[#F5F5F5]">
            Entrenamiento Al Aire Libre · Parque Medalla de Honor
          </span>
        </motion.div>

        {/* Line 1: Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
          className="font-heading font-black text-5xl sm:text-7xl md:text-8xl tracking-tight text-[#F5F5F5] uppercase leading-none max-w-4xl mb-4 gpu-layer"
        >
          {HERO_CONTENT.headline}
        </motion.h1>

        {/* Line 2: Subheadline (40ms delay after line 1) */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
          className="font-heading font-extrabold text-3xl sm:text-5xl md:text-6xl text-[#B31217] uppercase tracking-tight mb-8 gpu-layer"
        >
          {HERO_CONTENT.subheadline}
        </motion.h2>

        {/* Line 3: Description (40ms delay after line 2) */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.26, ease: [0.16, 1, 0.3, 1] }}
          className="text-base sm:text-xl md:text-2xl text-[#AFAFAF] max-w-2xl font-light leading-relaxed mb-10 gpu-layer"
        >
          {HERO_CONTENT.description}
        </motion.p>

        {/* Buttons Fade in After Headline */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md"
        >
          {/* Primary CTA - Magnetic soft scale & blood-red glow */}
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#B31217] text-white font-heading font-bold text-sm tracking-widest uppercase transition-all duration-300 ease-out hover:bg-[#7A0A0F] hover:scale-105 hover:shadow-[0_0_40px_rgba(179,18,23,0.7)] active:scale-95 flex items-center justify-center gap-3 group border border-white/10 cursor-pointer"
          >
            <span>{HERO_CONTENT.primaryCTA}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
          </button>

          {/* Secondary CTA */}
          <button
            onClick={onOpenSchedule}
            className="w-full sm:w-auto px-8 py-4 rounded-full glass-panel text-[#F5F5F5] font-heading font-semibold text-sm tracking-widest uppercase transition-all duration-300 ease-out hover:bg-white/10 hover:border-white/20 hover:scale-105 active:scale-95 flex items-center justify-center gap-2 border border-white/15 cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-[#AFAFAF]" />
            <span>{HERO_CONTENT.secondaryCTA}</span>
          </button>
        </motion.div>

        {/* Emotional Tagline Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.65 }}
          className="mt-16 pt-8 border-t border-white/10 text-center text-xs tracking-wider uppercase text-[#AFAFAF]/80 font-medium max-w-lg"
        >
          "You don't have to be fit to belong here."
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="mt-12 text-[#AFAFAF]/40 hover:text-[#AFAFAF] transition-colors cursor-pointer"
          onClick={() => {
            const el = document.getElementById('section-glass-cards');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </div>
    </section>
  );
};

